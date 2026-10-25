# HEAD Educare — Full Website Redesign Plan

**Branch:** `redesign/solomon-style` (created from `main`; main branch untouched)
**Reference design:** https://www.solomonadmissions.com/
**Constraint:** Content, routes, SEO metadata, backend/API integrations, and the Admin panel (`/admin`) remain exactly as-is. Only the visual design of the public site changes.

---

## 1. Reference design system (extracted from solomonadmissions.com)

| Token | Value |
|---|---|
| Primary accent | `#204276` (navy) |
| Accent hover | `#000000` |
| Body background | `#f2f2f2` |
| Text | `#000000` headings, `#757575` muted |
| Link color | `#2b7bb9` |
| Dark sections | photo + dark navy overlay, white text |
| Fonts | Oswald (nav, uppercase labels), Roboto Slab (headings), IBM Plex Sans (body), Roboto 700 (buttons) |

**Signature patterns replicated:**
- Transparent header overlaying the hero, sticky + shrink on scroll; top row logo + phone CTA; Oswald uppercase nav with dropdowns
- Full-bleed photo hero with dark overlay, centered **dual-color H1**, subtext, arrow CTA buttons
- Big-number stat section ("6.3x" style: huge number + bold label + fine print)
- Section rhythm: centered H2 + thin separator line
- 3-column icon callout grid (icon above title) for services
- Photo gallery grids with hover-overlay captions
- Alternating image + text rows with separator + "Learn More" arrow buttons
- Dark reviews/testimonials strip
- "Why Choose" 3-column on background photo with arrow buttons
- Arrow-icon buttons (Roboto bold, navy fill → black hover)
- Footer: triangle shape divider, dark photo overlay "Schedule a Consultation" block with PHONE/EMAIL/HOURS uppercase labels + 2-column form, link columns (H4 + separator), social icons, copyright bar

## 2. Mapping HEAD Educare content onto the reference design

| HEAD Educare content | New Solomon-style section |
|---|---|
| Hero ("Higher Education / Abroad Destination" + copy + campus photos) | Full-bleed campus photo + navy overlay, dual-color H1, arrow CTAs |
| Stats banner (500+, 98%, 15K+, 12+) | Big-number verified-results stat section |
| Services (6, DB-backed) | 3×2 icon callout grid (icon above title) |
| Study Destinations (6 countries) | Photo gallery tiles with hover-overlay captions |
| Testimonials (DB-backed) | Carousel cards + dark strip accent |
| About content | Alternating image + text rows |
| CTA lead form (Home) | Moves into Solomon-style footer consultation block (form posts to same `submitLead` API) |
| Header nav (menuData.js unchanged) | Solomon header: top bar logo + phone, Oswald uppercase nav, dropdowns |
| Footer links | Solomon footer: consultation block + Quick Links / Countries / Legal columns + copyright bar |

## 3. Implementation steps

1. **Design tokens** — `index.html`: load Oswald, Roboto Slab, IBM Plex Sans, Roboto; `src/index.css`: repoint theme tokens (`--color-primary: #204276`, `#f2f2f2` bg, `#2b7bb9` links) + new Solomon utilities (`.sol-*`): arrow button, section heading + separator, overlay hero, callout cards, hover-overlay gallery, triangle divider, big-stat.
2. **Header.jsx** — Solomon header (keep menuData + dark-mode toggle + mobile drawer behaviour).
3. **Footer.jsx** — Solomon footer (keep all current links/socials; add consultation form → `api.submitLead`).
4. **Home.jsx** — rebuild sections per mapping above; keep API fetches, testimonial modal, lightbox.
5. **Other top pages** — About, Services, FreeConsultations, Courses, StudyMBBS(+Detail), allcountry, CountryDetails.
6. **Shared detail-page systems** — restyle `services/serviceComponents.jsx` (BASE_STYLES), `mentorshipComponents.jsx` (MENTOR_STYLES), `country/Countrydetailstyles.js`, legal `pp-*` styles → all 21 service pages, 10 mentorship pages, 15 country pages, 4 legal pages re-skin automatically.
7. **Verification** — `npm run lint`, `npm run build`, dev-server smoke test of every route; admin panel untouched (App.jsx `/admin` isolation preserved).

## 4. Things intentionally NOT changed

- `src/pages/Admin.jsx`, `public/api/*` backend, database, deploy scripts
- All content text, menu structure, routes (incl. `/freeconsulation` URL), SEO metadata (`seoMeta.js`, `seoUtils.js`, `Seo.jsx` logic)
- Dark-mode class mechanism (`.dark` contract preserved — Admin depends on global CSS)
- API contracts (`apiClient.js`, `countryData.js`)
