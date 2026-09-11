# Plan: migrate aicotx.com to Next.js + Tailwind + shadcn (Vercel)

## What exists today

- 6 static pages: `/`, `/approach/`, `/services/`, `/products/`, `/ladder/`, `/contact/`.
- `css/site.css` (~800 lines, 94 class selectors, 49 CSS variables).
- `js/site.js` (48 lines): header border on scroll, `.reveal` fade-in, ladder scrollspy, footer year.
- Chrome duplicated in every file: topbar, header/nav, footer, `<head>` meta.
- Fonts: Instrument Sans (body), DM Mono (kickers/labels), Cinzel (seal SVG text only).
- No forms, no raster images besides the OG PNG. All figures are inline SVG.

### Where the CSS bloat actually is

Measured against the six pages:

| bucket | count | what happens to it |
|---|---|---|
| classes used on 2+ pages | 41 | become components or `@layer components` classes |
| classes used on 1 page | 45 | become Tailwind utilities on that page, rule deleted |
| classes never used | 8 | deleted (`accent`, `btn-indigo`, `tx`, `full`, `compact`, + 3 JS-only state classes that stay) |
| legacy alias variables (`--paper`, `--dark-*`, `--sans`, `--rule`…) | 20 | deleted; 10 are unused, the other 10 are referenced only by inline styles that get rewritten |
| inline `style=""` attributes | 16 | rewritten as Tailwind classes |

The bigger win is structural: `font-family`, `letter-spacing`, and `color` are restated in
nearly every rule. Setting typography once in `globals.css` removes most of that.

## Guiding decisions

1. **Rewrite, don't port.** Every rule either becomes a token, a base typography style, a
   component, or Tailwind utilities on the page. Nothing from `site.css` is pasted through.
2. **Tokens live in shadcn's format.** Colors, radius, and fonts go in `globals.css` as
   `:root` variables mapped into Tailwind via `@theme inline`, exactly as `shadcn init`
   lays them out. Components reference `bg-primary`, `text-muted-foreground`, etc.
3. **Typography is defined once, in `globals.css`**, following shadcn's typography
   guidance: element defaults under `@layer base`, named styles for the few recurring
   text roles (display, kicker, section title, prose).
4. **Button is the only shadcn primitive for now.** Variants are tuned after the token
   rewrite and checked pixel-for-pixel against reference screenshots.
5. **Prefer components over inline styling** for anything that appears twice. Inline
   Tailwind is fine for one-off layout on a page.
6. **Preserve URLs** (`trailingSlash: true`) and **use the Metadata API fully**.
7. **No static export.** Vercel runs Next natively.

## Steps

### 0. Capture the reference
- Add a throwaway script (`scripts/reference-shots.mjs`, Playwright) that screenshots
  the live site at `https://aicotx.com` for all six routes at 1440px and 390px, full page.
  Output to `docs/reference/` (gitignored; committing 12 PNGs is optional).
- Also dump computed styles for `.btn-dark`, `.nav-contact`, `.band a.mail` (the three
  pill buttons) so Button variants have exact numbers to match.
- **Verify:** 12 PNGs exist and look like the live site.

### 1. Scaffold
- Branch `feat/nextjs-migration`.
- `npx create-next-app@latest` (TypeScript, App Router, Tailwind v4, no `src/`, alias `@/*`).
- `next.config.ts`: `trailingSlash: true`.
- Move `img/seal-og.png` → `app/opengraph-image.png`, `favicon.svg` → `app/icon.svg`
  (Next file conventions; no manual `<link>` tags). Other `img/` files are unreferenced
  today; drop them unless the digital-assets repo says otherwise.
- **Verify:** `npm run dev` boots; `/icon.svg` and `/opengraph-image.png` resolve.

