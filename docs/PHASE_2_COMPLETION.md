# Phase 2 Completion — Portfolio & Craft Showcase

**Status:** Complete  
**Date:** 2026-06-11

---

## Routes Added

| Route | File | Description |
|-------|------|-------------|
| `/portfolio` | `app/portfolio/page.tsx` | 9-dish gallery with filters and lightbox |
| `/craft` | `app/craft/page.tsx` | Cinematic video showcase and technique sections |

---

## Components Created

| Component | Path |
|-----------|------|
| GalleryGrid | `components/gallery/GalleryGrid.tsx` |
| GalleryCard | `components/gallery/GalleryCard.tsx` |
| GalleryFilters | `components/gallery/GalleryFilters.tsx` |
| Lightbox | `components/gallery/Lightbox.tsx` |
| VideoShowcase | `components/craft/VideoShowcase.tsx` |

### Data

| File | Purpose |
|------|---------|
| `lib/gallery.ts` | 9 dishes, filter definitions, `formatTagLabel()` |

---

## Category Retagging Table

| Dish | Old tags (legacy) | New tags |
|------|-------------------|----------|
| Pan-Seared White Fish Fillet | `modern-french`, `signature` | `seafood`, `fine-dining`, `signature` |
| Chicken Roulade | `modern-french`, `signature` | `meat`, `fine-dining`, `signature` |
| Frenched Rack of Lamb | `seasonal`, `modern-french` | `meat`, `fine-dining` |
| Chocolate Lava Cake | `desserts` | `desserts`, `signature` |
| Savory Grazing Board | `modern-french`, `signature` | `catering-events` |
| Classic Duo Burgers | `seasonal`, `modern-french` | `comfort-food` |
| Chicken Club Sandwich & Wrap | `modern-french`, `signature` | `comfort-food`, `signature` |
| Green Pesto Pasta | `modern-french` | `comfort-food` |
| Brownie Sundae | `desserts` | `desserts` |

**Removed tags:** `modern-french`, `seasonal` (misleading for this portfolio)

---

## Nav & Home Changes

### Header (`NAV_LINKS`)

Home · About · **Portfolio** · Contact

### Footer (`FOOTER_LINKS`)

About · Portfolio · Craft · Contact

### Home (`app/page.tsx`)

| Element | Change |
|---------|--------|
| Hero CTA | Added "View Signature Dishes" → `/portfolio` |
| Signature dish cards | Link to `/portfolio` |
| Portfolio CTA | Active link → `/portfolio` |
| Craft teaser | New dark band "Witness the Craft" → `/craft` |

---

## Portfolio Behaviour

- 8 filter categories + All Creations
- Gold pill active state (`.filter-pill.active`)
- Responsive grid: 1 → 2 → 3 columns
- Card hover: lift + black gradient overlay (chiaroscuro)
- Featured badge on 4 items
- Lightbox: Escape, ←/→ keys, backdrop click, body scroll lock

---

## Craft Page

- Native `<video>` with custom play overlay (no Plyr dependency)
- Poster: `/assets/showcase/showcase.image.jpeg`
- Video: `/assets/showcase/showcase.mp4`
- Pauses when scrolled out of view (IntersectionObserver)
- Muted by default; controls after play
- **Removed:** Unsplash stock image, "#1 Culinary School" badge, "15+ years", "10,000+ hours"
- **Replaced with:** Chef profile photo + IHS block (matches About page)

---

## Assets Updated

| Asset | Path |
|-------|------|
| Showcase video | `public/assets/showcase/showcase.mp4` |
| Showcase poster | `public/assets/showcase/showcase.image.jpeg` |

All 9 dish images verified under `public/assets/dishes/`.

---

## Known Limitations

- No before/after dish evolution gallery (requirements mention — defer to Phase 5 recipe lab or portfolio stretch)
- Portfolio filter state not synced to URL query params
- Video duration not auto-detected (static label)
- Craft not in primary nav (footer + home teaser only — per Phase 2 brief recommendation)

---

## Quality Checklist

| Item | Done |
|------|------|
| `/portfolio` — 9 dishes, filters, lightbox, keyboard nav | ✅ |
| `/craft` — video plays, no stock images, accurate IHS | ✅ |
| Nav/footer include Portfolio and Craft | ✅ |
| Home CTAs link to new pages | ✅ |
| Logo theme consistent | ✅ |
| `npm run build` passes | ✅ |
| No fictional content introduced | ✅ |
| `PHASE_2_COMPLETION.md` written | ✅ |

---

## Phase 3 Handoff

### Scope

1. **Private Chef** (`/private-chef`) — services, 4-step process, sample menus, inquiry form
2. **Catering** (`/catering`) — event types, formats, gallery placeholder, quote form
3. **Form backend** — Formspree or Supabase API route
4. Update nav Services dropdown or dedicated links

### First Phase 3 Task

Create `app/private-chef/page.tsx` with service list and booking process sections from requirement PDFs, styled with logo tokens, and wire a contact form to `/api/inquiry` or Formspree.
