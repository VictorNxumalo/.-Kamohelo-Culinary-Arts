# Asset Inventory

**Project root:** `c:\Users\MNxumalo1\OneDrive - Sun International\Documents\Projects\CulinaryWebsite`  
**Last audited:** 2026-06-11

---

## Existing Assets

| Asset | Path | Used in | Category | Notes |
|-------|------|---------|----------|-------|
| **Official logo** | `Assets/logo/024b0d88-6e63-4296-a289-9a7aca884098.png` | Next.js app | Brand | **Source of truth** for visual identity. Migrated to `public/assets/logo/kamohelo-culinary-arts.png`. Also `app/icon.png` for favicon. |
| Profile photo | `Assets/Profile Image.jpeg` | Home hero | Brand / People | Migrated to `public/assets/profile/profile-image.jpeg`. Alt: Chef Kamohelo Mthombeni. |
| IHS logo | `Assets/Education/logo.webp` | `showcase.html` training section | Education | Reusable. Fix alt text (currently says "Le Cordon Bleu training"). Fix typo "Internation Hotel School" in copy. |
| Pan-Seared White Fish Fillet | `Assets/Quisines/Pan-Seared White Fish Fillet.jpeg` | `index.html` gallery JS | Portfolio / Seafood | Featured. Tags: `modern-french`, `signature` — **retag** to `seafood`, `fine-dining`. |
| Chicken roulade | `Assets/Quisines/Chicken roulade.jpeg` | `index.html` gallery JS | Portfolio / Meat | Featured. Tags: `modern-french`, `signature`. |
| Frenched rack of Lamb | `Assets/Quisines/Rack of lamb.jpeg` | `index.html` gallery JS | Portfolio / Meat | Tags: `seasonal`, `modern-french`. |
| Chocolate lava cake | `Assets/Quisines/chocolate lava cake .jpeg` | `index.html` gallery JS | Portfolio / Dessert | Featured. Note trailing space in filename. Tags: `desserts`. |
| Grazing board | `Assets/Quisines/Grazing Board.jpeg` | `index.html` gallery JS | Portfolio / Catering | Tags: `modern-french`, `signature` — **retag** to `catering`, `events`. |
| Classic duo burgers | `Assets/Quisines/Burgers.jpeg` | `index.html` gallery JS | Portfolio / Comfort | Tags: `seasonal`, `modern-french` — **retag** to `comfort-food`. |
| Chicken club sandwich & wrap | `Assets/Quisines/Chicken club sandwhich & chicken wrap.jpeg` | `index.html` gallery JS | Portfolio / Comfort | Featured. Typo "sandwhich" in filename. |
| Green pesto pasta | `Assets/Quisines/Green pesto Pasta.jpeg` | `index.html` gallery JS | Portfolio / Main | Tags: `modern-french` only — **retag**. |
| Brownie sundae | `Assets/Quisines/Chocolate brownie.jpeg` | `index.html` gallery JS | Portfolio / Dessert | Tags: `desserts`. |
| Showcase video poster | `Assets/showcase/showcase.image.jpeg` | `showcase.html` video `poster` | Video / Brand | Reusable. |
| Craft showcase video | `public/assets/showcase/showcase.mp4` | `/craft` | Video / Craft | Migrated from `Assets/showcase/`. Native HTML5 player. Consider CDN for production bandwidth. |
| Craft showcase poster | `public/assets/showcase/showcase.image.jpeg` | `/craft` | Video / Craft | Video poster frame. |
| WEBSITE CONCEPT.pdf | `Resources/WEBSITE CONCEPT.pdf` | — | Requirements | Reference only |
| WEBSITE DEVELOPMENT PROPOSAL.pdf | `Resources/WEBSITE DEVELOPMENT PROPOSAL.pdf` | — | Requirements | Authoritative brand/sitemap |
| ADDITION TO HOME PAGE.pdf | `Resources/ADDITION TO HOME PAGE.pdf` | — | Requirements | Businesses & Ventures addition |

---

## Gallery Data (from `index.html` JavaScript)

| ID | Title | Description | Filter tags | Featured |
|----|-------|-------------|-------------|----------|
| 1 | Pan-Seared White Fish Fillet | White Fish fillet served over couscous & garnished with citrus | `modern-french`, `signature` | Yes |
| 2 | Chicken roulade | A similar meat roll, elegantly presented with a rich sauce, mashed potatoes & vegetables like carrots & mushrooms | `modern-french`, `signature` | Yes |
| 3 | Frenched rack of Lamb | Commonly known as lamb cutlets or lamb lollipops, served with roasted potatoes & vibrant green sauce | `seasonal`, `modern-french` | No |
| 4 | Chocolate lava cake | Also known as chocolate fondant or molten chocolate cake. | `desserts` | Yes |
| 5 | Savory appetizer platter / Grazing board | Featuring a curated assortment of items often found in british pub food or picnic | `modern-french`, `signature` | No |
| 6 | Classic duo burgers | To be more precise, one chicken & one beef burger | `seasonal`, `modern-french` | No |
| 7 | Chicken club sandwich & chicken wrap | Toasted white bread & a chicken wrap with shawarma filling | `modern-french`, `signature` | Yes |
| 8 | Green pesto pasta with & crispy fried chicken | A serving of long pasta, several peices of chicked & garnish. | `modern-french` | No |
| 9 | Brownie sundae / chocolate brownie | chocolate brownie with ice cream & caramel sauce. | `desserts` | No |