### 2. Tokens (`globals.css`)
- `npx shadcn@latest init` (Tailwind v4 flow, CSS variables on, base color neutral).
- Replace the generated neutral values with the brand palette. Light mode only; no dark block.

  | shadcn token | value | was |
  |---|---|---|
  | `--background` / `--foreground` | `#FBF7EF` / `#3E352A` | `--bg`, `--body-ink` |
  | `--card` / `--card-foreground` | `#FFFDF7` / `#201812` | `.figure-card`, `--ink` |
  | `--primary` / `--primary-foreground` | `#8F3D1F` / `#FFFFFF` | `--rust` |
  | `--secondary` / `--secondary-foreground` | `#2E1A10` / `#F7EFE2` | `--espresso`, `--espresso-ink` |
  | `--muted` / `--muted-foreground` | `#F4EDDD` / `#8B7F6B` | `--cream`, `--muted` |
  | `--accent` / `--accent-foreground` | `#EFDACB` / `#201812` | `--rust-tint`, `--ink` |
  | `--border`, `--input` | `#E6DECA` | `--hairline` |
  | `--ring` | `#8F3D1F` | `--rust` |
  | `--radius` | `1rem` | cards 16px; hero panel 20px = `rounded-[1.25rem]` |

- Brand extras that shadcn has no slot for, added to `@theme inline` as named colors:
  `ink` `#201812`, `rust-deep` `#6F2D15`, `rust-bright` `#B26243`, `gold` `#B08A45`,
  `espresso-soft` `#C9B49D`, `cream-deep` `#EAE0CA`, `band-rule` `rgba(247,239,226,.18)`.
- Layout tokens: `--container-shell: 1248px`, `--container-rail: 1400px`,
  `--spacing-gutter: clamp(20px, 4vw, 48px)` so `max-w-shell`, `px-gutter` work.
- Fonts via `next/font/google` in `layout.tsx`, exposed as CSS variables and mapped in
  `@theme inline`: Instrument Sans → `--font-sans`, DM Mono → `--font-mono`,
  Cinzel 600 → `--font-seal` (seal SVG only, `display: swap`, subset to used glyphs if
  the API allows, otherwise `preload: false`).
- **Verify:** `bg-background text-primary font-mono max-w-shell` all resolve in a scratch page.

### 3. Typography (`globals.css`, `@layer base`)
Per shadcn's typography guidance, element defaults live in `globals.css`, not per page:
- `body`: `bg-background text-foreground font-sans text-base leading-[1.55] antialiased`.
- `h1`, `h2`, `h3` defaults with the site's tight tracking (`-0.04em` display,
  `-0.035em` section, `-0.02em` card), `font-normal`, `text-balance`.
- `strong` → `text-ink font-semibold`; `a` inherits color; `::selection` → primary.
- Named text roles as `@utility` (Tailwind v4) so they compose with utilities:
  `text-display` (h1 clamp 42–84px), `text-title` (30–48px), `kicker` (mono 15px,
  `-0.04em`, muted, hairline underline), `label-caps` (the 11.5px uppercase label that
  is currently an inline style on four pages), `prose-site` (paragraph rhythm + link
  styling for essay/prose/level-article, which are three copies of the same thing today).
- `@media (prefers-reduced-motion)` handling for smooth scroll and reveal stays here.
- **Verify:** screenshot compare of the `/approach/` essay against reference at both widths.

### 4. Components
All in `components/`. Server components unless marked client.

| component | replaces | notes |
|---|---|---|
| `layout/top-bar` | `.topbar` | dotted espresso band |
| `layout/site-header` (client) | `.site-header`, `.wordmark`, `.site-nav` | `usePathname` for `aria-current`; scroll listener toggles border |
| `layout/site-footer` | `.site-footer` | year from `new Date()` at render |
| `layout/shell` | `.shell` | `max-w-shell mx-auto px-gutter`; prop for `rail` width |
| `brand/star-mark` | inline star SVG ×12 | header + footer |
| `brand/seal` | seal SVG ×5 | uses `font-seal` |
| `sections/page-head` | `.page-head` (5 pages) | `title`, `lede` props |
| `sections/section` + `section-head` | `.section`, `.sec-head`, `.sec-title` | number, heading, optional link |
| `sections/band` | `.band` (5 pages) | CTA band, takes kicker/heading/body/button |
| `sections/kicker` | `.kicker` | `em` accent handled via children |
| `figures/figure-card` | `.figure-card` (3 pages) | title, tag, note slots |
| `figures/heatmap` | `.heatmap` (2 pages) | data-driven rows |
| `figures/mini-fig` | `.mini-fig` (4 pages) | wrapper + the `ln/lnk/dash/acc/dot` stroke classes as one small `@layer components` block, since they style SVG children |
| `ui/button` (shadcn) | `.btn-dark`, `.nav-contact`, `.band a.mail` | see below |
| `reveal` (client) | `.reveal` + IO | wraps children |
| `ladder-rail` (client) | `.ladder-rail` scrollspy | `/ladder/` only |

