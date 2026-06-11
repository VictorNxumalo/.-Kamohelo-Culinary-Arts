# Tech Stack Recommendation

**Project:** Kamohelo Culinary Group  
**Phase:** 0 — Foundation  
**Date:** 2026-06-11

---

## Executive Recommendation

**Primary stack:** Next.js 14+ (App Router) · TypeScript · Tailwind CSS · Vercel

This balances the prototype's existing Tailwind aesthetic with the scalability required for recipes, blog, forms, AI (Phase 7), and multi-page SEO — without over-building in Phase 0.

---

## Option Comparison

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Next.js + Tailwind** | App Router file-based routing matches 11-page sitemap; strong SEO (SSG/ISR); API routes for forms & AI; React component reuse from prototype patterns; Vercel deploy is frictionless; TypeScript for maintainability | More initial setup than static HTML; learning curve if team is HTML-only | **Recommended** |
| **Astro + Tailwind** | Excellent static/content performance; great for recipes/blog MDX; low JS by default | AI chat, dynamic forms, and auth need separate services; less unified full-stack story | Strong **fallback** if site stays mostly static long-term |
| **Multi-page static HTML** | Matches current repo; zero build step; fastest Phase 1 if decisions delayed | Duplicated nav/footer across 11+ pages; no component reuse; painful recipe/blog/AI scaling; manual SEO | **Fallback only** for minimal-change path |

---

## Recommended Stack (Detail)

### Core

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14+ App Router | Sitemap maps cleanly to `app/` routes; layouts for shared nav/footer |
| Language | TypeScript | Safer refactors as content types grow (recipes, ventures, blog) |
| Styling | Tailwind CSS | Already used via CDN in prototype; tokens documented in `DESIGN_TOKENS.md` |
| Fonts | `next/font` (Cormorant Garamond + Inter) | Performance vs Google CDN links |
| Icons | Font Awesome or Lucide | Prototype uses FA6; Lucide is lighter if bundle size matters |

### Hosting

| Choice | Rationale |
|--------|-----------|
| **Vercel** (recommended) | Native Next.js support, preview deployments per PR, edge functions for AI later, free tier sufficient for launch |

**Alternatives:** Netlify (comparable for static/SSR), Cloudflare Pages (if cost/edge priority)

### Forms & lead generation (Phase 3+)

| Option | Pros | Cons | When to use |
|--------|------|------|-------------|
| **Formspree** | Fastest setup; no backend code | Limited CRM integration; submission caps on free tier | MVP bookings before Supabase setup |
| **Supabase** | DB storage for inquiries; aligns with future recipe CMS & auth; RLS | Requires project setup & env vars | **Recommended** if client already uses or plans Supabase ecosystem |
| **Resend + API route** | Branded transactional email from `@domain` | Needs domain verification; stores submissions separately | Notification layer alongside Supabase/Formspree |

**Phase 1–2:** Static contact details + `mailto:` acceptable temporarily.  
**Phase 3:** Implement form API route + chosen backend.

### Content — recipes & blog (Phase 5–6)

| Phase | Approach |
|-------|----------|
| v1 (recommended) | **MDX or JSON/YAML in repo** under `content/recipes`, `content/blog` — version-controlled, no CMS cost |
| v2 | **Sanity** or **Supabase** as headless CMS when non-technical editing needed |
| Not recommended at start | WordPress — architectural mismatch with Next.js stack |

### Media

| Asset type | Approach |
|------------|----------|
| Images | `public/assets/` at launch; consider **Cloudinary** or **Vercel Blob** if gallery grows |
| Video | `public/assets/showcase/` or Vimeo/YouTube embed for bandwidth |

### Future AI — "Ask Chef Kamohelo" (Phase 7, high-level)

| Component | Approach |
|-----------|----------|
| Retrieval | **RAG** over recipe/technique/blog content embedded at build or index time |
| Vector store | Supabase `pgvector`, or Vercel AI + embedded JSON index for small corpus |
| LLM | OpenAI / Anthropic via API route; system prompt restricted to site content |
| Guardrails | No general cooking chatbot — only cite indexed Kamohelo content |

No AI infrastructure in Phase 0–1.

### Analytics & SEO (Phase 1+)

- **Metadata API** (`generateMetadata`) per route
- **sitemap.xml** + **robots.txt** via Next.js conventions
- **Google Analytics 4** or Plausible (privacy-friendly)
- **Structured data:** `Person`, `LocalBusiness`, `Recipe` (when recipes live)

---

## Fallback: Minimal Change Path

If client insists on staying close to current HTML:

1. Keep `index.html` / `showcase.html` as reference
2. Add shared `partials/nav.html` via simple build (Eleventy/11ty) **or** duplicate with discipline
3. Defer AI, recipes, and forms to third-party embeds

**Risk:** Technical debt accumulates by Phase 4. Only choose this if timeline/budget blocks Next.js init.

---

## Proposed Project Structure (Next.js)

Do **not** scaffold full app in Phase 0. This is the Phase 1 target:

```
CulinaryWebsite/
├── app/
│   ├── layout.tsx              # Root layout, fonts, nav, footer
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/                 # Nav, Footer, MobileMenu
│   ├── ui/                     # Button, Card, SectionHeading
│   ├── gallery/                # GalleryGrid, Lightbox (from prototype)
│   └── forms/                  # Phase 3+
├── content/                    # Phase 5–6
│   ├── recipes/
│   └── blog/
├── lib/
│   └── utils.ts
├── public/
│   └── assets/                 # Migrate from /Assets
│       ├── profile/
│       ├── dishes/
│       ├── education/
│       └── showcase/
├── docs/                       # Phase documentation (this folder)
├── Resources/                  # Client requirement PDFs
├── index.html                  # Legacy prototype (archive after Phase 1)
├── showcase.html               # Legacy prototype (archive after Phase 2)
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

### Conventions

| Topic | Convention |
|-------|------------|
| Routes | kebab-case folders matching URL slugs (`/private-chef`) |
| Components | PascalCase files; co-locate styles with Tailwind |
| Assets | lowercase-kebab filenames; fix `Quisines` → `dishes` on migrate |
| Content | one MDX file per recipe/post with frontmatter |
| Env vars | `.env.local` for API keys; never commit |

---

## Phase 0 Minimal Init (Optional)

Acceptable if stack confirmed before Phase 1:

- `package.json` with Next.js + Tailwind dependencies
- `README.md` with setup commands
- Empty `app/` shell

**Not done in Phase 0** unless user requests — planning docs are the deliverable.

---

## Decision

| Item | Choice |
|------|--------|
| **Primary stack** | Next.js 14+ App Router + TypeScript + Tailwind CSS |
| **Hosting** | Vercel |
| **Forms (Phase 3)** | Supabase preferred; Formspree acceptable for MVP |
| **Content (Phase 5–6)** | MDX in repo v1; CMS later |
| **AI (Phase 7)** | RAG + vector store over owned content |
| **Fallback** | Astro + Tailwind, or 11ty static multi-page |
