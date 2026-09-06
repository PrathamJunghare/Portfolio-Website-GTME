import { useState } from "react";

const BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => `${BASE}${p.replace(/^\//, "")}`;

const PHOTO = asset("img/pratham.png");
const RESUME = asset("docs/Pratham-Junghare-Resume.pdf");
const RESUME_FILENAME = "Pratham-Junghare-Resume.pdf";

const LINKEDIN = "https://www.linkedin.com/in/pratham-junghare/";
const EMAIL = "pratham.anulaxmi@gmail.com";

const TOOLS = [
  "Clay",
  "Zapier",
  "n8n",
  "Python",
  "RB2B",
  "Instantly",
  "HeyReach",
  "HubSpot",
  "Salesforce",
  "Retell AI",
  "Apify",
  "Similarweb",
  "Apollo.io",
  "Claude Code",
  "Firecrawl"
];

const PROJECTS = [
  {
    title: "Champion Job Change Tracking",
    problem: "When past champions or happy users switch companies, outbound emails get lost or ignored if sent to old addresses.",
    solution: "Built an automated pipeline tracking champion career movements, enriching new work emails, and triggering warm outbound campaigns.",
    outcome: "Increased email reply rates from 2% to 7% (a ~3.5x jump in conversions).",
    tag: "3.5x Reply Boost"
  },
  {
    title: "Speed-to-Lead AI Voice Qualifier",
    problem: "Inbound leads sat untouched for 24-40 hours while SDRs queued up calls manually, leading to cold intent.",
    solution: "Designed an automated AI voice calling pipeline that instantly dials and pre-qualifies inbound leads as soon as they submit a form.",
    outcome: "Cut lead response time from ~30 hours to under 5 minutes.",
    tag: "< 5 Min Response"
  },
  {
    title: "Persona & ICP Lead Scoring Engine",
    problem: "Outbound lists treated every prospect equally regardless of title fit, wasting tokens and rep effort on low-value leads.",
    solution: "Built a scoring engine evaluating company fit, designation relevance, and product alignment to filter down and prioritize top decision-makers.",
    outcome: "Filtered out unproductive leads and prioritized high-intent decision-makers.",
    tag: "Targeted Routing"
  },
  {
    title: "WhatsApp Audience Pre-Validation",
    problem: "Marketing budget was being wasted running Meta/WhatsApp campaigns targeting inactive or non-WhatsApp phone numbers.",
    solution: "Engineered a pre-campaign verification system running across 2 SIMs to scan and validate 6,000+ phone numbers daily before launching ads.",
    outcome: "Dramatically reduced wasted ad spend and boosted message deliverability.",
    tag: "Zero Wasted Spend"
  },
  {
    title: "LinkedIn Activity & Engagement Scraper",
    problem: "Outbound sequences were sending emails to inactive LinkedIn profiles who hadn't posted or logged in for months.",
    solution: "Built a scraper processing 3,000 profiles daily (automatically detecting active prospects with 70% bot accuracy and routing 25% for manual checks).",
    outcome: "Protected email domain reputation and maximized deliverability by ensuring outreach only targets verified, active prospects.",
    tag: "Active Prospect Focus"
  }
];

function CurvedArrowTopLeft() {
  return (
    <svg className="curvedArrow arrowTopLeft" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M 10 10 Q 50 10 85 45" />
      <path d="M 70 45 L 85 45 L 85 30" />
    </svg>
  );
}

function CurvedArrowBottomLeft() {
  return (
    <svg className="curvedArrow arrowBottomLeft" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M 10 50 Q 50 50 85 15" />
      <path d="M 70 15 L 85 15 L 85 30" />
    </svg>
  );
}

function CurvedArrowBottomRight() {
  return (
    <svg className="curvedArrow arrowBottomRight" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M 90 50 Q 50 50 15 15" />
      <path d="M 30 15 L 15 15 L 15 30" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ArrowDownIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z" />
    </svg>
  );
}

function MailIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function App() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <div className="page">
      <style>{CSS}</style>

      {/* Header */}
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#top">Pratham Junghare</a>
          <div className="navActions">
            <a className="iconLink" href={LINKEDIN} target="_blank" rel="noreferrer" title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="iconLink" href={`mailto:${EMAIL}`} title="Email">
              <MailIcon />
            </a>
            <a className="btn btnYellow" href={RESUME} download={RESUME_FILENAME}>
              <DownloadIcon />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero" id="top">
          <div className="container heroContainer">
            <div className="heroBadge">
              <span className="dot"></span>
              GTM Engineer / Automation Engineer
            </div>

            <h1 className="heroTitle">
              I build systems that <span className="highlight">find, qualify,</span> and <span className="highlight">route revenue.</span>
            </h1>

            {/* Photo & Key Stats */}
            <div className="stage">
              <div className="photoFrame">
                {photoOk ? (
                  <img
                    className="heroPhoto"
                    src={PHOTO}
                    alt="Pratham Junghare"
                    onError={() => setPhotoOk(false)}
                  />
                ) : (
                  <div className="photoPlaceholder">PJ</div>
                )}
              </div>

              {/* Tag 1 with Curved Arrow */}
              <div className="tag tag1">
                <span className="tagNum">40%</span>
                <span className="tagText">less manual research time</span>
                <CurvedArrowTopLeft />
              </div>

              {/* Tag 2 with Curved Arrow */}
              <div className="tag tag2">
                <span className="tagNum">6,000+</span>
                <span className="tagText">WhatsApp numbers verified / day</span>
                <CurvedArrowBottomLeft />
              </div>

              <div className="tag tagRole">Automation Engineer</div>

              {/* Tag 3 with Curved Arrow */}
              <div className="tag tag3">
                <span className="tagNum">3,000+</span>
                <span className="tagText">LinkedIn profiles verified / day</span>
                <CurvedArrowBottomRight />
              </div>
            </div>

            <p className="heroSub">
              Automating prospect research, lead qualification, and outbound infrastructure. Powered by Clay, n8n, Python, and custom AI agents.
            </p>

            <div className="heroCta">
              <a className="btn btnYellow btnLarge" href={RESUME} download={RESUME_FILENAME}>
                <DownloadIcon size={20} />
                Download Resume (PDF)
              </a>
              <a className="btn btnOutline btnLarge" href={LINKEDIN} target="_blank" rel="noreferrer">
                <LinkedInIcon size={20} />
                LinkedIn
                <ArrowUpRightIcon size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* How I Think Section */}
        <section className="section">
          <div className="container">
            <h2 className="sectionHeader">
              <span className="yellowSquare"></span> How I think
            </h2>
            <div className="thinkGrid">
              <div className="thinkCard">
                <h3>I did the job by hand before I automated it.</h3>
                <p>
                  I started in manual prospect research, including collection, MAU scraping, LinkedIn sourcing, and ICP identification. Every automation I have built since came out of a bottleneck I had personally sat in.
                </p>
              </div>

              <div className="thinkCard">
                <h3>Business outcome first, architecture second.</h3>
                <p>
                  A workflow that is elegant but does not move a number is not done. I define the outcome before I open the builder.
                </p>
              </div>

              <div className="thinkCard">
                <h3>End-to-end, not point solutions.</h3>
                <p>
                  Enriched data that does not flow into scoring, routing, outreach, and CRM writeback is just a spreadsheet. I build the whole path.
                </p>
              </div>

              <div className="thinkCard">
                <h3>The AI model should match the task.</h3>
                <p>
                  Not every step needs the expensive model, using the best model for everything just burns money.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section">
          <div className="container">
            <h2 className="sectionHeader">
              <span className="yellowSquare"></span> Tech Stack
            </h2>
            <div className="stackPillsContainer">
              {TOOLS.map((tool, idx) => (
                <span key={idx} className="stackPill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <div className="container">
            <h2 className="sectionHeader">
              <span className="yellowSquare"></span> What I've Built
            </h2>
            <div className="projectList">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="projectCard">
                  <div className="projectHeader">
                    <h3>{proj.title}</h3>
                    <span className="projectTag">{proj.tag}</span>
                  </div>
                  <div className="projectBody">
                    <p><strong>Problem:</strong> {proj.problem}</p>
                    <p><strong>Solution:</strong> {proj.solution}</p>
                    <p className="projectOutcome"><strong>Outcome:</strong> {proj.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="section connectSection">
          <div className="container">
            <div className="connectCard">
              <h2>Let's Connect</h2>
              <p>Ready to automate your revenue operations or build high-throughput GTM pipelines?</p>

              <div className="connectGrid">
                <a className="connectItem" href={LINKEDIN} target="_blank" rel="noreferrer">
                  <LinkedInIcon size={24} />
                  <div>
                    <strong>LinkedIn</strong>
                    <span>in/pratham-junghare</span>
                  </div>
                  <ArrowUpRightIcon size={20} className="arrowIcon" />
                </a>

                <a className="connectItem" href={`mailto:${EMAIL}`}>
                  <MailIcon size={24} />
                  <div>
                    <strong>Email</strong>
                    <span>{EMAIL}</span>
                  </div>
                  <ArrowUpRightIcon size={20} className="arrowIcon" />
                </a>
              </div>

              <div className="resumeBox">
                <a className="btn btnYellow" href={RESUME} download={RESUME_FILENAME}>
                  <DownloadIcon />
                  Download Resume
                  <ArrowDownIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span>© {new Date().getFullYear()} Pratham Junghare</span>
          <div className="footerLinks">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRightIcon size={14} /></a>
            <a href={`mailto:${EMAIL}`}>Email <ArrowUpRightIcon size={14} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
:root {
  --bg: #f5f4ef;
  --text-main: #111111;
  --text-muted: #555555;
  --border-color: #d1cfc7;
  --dark-border: #111111;
  --accent-yellow: #d9a714;
  --accent-yellow-light: #eab308;
  --font-serif: Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg);
  color: var(--text-main);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(245, 244, 239, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  height: 64px;
}

.topbarInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.brand {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-main);
  text-decoration: none;
}

.navActions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.iconLink {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  transition: all 0.2s;
  text-decoration: none;
  background: #fff;
}

.iconLink:hover {
  border-color: var(--dark-border);
  background: var(--bg);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid var(--dark-border);
}

.btnYellow {
  background: var(--accent-yellow-light);
  color: #000;
}

.btnYellow:hover {
  background: var(--accent-yellow);
}

.btnOutline {
  background: #fff;
  color: var(--text-main);
}

.btnOutline:hover {
  background: var(--bg);
}

.btnLarge {
  padding: 12px 24px;
  font-size: 0.95rem;
}

/* Hero Section */
.hero {
  padding: 60px 0 40px;
}

.heroContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.heroBadge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 22px;
  background: #fff;
  border: 1px solid var(--dark-border);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 24px;
  letter-spacing: 0.2px;
  box-shadow: 2px 2px 0px rgba(0,0,0,0.06);
}

.dot {
  width: 10px;
  height: 10px;
  background: var(--accent-yellow);
  border-radius: 50%;
}

.heroTitle {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  max-width: 800px;
  margin-bottom: 30px;
}

.highlight {
  background: rgba(234, 179, 8, 0.25);
  padding: 0 4px;
}

.stage {
  position: relative;
  width: 100%;
  max-width: 680px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
}

.photoFrame {
  height: 100%;
  display: flex;
  align-items: flex-end;
  z-index: 2;
}

.heroPhoto {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.photoPlaceholder {
  width: 200px;
  height: 280px;
  background: #fff;
  border: 1px dashed var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
}

.tag {
  position: absolute;
  z-index: 10;
  background: #fff;
  border: 1px solid var(--dark-border);
  padding: 8px 14px;
  text-align: left;
  box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

.tagNum {
  display: block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-main);
  line-height: 1.2;
}

.tagText {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.tag1 { top: 5%; left: 0%; }
.tag2 { bottom: 10%; left: -2%; }
.tag3 { bottom: 10%; right: -2%; }

.tagRole {
  top: 10%;
  right: 0%;
  background: var(--accent-yellow-light);
  font-weight: 700;
  font-size: 0.85rem;
}

/* Curved Directional Arrows */
.curvedArrow {
  position: absolute;
  width: 50px;
  height: 35px;
  color: var(--text-main);
  pointer-events: none;
}

.arrowTopLeft {
  right: -55px;
  top: 10px;
}

.arrowBottomLeft {
  right: -55px;
  bottom: 25px;
}

.arrowBottomRight {
  left: -55px;
  bottom: 25px;
}

.heroSub {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 640px;
  margin-bottom: 28px;
}

.heroCta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Main Sections */
.section {
  padding: 40px 0;
}

.sectionHeader {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-top: 16px;
  border-top: 2px solid var(--dark-border);
}

.yellowSquare {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: var(--accent-yellow);
}

/* How I Think Section */
.thinkGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border-color);
  background: var(--border-color);
  gap: 1px;
}

.thinkCard {
  background: var(--bg);
  padding: 28px 24px;
}

.thinkCard h3 {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-main);
}

.thinkCard p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Minimalist Tech Stack Pills */
.stackPillsContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
}

