import { logo } from "./helpers.js";

/*  JOB CHANGE ARCHITECTURE
    Link: #/architecture/job-change
    columns = left-to-right steps. Two items in one column = the flow splits. */
export default {
  title: "Job Change Architecture",
  tag: "3.5x Reply Boost",
  problem:
    "When past champions or happy users switch companies, outbound emails sent to their old addresses get lost or ignored.",
  columns: [
    [
      {
        id: "nav",
        icon: "linkedin",
        name: "LinkedIn Sales Navigator",
        role: "Signal source",
        takes: "A saved list of past champions and happy users.",
        gives: "Live profile data, including who just changed jobs.",
        desc: "The signal starts here. Sales Navigator tracks the people who already believed in the product and shows when one of them moves to a new company."
      }
    ],
    [
      {
        id: "py",
        icon: "python",
        name: "Python",
        role: "Scraper",
        takes: "Profile pages and job-change updates from Sales Navigator.",
        gives: "Clean rows: name, old company, new company, new title.",
        desc: "A Python script pulls the job-change data out of Sales Navigator and turns it into structured rows, so nobody copies and pastes profiles by hand."
      }
    ],
    [
      {
        id: "clay",
        icon: "clay",
        logo: logo("clay.png"),
        name: "Clay",
        role: "Data enrichment",
        takes: "The job-change rows from the scraper.",
        gives: "A work email at the new company, plus the context needed to personalise.",
        desc: "Clay enriches every row. It finds the champion's new work email and fills in the company details used for a warm opening line, then hands the contact to outreach."
      }
    ],
    [
      {
        id: "heyreach",
        icon: "heyreach",
        logo: logo("heyreach.png"),
        name: "HeyReach",
        role: "LinkedIn outreach",
        takes: "The enriched contact from Clay.",
        gives: "A personalised LinkedIn message to the champion.",
        desc: "HeyReach triggers the LinkedIn message the moment the contact arrives, so the champion hears from us while the job change is still fresh."
      },
      {
        id: "email",
        icon: "mail",
        name: "Email outreach",
        role: "Email",
        takes: "The new work email found by Clay.",
        gives: "A warm email sent to the new address, not the old one.",
        desc: "The same contact is also emailed at the new work address that Clay found. Two channels reaching one person is what lifted replies."
      }
    ]
  ],
  flows: ["Champion profiles", "Job-change rows", "Enriched contact"],
  why: "A champion who changes jobs is the warmest lead there is, but their old email is dead. Tracking the move, finding the new address and reaching them on two channels at once is what turned a 2% reply rate into 7%.",
  result: "Email reply rate went from 2% to 7%, about 3.5x."
};