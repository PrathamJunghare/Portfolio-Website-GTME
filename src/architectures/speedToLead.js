/*  SPEED-TO-LEAD ARCHITECTURE
    Link: #/architecture/speed-to-lead
    stages = big blocks stacked top to bottom. Each stage has its own columns.
    orchestrator = a wide bar under the stage (here: n8n runs Stage 1).
    stop / go = small red or green lines on a card showing the rule's outcome. */
export default {
  title: "Speed-to-Lead Architecture",
  tag: "< 5 Min Response",
  problem:
    "Inbound leads sat untouched for 24-40 hours while SDRs queued up calls manually, leading to cold intent.",
  stages: [
    {
      title: "Start validator",
      subtitle: "Is this lead worth a call?",
      columns: [
        [
          {
            id: "form",
            icon: "googleform",
            name: "Google Form",
            role: "Inbound lead",
            takes: "A visitor who likes the product fills in the form on the website.",
            gives: "The company website and whether the business is B2B or B2C.",
            desc: "Every inbound lead starts as a Google Form submission. When a visitor shows interest in the product, the form captures the details that decide whether the lead gets a call."
          }
        ],
        [
          {
            id: "b2c",
            icon: "validator",
            name: "B2C / B2B check",
            role: "Rule 1",
            stop: "B2B: no call",
            takes: "The company type from the form.",
            gives: "B2C leads move on. B2B leads stop here and are not called.",
            desc: "The first rule of the start validator. Only B2C businesses are qualified, so a B2B company is filtered out here and never gets a call."
          }
        ],
        [
          {
            id: "similarweb",
            icon: "similarweb",
            name: "Similarweb",
            role: "Rule 2",
            stop: "Under 100k: no call",
            takes: "The company website.",
            gives: "The domain's traffic. Anything above 100k moves on.",
            desc: "Similarweb checks how much traffic the company's domain gets. A B2C lead with more than 100k traffic passes the second rule."
          }
        ],
        [
          {
            id: "qualified",
            icon: "check",
            name: "Qualified?",
            role: "Verdict",
            go: "B2C + 100k: call",
            takes: "The results of both checks.",
            gives: "A qualified lead triggers the Retell AI voice call.",
            desc: "A lead is qualified only when it is B2C and its domain traffic is above 100k. That is the signal to trigger the voice call. Everyone else is skipped."
          }
        ]
      ],
      flows: ["Site + type", "B2C only", "Traffic"],
      orchestrator: {
        id: "n8n",
        icon: "n8n",
        name: "n8n",
        role: "Orchestrates this whole stage",
        takes: "A new Google Form submission.",
        gives: "A triggered voice call for every qualified lead.",
        desc: "n8n connects the form, both checks and the call trigger. It receives the new lead, runs the start validator, asks Similarweb for the traffic and fires the Retell AI call when the lead qualifies."
      }
    },
    {
      title: "Voice qualification call",
      subtitle: "An AI SDR talks to the lead",
      columns: [
        [
          {
            id: "retell",
            icon: "retell",
            name: "Retell AI",
            role: "Voice agent",
            takes: "The qualified lead's details from n8n.",
            gives: "A live phone call to the lead.",
            desc: "The voice bot is built on Retell AI, used here as the alternative to ElevenLabs. When n8n triggers it, the agent calls the lead within minutes of the form being filled."
          }
        ],
        [
          {
            id: "call",
            icon: "phone",
            name: "Discovery call",
            role: "AI SDR conversation",
            takes: "The lead on the phone, while their interest is still fresh.",
            gives: "What the company needs, plus a time the lead is free to meet.",
            desc: "The AI SDR learns about the company: who the champion is, which technology they use today and what they want from us. Then it asks when the lead is free, and the lead says a time."
          }
        ]
      ],
      flows: ["Live call"]
    },
    {
      title: "Meeting validator",
      subtitle: "Gemini checks the call, then the meeting is booked",
      columns: [
        [
          {
            id: "gemini",
            icon: "gemini",
            name: "Gemini API",
            role: "Meeting validator",
            takes: "The finished call from Retell AI.",
            gives: "A call summary and the exact date the lead agreed to meet.",
            desc: "The second validator. Gemini analyses the call, writes the summary and returns the date and time the lead set for the meeting, so nobody has to listen to the recording."
          }
        ],
        [
          {
            id: "lusha",
            icon: "lusha",
            name: "Lusha",
            role: "Triggered with the date",
            takes: "The meeting date from Gemini.",
            gives: "A trigger that is connected to Google Calendar.",
            desc: "The meeting date from Gemini triggers a Lusha node, which is connected to Google Calendar."
          }
        ],
        [
          {
            id: "gcal",
            icon: "gcal",
            name: "Google Calendar",
            role: "Meeting confirmed",
            takes: "The meeting date passed on from the Lusha step.",
            gives: "A confirmed meeting on the calendar.",
            desc: "The meeting is confirmed in Google Calendar using the date Gemini extracted, which closes the loop from a form fill to a booked meeting."
          }
        ]
      ],
      flows: ["Meeting date", "Slot"]
    }
  ],
  stageFlows: ["Qualified leads only", "Call transcript"],
  why: "Inbound leads used to sit untouched for 24-40 hours while SDRs queued up calls by hand, and by then the intent had gone cold. This flow checks every lead automatically, calls only the ones worth calling, and books the meeting while the lead is still interested.",
  result: "Lead response time dropped from about 30 hours to under 5 minutes."
};
