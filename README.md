# OSCP Landing Page

Marketing landing page for **OSC Professionals** — a full-service eCommerce agency (Shopify, Magento, Odoo). Built with React + Vite, Material UI, and Tailwind, with an accessibility- and Web-Vitals-first approach.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | react-router-dom 7 (`createBrowserRouter` + `Outlet`) |
| UI components | Material UI 5 (`@mui/material`, `@mui/icons-material`) |
| Styling | MUI `sx` props + Tailwind 3 (preflight disabled) |
| Images | `sharp` (build-time responsive variants) |

## Prerequisites

- **Node.js 18+** and npm

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build + local preview
npm run build
npm run preview
```

## Available scripts

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run optimize:images` | Generate responsive `sm/md/lg` webp + jpg variants (see below) |
| `npm run lint` | ESLint over `src` (`.js`, `.jsx`) |
| `npm run test:a11y` | Run pa11y accessibility checks against the dev server |

## Project structure

```
src/
  main.jsx              # entry — router setup (RouterProvider)
  index.css             # Tailwind directives + base styles
  app/                  # page composition / routing shell
    Layout.jsx          # Header + <Outlet /> + Footer (shared chrome)
    LandingPage.jsx     # index route; above-the-fold + lazy below-the-fold
    LandingBelow.jsx    # below-the-fold sections (lazy-loaded chunk)
  common/               # shared, reusable building blocks
    components/          # Header, Footer, SectionHeading, MobileNavDrawer
    hooks/              # useParallaxRef, useReveal, useScrolled
    theme/              # BRAND color tokens
    constants/          # navLinks, decorative constants
  utilities/            # pure helpers (e.g. bgWith)
  features/
    landing/            # page sections: Hero, MarketplaceApps, WeWorkWith,
                        # OurStrength, Portfolio, Testimonials, Blogs, CTABanner
  assets/
    img/                # source images
    optimized/          # generated responsive variants (from optimize:images)
```

## Architecture notes

- **Routing** — `main.jsx` builds a `createBrowserRouter`. `Layout` is the parent route (renders `Header`, `<Outlet />`, `Footer`); the landing page is the index route. Add new pages as child routes to reuse the same chrome.
- **Code-splitting** — `LandingBelow` (below-the-fold sections) is `React.lazy`-loaded and prefetched on idle, keeping the initial bundle small.
- **Styling** — layout/visuals use MUI `sx`. Tailwind is wired up (`tailwind.config.js`, `postcss.config.js`) with **preflight disabled** so its reset never fights MUI. Brand colors live in `common/theme` (`BRAND`): primary `#0A2540`, accent `#00A4BD`.
- **JSX runtime** — there is no `vite.config.js`, so JSX uses esbuild's classic runtime. **Every `.jsx` file must `import React from 'react'`**, even if React isn't referenced directly. (Adding `@vitejs/plugin-react` via a `vite.config.js` would remove this requirement and enable Fast Refresh.)

## Image optimization

Source images go in `src/assets/img/`. The script resizes each `.jpg`/`.png` into responsive variants and writes both webp and jpg to `src/assets/optimized/`:

```bash
npm run optimize:images
```

Variants: `lg` (1600w), `md` (900w), `sm` (500w). Tune quality/sizes in [`scripts/optimize-images.mjs`](scripts/optimize-images.mjs).

## Accessibility & performance

Built to target WCAG 2.1 AA and strong Core Web Vitals:

- Semantic landmarks (`<header>`, `<nav>`, `<section>`, `<footer>`), proper heading order, ARIA labels on icon controls.
- Keyboard-accessible interactive elements; respects `prefers-reduced-motion` (parallax/reveal effects disable automatically).
- Responsive, mobile-first layout with a slide-in nav drawer.
- LCP kept low via a static pre-render hero in `index.html`, lazy below-the-fold content, `content-visibility`, and responsive images.

## License

MIT