Single-page structures (`catalog`, `level-row`, `principles`, `ladder-layout`, `contact-cols`,
`firm-grid`, `split`, `ruled-list`, hero panel) are written inline with Tailwind on their page.
If one is later reused, extract then.

**Button variants** (numbers confirmed against step 0 computed styles):
- `variant="dark"`: `bg-secondary text-secondary-foreground hover:bg-[#43281A]`
- `variant="rust"`: `bg-primary text-primary-foreground hover:bg-rust-deep`
- `variant="light"`: `bg-secondary-foreground text-secondary hover:bg-primary hover:text-white` (band CTA)
- `size="default"`: `rounded-full px-8 py-3.5 text-[17px] font-medium leading-none`
- `size="sm"`: `rounded-full px-6 py-2.5 text-[14.5px]` (nav contact pill)
- `asChild` with `next/link` everywhere it is a link.
- **Verify:** each button overlaid on its reference screenshot at 1440px, no visible drift.

### 5. Pages and metadata
- `app/layout.tsx`: fonts, `<TopBar/>`, `<SiteHeader/>`, `<main className="flex-1">`,
  `<SiteFooter/>`. Body keeps the fixed vertical rails via a small `@layer base` rule.
- Root `metadata`: `metadataBase` (`https://aicotx.com`), `title: { default, template: "%s · The AI Company of Texas" }`,
  `description`, `openGraph` (`type: website`, `siteName`, `locale`), `twitter: { card: "summary_large_image" }`,
  `robots: { index: true, follow: true }`, `alternates.canonical`. `icon.svg` and
  `opengraph-image.png` are picked up by file convention.
- Each `page.tsx` exports `metadata` with its own `title`, `description`, `openGraph.url`,
  and `alternates.canonical` (copy from the existing `<head>` of that page).
- `app/sitemap.ts` and `app/robots.ts` (static, six URLs).
- JSON-LD `Organization` on the home page: legal name AICOTX LLC, alternate name
  "The AI Company of Texas", `email: hello@aicotx.com`, `areaServed: Texas`, logo = seal.
- Pages: `app/page.tsx`, `app/approach/page.tsx`, `app/services/page.tsx`,
  `app/products/page.tsx`, `app/ladder/page.tsx`, `app/contact/page.tsx`. Markup is
  rebuilt from components + Tailwind, copy is pasted verbatim.
- **Verify:** `next build` clean, no hydration warnings; every route's rendered `<head>`
  diffed against the old file's `<head>`; `/sitemap.xml`, `/robots.txt` resolve; OG
  preview via a debugger shows the seal.

### 6. Behaviors
- Header scroll class (in `site-header`), `Reveal` (IntersectionObserver, adds `in`,
  unobserves), `LadderRail` scrollspy (`rootMargin: -20% 0px -65% 0px`).
- **Verify:** all three work; disabled correctly under `prefers-reduced-motion`.

### 7. Cleanup and deploy
- Delete `index.html`, `*/index.html`, `css/`, `js/`. (`img/` already moved to `public/img/`; keep it.)
- README: dev/build commands, remove `?v=N` cache-busting note, Vercel deploys from `main`.
- `.gitignore`: `node_modules`, `.next`, `.vercel`, `.env*`, `docs/reference/`.
- Vercel: import repo, framework auto-detected, add `aicotx.com`.
- **Final verify:** re-run the screenshot script against the Vercel preview URL and diff
  all 12 images against `docs/reference/`. Lighthouse at parity or better.

## Out of scope
- Any copy, layout, or visual change. The target is a pixel match.
- shadcn components beyond Button.
- Dark mode.