**Copy issues to fix in Phase 2:** typos ("peices", "chicked"); inconsistent categorisation vs actual dish styles.

---

## External / Stock Assets (remove or replace)

| Asset | Source | Used in | Action |
|-------|--------|---------|--------|
| Chef hands photo | Unsplash (`images.unsplash.com`) | `showcase.html` skills section | **Replace** with chef-owned photography or remove |
| Font Awesome | CDN | Both HTML files | Keep or self-host via npm |
| Google Fonts | CDN | Both HTML files | Migrate to `next/font` |
| Tailwind CSS | CDN | Both HTML files | Migrate to build-time Tailwind |
| Plyr | CDN | `showcase.html` | npm package in Next.js |

---

## Missing Assets (by phase)

### Phase 1 — Brand shell & core pages

| Asset | Purpose | Priority |
|-------|---------|----------|
| Favicon + app icons | Browser tab, mobile home screen | High |
| Open Graph / social share image | Link previews (1200×630) | High |
| Logo lockup (wordmark) | Nav, footer — "Kamohelo Culinary Group" | High |
| Hero alt angles of profile photo | About page | Medium |
| Service section icons/imagery | Home services cards | Medium |

### Phase 2 — Portfolio & craft showcase

| Asset | Purpose | Priority |
|-------|---------|----------|
| Additional plated dish photography | Portfolio categories (fine dining, seafood, etc.) | High |
| Before/after dish development shots | Portfolio evolution section | Medium |
| Chef hands / knife work (owned) | Replace Unsplash on craft page | High |
| Video thumbnail variants | Social sharing | Low |

### Phase 3 — Services & lead generation

| Asset | Purpose | Priority |
|-------|---------|----------|
| Private dining event photos | Private chef page | High |
| Catering event photos | Weddings, corporate, buffet setups | High |
| Sample menu PDFs or designed menu graphics | Private chef page | Medium |

### Phase 4 — Businesses & ventures

| Asset | Purpose | Priority |
|-------|---------|----------|
| Fire & Ash brand concept (logo, mood board) | Ventures hub | Medium |
| The Bento Lab brand concept | Ventures hub | Medium |
| Midnight Kitchen brand concept | Ventures hub | Medium |
| Restaurant interior/exterior mockups | Future restaurant vision | Low |

### Phase 5 — Recipe lab

| Asset | Purpose | Priority |
|-------|---------|----------|
| Step-by-step recipe photos | Per recipe | High |
| Technique demonstration clips | Technique library | Medium |
| Ingredient flat-lays | Recipe headers | Medium |

### Phase 6 — Blog

| Asset | Purpose | Priority |
|-------|---------|----------|
| Blog header images | Per post | Medium |
| Kitchen / line life photography | Editorial content | Medium |

### Phase 7 — AI assistant

| Asset | Purpose | Priority |
|-------|---------|----------|
| Structured recipe/technique dataset | RAG corpus | High (content, not binary) |
| AI section hero graphic | Home preview | Low |

### Phase 8 — Polish

| Asset | Purpose | Priority |
|-------|---------|----------|
| Dark mode optimised images | If photos need variant treatment | Low |

---

## Migration Notes (Assets → `public/assets/`)

| Current | Proposed |
|---------|----------|
| `Assets/Profile Image.jpeg` | `public/assets/profile/profile-image.jpeg` |
| `Assets/Quisines/*` | `public/assets/dishes/*` (normalize filenames) |
| `Assets/Education/logo.webp` | `public/assets/education/ihs-logo.webp` |
| `Assets/showcase/*` | `public/assets/showcase/*` |

Fix filename issues during migration: trailing spaces, typos (`sandwhich`, `Quisines`).

---

## Asset Quality Checklist

- [ ] All dish images have consistent aspect ratio or crop strategy for gallery grid
- [ ] Profile photo resolution sufficient for hero (min ~800px)
- [ ] Video compressed for web (H.264, reasonable bitrate)
- [ ] WebP/AVIF variants generated at build for performance
- [ ] Alt text written for accessibility (Phase 2+)
- [ ] Rights confirmed for all published photography
