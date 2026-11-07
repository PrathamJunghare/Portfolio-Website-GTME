import { Fragment, useEffect, useState } from "react";
import jobChange from "./architectures/jobChange.js";
import speedToLead from "./architectures/speedToLead.js";

/* ------------------------------------------------------------------ */
/*  1. REGISTER each project here:  "link-name": importedFile          */
/*     The link-name becomes  #/architecture/link-name                 */
/* ------------------------------------------------------------------ */
export const ARCHITECTURES = {
  "job-change": jobChange,
  "speed-to-lead": speedToLead
};

/* ------------------------------------------------------------------ */
/*  2. TOOL ICONS - drawn in code. To use an official logo instead,    */
/*     save it in public/img/tools/ and add  logo: logo("name.png")    */
/*     to the node in that project's file.                             */
/* ------------------------------------------------------------------ */
const ICONS = {
  linkedin: {
    bg: "#0A66C2",
    svg: (
      <path
        fill="#fff"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z"
      />
    )
  },
  python: {
    bg: "#ffffff",
    svg: (
      <>
        <path
          fill="#3776AB"
          d="M12 2c-3.3 0-3.1 1.4-3.1 1.4V5h3.2v.5H7.6S5 5.2 5 9s2.2 3.8 2.2 3.8h1.3v-1.8s0-2.2 2.2-2.2h3.1s2 .1 2-2V4.2S16 2 12 2z"
        />
        <circle fill="#fff" cx="9.8" cy="3.7" r=".65" />
        <path
          fill="#FFD43B"
          d="M12 22c3.3 0 3.1-1.4 3.1-1.4V19h-3.2v-.5h4.5s2.6.3 2.6-3.5-2.2-3.8-2.2-3.8h-1.3v1.8s0 2.2-2.2 2.2H10s-2-.1-2 2v3.8S8 22 12 22z"
        />
        <circle fill="#fff" cx="14.2" cy="20.3" r=".65" />
      </>
    )
  },
  clay: {
    bg: "#111111",
    svg: (
      <>
        <path
          fill="#FF8A4C"
          d="M12 4c4 0 7 2.6 7 6.3 0 2.6-1.3 3.8-1.3 5.5 0 2-1.8 3.7-4.4 3.7C9 19.5 5 17.4 5 12.6 5 7.5 8 4 12 4z"
        />
        <circle fill="#FFD1A8" cx="9.5" cy="9" r="1.7" opacity=".75" />
      </>
    )
  },
  heyreach: {
    bg: "#6C47FF",
    svg: <path fill="#fff" d="M3 11.5L20.5 4 17 20l-5.2-4.6-3 2.6v-4.4L16 8 7 13.8z" />
  },
  mail: {
    bg: "#EA4335",
    svg: (
      <>
        <rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="1.8" />
        <path d="M4 7.5l8 6 8-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </>
    )
  },
  sheets: {
    bg: "#0F9D58",
    svg: (
      <>
        <rect x="5" y="3.5" width="14" height="17" rx="2" fill="#fff" />
        <path d="M5 10h14M5 15h14M11 10v10.5" stroke="#0F9D58" strokeWidth="1.5" />
      </>
    )
  },
  database: {
    bg: "#334155",
    svg: (
      <>
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.7" fill="none" stroke="#fff" strokeWidth="1.7" />
        <path
          d="M5.5 6.5v11c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7v-11M5.5 12c0 1.5 2.9 2.7 6.5 2.7s6.5-1.2 6.5-2.7"
          fill="none"
          stroke="#fff"
          strokeWidth="1.7"
        />
      </>
    )
  },
  n8n: {
    bg: "#EA4B71",
    svg: (
      <>
        <path d="M6 12h4l3-5h3M10 12l3 5h3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="5.5" cy="12" r="2" fill="#fff" />
        <circle cx="18.5" cy="7" r="2" fill="#fff" />
        <circle cx="18.5" cy="17" r="2" fill="#fff" />
      </>
    )
  },
  googleform: {
    bg: "#673AB7",
    svg: (
      <>
        <rect x="6" y="3.5" width="12" height="17" rx="1.8" fill="#fff" />
        <path d="M9 9h6M9 12.5h6M9 16h3.5" stroke="#673AB7" strokeWidth="1.6" strokeLinecap="round" />
      </>
    )
  },
  validator: {
    bg: "#0F766E",
    svg: (
      <>
        <path
          d="M12 3l7 2.8v5.4c0 4.3-2.9 7.9-7 9.3-4.1-1.4-7-5-7-9.3V5.8z"
          fill="none"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M8.8 12.2l2.2 2.2 4.2-4.4" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  },
  similarweb: {
    bg: "#ffffff",
    svg: (
      <>
        <path d="M5.2 13.5A7 7 0 0 1 18 8.6" fill="none" stroke="#4A6CF7" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M18.8 10.5A7 7 0 0 1 6.6 17" fill="none" stroke="#FF7A1A" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.8" fill="#FF7A1A" />
      </>
    )
  },
  check: {
    bg: "#16A34A",
    svg: <path d="M6 12.5l4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  },
  retell: {
    bg: "#111111",
    svg: (
      <>
        <rect x="4.2" y="9" width="2.2" height="6" rx="1.1" fill="#fff" />
        <rect x="8.1" y="6.5" width="2.2" height="11" rx="1.1" fill="#fff" />
        <rect x="12" y="4.5" width="2.2" height="15" rx="1.1" fill="#fff" />
        <rect x="15.9" y="7.5" width="2.2" height="9" rx="1.1" fill="#fff" />
        <rect x="19.8" y="9.5" width="1.8" height="5" rx=".9" fill="#fff" />
      </>
    )
  },
  phone: {
    bg: "#16A34A",
    svg: (
      <path
        fill="#fff"
        d="M7 4h3l1.4 3.7-2 1.4a10.5 10.5 0 0 0 5.5 5.5l1.4-2L20 14v3c0 1.1-.9 2-2 2C10.8 19 5 13.2 5 6c0-1.1.9-2 2-2z"
      />
    )
  },
  gemini: {
    bg: "#ffffff",
    svg: (
      <>
        <defs>
          <linearGradient id="gemGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4285F4" />
            <stop offset="0.55" stopColor="#9B72CB" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          d="M12 2.5c.7 5.2 4.3 8.8 9.5 9.5-5.2.7-8.8 4.3-9.5 9.5-.7-5.2-4.3-8.8-9.5-9.5 5.2-.7 8.8-4.3 9.5-9.5z"
          fill="url(#gemGrad)"
        />
      </>
    )
  },
  lusha: {
    bg: "#7C3AED",
    svg: <path d="M8.5 5v11.5H17" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  },
  gcal: {
    bg: "#4285F4",
    svg: (
      <>
        <rect x="5" y="5.5" width="14" height="14" rx="2" fill="#fff" />
        <path d="M5 7.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.5H5z" fill="#EA4335" />
        <rect x="8.2" y="3.5" width="1.7" height="3.6" rx=".85" fill="#fff" />
        <rect x="14.1" y="3.5" width="1.7" height="3.6" rx=".85" fill="#fff" />
        <text x="12" y="17.3" textAnchor="middle" fontSize="6.8" fontWeight="700" fill="#4285F4" fontFamily="Arial, sans-serif">
          31
        </text>
      </>
    )
  },
  generic: {
    bg: "#555555",
    svg: <circle cx="12" cy="12" r="5" fill="none" stroke="#fff" strokeWidth="2" />
  }
};

export function ToolIcon({ name, size = 44, logo: logoSrc }) {
  const [broken, setBroken] = useState(false);
  const style = { width: size, height: size, borderRadius: Math.round(size * 0.27) };
  if (logoSrc && !broken) {
    return (
      <img
        className="toolLogo"
        style={{ width: size, height: size }}
        src={logoSrc}
        alt=""
        onError={() => setBroken(true)}
      />
    );
  }
  const spec = ICONS[name] || ICONS.generic;
  return (
    <span className="toolIcon" style={{ ...style, background: spec.bg }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58}>
        {spec.svg}
      </svg>
    </span>
  );
}

function ArrowIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function FlowIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="5" cy="12" r="2.2" fill="currentColor" />
      <circle cx="19" cy="6" r="2.2" fill="currentColor" />
      <circle cx="19" cy="18" r="2.2" fill="currentColor" />
      <path d="M7 12h4c3 0 3-6 6-6M11 12c3 0 3 6 6 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  3. BUTTON on the project card                                      */
/* ------------------------------------------------------------------ */
export function ArchCta({ slug }) {
  if (!ARCHITECTURES[slug]) return null;
  return (
    <div className="archCta">
      <a className="btn btnDark btnPulse" href={`#/architecture/${slug}`}>
        <FlowIcon />
        <span>View the architecture</span>
        <ArrowIcon />
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  4. The diagram                                                     */
/* ------------------------------------------------------------------ */
function Connector({ from, to, label, index }) {
  const kind = from === 1 && to === 1 ? "straight" : from === 1 ? "fan" : "merge";
  const H = {
    straight: ["M0 50 L100 50"],
    fan: ["M0 50 C50 50 50 25 100 25", "M0 50 C50 50 50 75 100 75"],
    merge: ["M0 25 C50 25 50 50 100 50", "M0 75 C50 75 50 50 100 50"]
  }[kind];
  const V = {
    straight: ["M50 0 L50 100"],
    fan: ["M50 0 C50 50 25 50 25 100", "M50 0 C50 50 75 50 75 100"],
    merge: ["M25 0 C25 50 50 50 50 100", "M75 0 C75 50 50 50 50 100"]
  }[kind];
  const delay = `${index * 0.35}s`;

  return (
    <div className="archLink" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {H.map((d, i) => (
          <g className="hPath" key={"h" + i}>
            <path className="linkBase" d={d} />
            <path className="linkFlow" d={d} style={{ animationDelay: delay }} />
          </g>
        ))}
        {V.map((d, i) => (
          <g className="vPath" key={"v" + i}>
            <path className="linkBase" d={d} />
            <path className="linkFlow" d={d} style={{ animationDelay: delay }} />
          </g>
        ))}
      </svg>
      {label && <span className="linkLabel">{label}</span>}
    </div>
  );
}

/* Vertical glowing line between two stages */
function StageLink({ label, index }) {
  return (
    <div className="stageLink" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="linkBase" d="M50 0 L50 100" />
        <path className="linkFlow" d="M50 0 L50 100" style={{ animationDelay: `${index * 0.35}s` }} />
      </svg>
      {label && <span className="stageLinkLabel">{label}</span>}
    </div>
  );
}

/* Short glowing lines from each node down to the orchestrator bar */
function Bus({ columns, cols }) {
  return (
    <div className="archBus" aria-hidden="true">
      {columns.map((_, ci) => (
        <Fragment key={ci}>
          {ci > 0 && <span className="busGap" />}
          <span className="busCol">{cols.includes(ci) && <span className="busStub" />}</span>
        </Fragment>
      ))}
    </div>
  );
}

function NodeCard({ node, active, onActivate, onLeave }) {
  return (
    <button
      type="button"
      className={"nodeCard" + (active ? " isActive" : "") + (node.isOrch ? " orch" : "")}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      aria-label={node.step ? `Step ${node.step}: ${node.name}. ${node.role}` : `${node.name}. ${node.role}`}
    >
      {node.step ? <span className="stepBadge">{node.step}</span> : null}
      <ToolIcon name={node.icon} logo={node.logo} size={node.isOrch ? 44 : 52} />
      <span className="nodeText">
        <span className="nodeName">{node.name}</span>
        <span className="nodeRole">{node.role}</span>
      </span>
      {node.stop ? <span className="nodeStop">✕ {node.stop}</span> : null}
      {node.go ? <span className="nodeGo">✓ {node.go}</span> : null}
    </button>
  );
}

/* Turns a project file into numbered stages. Old single-flow files still work. */
function prepare(arch) {
  const raw = arch.stages || [{ columns: arch.columns, flows: arch.flows }];
  let n = 0;
  const stages = raw.map((st) => ({
    ...st,
    columns: st.columns.map((col) => col.map((node) => ({ ...node, step: ++n }))),
    orchestrator: st.orchestrator ? { ...st.orchestrator, step: null, isOrch: true } : null
  }));
  const flat = [];
  stages.forEach((st) => {
    st.columns.flat().forEach((nd) => flat.push(nd));
    if (st.orchestrator) flat.push(st.orchestrator);
  });
  return { stages, flat, total: n };
}

export function ArchitecturePage({ slug }) {
  const arch = ARCHITECTURES[slug];
  const { stages, flat, total } = arch ? prepare(arch) : { stages: [], flat: [], total: 0 };

  const [hover, setHover] = useState(null);
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (hover !== null || flat.length === 0) return undefined;
    const t = setInterval(() => setAuto((i) => (i + 1) % flat.length), 2800);
    return () => clearInterval(t);
  }, [hover, flat.length]);

  if (!arch) {
    return (
      <div className="archShell archMissing">
        <p>Architecture not found.</p>
        <a className="btn btnYellow" href="#projects">Back to projects</a>
      </div>
    );
  }

  const active = flat.find((n) => n.id === (hover ?? flat[auto].id)) || flat[0];
  const multiStage = stages.length > 1;

  const card = (node) => (
    <NodeCard
      node={node}
      active={node.id === active.id}
      onActivate={() => setHover(node.id)}
      onLeave={() => setHover(null)}
    />
  );

  return (
    <>
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#projects">← Back to projects</a>
          <a className="btn btnYellow" href="#top">Pratham Junghare</a>
        </div>
      </header>

      <main className="archShell archPage">
        <div className="archIntro">
          <span className="projectTag">{arch.tag}</span>
          <h1>{arch.title}</h1>
          <p>{arch.problem}</p>
        </div>

        <div className="archStage">
          <div className="archLive">
            <span className="livePulse" /> Live data flow. Hover or tap any step.
          </div>

          {stages.map((st, si) => (
            <Fragment key={si}>
              {si > 0 && (
                <StageLink label={arch.stageFlows && arch.stageFlows[si - 1]} index={si} />
              )}
              <div className="archStageBlock">
                {st.title && (
                  <div className="stageHead">
                    <span className="stageNum">Stage {si + 1}</span>
                    <div>
                      <h3>{st.title}</h3>
                      {st.subtitle && <p>{st.subtitle}</p>}
                    </div>
                  </div>
                )}

                <div className={"archFlow" + (st.orchestrator ? " hasBus" : "")}>
                  {st.columns.map((col, ci) => (
                    <Fragment key={ci}>
                      {ci > 0 && (
                        <Connector
                          from={st.columns[ci - 1].length}
                          to={col.length}
                          label={st.flows && st.flows[ci - 1]}
                          index={ci}
                        />
                      )}
                      <div className={"archCol" + (col.length > 1 ? " multi" : "")}>
                        {col.map((node) => (
                          <div className="nodeWrap" key={node.id}>
                            {card(node)}
                          </div>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>

                {st.orchestrator && (
                  <div className="orchWrap">
                    <Bus columns={st.columns} cols={st.bus || st.columns.map((_, i) => i)} />
                    {card(st.orchestrator)}
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </div>

        <div className={"archDetail" + (multiStage ? " isSticky" : "")} key={active.id}>
          <div className="detailHead">
            <ToolIcon name={active.icon} logo={active.logo} size={56} />
            <div>
              <span className="detailStep">
                {active.step ? `Step ${active.step} of ${total}` : "Orchestrator"}
              </span>
              <h2>{active.name}</h2>
              <span className="nodeRole">{active.role}</span>
            </div>
          </div>
          <div className="detailBody">
            <p>{active.desc}</p>
            <div className="detailIO">
              <div>
                <strong>Takes in</strong>
                <span>{active.takes}</span>
              </div>
              <div>
                <strong>Hands off</strong>
                <span>{active.gives}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="archNotes">
          <div className="archNote">
            <strong>Why I built it this way</strong>
            <p>{arch.why}</p>
          </div>
          <div className="archNote archNoteResult">
            <strong>Result</strong>
            <p>{arch.result}</p>
          </div>
        </div>
      </main>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  5. STYLES                                                          */
/* ------------------------------------------------------------------ */
export const ARCH_CSS = `
/* Button on project card */
.outcomeRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.outcomeRow p {
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
}

.archCta {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
}

.outcomeRow .btn {
  padding: 6px 14px;
}

.btnDark {
  background: #111;
  color: #fff;
}

.btnDark:hover {
  background: #2c2c2c;
}

.btnDark svg:last-child {
  transition: transform 0.2s ease;
}

.btnDark:hover svg:last-child {
  transform: translateX(3px);
}

.btnPulse {
  animation: archBtnPulse 2.4s ease-out infinite;
}

@keyframes archBtnPulse {
  0% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.6); }
  70% { box-shadow: 0 0 0 12px rgba(234, 179, 8, 0); }
  100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
}

/* Real logo image (white background blends into the white cards) */
.toolLogo {
  display: block;
  flex-shrink: 0;
  object-fit: contain;
  background: #fff;
}

/* Tool icon tile */
.toolIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  object-fit: contain;
}

/* Architecture page */
.archShell {
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: 0 24px;
}

.archMissing {
  padding-top: 80px;
  text-align: center;
}

.archPage {
  padding-top: 40px;
  padding-bottom: 64px;
}

.archIntro {
  max-width: 760px;
  margin-bottom: 28px;
}

.archIntro h1 {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.2;
  margin: 12px 0 10px;
}

.archIntro p {
  color: var(--text-muted);
}

.archStage {
  background-color: #fff;
  background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
  background-size: 18px 18px;
  border: 1px solid var(--dark-border);
  padding: 20px 24px 44px;
  margin-bottom: 20px;
}

.archLive {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 40px;
}

.livePulse {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  animation: archPing 1.6s ease-out infinite;
  --ping: rgba(34, 197, 94, 0.55);
}

/* Stages */
.stageHead {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 34px;
  text-align: left;
}

.stageNum {
  background: var(--dark-border);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  white-space: nowrap;
}

.stageHead h3 {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  line-height: 1.2;
}

.stageHead p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.stageLink {
  position: relative;
  width: 60px;
  height: 76px;
  margin: 10px auto;
}

.stageLink svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.stageLinkLabel {
  position: absolute;
  top: 50%;
  left: calc(50% + 14px);
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  background: #fff;
  padding: 1px 6px;
}

/* Flow rows */
.archFlow {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.archCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.archCol.multi .nodeWrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0;
}

.nodeWrap {
  width: clamp(120px, 13.5vw, 190px);
}

.archCol.multi .nodeWrap {
  width: clamp(120px, 13.5vw, 190px);
}

.archLink {
  position: relative;
  flex: 0 0 clamp(46px, 6vw, 110px);
  align-self: stretch;
}

.archLink svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.vPath {
  display: none;
}

.linkBase {
  fill: none;
  stroke: var(--border-color);
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.linkFlow {
  fill: none;
  stroke: var(--accent-yellow-light);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 1 14;
  vector-effect: non-scaling-stroke;
  filter: drop-shadow(0 0 3px rgba(234, 179, 8, 0.9));
  animation: archDash 0.9s linear infinite;
}

@keyframes archDash {
  to { stroke-dashoffset: -15; }
}

.linkLabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -135%);
  width: max-content;
  max-width: 130px;
  text-align: center;
  font-size: 0.68rem;
  line-height: 1.25;
  font-weight: 600;
  color: var(--text-muted);
  background: #fff;
  padding: 1px 4px;
}

/* Orchestrator bar (n8n) */
.archFlow.hasBus .nodeCard {
  min-height: 12.5rem;
  justify-content: center;
}

.orchWrap {
  width: fit-content;
  margin: 0 auto;
}

.archBus {
  display: flex;
  justify-content: center;
  height: 40px;
}

.busCol {
  display: flex;
  justify-content: center;
  width: clamp(120px, 13.5vw, 190px);
}

.busGap {
  flex: 0 0 clamp(46px, 6vw, 110px);
}

.busStub {
  width: 4px;
  height: 100%;
  background-image: radial-gradient(circle, var(--accent-yellow-light) 42%, transparent 48%);
  background-size: 4px 15px;
  filter: drop-shadow(0 0 3px rgba(234, 179, 8, 0.9));
  animation: busMove 0.9s linear infinite;
}

@keyframes busMove {
  to { background-position: 0 -15px; }
}

.nodeCard.orch {
  flex-direction: row;
  justify-content: center;
  gap: 14px;
  padding: 12px 20px;
  min-height: 0;
  text-align: left;
}

.nodeCard.orch .nodeText {
  align-items: flex-start;
}

/* Node cards */
.nodeCard {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 18px 10px 14px;
  background: #fff;
  border: 1px solid var(--dark-border);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.08);
  font: inherit;
  color: var(--text-main);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nodeCard:hover,
.nodeCard.isActive {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 6px 9px 0 rgba(234, 179, 8, 0.5);
  z-index: 3;
}

.nodeCard.orch:hover,
.nodeCard.orch.isActive {
  transform: translateY(-3px) scale(1.02);
}

.nodeCard.isActive .toolIcon {
  --ping: rgba(234, 179, 8, 0.7);
  animation: archPing 1.6s ease-out infinite;
}

@keyframes archPing {
  0% { box-shadow: 0 0 0 0 var(--ping, rgba(234, 179, 8, 0.6)); }
  80% { box-shadow: 0 0 0 14px rgba(0, 0, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
}

.stepBadge {
  position: absolute;
  top: -12px;
  left: -12px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--dark-border);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
}

.nodeCard.isActive .stepBadge {
  background: var(--accent-yellow-light);
  color: #000;
}

.nodeText {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.nodeName {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.2;
}

.nodeRole {
  font-size: 0.72rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--text-muted);
}

.nodeStop,
.nodeGo {
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 3px 7px;
}

.nodeStop {
  color: #b91c1c;
  background: #fee2e2;
}

.nodeGo {
  color: #166534;
  background: #dcfce7;
}

/* Detail panel */
.archDetail {
  display: grid;
  grid-template-columns: minmax(220px, 300px) 1fr;
  gap: 28px;
  min-height: 11rem;
  background: #fff;
  border: 1px solid var(--dark-border);
  padding: 24px;
  margin-bottom: 20px;
  animation: archFade 0.3s ease;
}

.archDetail.isSticky {
  position: sticky;
  bottom: 12px;
  z-index: 10;
  box-shadow: 0 -6px 22px rgba(0, 0, 0, 0.14);
}

@keyframes archFade {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}

.detailHead {
  display: flex;
  align-items: center;
  gap: 16px;
}

.detailStep {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.detailHead h2 {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  line-height: 1.2;
}

.detailBody p {
  margin-bottom: 14px;
}

.detailIO {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.detailIO div {
  border-left: 3px solid var(--accent-yellow-light);
  padding-left: 12px;
}

.detailIO strong {
  display: block;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.detailIO span {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.archNotes {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.archNote {
  background: #fff;
  border: 1px solid var(--border-color);
  padding: 20px 24px;
}

.archNote strong {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.archNote p {
  color: var(--text-muted);
  font-size: 0.92rem;
}

.archNoteResult {
  background: var(--accent-yellow-light);
  border-color: var(--dark-border);
}

.archNoteResult p {
  color: var(--text-main);
  font-weight: 600;
}

/* Mobile: flow runs top to bottom */
@media (max-width: 820px) {
  .archShell {
    padding: 0 16px;
  }

  .archStage {
    padding: 16px 16px 36px;
  }

  .archFlow {
    flex-direction: column;
    align-items: center;
  }

  .archFlow.hasBus .nodeCard {
    min-height: 0;
  }

  .archCol {
    width: min(100%, 420px);
    align-items: center;
  }

  .archCol.multi {
    flex-direction: row;
    gap: 0.75rem;
  }

  .nodeWrap,
  .archCol.multi .nodeWrap {
    width: min(100%, 210px);
  }

  .archCol.multi .nodeWrap {
    flex: 1;
    padding: 0;
  }

  .archLink {
    flex: 0 0 64px;
    width: min(100%, 420px);
    align-self: center;
  }

  .hPath {
    display: none;
  }

  .vPath {
    display: block;
  }

  .linkLabel {
    display: none;
  }

  .archBus {
    display: none;
  }

  .orchWrap {
    width: min(100%, 420px);
    margin-top: 28px;
  }

  .nodeCard.orch {
    width: 100%;
  }

  .archDetail {
    grid-template-columns: 1fr;
    gap: 16px;
    min-height: 15rem;
    padding: 18px;
  }

  .archDetail.isSticky {
    min-height: 0;
    max-height: 48vh;
    overflow-y: auto;
    padding: 14px 16px;
    gap: 10px;
  }

  .detailIO {
    grid-template-columns: 1fr;
  }

  .archNotes {
    grid-template-columns: 1fr;
  }

  .archCta .btn {
    justify-content: center;
  }
}

/* Small phones: button drops under the outcome text, full width */
@media (max-width: 640px) {
  .outcomeRow {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .archCta,
  .archCta .btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .linkFlow,
  .busStub,
  .btnPulse,
  .livePulse,
  .nodeCard.isActive .toolIcon,
  .archDetail {
    animation: none;
  }
}
`;
