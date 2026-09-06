# Design Plan: Pratham Junghare — Portfolio Site (`PLAN.md`)

**Role:** Design Lead & Front-End Engineer  
**Target Audience:** Recruiter or Hiring Manager at US/EU B2B SaaS hiring a remote GTM / RevOps Engineer  
**Deliverable:** Single static `index.html` with inline CSS/JS + `/docs/` repository assets.

---

## 1. Design System & Colour Tokens

The subject matter is **revenue plumbing and signal automation** — pipelines, routing, throughput, and guardrails. The color palette reflects an engineering-credible dark interface with high readability, avoiding standard portfolio clichés.

### Palette (6 Named Tokens Total)

| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `--bg-obsidian` | `#0B0F17` | Primary page background (deep slate black, low glare, high precision) |
| `--surface-panel` | `#141A26` | Structural section backdrops and system container backgrounds |
| `--surface-border` | `#232D3F` | Fine structural lines, system borders, grid dividers |
| `--text-primary` | `#F1F5F9` | Primary headings, body copy, headline text (crisp ice white) |
| `--text-secondary` | `#94A3B8` | Subtitles, availability line, secondary descriptions, metadata |
| `--accent-signal` | `#2DD4BF` | Primary signal accent (teal/cyan) — active pipelines, primary CTAs, active status |
| `--accent-amber` | `#F59E0B` | Secondary guardrail accent — proof metrics, DNS alerts, role tag subtle highlight |

---

## 2. Typefaces and Typography Hierarchy

Maximum of **two typefaces**, linked via Google Fonts CDN:

1. **Primary Typeface:** `Plus Jakarta Sans` (Sans-serif)
   - **Role:** Headlines, availability line, body content, capability titles, buttons, navigation, and section titles.
   - **Weights Used:** 400 (Regular body), 500 (Medium subtitles), 600 (SemiBold labels), 700 (Bold headings).
2. **Technical / Data Typeface:** `JetBrains Mono` (Monospace)
   - **Role:** Strictly reserved for numerical proof metrics, code JSON paths, system metrics numbers (`40%`, `3,000`, `6,000`), and raw system data. NOT used for general UI labels.

### Typography Scale
- **Hero Headline:** 3.25rem (52px) / 1.15 line-height / SemiBold (700)
- **Section Headings (H2):** 1.875rem (30px) / 1.25 line-height / SemiBold (600)
- **System Titles (H3):** 1.25rem (20px) / 1.3 line-height / Bold (700)
- **Body Text:** 1.0rem (16px) / 1.6 line-height / Regular (400)
- **Metrics Numbers:** 1.75rem (28px) / Monospace Bold (700)

---

## 3. Hero Layout Concept & Composition

The hero layout adheres strictly to the specification in Section 5 of `Brief.md`:

```
┌──────────────────────────────────────────────────────────┐
│  availability line (GTM Engineer dominant)               │
│                                                          │
│        I build the systems that find, qualify,           │
│              and route revenue.                          │
│                                                          │
│   [40% research    ┌──────────┐    [Automation           │
│    time cut]       │          │     Engineer] (Role)     │
│                    │  PHOTO   │                          │
│   [6,000 numbers   │ centred  │    [3,000 profiles       │
│    validated/day]  │ cut-out  │     verified/day]        │
│                    │          │                          │
│                    └──────────┘                          │
│         subhead line, centred, under the figure          │
│   [Download résumé]  [See the systems]  LinkedIn  Email  │
└──────────────────────────────────────────────────────────┘
```

### Hero Elements & Execution Details:
- **Availability Line:** Set above headline. `"GTM Engineer"` is rendered in bold primary white text, while `"at Netcore Cloud... automation, enrichment..."` is secondary muted slate (`#94A3B8`).
- **Headline:** Centered, large, high-contrast, uniform color without single-word accents.
- **Background Shape:** A custom SVG structural vector canvas representing a **converging pipeline network diagram** (subtle `#232D3F` & `#2DD4BF` nodes and signal paths), anchoring the photo figure to the system diagram.
- **Photo Cut-Out:** `img/pratham.png` layered centrally. An inline SVG neutral silhouette placeholder with matching aspect ratio will be used if the image file is not present.
- **Depth Layering (Z-Order):**
  - Background SVG pipeline node: `z-index: 1`
  - Centered Photo Figure: `z-index: 10`
  - Floating Proof & Role Tags: `z-index: 20` (Role tag slightly overlaps the right shoulder at `z-index: 25`).
