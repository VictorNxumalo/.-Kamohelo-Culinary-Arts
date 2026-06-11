# Brand Guide — Kamohelo Culinary Arts

**Visual brand:** Kamohelo Culinary Arts  
**Legal entity (footer/contracts):** Kamohelo Culinary Group  
**Person:** Chef Kamohelo Mthombeni

---

## Logo

| Item | Value |
|------|-------|
| Master file | `public/assets/logo/kamohelo-culinary-arts.png` |
| Component | `components/Logo.tsx` |
| Minimum width (full lockup) | 120px |
| Clear space | Height of “K” mark on all sides |
| Background | **Always dark** — charcoal `#121212` or darker. Never on busy photography without scrim. |

### Do

- Use full lockup in header and footer
- Place on textured dark backgrounds (`.bg-brand-grain`)
- Maintain aspect ratio via `next/image`

### Don’t

- Stretch or recolor the logo
- Place on light backgrounds without a dark container
- Replace with text-only lockup in primary nav

---

## Color

| Role | Hex |
|------|-----|
| Background deep | `#121212` |
| Gold (primary accent) | `#c6a265` |
| Gold hover | `#d4b47a` |
| Cream (text on dark) | `#f5f5f5` |
| Cream muted | `#e6e0d7` |
| Surface dark | `#1a1a1a` |
| Surface light | `#fafaf8` |

Gold is for **accents only** — rules, borders, CTAs, icons, timeline dots. Avoid large gold background fills.

---

## Typography

| Use | Font | Style |
|-----|------|-------|
| Headings, nav, CTAs | Montserrat | Uppercase, wide tracking (`.brand-caps`) |
| Sub-labels | Montserrat Light | `.sub-label` — `0.3em` tracking |
| Body | Inter Light/Regular | Sentence case, normal tracking |
| Optional accent | Cinzel | Section titles sparingly |

---

## Photography

- Prefer chiaroscuro — dark backgrounds, focused lighting on food
- Profile: gold ring border (`border-brand-gold`)
- Dish hover: `from-black/85` gradient overlay (not brown prototype gradient)

---

## Voice

- Premium, precise, warm — not pretentious
- No unverified credentials (Michelin, awards, “15+ years”)
- Label venture concepts as “Concept” until live
