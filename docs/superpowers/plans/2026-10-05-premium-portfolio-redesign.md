# Premium Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved bilingual premium burgundy portfolio and publish it through the existing GitHub/Vercel flow.

**Architecture:** Keep the Next.js App Router structure and central project data modules. Add reusable site chrome and testimonial/project presentation components, then update each route to consume those shared interfaces. Copy only approved real assets into `public` and keep route URLs stable.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, Node.js test scripts.

**Spec:** `docs/superpowers/specs/2026-10-05-premium-portfolio-redesign-design.md`

## Global Constraints

- Preserve Portuguese and English route parity.
- Do not alter the supplied portrait with AI.
- Use only real project images and confirmed testimonials.
- Do not display project dates in gallery cards.
- All burgundy buttons use white text; pale-blush testimonial action uses burgundy text.
- Support 320px mobile width without horizontal overflow.

## Review Focus

- Missing project media must not render broken images.
- Long Portuguese testimonial text must wrap without horizontal overflow.
- English navigation must stay within the mobile menu.
- External credential/contact links must retain safe target behavior.
- Existing public slugs must continue resolving after project-data changes.

---

### Task 1: Shared visual system and assets

**Files:**
- Create: `app/components/SiteHeader.tsx`
- Create: `app/components/SiteFooter.tsx`
- Create: `app/components/icons.tsx`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Add: `public/brand/*`, `public/textures/*`, missing `public/cases/*`
- Test: `tests/site-structure.test.mjs`

**Interfaces:**
- Produces: `SiteHeader({ locale })`, `SiteFooter({ locale })`, shared icon components, global CSS classes.

- [ ] Add a failing structure test for header labels, RA favicon metadata, texture assets, and responsive navigation hooks.
- [ ] Run `node --test tests/site-structure.test.mjs` and confirm failure.
- [ ] Implement shared chrome, assets, metadata, and visual tokens.
- [ ] Run the structure test and confirm it passes.

### Task 2: Project data, galleries, and cases

**Files:**
- Modify: `app/projects.ts`
- Modify: `app/projects-en.ts`
- Modify: `app/projetos/page.tsx`
- Modify: `app/en/projects/page.tsx`
- Modify: `app/projetos/[slug]/page.tsx`
- Modify: `app/en/projects/[slug]/page.tsx`
- Test: `tests/projects.test.mjs`

**Interfaces:**
- Consumes: shared header/footer and icons from Task 1.
- Produces: project records with `slug`, `cover`, `images`, localized copy, and optional confirmed testimonial.

- [ ] Add failing tests for no dates, Pendulum split, required Aiuruotrek/Pendulum media, and testimonial associations.
- [ ] Run `node --test tests/projects.test.mjs` and confirm failure.
- [ ] Implement data and responsive masonry/case galleries.
- [ ] Run project tests and confirm they pass.

### Task 3: Home, About, and testimonials

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/en/page.tsx`
- Modify: `app/depoimentos/page.tsx`
- Modify: `app/en/testimonials/page.tsx`
- Test: `tests/content.test.mjs`

**Interfaces:**
- Consumes: project records and shared chrome.
- Produces: bilingual home sections and complete testimonial pages.

- [ ] Add failing tests for hero copy, portrait, masonry cards, 14 testimonials, and smooth home testimonial background.
- [ ] Run `node --test tests/content.test.mjs` and confirm failure.
- [ ] Implement the approved home and testimonial layouts.
- [ ] Run content tests and confirm they pass.

### Task 4: Education and contact

**Files:**
- Modify: `app/formacao/page.tsx`
- Modify: `app/en/education/page.tsx`
- Modify: `app/contato/page.tsx`
- Modify: `app/en/contact/page.tsx`
- Test: `tests/supporting-pages.test.mjs`

**Interfaces:**
- Consumes: shared chrome, icons, and textured hero classes.
- Produces: bilingual credential lists and clickable email/WhatsApp/LinkedIn actions.

- [ ] Add failing tests for issuer logos, credential links, contact URLs, and translations.
- [ ] Run `node --test tests/supporting-pages.test.mjs` and confirm failure.
- [ ] Implement education and contact pages.
- [ ] Run supporting-page tests and confirm they pass.

### Task 5: Full verification and publishing

**Files:**
- Modify as required by verification findings.

**Interfaces:**
- Consumes: complete site from Tasks 1–4.
- Produces: production-ready Git commit on `main`.

- [ ] Run all Node tests and fix failures.
- [ ] Run `npm run lint` and fix errors.
- [ ] Run `npm run build` and confirm every route builds.
- [ ] Verify desktop and 390px mobile layouts for home, projects, a case, education, testimonials, and contact.
- [ ] Commit the complete implementation with a descriptive message.
- [ ] Push `main` to `origin` and verify the remote commit.
- [ ] Confirm the Vercel public URL serves the new deployment.
