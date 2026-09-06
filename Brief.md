# Build brief: Pratham Junghare — GTM Engineer portfolio site

**For:** Gemini
**Role:** You are the design lead and front-end builder. The content below is final — don't rewrite it, don't invent projects, don't add filler copy. Your job is the visual system, layout, type, and code.

---

## 1. The deliverable

- **One single `index.html` file.** All CSS and JS inline. No build step, no npm.
- Tailwind via CDN is allowed. Google Fonts via CDN is allowed. Nothing else external except one icon set if you need it.
- **Desktop-first** (design at 1440px), but it must not break on mobile — recruiters open links on phones. Single-column fallback is fine.
- Alongside the HTML there will be a `/docs/` folder in the same repo holding PDFs and JSON files. Link to them with relative paths exactly as specified in section 8.
- Hosted on GitHub Pages or Netlify. Assume no server, no backend, no forms that POST anywhere.

**Quality floor, no exceptions:** visible keyboard focus states, `prefers-reduced-motion` respected, real contrast ratios, semantic headings in order, alt text on every image, `<title>` and OG meta tags filled in.

**Use these exact metadata strings** — they carry the search terms:

- `<title>`: `Pratham Junghare — GTM Engineer & Automation Engineer`
- `meta description`: `GTM engineer building signal detection, enrichment, lead qualification, and outbound deliverability systems with Clay, n8n, Python, and AI agents. Open to remote roles with US and EU teams.`
- OG title and description: same as above. OG image: `img/og.png` (Pratham will supply; if absent, omit the tag rather than linking a missing file).

---

## 2. Who this is for

One reader: **a recruiter or hiring manager at a US or EU B2B SaaS company, hiring a remote GTM Engineer / RevOps Engineer / Growth Engineer.**

How they actually behave:
- They arrive from a LinkedIn message or a job application. They give it **20 seconds** before deciding to scroll or close.
- Roughly half are non-technical. They need to understand the *business outcome* of every project without knowing what n8n or DNS records are.
- The other half are technical and will look for whether the systems are real. That's what the docs folder is for.
- They will look for one specific thing early: **can this person actually be hired remotely from India, and do they overlap with our hours?** Answer it in the hero, don't make them dig.

**So the content hierarchy is: outcome → problem → how it was built → tools.** Never tools first. A section organized around "Clay, n8n, Python" is a failure. A section organized around "found the buyers, cleaned the data, qualified the leads, protected the sending domains" is correct.

---

## 3. Design direction

The subject matter is **plumbing for revenue teams** — pipelines, signals, routing, throughput, things that either flow or get blocked. That's where the visual language should come from, not from generic "tech portfolio."

**The hero layout is fixed, not a suggestion.** Full-height section, headline across the top, a cut-out photo of Pratham standing centred in the frame, and capability tags plus proof numbers floating around him at varying depths — the composition works because he's physically in the middle of his own system diagram. See the exact spec in section 5.

Keep the *energy* of that reference — direct, human, self-assured — but the execution has to read as engineering-credible, not as a social-media freelancer card. He's applying to engineering-adjacent roles. Concretely: the floating tags carry real metrics and system names, never generic words like "Automation" or "Growth"; the shape behind the photo is a considered form, not a bright rounded blob; the type is set with restraint rather than hand-drawn arrows and sparkle emoji.

**Suggested direction (you have latitude, but justify departures):**
- Spend your boldness on **one** thing: the hero. Everything below it stays quiet and disciplined.
- A visual motif drawn from flow — a signal entering, decisions branching, something arriving qualified. Used once, structurally, not sprinkled as decoration.
- Two typefaces maximum. If you use one, make the weight and size scale do the work.
- 4–6 named colors total. Pick a palette that isn't the default portfolio palette.
- Motion: **one** orchestrated moment on page load. Not fade-up-on-scroll for every section.

