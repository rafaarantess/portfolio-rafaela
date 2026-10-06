# Premium Portfolio Redesign — Design Specification

## Objective

Replace the current public portfolio presentation with the approved premium burgundy direction while preserving all real content, bilingual routes, public URLs, credentials, testimonials, contact details, and project assets.

## Visual system

- Primary palette: dark burgundy, warm ivory, pale blush, charcoal text.
- Typography: editorial serif for display headings and a clean sans-serif for navigation and body copy.
- Header: intertwined RA monogram plus “Rafaela Arantes”; translucent pill navigation; burgundy text and matching icons; compact mobile menu.
- Buttons: burgundy fill with white text; pale-blush secondary testimonial action with burgundy text.
- Textures: user-supplied satin texture on institutional page heroes and selected case headers; user-supplied fur texture on About and the main Testimonials page. The home testimonial panel keeps its original smooth burgundy gradient.
- Favicon: burgundy RA monogram.

## Home

- Hero copy: “Sou Rafaela Arantes.” and positioning around strategy, identity and content.
- Show the real portrait without AI alteration.
- Present selected projects as a dense, image-led masonry gallery without dates.
- Preserve About and Testimonials on the home page.
- Home testimonials use the smooth burgundy panel, list four names, show one quote at a time, and link to all testimonials.
- Contact ending shows email only as the primary action; contact page carries email and WhatsApp.

## Projects

- Project index uses a responsive masonry gallery with natural image proportions, no dates, and accessible project name/category labels.
- Split Pendulum into two projects: website banners and Instagram/social media.
- Each case page includes all available real project assets rather than only a cover.
- Aiuruotrek includes cover, open brochure, and promotional folder.
- Pendulum website includes desktop and mobile banner treatments; Pendulum Instagram includes social content.
- Confirmed project testimonials appear inside Canacaju, Aiuruotrek, and Narayane cases only.
- Cases without a confirmed testimonial do not invent one.

## Supporting pages

- Education preserves all degrees, issuer logos, certificate details, and clickable credential links.
- Testimonials preserves all 14 real testimonials and original-review links where available.
- Contact presents clickable email, WhatsApp, and LinkedIn actions with matching icons.
- About preserves the supplied portrait and current professional biography.

## Internationalization and accessibility

- Portuguese and English routes remain available and mutually linked.
- Navigation, buttons, headings, categories, and case copy are translated.
- Keyboard-accessible links and controls, meaningful alt text, visible focus states, and WCAG-readable contrast are required.
- No horizontal overflow at 320px; galleries and testimonial layouts stack on mobile.

## Publishing

- Preserve existing route structure and metadata base for `portfolio-rafaela-xi.vercel.app`.
- Validate lint, production build, route rendering, images, and responsive layouts before pushing to `main` on `https://github.com/rafaarantess/portfolio-rafaela.git`.
- Vercel deployment should remain connected to the GitHub repository and publish after the push.
