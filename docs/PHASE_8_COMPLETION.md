# Phase 8 Completion — Launch Polish & Production Readiness

**Status:** Complete  
**Date:** 2026-06-11

---

## Summary

Production-readiness pass: SEO (sitemap, robots, metadata), draft content hygiene, env documentation, optional analytics, deploy guide. No new major features.

---

## 1. Sitemap & Robots

| File | URL |
|------|-----|
| `app/sitemap.ts` | `/sitemap.xml` |
| `app/robots.ts` | `/robots.txt` |

### Included routes

**Static:** `/`, `/about`, `/portfolio`, `/craft`, `/recipes`, `/techniques`, `/blog`, `/ai`, `/businesses`, `/concepts`, `/private-chef`, `/catering`, `/consulting`, `/contact`

**Dynamic (published only):** `/recipes/[slug]`, `/techniques/[slug]`, `/blog/[slug]`

Draft content is **excluded** from sitemap in production builds.

`robots.txt` disallows `/api/` and points to sitemap. Canonical base URL from `NEXT_PUBLIC_SITE_URL` or `https://kamoheloculinary.co.za`.

---

## 2. Metadata Audit

| Route | Title + description |
|-------|---------------------|
| `/` | Explicit `metadata` on `app/page.tsx` |
| All other pages | `export const metadata` or `generateMetadata` per route |
| Root layout | Default title template, OG image (logo), `metadataBase`, `theme-color: #121212` |
| Favicon | `app/icon.png` (Next.js file convention) |

**OG default:** `/assets/logo/kamohelo-culinary-arts.png` via `lib/site.ts` → `DEFAULT_OG_IMAGE`

---

## 3. Content Hygiene

**File:** `lib/content-visibility.ts`

| Environment | Draft content (`draft: true`) |
|-------------|-------------------------------|
| **Production** | Hidden from indexes, sitemap, AI index; direct URLs → 404; no Draft badge |
| **Development** | Visible everywhere with "Draft" badge |

### Empty states (production, all drafts)

- `/recipes`, `/techniques`, `/blog` show friendly "Coming Soon" message
- Home signature dishes link to `/portfolio` when recipe slug is unpublished
- Home journal section empty when no published posts

### ASSUMED content inventory

All items below use `draft: true` and/or **ASSUMED** copy pending chef sign-off. Remove `draft: true` and replace text before public launch.

#### Recipes (`content/recipes/`)

| Slug | Title |
|------|-------|
| `frenched-rack-of-lamb` | Frenched Rack of Lamb |
| `chocolate-lava-cake` | Chocolate Lava Cake |
| `pan-seared-white-fish` | Pan-Seared White Fish |
| `chicken-roulade` | Chicken Roulade |
| `green-pesto-pasta` | Green Pesto Pasta |

#### Techniques (`content/techniques/`)

| Slug | Title |
|------|-------|
| `frenching-a-rack-of-lamb` | Frenching a Rack of Lamb |
| `pan-searing-white-fish` | Pan-Searing White Fish |
| `chocolate-fondant-basics` | Chocolate Fondant Basics |

#### Blog (`content/blog/`)

| Slug | Title |
|------|-------|
| `life-on-the-line` | Life on the Line |
| `why-pan-searing-changes-everything` | Why Pan-Searing Changes Everything |
| `building-kamohelo-culinary-group` | Building Kamohelo Culinary Group |
| `menu-development-from-concept-to-plate` | Menu Development — From Concept to Plate |

#### Ventures (`lib/ventures.ts`)

| Item | Status |
|------|--------|
| Fire & Ash | Concept — ASSUMED |
| The Bento Lab | Concept — ASSUMED |
| Midnight Kitchen | Concept — ASSUMED |
| Future ventures (academy, cookbooks, products) | In Development |

#### Site-wide ASSUMED defaults (`docs/DECISIONS.md`)

- Chef surname: **Mthombeni** (vs Motaung — OPEN)
- Email: `hello@kamoheloculinary.co.za` (domain OPEN)
- Phone: `+27 083 972 5798` (OPEN)
- Instagram: showcase URL (OPEN)
- Education: IHS diploma 2022–2024 (OPEN)
- Career timeline: simplified placeholder narrative

**UI labels:** "Draft — ASSUMED" removed from production; simple "Draft" badge in dev only.

---

## 4. DECISIONS.md

Added **LAUNCH_CHECKLIST** section with client sign-off items, technical launch steps, content hygiene, and Phase 9 roadmap. No confirmed values changed.

---

## 5. Forms Production

Documented in `README.md` and `.env.example`:

1. Create Formspree form
2. Set `FORMSPREE_FORM_ID` in Vercel env (Production + Preview)
3. Redeploy
4. Test `POST /api/inquiry` via `/contact` on production URL

Supabase alternative remains documented in `docs/supabase-inquiries.sql`.

---

## 6. Performance

- `next/image` `sizes` already set on RecipeCard, BlogCard, gallery, home signature dishes
- No new build warnings introduced
- **Lighthouse:** Run manually post-deploy on home, `/portfolio`, `/recipes` (not automated in CI)

---

## 7. Dark / Light Mode

**Skipped** (time-boxed). Site uses fixed dark heroes + light content sections per brand tokens. Can be added post-launch if required.

---

## 8. Analytics (optional)

**File:** `components/Analytics.tsx`

Loads only when env vars are set:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

No tracking IDs committed to git.

---

## 9. README

Full deploy guide: Vercel setup, env vars, content editing paths, draft publishing workflow.

---

## Launch Checklist

### Pre-deploy

- [ ] Client sign-off on `docs/DECISIONS.md` open items
- [ ] Remove `draft: true` from approved content OR accept empty recipe/blog indexes until publish
- [ ] Replace ASSUMED copy in markdown files
- [ ] `FORMSPREE_FORM_ID` ready for Vercel

### Deploy

- [ ] Connect repo to Vercel
- [ ] Set env vars (see README)
- [ ] `npm run build` passes locally
- [ ] Deploy to production

### Post-deploy verification

- [ ] `/sitemap.xml` lists expected URLs
- [ ] `/robots.txt` correct
- [ ] Contact form submits successfully
- [ ] `/ai` search returns venture/recipe results (after publishing content)
- [ ] OG tags preview (Twitter/LinkedIn card validators)
- [ ] Lighthouse spot-check: home, portfolio, recipes

### Client sign-off list (from DECISIONS.md)

- [ ] Surname (Mthombeni vs Motaung)
- [ ] Domain & email
- [ ] Phone number
- [ ] Instagram handle
- [ ] Education credential & dates
- [ ] Career timeline & bio
- [ ] Ghost kitchen live vs concept
- [ ] Service geography

---

## Post-Launch Roadmap (Phase 9+)

| Phase | Scope |
|-------|-------|
| 9 | Culinary Academy pages |
| 10 | E-commerce / product lines |
| — | Supabase pgvector semantic search |
| — | Headless CMS for content editing |
| — | Dark/light mode toggle (optional) |

---

## Build Verification

```bash
npm run build
```

Expected: sitemap and robots generated; production build excludes draft slugs from static paths.

---

## New / Updated Files

| File | Purpose |
|------|---------|
| `app/sitemap.ts` | Dynamic sitemap |
| `app/robots.ts` | Crawler rules |
| `lib/site.ts` | `SITE_URL`, `DEFAULT_OG_IMAGE` |
| `lib/content-visibility.ts` | Draft publish rules |
| `lib/metadata-helpers.ts` | `draftRobots`, OG helpers |
| `components/Analytics.tsx` | Optional Plausible / GA4 |