**Do not ship any of these — they are the standard AI-generated tells and a recruiter has seen them 40 times this month:**
- Cream/off-white background (~#F4F1EA) + high-contrast serif display + terracotta accent (~#D97757).
- Near-black background with one acid-green or vermilion accent.
- Every piece of content chopped into identical rounded cards with the same border radius and the same soft grey shadow.
- Tracked-out ALL-CAPS eyebrow labels above every heading.
- Meta strings joined with middle dots (`A · B · C`).
- A `→` appended to every link and button label.
- Monospace font for all small labels regardless of whether they're data.
- Accenting one single word in the headline in a different color.
- `01 / 02 / 03` numbered markers on things that aren't a sequence. (The experience timeline in section 6 *is* a sequence — numbering is legitimate there and nowhere else.)
- Gradient washes as decoration.

Work in two passes: sketch a token system (color / type / layout / principles) first, check whether it's a choice specific to *this* brief or just your default for any portfolio, revise, then build.

---

## 4. Page structure

```
HERO                     full viewport, photo + positioning + resume CTA + proof strip
WHAT I DO                4 capability blocks
SYSTEMS                  5 project entries, the core of the page
HOW I BUILD              methodology / point of view
TRACK RECORD             experience timeline, 3 roles at Netcore
STACK                    grouped by job, not a logo grid
DOCS                     downloadable library
ABOUT + CONTACT          short, one screen
```

---

## 5. Hero — exact copy

**Availability line (small, above or beside the name):**
`GTM Engineer at Netcore Cloud, Mumbai — automation, enrichment, and outbound infrastructure. Open to remote roles with US and EU teams.`

Set "GTM Engineer" as the dominant phrase in this line. The automation descriptor is secondary and should read lighter — smaller, or in a muted weight. Do not let "automation engineer" compete with the primary title.

**Headline:**
`I build the systems that find, qualify, and route revenue.`

**Subhead:**
`I automate the work sales teams do by hand — prospect research, enrichment, lead qualification, and outbound deliverability. Clay, n8n, Python, and AI agents wired into the funnel.`

**Proof strip — four numbers, all from real work:**

| Number | Label |
|---|---|
| 40% | less manual research time for the GTM team |
| 3,000 | LinkedIn profiles verified per day, up from 1,000 |
| 6,000 | phone numbers validated per day for deliverability |
| Automation Engineer | *role tag, not a metric — see note below* |

**Buttons:** `Download résumé (PDF)` → `/docs/Pratham-Junghare-Resume.pdf` · `See the systems` → `#systems`
**Links:** LinkedIn, `pratham.anulaxmi@gmail.com`

### Hero composition — build exactly this

```
┌──────────────────────────────────────────────────────────┐
│  availability line                                       │
│                                                          │
│        I build the systems that find, qualify,           │
│              and route revenue.                          │
│                                                          │
│   [40% research    ┌──────────┐    [Automation           │
│    time cut]       │          │     Engineer]            │
│                    │  PHOTO   │                          │
│   [6,000 numbers   │ centred  │    [3,000 profiles       │
│    validated/day]  │ cut-out  │     verified/day]        │
│                    │          │                          │
│                    └──────────┘                          │
│         subhead line, centred, under the figure          │
│   [Download résumé]  [See the systems]  LinkedIn  Email  │
└──────────────────────────────────────────────────────────┘
```

Rules for it:

- **Photo:** Pratham supplies a background-removed cut-out, standing, roughly waist-up or full figure. Use `img/pratham.png`. Until it exists, render a neutral silhouette placeholder of the same dimensions — the hero must look finished, not broken, with the image missing.
- **The figure sits behind the floating tags in z-order**, with one or two tags overlapping his shoulder or arm so the layers read as depth rather than as a flat grid of pills around a photo.
- **Four floating tags maximum.** Not six, not eight. Every extra tag costs the composition.
- **Three of the four are metrics; one is a role tag** reading `Automation Engineer`. Style the role tag differently from the metric tags — the metrics are evidence, the role tag is identity, and they shouldn't look like the same kind of object. Place the role tag closest to the figure. Do not add a second role tag or a third styling variant.
- **A shape sits behind the figure** to separate him from the background. Choose it deliberately — it should relate to the flow/pipeline motif, not be a default coloured circle.
- **Motion:** if you animate anything on this page, animate this once on load — tags settling into place, or the figure resolving. One sequence, then still. Respect `prefers-reduced-motion`.
- **Mobile:** tags stack below the figure rather than crowding it. Don't shrink them onto the photo.

**Do not put his phone number anywhere on the page.** Public phone numbers on portfolio sites get harvested. Email and LinkedIn only.

---

## 6. What I do — 4 capability blocks

Each block: short title, one plain-English sentence a non-technical reader gets immediately.

1. **Find the buyers**
   Detect the moments that mean a company is ready to buy — a champion changing jobs, a hiring spike, a tech-stack change, a traffic shift — and turn each one into a routed opportunity.

2. **Make the data usable**
   Scrape, enrich, verify, and re-verify prospect data so reps aren't working from a list that went stale six months ago.

3. **Qualify before a human touches it**
   Score fit from the prospect's actual profile and let an AI agent run the first conversation, so reps only spend time on leads that can close.

4. **Keep outbound landing**
   Monitor sending-domain health and volume, and cut throughput automatically before a domain burns instead of after.

---

## 7. Systems — the core section

**Format every entry identically.** Five fields, in this order, and *label them* so a scanner can jump straight to Outcome:

```
Title
The problem        → 1–2 sentences, business language, no tool names
What I built       → 2–3 sentences, plain description of the flow
The call I made    → 1 sentence on a real engineering decision and why
Outcome            → the number or the concrete result
Built with         → tools, last, small, de-emphasised
Docs               → link, if one exists
```

The "call I made" field is the differentiator — it's what separates someone who builds systems from someone who clicks together templates. Give it visual weight. Do not merge it into the description.

---

### System 1 — AI voice agent for inbound lead qualification

**The problem.** Inbound form fills go cold fast. If nobody calls within minutes, intent is gone — and reps still burn time on leads that were never a fit.

**What I built.** An n8n pipeline that picks up a form submission inside a minute, disqualifies non-ICP leads on B2C fit and Similarweb traffic, then triggers a Retell AI voice agent to dial over a Telnyx number while intent is still hot. The agent books the meeting, warm-transfers to a rep with a whisper briefing, or logs the objection and which competitor the prospect named. A webhook workflow writes the call summary, sentiment, and current provider back to the sheet and creates the calendar invite.

**The call I made.** Gate on fit *before* dialling, not after — the qualification logic runs first so the agent never spends a call on a lead that was going to be disqualified anyway.

**Outcome.** Roughly $0.02 per three-minute discovery call, sub-minute response to inbound, and structured objection and competitor data captured on every call instead of lost in a rep's notes.

**Built with.** n8n, Retell AI, Telnyx, Similarweb, Google Sheets, Google Calendar

**Docs.** `/docs/voice-agent-architecture.pdf`

---

### System 2 — Outbound infrastructure guardrail system

**The problem.** A sending domain that gets flagged takes weeks to recover, and by the time anyone notices the numbers, the damage is done. Deliverability was being checked by hand, after the fact.

**What I built.** A nine-node n8n workflow that monitors every sending domain for DNS health and operational metrics, then outputs a clear decision per domain: ALLOW, THROTTLE, or PAUSE. Google Sheets is both the config layer and the results layer, upserting on domain so the same sheet is the control panel and the report.

**The call I made.** DNS lookups go over DNS-over-HTTPS rather than a native resolver, because the n8n sandbox blocks direct DNS — and a missing DMARC record escalates straight to PAUSE instead of a warning, since that's the failure that actually gets domains blocked. Throttle fires at 85% of daily volume with a computed 50% cap reduction.

**Outcome.** Domain risk becomes a decision the system makes on a schedule, not something a human notices late. Currently running in report-only mode, with live sending-platform enforcement as the next step.

**Built with.** n8n, DNS-over-HTTPS, Google Sheets, JavaScript

**Docs.** `/docs/outbound-guardrail-build-guide.pdf` · `/docs/outbound-guardrail-workflow.json`

---

### System 3 — LinkedIn prospect verification bot

**The problem.** Prospect databases rot. People change jobs, and a list that isn't re-checked is quietly wrong — reps pitch someone who left a year ago. Verifying it manually meant an analyst working through about 1,000 profiles a day.

**What I built.** A Python and Selenium bot with OCR that runs the recurring six-monthly check of whether each prospect is still at their company, across parallel instances.

**The call I made.** Run parallel instances instead of optimising one — throughput was the constraint, not per-check speed.

**Outcome.** From ~1,000 profiles per analyst per day to ~3,000 per day with no manual effort, and a prospect database that stays continuously accurate instead of degrading between audits.

**Built with.** Python, Selenium, OCR

---

### System 4 — AI ICP fit scorer

**The problem.** Reps walk into calls without knowing whether the person on the other side can actually buy, so time goes to prospects who were never going to convert.

**What I built.** A tool on Clay that scrapes a prospect's LinkedIn and scores ICP fit from designation and experience, flagging the right person to pitch ahead of the sales call.

**The call I made.** Score the *person*, not just the company — firmographic fit says the account is worth pursuing, but seniority and background say whether this specific contact can sign.

**Outcome.** Rep time concentrated on high-probability leads, with the right contact identified before the call rather than discovered during it.

**Built with.** Clay, Python, LLM

---

### System 5 — Champion job-change signal pipeline

**The problem.** When a happy customer moves to a new company, that's the warmest outbound opportunity there is — and it almost always goes unnoticed.

**What I built.** A Clay pipeline that detects when a champion at C-suite or VP level moves to a new company and triggers a targeted promotional email to them at the new account.

**The call I made.** Restrict the trigger to senior champions only. Everyone changes jobs; only a few of them arrive somewhere with the authority to bring a vendor with them.

**Outcome.** Turns a passive signal into a repeatable outbound motion with no manual monitoring.

**Built with.** Clay

---

### System 6 — [PLACEHOLDER: HTPA]

**Gemini: leave this slot designed but empty, with visible placeholder text reading "Sixth system — content pending."** Pratham will supply the copy. Match the format of the five above exactly. Do not invent content for it.

---

## 8. How I build — methodology section

This is his point of view. Four short principles. Keep it tight — one heading and two sentences each.

1. **I did the job by hand before I automated it.**
   I started at Netcore doing prospect research manually — collection, MAU scraping, LinkedIn sourcing, ICP identification. Every automation I've built since came out of a bottleneck I'd personally sat in.

2. **Business outcome first, architecture second.**
   A workflow that's elegant but doesn't move a number isn't done. I define the outcome before I open the builder.

3. **End-to-end, not point solutions.**
   Enriched data that doesn't flow into scoring, routing, outreach, and CRM writeback is a spreadsheet. I build the whole path.

4. **Guardrails are part of the system.**
   Anything that sends, scrapes, or spends needs a failure mode designed in. Report-only first, enforcement second.

---

## 9. Track record — experience timeline

Three roles, one company, chronological. This *is* a sequence, so ordered numbering or a timeline spine is appropriate here.

**GTM Engineer** — Netcore Cloud · March 2026 – present
Design and build marketing-engineering automations on Clay to drive revenue. Built automations for existing-contact verification and LinkedIn prospect discovery, sourcing profiles directly from LinkedIn and cutting the team's manual research time by roughly 40%.

**Research & Automation Engineer Associate** — Netcore Cloud · October 2025 – March 2026
Built a LinkedIn finder and scraper pulling up to 1,000 prospect and company profile links per run from event data at 80–90% accuracy. Created a WhatsApp validation tool verifying ~6,000 numbers per day across two lines, improving campaign deliverability while lowering cost. Automated Apptopia scraping for MAU and tech-stack data across ~1,000 apps per day, and delivered targeted scrapers for summit speaker data and G2 data on ISV accounts.

**Data Research Intern** — Netcore Cloud · June 2025 – October 2025
Learned the end-to-end manual research process and surfaced the bottlenecks that later became the automations above.

**Education:** BE Information Technology, Don Bosco Institute of Technology, Mumbai (2021–2025)

**Certifications:** AI Builder: Agents, Voice Agents & Automations in n8n (Udemy) · Introduction to Model Context Protocol (Anthropic) · AI Fluency Framework & Foundations (Anthropic) · Agentic AI: A Framework for Planning and Execution (LinkedIn)

---

## 10. Stack

Group by what each tool *does*, not by vendor. No logo wall.

- **GTM platforms:** Clay, Salesforce, Zapier
- **Automation & agents:** n8n, LLM and agent workflows, Retell AI, MCP
- **Scraping & data:** Python, Selenium, Scrapy, Pandas, OCR
- **Signals & enrichment:** Similarweb, Apptopia, G2, LinkedIn sourcing
- **Analysis:** SQL-style querying, Excel, Power BI

---

## 11. Docs library

A short, plain list. Every row: file name, one line on what's inside, file type, download link.

| Document | What it is | Path |
|---|---|---|
| Résumé | One-page PDF | `/docs/Pratham-Junghare-Resume.pdf` |
| Outbound guardrail build guide | Node-by-node build walkthrough | `/docs/outbound-guardrail-build-guide.pdf` |
| Outbound guardrail workflow | Importable n8n workflow JSON | `/docs/outbound-guardrail-workflow.json` |
| Voice agent architecture | Pipeline diagram and decision logic | `/docs/voice-agent-architecture.pdf` |

**Important:** render a link only if the file will exist. A 404 on a docs link does more damage than an absent section. Build the list so rows can be added or removed without the layout falling apart.

---

## 12. About + contact

**About — use this copy:**
`I'm a GTM engineer in Mumbai. I started in manual prospect research, found the parts that didn't need a human, and have been automating them ever since — first at Netcore Cloud, now as most of what I do. I work across Clay, n8n, Python, and AI agents, and I'm most useful where revenue teams are doing repetitive work that a system should be doing instead. Open to remote roles with US and EU teams, with overlap into your working hours.`

**Contact:** email and LinkedIn only. If you build a contact block, make the email a `mailto:` link — no form, there's no backend.

---

## 13. Before you hand it back

- Read the page as a recruiter with 20 seconds. Do you know what he does, what he's built, and how to reach him?
- Read it as a non-technical reader. Is any outcome unexplained because it's stated in tool names?
- Check your design plan against section 3's anti-pattern list, honestly, one by one.
- Remove one accessory. Whatever is decorating rather than informing — cut it.
