# Phase 0 Completion — Kamohelo Culinary Group

**Status:** Complete  
**Date:** 2026-06-11  
**Project path:** `c:\Users\MNxumalo1\OneDrive - Sun International\Documents\Projects\CulinaryWebsite`

---

## Executive Summary

Phase 0 audited the existing two-page HTML prototype against three client requirement PDFs and produced foundation documentation for a full culinary business platform under **Chef Kamohelo Mthombeni** and the umbrella brand **Kamohelo Culinary Group**. The prototype provides a strong visual direction (cream/charcoal/gold, Cormorant + Inter, gallery/lightbox, cinematic video) but contains **fictional biography content** and a **surname mismatch** (Motaung vs Mthombeni) that must be resolved before public launch. Recommended stack is **Next.js 14+ App Router with Tailwind CSS on Vercel**, migrating reusable UI patterns while replacing all placeholder identity and credential content. Phase 1 should deliver the brand shell and three core pages (Home, About, Contact) once client decisions on name, bio, email, and contact details are locked or explicitly assumed.

---

## Requirements Synthesis

### Sources reviewed

| Document | Path | Key contribution |
|----------|------|------------------|
| Website Concept | `Resources/WEBSITE CONCEPT.pdf` | 10-page vision, ghost kitchen examples, AI/recipe features, placeholder "Motaung Culinary Group" |
| Development Proposal | `Resources/WEBSITE DEVELOPMENT PROPOSAL.pdf` | **Authoritative** brand positioning, 11-page sitemap, design direction, future roadmap |
| Addition to Home Page | `Resources/ADDITION TO HOME PAGE.pdf` | Businesses & Ventures home preview + hub page structure |

### Brand positioning

| Layer | Value |
|-------|-------|
| **Primary identity** | Chef Kamohelo Mthombeni |
| **Umbrella brand** | Kamohelo Culinary Group |
| **Positioning** | Professional chef · culinary entrepreneur · recipe developer · consultant · future restaurant & ghost kitchen owner |
| **Brand statement** | Creating exceptional dining experiences, developing innovative culinary concepts, and building a portfolio of hospitality businesses that combine creativity, craftsmanship, and entrepreneurship. |

### Design direction

- Modern luxury hospitality: clean, elegant, premium, minimalist
- High-quality food photography, smooth animations, mobile-first
- Fast loading, SEO optimised
- Dark/light mode (required in spec — **not in prototype**)
- AI integration as future centerpiece ("Ask Chef Kamohelo")

### Functional requirements (by area)

| Area | Requirements |
|------|--------------|
| **Home** | Hero, about preview, services overview, **businesses & ventures preview**, signature dishes preview, AI recipe search preview |
| **Private chef** | Service list, 4-step booking process, sample menus, inquiry form |
| **Catering** | Event types, menu formats, event gallery, quote form |
| **Businesses & ventures** | Hub with restaurants, ghost kitchens, private chef, catering, consulting, future ventures divisions |
| **Ghost kitchen concepts** | Per-concept: name, cuisine, story, target market, signature dishes, development plans |
| **Recipe lab** | Categorised library, signature recipes (story, ingredients, method, photos/video), technique library |
| **AI assistant** | RAG over owned content only; search recipes, ingredients, techniques, menus |
| **Portfolio** | Categorised gallery, dish evolution, featured creations |
| **Blog** | SEO/credibility: kitchen life, techniques, menu dev, entrepreneurship |
| **Contact** | Separate paths: private chef, catering, consulting, partnerships, general |

### Future roadmap constraints (scalability)

Requirement docs specify post-launch expansion without rebuild:

- Online culinary academy, courses, certifications, video tutorials
- Recipe subscription / membership
- E-commerce (sauces, spice blends, merchandise, cookbooks)
- Restaurant franchise / investor relations
- Mobile app

**Implication:** Use component-based framework with content layer abstraction (MDX → CMS), not hard-coded HTML per page.

---

## Current State Audit

### Files in repository

| File / folder | Role |
|---------------|------|
| `index.html` | Single-page portfolio (999 lines) — gallery, about, experience, skills, contact |
| `showcase.html` | Cinematic craft/video page (793 lines) — Plyr video, training section |
| `Assets/` | Profile, 9 dishes, education logo, showcase video + poster |
| `Resources/` | 3 requirement PDFs |

### Reusable from prototype

| Pattern | Source | Phase |
|---------|--------|-------|
| Color palette & typography | Both | Phase 1 |
| Fixed nav + mobile menu | Both | Phase 1 |
| Footer layout | Both | Phase 1 |
| Primary/secondary CTA styling | Both | Phase 1 |
| Fade-in scroll animations | Both | Phase 1 |
| Page loader | Both | Phase 1 |
| Gallery grid + filter + lightbox | `index.html` | Phase 2 |
| Timeline card layout | `index.html` | Phase 1 (About) — **with real content** |
| Skill bars | `index.html` | Defer or replace with services |
| Video showcase + cinematic border | `showcase.html` | Phase 2 |
| Scroll progress bar | `showcase.html` | Optional Phase 8 |
| IHS education section layout | `showcase.html` | Phase 1 (About) |

