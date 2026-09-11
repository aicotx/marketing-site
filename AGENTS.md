# Agent notes

Marketing site for The AI Company of Texas (AICOTX LLC), being migrated from static
HTML to Next.js. The migration plan is `docs/plans/nextjs-migration.md`; follow it.

- Next.js docs matching the installed version are bundled at `node_modules/next/dist/docs/`.
  Prefer them over memory for App Router, Metadata, and `next/font` APIs.
- Design tokens, fonts, and typography live in `app/globals.css` (shadcn + Tailwind v4 layout).
- `scripts/reference-shots.mjs <baseUrl> <outDir>` captures full-page screenshots and button
  styles. `docs/reference/` holds the live-site baseline (gitignored); compare against it.
- Keep URLs trailing-slashed (`/ladder/`), per `next.config.ts`.