- **The 4 Floating Tags:**
  1. Top Left: `40% less manual research time` (Metric Tag)
  2. Bottom Left: `6,000 phone numbers validated/day` (Metric Tag)
  3. Top Right (Closest to shoulder): `Automation Engineer` (Role Tag — styled with distinct subtle border & amber tint to differentiate identity from metric evidence)
  4. Bottom Right: `3,000 LinkedIn profiles verified/day` (Metric Tag)
- **Motion:** Single choreographed page-load sequence: background pipeline paths draw, figure fades in, and floating tags subtly settle into place (using pure CSS `@keyframes`). Motion is disabled automatically under `@media (prefers-reduced-motion: reduce)`.
- **Responsive Mobile Fallback:** Single-column layout on viewports < 768px. Tags stack cleanly below the figure.

---

## 4. How Anti-Patterns (Section 3) Are Avoided

We have audited the 11 anti-patterns listed in Section 3 of `Brief.md` and designed specific countermeasures for each:

1. **Anti-pattern:** Cream/off-white background (~#F4F1EA) + high-contrast serif display + terracotta accent (~#D97757).  
   *Avoided by:* Utilizing a dark obsidian slate theme (`#0B0F17`), clean geometric sans-serif (`Plus Jakarta Sans`), electric signal teal (`#2DD4BF`), and amber (`#F59E0B`).

2. **Anti-pattern:** Near-black background with one acid-green or vermilion accent.  
   *Avoided by:* Using a rich slate navy palette with dual balanced accent colors (teal-cyan and warm amber) paired with muted slate borders.

3. **Anti-pattern:** Every piece of content chopped into identical rounded cards with same border radius and soft grey shadow.  
   *Avoided by:* Implementing structural layouts: table-like field lists for Systems, a vertical timeline spine for Track Record, clear two-column grids for Capabilities, and minimal border-delimited panels instead of drop-shadow cards.

4. **Anti-pattern:** Tracked-out ALL-CAPS eyebrow labels above every heading.  
   *Avoided by:* Completely omitting uppercase tracked eyebrows. Headings rely purely on typography scale and semantic hierarchy (`h1`, `h2`, `h3`).

5. **Anti-pattern:** Meta strings joined with middle dots (`A · B · C`).  
   *Avoided by:* Formatting metadata into structured pill tags, clean table cells, or separated flex inline items without middle dots.

6. **Anti-pattern:** A `→` appended to every link and button label.  
   *Avoided by:* Using concise, direct button copy (e.g. `Download résumé (PDF)`, `See the systems`) without appending trailing arrow characters.

7. **Anti-pattern:** Monospace font for all small labels regardless of whether they're data.  
   *Avoided by:* Restricting `JetBrains Mono` strictly to numerical metric counts (`40%`, `3,000`, `6,000`), code paths, and JSON metadata. All standard labels use `Plus Jakarta Sans`.

8. **Anti-pattern:** Accenting one single word in the headline in a different color.  
   *Avoided by:* Rendering the entire headline in uniform `--text-primary` (`#F1F5F9`) ice white text.

9. **Anti-pattern:** `01 / 02 / 03` numbered markers on things that aren't a sequence.  
   *Avoided by:* Restricting numbered indicators exclusively to Section 9 (Track Record / Experience Timeline), which represents a chronological sequence. No fake numbered list items anywhere else.

10. **Anti-pattern:** Gradient washes as decoration.  
    *Avoided by:* Using solid surface panels (`#141A26`), crisp vector SVG lines, and sharp border tokens (`#232D3F`). Zero background gradient blur overlays.

11. **Anti-pattern:** Tools-first organization and generic filler copy.  
    *Avoided by:* Strict adherence to the outcome-first schema: `Title → Problem → What I Built → The Call I Made → Outcome → Built With → Docs`. Exact copy from `Brief.md` is preserved without modifications.

---

## 5. Verification & Deliverables Checklist

- [x] Design Plan `PLAN.md` created.
- [ ] Create single self-contained `index.html` with inline CSS/JS.
- [ ] Create placeholder silhouette graphic for hero photo (`img/pratham.png`).
- [ ] Build `/docs/` library files reference structure (`/docs/Pratham-Junghare-Resume.pdf`, etc.).
- [ ] Verify accessibility (WCAG AA contrast ratios, visible keyboard focus, keyboard navigation).
- [ ] Verify `prefers-reduced-motion` CSS rules.
- [ ] Verify mobile responsiveness (desktop-first 1440px with responsive 375px+ fallback).