### Must remove or replace

| Item | Location |
|------|----------|
| Surname "Motaung" (if Mthombeni confirmed) | Both HTML files |
| Fictional French/Michelin biography | `index.html` |
| Placeholder email `kamoheloMotaung@chefalexandre.com` | `index.html` |
| Le Cordon Bleu / Michelin / WACS credentials | `index.html` |
| Paris/London/Lyon employers | `index.html` |
| "15+ years" conflicting with "3+" badge | `index.html`, `showcase.html` |
| Unsplash stock image | `showcase.html` |
| Incorrect alt text / "#1 Culinary School" badge | `showcase.html` |
| `modern-french` filter tags on non-French dishes | `index.html` JS |

### Cross-file inconsistencies

| Topic | `index.html` | `showcase.html` |
|-------|--------------|-----------------|
| Chef name | Kamohelo Motaung | Kamohelo Motaung |
| Education | Le Cordon Bleu (fictional) | International Hotel School |
| Experience claim | 15+ years (hero) / 3+ (badge) | 15+ years (skill card) |
| Footer tagline year | "since 2022" | "since 2022" |
| Copyright | 2023 | 2025 |
| Instagram | `#` placeholder | Real URL |
| Social (other) | LinkedIn, Twitter `#` | LinkedIn, Vimeo `#` |
| Phone | +27 083 972 5798 | Not shown |
| Email | Placeholder | Not shown |

---

## Locked Decisions vs Open Questions

### Locked (from requirement docs)

- Primary identity: Chef Kamohelo Mthombeni
- Umbrella brand: Kamohelo Culinary Group
- Full 11+ page sitemap including Businesses & Ventures hub
- Design direction: modern luxury hospitality
- AI feature name concept: "Ask Chef Kamohelo"
- Ghost kitchen example names: Fire & Ash, The Bento Lab, Midnight Kitchen

### Open (see `DECISIONS.md`)

1. Mthombeni vs Motaung (legal name)
2. Business email and domain
3. Phone number confirmation
4. Social URLs (except partial Instagram)
5. Education dates and exact diploma title
6. Real career timeline content
7. Experience years framing
8. Ghost kitchen operational status
9. Service geography
10. Portfolio category taxonomy

---

## Recommended Tech Stack

**Primary:** Next.js 14+ App Router · TypeScript · Tailwind CSS · Vercel  
**Forms (Phase 3):** Supabase (preferred) or Formspree (MVP)  
**Content (Phase 5–6):** MDX in repo → CMS later  
**AI (Phase 7):** RAG + vector store over site content  

**Fallback:** Astro + Tailwind, or disciplined static multi-page HTML.

Full rationale: [`TECH_STACK.md`](./TECH_STACK.md)

---

## Design Tokens

Extracted palette, typography, spacing, components, and animations from prototype.

Full reference: [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md)

**Summary:** Cream `#F8F5F0` · Charcoal `#2C1810` · Gold `#B89F6B` · Cormorant Garamond + Inter

---

## Full Sitemap with Phase Assignments

| URL slug | Page title | Phase | Nav (primary) | Notes |
|----------|------------|-------|---------------|-------|
| `/` | Home | **1** | Home | Hero, about preview, services, ventures preview, dishes preview, AI preview |
| `/about` | About Chef Kamohelo | **1** | About | Story, education, timeline, philosophy, vision |
| `/contact` | Contact & Bookings | **1** | Contact | Multi-path inquiry (forms in Phase 3) |
| `/portfolio` | Culinary Portfolio | **2** | Portfolio | Gallery from prototype; categories retagged |
| `/craft` or `/showcase` | Craft in Motion | **2** | — or footer | Video showcase page from `showcase.html` |
| `/private-chef` | Private Chef Services | **3** | Services ▾ | Booking form |
| `/catering` | Catering Services | **3** | Services ▾ | Quote form, event gallery |
| `/consulting` | Restaurant Consulting | **3** | Services ▾ | May merge with services hub initially |
| `/businesses` | Businesses & Ventures | **4** | Ventures | Central hub per addition doc |
| `/concepts` | Ghost Kitchen & Restaurant Concepts | **4** | Ventures ▾ | Fire & Ash, Bento Lab, Midnight Kitchen |
| `/recipes` | Recipe Development Lab | **5** | Recipes | Library + techniques |
| `/recipes/[slug]` | Individual recipe | **5** | — | Dynamic route |
| `/ai` | Ask Chef Kamohelo | **7** | AI | Culinary assistant |
| `/blog` | Blog & Insights | **6** | Journal | Listing |
| `/blog/[slug]` | Blog post | **6** | — | Dynamic route |

