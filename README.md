# aicotx.com

Source of the AICOTX marketing site — Next.js (App Router), Tailwind CSS v4, shadcn/ui.

| Page | Route |
|------|-------|
| Home | `app/page.tsx` |
| Approach | `app/approach/page.tsx` |
| Services | `app/services/page.tsx` |
| Products | `app/products/page.tsx` |
| The AI maturity ladder | `app/ladder/page.tsx` |
| Contact | `app/contact/page.tsx` |

- **Design tokens, fonts and typography** live in `app/globals.css` (shadcn token names, brand
  extras, the type scale as `--text-*` tokens). Fonts load through `next/font` in `app/layout.tsx`.
- **Shared components** are in `components/`: layout chrome (`layout/`), brand marks (`brand/`),
  page and section pieces (`sections/`), figures and inline diagrams (`figures/`), and the shadcn
  `Button` with the site's pill variants (`ui/`).
- **Metadata** is per page via `pageMetadata()` in `lib/site.ts`; `app/sitemap.ts` and
  `app/robots.ts` are generated. The favicon and OG image are `app/icon.svg` and
  `app/opengraph-image.png`.
- Brand masters live in `aicotx/digital-assets`; unreferenced imagery sits in `public/img/`.

## Editing

```sh
npm install
npm run dev      # http://localhost:3000
npm run build && npm run lint
```

- URLs keep their trailing slash (`/ladder/`), set in `next.config.ts`.
- The footer colophon stays plain ("Texas, USA") — no font credits.
- Positioning copy follows the knowledge base (`aicotx/knowledge-base`, `offer-and-pricing.md`
  and `ai-maturity-model.md`). Legal name on anything contractual is **AICOTX LLC**; "The AI
  Company of Texas" is the marketing name.

## Visual regression

`scripts/reference-shots.mjs <baseUrl> <outDir>` captures full-page screenshots of every route
at 1440px and 390px plus computed styles for the pill buttons. `docs/reference/` holds the
baseline captured from the previous static site (gitignored). Run it against a preview URL and
compare.

## Deploying

Vercel builds from `main`; no config beyond the framework defaults is needed.
