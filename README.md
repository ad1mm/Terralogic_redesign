# TerraLogic Systems — Landing Page

A single-page marketing site for **TerraLogic Systems Ltd**, built with **Vite + React + Tailwind CSS**.
Brand palette, typography and section structure were derived from the company logo and memorandum of
association, with layout cues taken from the reference screenshots in `inspiration/`.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Design system

- **Colours** (from the logo): deep navy `#143350`, moss green `#4f8d3a`, ember orange `#df8326`,
  sky blue `#2f8ecb`, on a warm paper/cream base. Defined in `tailwind.config.js`.
- **Type**: `Space Grotesk` (display/headings) + `Hanken Grotesk` (body), loaded from Google Fonts.
- **Icons**: a custom inline-SVG set (`src/components/Icons.jsx`) — no emojis, no third-party icon fonts.
- **Hero & motifs**: the globe/orbit graphic is hand-built inline SVG (`HeroGraphic.jsx`, `BrandMark.jsx`),
  so it paints instantly with zero image weight.

## Structure

```
src/
  content.js              ← ALL copy, stats, case studies & image IDs live here (edit this first)
  App.jsx                 ← section order
  components/             ← Reveal, SmartImage, SectionHead, Icons, BrandMark, HeroGraphic, iconMap
  sections/               ← Nav, Hero, TrustBar, Capabilities, Solutions, Sectors, WhyUs,
                            Stats, Approach, Work, Partners, Testimonials, CTA, Contact, Footer
  hooks/useReveal.js      ← scroll-reveal (IntersectionObserver), honours reduced-motion
```

## Things to customise before launch

1. **Copy & figures** — everything in `src/content.js`. The stats, case studies and testimonials are
   realistic **placeholders**; replace with verified numbers, real project outcomes and attributed quotes.
2. **Contact details** — `company` object in `content.js` (email, phone, address, RC number).
3. **Contact form** — currently shows a success state on submit but has **no backend**. Wire `onSubmit`
   in `src/sections/Contact.jsx` to your email service / CRM / form endpoint.
4. **Images** — section photos are pulled from Unsplash by photo ID (`buildImg` in `content.js`).
   Swap the IDs for licensed or owned photography when available. The hero needs no photo.
5. **Domain/SEO** — update the canonical URL, Open Graph URLs and JSON-LD in `index.html`.

## Accessibility & performance notes

- Semantic landmarks (`header`/`main`/`section`/`footer`), a skip link, labelled form fields,
  visible focus rings, and `aria` labels on icon-only controls.
- All photos are lazy-loaded with responsive `srcset`/`sizes` and reserved aspect ratios (no layout shift).
- Animations use transform/opacity only and are fully disabled under `prefers-reduced-motion`.
- Responsive and verified at 390 / 768 / 1024 / 1440 px.