### Proposed primary navigation (Phase 1 launch)

```
Home | About | Services (disabled/placeholder until Phase 3) | Portfolio (link or "Coming soon") | Contact
```

### Proposed footer navigation (full vision)

```
About · Private Chef · Catering · Businesses · Portfolio · Recipes · Blog · Contact · AI Assistant
```

### Phase mapping (aligned to project plan)

| Project phase | Deliverable pages |
|---------------|-------------------|
| Phase 1 | Home, About, Contact |
| Phase 2 | Portfolio, Craft/Showcase |
| Phase 3 | Private Chef, Catering, Consulting |
| Phase 4 | Businesses & Ventures, Concepts |
| Phase 5 | Recipe Lab |
| Phase 6 | Blog |
| Phase 7 | AI Assistant |
| Phase 8 | Dark mode, performance, SEO polish, launch |
| Phase 9 | Academy, e-commerce, franchise (post-launch) |

---

## Asset Inventory Summary

- **14 media files** in `Assets/` (1 profile, 9 dishes, 1 logo, 1 video, 1 poster, 1 education logo)
- **9 gallery items** defined in `index.html` JavaScript
- **1 external stock image** to remove (`showcase.html`)
- **3 requirement PDFs** in `Resources/`

Full inventory: [`ASSETS_INVENTORY.md`](./ASSETS_INVENTORY.md)

---

## Phase 1 Handoff

### Scope (exact)

1. Initialise Next.js 14+ App Router project with TypeScript and Tailwind
2. Implement root layout: nav, footer, fonts, design tokens
3. Build **Home** page with requirement-aligned sections (placeholder copy where client content pending)
4. Build **About** page with IHS education (no fictional credentials)
5. Build **Contact** page with confirmed or placeholder contact channels
6. Migrate assets to `public/assets/`
7. Archive `index.html` / `showcase.html` as reference (do not delete until parity reached)

### Prerequisites

- [ ] Client confirms surname (Mthombeni recommended) — or explicit ASSUMED approval
- [ ] Client provides bio bullet points or approves draft structure with TBD markers
- [ ] Contact email/phone decision (or form-only MVP)
- [ ] Instagram URL confirmed
- [ ] Stack approval (Next.js + Vercel)

### First 5 implementation tasks

1. **Run `create-next-app`** with App Router, TypeScript, Tailwind, ESLint; configure `tailwind.config` with cream/charcoal/gold tokens from `DESIGN_TOKENS.md`
2. **Create `app/layout.tsx`** — port nav/footer component structure; use `next/font` for Cormorant Garamond + Inter; fix brand name to Kamohelo Culinary Group / Chef Kamohelo Mthombeni per decisions
3. **Migrate assets** — copy `Assets/` → `public/assets/` with normalized paths; update image references
4. **Build Home (`app/page.tsx`)** — hero with profile photo, proposal subheadline, CTA buttons (anchor to contact), about preview, static services cards, ventures preview stub, signature dishes strip (subset of 9 images), AI preview stub
5. **Build About + Contact** — About uses IHS education block from `showcase.html` pattern + empty timeline slots for client content; Contact shows phone/email per decisions or generic inquiry messaging

### Out of scope for Phase 1

- Gallery lightbox page (Phase 2)
- Video showcase (Phase 2)
- Service detail pages and forms (Phase 3)
- CMS, AI, recipes, blog

---

## Exit Criteria Checklist

| Criterion | Status |
|-----------|--------|
| All three Resource PDFs reviewed and synthesized | ✅ |
| Current codebase audited (reuse vs replace) | ✅ |
| Brand/content decisions documented | ✅ (`DECISIONS.md`) |
| Tech stack recommended with rationale | ✅ (`TECH_STACK.md`) |
| Design tokens documented | ✅ (`DESIGN_TOKENS.md`) |
| Full sitemap mapped to phases | ✅ (above) |
| Asset inventory complete | ✅ (`ASSETS_INVENTORY.md`) |
| PHASE_0_COMPLETION.md written with Phase 1 handoff | ✅ |
| No unresolved blockers — or blockers listed with owner and default | ✅ (8 blockers in `DECISIONS.md`) |

---

## Deliverables Index

| File | Purpose |
|------|---------|
| [`PHASE_0_COMPLETION.md`](./PHASE_0_COMPLETION.md) | This document — master output + Phase 1 handoff |
| [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md) | Extracted design system |
| [`ASSETS_INVENTORY.md`](./ASSETS_INVENTORY.md) | All assets + gaps |
| [`DECISIONS.md`](./DECISIONS.md) | Brand/content decisions and open questions |
| [`TECH_STACK.md`](./TECH_STACK.md) | Stack recommendation with rationale |

---

## Related Documents

- Prototype: `index.html`, `showcase.html`
- Requirements: `Resources/*.pdf`