.stackPill {
  background: #ebe9e0;
  color: var(--text-main);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.3;
}

/* Projects Section */
.projectList {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.projectCard {
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 24px;
}

.projectHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.projectHeader h3 {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
}

.projectTag {
  background: var(--accent-yellow-light);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 10px;
  border: 1px solid var(--dark-border);
}

.projectBody p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.projectBody strong {
  color: var(--text-main);
}

.projectOutcome {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed var(--border-color);
}

/* Connect Section */
.connectSection {
  padding-bottom: 60px;
}

.connectCard {
  background: #fff;
  border: 1px solid var(--dark-border);
  padding: 40px 32px;
  text-align: center;
}

.connectCard h2 {
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 8px;
}

.connectCard p {
  color: var(--text-muted);
  margin-bottom: 28px;
}

.connectGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.connectItem {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border-color);
  text-decoration: none;
  color: var(--text-main);
  text-align: left;
  background: var(--bg);
  transition: all 0.2s;
  position: relative;
}

.connectItem .arrowIcon {
  margin-left: auto;
  color: var(--text-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.connectItem:hover {
  border-color: var(--dark-border);
  background: #fff;
}

.connectItem:hover .arrowIcon {
  transform: translate(2px, -2px);
  color: var(--text-main);
}

.connectItem strong {
  display: block;
  font-size: 0.9rem;
}

.connectItem span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.resumeBox {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 24px 0;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footerInner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footerLinks {
  display: flex;
  gap: 16px;
}

.footerLinks a {
  color: var(--text-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.footerLinks a:hover {
  color: var(--text-main);
}

/* Responsive */
@media (max-width: 768px) {
  .thinkGrid {
    grid-template-columns: 1fr;
  }

  .projectHeader {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .stage {
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .photoFrame {
    height: 240px;
  }

  .tag {
    position: static;
    width: 100%;
    max-width: 260px;
  }

  .curvedArrow {
    display: none;
  }

  .footerInner {
    flex-direction: column;
    gap: 12px;
  }
}
`;