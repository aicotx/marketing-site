# aicotx.com

Source of the AICOTX marketing site — plain static HTML/CSS/JS, no build step.

| Page | Path |
|------|------|
| Home | `index.html` |
| Approach | `approach/` |
| Services | `services/` |
| Products | `products/` |
| The AI maturity ladder | `ladder/` |
| Contact | `contact/` |

Shared styling is `css/site.css`, behavior is `js/site.js`, imagery is in `img/`. Brand
masters live in `aicotx/digital-assets`; copy a rendered file into `img/` when a page needs it.

## Editing

- Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000.
- **Bump the `?v=N` query string** on every css/js link you change. There is no cache purge
  for this zone, so the query string is the only cache-buster.
- The footer colophon stays plain ("Texas, USA") — no font credits.
- Positioning copy follows the knowledge base (`aicotx/knowledge-base`, `offer-and-pricing.md`
  and `ai-maturity-model.md`). Legal name on anything contractual is **AICOTX LLC**; "The AI
  Company of Texas" is the marketing name.

Publishing is done on the hosting machine by copying these files to the web root; hosting
config is not kept in this repo.
