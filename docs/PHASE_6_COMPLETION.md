# Phase 6 Completion — Blog & Insights

**Status:** Complete  
**Date:** 2026-06-11

---

## Routes Added

| Route | File | Description |
|-------|------|-------------|
| `/blog` | `app/blog/page.tsx` | Journal index — chronological list with category filters |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Article detail with prose styling |

---

## Content Structure

| Path | Count | Notes |
|------|-------|-------|
| `content/blog/*.md` | 4 | YAML frontmatter + markdown body |
| `content/blog/README.md` | — | Chef guide for adding posts |

### Launch posts (draft — **ASSUMED** copy)

| Slug | Title | Category |
|------|-------|----------|
| `menu-development-from-concept-to-plate` | Menu Development — From Concept to Plate | menu-development |
| `building-kamohelo-culinary-group` | Building Kamohelo Culinary Group | entrepreneurship |
| `why-pan-searing-changes-everything` | Why Pan-Searing Changes Everything | techniques |
| `life-on-the-line` | Life on the Line | kitchen-life |

Sorted by date (newest first). Technique post links to `/techniques/pan-searing-white-fish`.

---

## Libraries & Components

| Item | Path |
|------|------|
| Blog types & filters (client-safe) | `lib/blog-types.ts`, re-exported via `lib/blog.ts` |
| Blog loaders (server-only) | `lib/blog-loader.ts` |
| Markdown → HTML (controlled content) | `lib/markdown.ts` |
| BlogCard | `components/blog/BlogCard.tsx` |
| BlogFilters | `components/blog/BlogFilters.tsx` |
| BlogGrid | `components/blog/BlogGrid.tsx` |
| BlogPost + JSON-LD | `components/blog/BlogPost.tsx` |

### Category filters

All Posts · Kitchen Life · Techniques · Menu Development · Entrepreneurship · Food Trends

Uses `filter-pill` pattern from portfolio/recipes.

### Prose styling

`.prose-brand` in `app/globals.css` — logo tokens, readable on dark article surface.

---

## SEO

- `generateMetadata` per post — title, excerpt, Open Graph article + image
- JSON-LD `BlogPosting` schema on article pages
- `generateStaticParams` for all post slugs
- **Sitemap:** not implemented yet — add `/blog` and `/blog/[slug]` URLs in Phase 8

---

## Home & Navigation

### Home

**Latest from the Kitchen** — 3 most recent posts (`getRecentPosts(3)`) below recipe library; CTA → `/blog`

### Header

Home · About · Portfolio · Recipes · **Journal** · Ventures · Contact

- **Journal** → `/blog` (active on `/blog/*`)

### Footer

Added **Blog** → `/blog`

---

## Design

- Dark hero on index and article pages
- Light card grid on `/blog`
- Gold category pills and accent links
- Reused `FadeIn`, `SectionHeading`, `card-light`

---

## Out of Scope (unchanged)

Comments · CMS admin UI · Newsletter signup · AI search (Phase 7)

---

## Build Verification

```bash
npm run build
```

Expected: static pages for `/blog` and all 4 post slugs.

---

## Handoff — Phase 7+

| Item | Notes |
|------|-------|
| Replace ASSUMED copy | Chef reviews `content/blog/` |
| Remove `draft: true` | When posts are client-approved |
| Food Trends category | Empty until first post — filter shows friendly message |
| Sitemap | Phase 8 — include all blog URLs |
| AI search | Phase 7 — can index blog + recipes |

### How chef adds posts

See `content/blog/README.md`.
