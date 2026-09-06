# Pratham Junghare — portfolio site

React 19 + Vite. No CSS framework, no UI library, two dependencies total (`react`, `react-dom`).
Everything else is hand-written CSS living in a `<style>` block at the bottom of `src/App.jsx`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ to check it before deploying
```

## Where to edit things

All copy lives in plain arrays at the **top** of `src/App.jsx`. Don't hunt through JSX.

| What you want to change | Edit this |
|---|---|
| Email / LinkedIn URL | `LINKEDIN`, `EMAIL` constants |
| The 4 "What I do" blocks | `CAPABILITIES` |
| The 3 Netcore roles | `ROLES` |
| Project entries | `SYSTEMS` |
| The 4 principles | `PRINCIPLES` |
| Stack groups | `STACK` |
| Downloadable documents | `DOCS` |
| Certifications | `CERTS` |

The design tokens (6 colours, 2 typefaces, spacing) are the `:root` block at the top of the
`CSS` string, near the bottom of the file.

## Files you still need to add

1. `public/img/pratham.png` — background-removed cut-out, standing, portrait ratio (~660×860).
   Until it exists the hero renders a neutral silhouette. It won't look broken, but it also
   won't look finished — this is the single highest-impact missing piece.
2. `public/docs/*` — the four documents listed in the `DOCS` array.
   **If a file isn't ready, delete its row from `DOCS`.** Also delete it from the matching
   system's `docs:` array. A 404 on a docs link costs more than an absent link.
3. `public/img/og.png` — 1200×630 link preview. Then uncomment the `og:image` tag in
   `index.html`. Leave it commented until the file exists.

## Sixth system

`SYSTEMS` has five entries. The sixth slot renders below them as a dimmed "Content pending"
card. When you have the copy, add a sixth object to `SYSTEMS` and delete the
`<article className="system systemPending">` block in the JSX.

## Deploy

### Netlify (recommended — takes about 3 minutes)

1. Push this folder to a GitHub repo.
2. netlify.com → **Add new site** → **Import an existing project** → pick the repo.
3. Netlify reads `netlify.toml`, so build command and publish directory are already set.
   Confirm they show `npm run build` and `dist`.
4. Deploy. Then **Site configuration → Change site name** to something like
   `pratham-junghare` so the URL is `pratham-junghare.netlify.app`.

Vercel works identically — it auto-detects Vite, no config needed.

### GitHub Pages — read this first

The site uses absolute paths (`/docs/...`, `/img/...`). Those break on a **project** page
(`username.github.io/repo-name/`) because everything is served from a subfolder.

Two ways around it:

- Name the repo `<your-username>.github.io` so the site is served from the domain root.
  Nothing else changes.
- Or keep a project repo and set `base: '/repo-name/'` in `vite.config.js`, then change every
  `/docs/` and `/img/` path in `App.jsx` to be relative. More work, easy to get wrong.

Netlify avoids the whole problem. Use Netlify.

## Design notes

- **Palette (6):** `#E7E8E2` paper, `#F7F7F4` panel, `#111518` ink, `#545B57` muted,
  `#C6C9C0` rule, `#DCE64B` marker. The marker yellow-green only ever appears as a
  highlighter fill behind evidence — proof numbers, the "call I made", the section node.
  It is never body text.
- **Type:** Instrument Sans for everything readable. IBM Plex Mono strictly for numbers,
  date ranges, file types, and status tokens (`ALLOW` / `THROTTLE` / `PAUSE`). Never for labels.
- **Structure:** a hairline rail runs down the left of every section with a marker node at
  each heading — the routing motif, used once, structurally. On mobile the rail collapses
  into a left border on the section heading.
- **Motion:** one page-load sequence. Hero traces draw in, the figure rises, the four tags
  settle in a staggered order, then the page is still. Fully disabled under
  `prefers-reduced-motion: reduce`.
- **Timeline markers are date ranges, not `01 / 02 / 03`.** A recruiter needs the dates
  anyway; the numbers were decoration.

## Accessibility floor

Skip link, visible `:focus-visible` outlines, semantic heading order (`h1` → `h2` → `h3` → `h4`),
alt text on the portrait, `prefers-reduced-motion` honoured, and all body/muted text meets
WCAG AA contrast against the paper background.
