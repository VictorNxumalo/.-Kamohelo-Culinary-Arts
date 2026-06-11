# Phase 4 Completion — Businesses & Ventures Hub

**Status:** Complete  
**Date:** 2026-06-11

---

## Routes Added

| Route | File | Description |
|-------|------|-------------|
| `/businesses` | `app/businesses/page.tsx` | Central hub — restaurants, ghost kitchens, service divisions, future ventures |
| `/concepts` | `app/concepts/page.tsx` | Ghost kitchen & restaurant concepts showcase with full brand detail |

---

## Components & Data

| Item | Path |
|------|------|
| Venture data (concepts, divisions, future ventures) | `lib/ventures.ts` |
| ConceptCard (compact + detailed) | `components/ventures/ConceptCard.tsx` |

### `lib/ventures.ts` exports

| Export | Purpose |
|--------|---------|
| `CULINARY_CONCEPTS` | Full concept records (name, cuisine, story, market, dishes, status) |
| `GHOST_KITCHEN_CONCEPTS` | Filtered ghost kitchen concepts |
| `RESTAURANT_CONCEPTS` | Filtered restaurant concepts (empty — placeholder on hub) |
| `BUSINESS_DIVISIONS` | Division metadata for `/businesses` sections |
| `FUTURE_VENTURES` | Academy, cookbooks, product lines, hospitality investments |
| `VENTURE_PREVIEW` | Compact cards for home page preview |

### Seeded concepts (status: **Concept**)

| ID | Name | Cuisine |
|----|------|---------|
| `fire-and-ash` | Fire & Ash | Modern flame-grilled cuisine |
| `the-bento-lab` | The Bento Lab | Asian-inspired fast casual |
| `midnight-kitchen` | Midnight Kitchen | Late-night delivery |

Source: `docs/DECISIONS.md` — all labelled **Concept** until client confirms live status.

---

## `/businesses` Hub Sections

| Anchor | Division | CTA |
|--------|----------|-----|
| `#restaurants` | Restaurants | Link to `/concepts` (no live restaurant concepts yet) |
| `#ghost-kitchens` | Ghost Kitchens | Cards + "Explore All Concepts" → `/concepts` |
| `#private-chef` | Private Chef Division | → `/private-chef` |
| `#catering` | Catering Division | → `/catering` |
| `#consulting` | Consulting Division | → `/consulting` |
| `#future-ventures` | Future Ventures | Academy, cookbooks, products — "In Development" |

---

## Home Page Updates

| Section | Change |
|---------|--------|
| **Explore Our Culinary Businesses** | Concept cards link to `/concepts#[id]`; CTA → `/businesses` |
| **Ghost Kitchen Concepts** service card | `href` → `/concepts` (was `null` / "Coming Phase 4") |
| All service cards | Now fully linked (no disabled cards) |

---

## Navigation Updates

### Header

Home · About · Services ▾ · Portfolio · **Ventures** · Contact

- **Ventures** → `/businesses`
- Active state includes `/concepts` (child of Ventures hub)

### Footer

About · Portfolio · Craft · **Businesses** · **Concepts** · Private Chef · Catering · Consulting · Contact

---

## Design

- Logo tokens only (`docs/DESIGN_TOKENS.md`) — gold `#c6a265`, dark `#121212`, cream `#f5f5f5`
- Reused: `FadeIn`, `SectionHeading`, `card-dark` / `card-light`, `btn-primary` / `btn-secondary`
- Concept detail cards use `scroll-mt-28` for fixed-header anchor navigation

---

## Out of Scope (unchanged)

Recipe lab · Blog · AI assistant · E-commerce · Investor portal

---

## Build Verification

```bash
npm run build
```

Expected: all routes compile; static pages generated for `/businesses` and `/concepts`.

---

## Handoff — Phase 5+

| Item | Notes |
|------|-------|
| Restaurant concepts | Add to `CULINARY_CONCEPTS` with `type: "restaurant"` when ready |
| Concept status | Update `status` / `statusLabel` to `"live"` when brands launch |
| Concept imagery | Add `image` field to concepts + hero/card visuals when assets available |
| Ghost kitchen ordering | Delivery partner links — future phase |
| Recipe library / AI | Home stub remains — Phase 7 per roadmap |

### Open client items (from `DECISIONS.md`)

Surname (Mthombeni vs Motaung) · email/domain · phone · Instagram · education dates · career timeline · service geography · ghost kitchen live vs concept confirmation
