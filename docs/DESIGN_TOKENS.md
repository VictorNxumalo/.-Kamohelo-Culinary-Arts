# Design Tokens — Kamohelo Culinary Group

**Phase 1+ authority:** Logo-derived tokens (below)  
**Legacy reference:** Prototype tokens from `legacy/index.html`, `legacy/showcase.html` — **deprecated for new UI**  
**Gap:** Dark/light mode toggle — planned Phase 8

---

## Logo-Derived Tokens (Authoritative)

**Source:** `Assets/logo/024b0d88-6e63-4296-a289-9a7aca884098.png` → `public/assets/logo/kamohelo-culinary-arts.png`  
**Sampled:** 2026-06-11 via pixel clustering (Pillow)

### Logo elements validated

| Element | Characteristics |
|---------|-----------------|
| Mark | Stylised “K” — gold chef’s knife vertical stroke; cream brush-stroke arms in broken circle |
| Primary wordmark | KAMOHELO — wide-tracked caps, metallic gold, embossed |
| Sub-wordmark | CULINARY ARTS — thinner caps, cream/off-white, wide tracking |
| Background | Deep charcoal/black with slate/leather texture |
| Accent | Thin horizontal gold rule below wordmark |
| Mood | Fine dining, chiaroscuro, digital gallery — not generic startup |

### Color tokens

| Token | Hex | Sampled / refined | Usage |
|-------|-----|-------------------|--------|
| `--color-bg-deep` | `#121212` | Refined from `#141414` sample | Nav, hero, footer, dark sections |
| `--color-gold` | `#c6a265` | Sampled `#c6a265` | Knife, wordmark, CTAs, borders, timeline dots |
| `--color-gold-hover` | `#d4b47a` | Lighter interactive gold | Button hover |
| `--color-gold-highlight` | `#e2c285` | Emboss highlight | Accents, gradients |
| `--color-gold-shadow` | `#8b6f3a` | Emboss shadow | Depth (optional) |
| `--color-cream` | `#f5f5f5` | Refined from `#e6e0d7` cluster | Sub-labels, text on dark |
| `--color-cream-muted` | `#e6e0d7` | Sampled cream cluster | Body on dark sections |
| `--color-surface-dark` | `#1a1a1a` | — | Cards on dark bg + grain overlay |
| `--color-surface-light` | `#fafaf8` | — | Alternating content bands |
| `--color-text-on-dark` | `#f5f5f5` | — | Headings/body on dark |
| `--color-text-muted` | `#a8a29e` | — | Secondary on dark |
| `--color-text-on-light` | `#1a1a1a` | — | Headings/body on light |

### Section contrast map (Phase 1)

| Surface | Sections |
|---------|----------|
| **Dark + grain** | Header, home hero, ventures band, AI stub, about hero, vision, contact hero, footer |
| **Light** | About preview, services, signature dishes, about journey/education/timeline, contact form card |

### Typography (logo-aligned)

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| Display / brand / H1–H2 | **Montserrat** | 300, 400, 500 | `brand-caps`: uppercase, `tracking-[0.2em]` |
| Elegant display alt | **Cinzel** | 400 | Sparingly — available as `font-accent` |
| Body / UI | **Inter** | 300, 400, 500 | Normal tracking |
| Sub-labels | Montserrat | 300 | `sub-label`: uppercase, `tracking-[0.3em]`, text-xs–sm |

**Do not use** Cormorant Garamond as default in Phase 1+ (prototype only).

### CSS utilities (implemented in `app/globals.css`)

```css
.brand-caps { uppercase + tracking-brand + font-display }
.sub-label { uppercase + tracking-label + font-light }
.bg-brand-grain { charcoal + SVG noise overlay }
.gold-rule / .gold-rule-wide { thin gold dividers }
```

### Texture & atmosphere

- SVG fractal noise on `.bg-brand-grain` (~5.5% opacity)
- Gold used sparingly: borders, CTAs, rules, hover — not large gold fills
- Animations: slow fade-in on scroll (`900ms`), no bounce
- Food imagery: dark gradient overlays on hover (chiaroscuro)

### Prototype → logo migration

| Prototype | Logo (Phase 1+) |
|-----------|-----------------|
| `#B89F6B` gold | `#c6a265` |
| `#2C1810` charcoal | `#121212` family |
| `#F8F5F0` cream bg | `#fafaf8` light sections |
| Cormorant Garamond | Montserrat display |
| Cream nav | Dark grain nav |

---

## Legacy Prototype Tokens (Reference Only)

**Extracted from:** `legacy/index.html`, `legacy/showcase.html`  
**Status:** Superseded — do not use in new components

---

## Color Palette

| Token | Hex | CSS variable (recommended) | Usage |
|-------|-----|---------------------------|--------|
| Cream (background) | `#F8F5F0` | `--color-cream` | Page background, nav, loading screens |
| Charcoal (text / dark bg) | `#2C1810` | `--color-charcoal` | Body text, primary buttons, dark sections |
| Gold (accent) | `#B89F6B` | `--color-gold` | Accents, borders, hover states, timeline dots |
| Gold light (gradient end) | `#D4B483` | `--color-gold-light` | Scroll progress, skill card top border gradient |
| Amber 50 (surface) | Tailwind `amber-50` ≈ `#FFFBEB` | `--color-surface-warm` | Cards, badges, skill icon backgrounds |
| Skill bar track | `#E5E0D8` | `--color-skill-track` | Progress bar background |
| White | `#FFFFFF` | `--color-white` | Cards, form panels |
| Gray 300 (muted on dark) | `#D1D5DB` | `--color-muted-on-dark` | Footer, secondary text on charcoal |
| Gray 600–700 | Tailwind grays | `--color-muted` | Body secondary text |
| Black overlay | `rgba(0,0,0,0.92)` | — | Lightbox backdrop |
| Gallery overlay gradient | `rgba(44,24,16,0.9)` → transparent | — | Dish card hover overlay |

### Semantic mapping (Phase 1+)

| Role | Light mode | Dark mode (Phase 8) |
|------|------------|---------------------|
| Background | Cream | Charcoal |
| Foreground | Charcoal | Cream |
| Accent | Gold | Gold |
| Surface elevated | White | Charcoal + border |

---

## Typography

| Role | Family | Weights | Fallback |
|------|--------|---------|----------|
| Display / headings | Cormorant Garamond | 300, 400, 500, 600, 700 | `serif` |
| Body / UI | Inter | 300, 400, 500, 600 | `sans-serif` |

### Type scale (from prototype)

| Element | Classes / size | Font |
|---------|----------------|------|
| Hero H1 | `text-4xl` → `text-6xl` / `text-5xl` → `text-7xl` | Cormorant Garamond, bold |
| Section H2 | `text-4xl` → `text-5xl` | Cormorant Garamond, bold |
| Section H3 | `text-2xl` → `text-3xl` | Cormorant Garamond, bold |
| Body large | `text-xl` → `text-2xl` | Inter |
| Body | `text-base` | Inter |
| Small / caption | `text-sm`, `text-xs` | Inter |
| Loading text | `1.2rem`, `letter-spacing: 2px` | Cormorant Garamond |

### Google Fonts import

```
family=Cormorant+Garamond:wght@300;400;500;600;700
family=Inter:wght@300;400;500;600
```

---

## Spacing

Prototype uses Tailwind default scale. Key patterns:

| Pattern | Value |
|---------|-------|
| Section vertical padding | `py-16` (64px) or `py-20` (80px) |
| Container horizontal | `px-6` |
| Container max | `container mx-auto` |
| Nav height offset (scroll) | `80px` |
| Card padding | `p-6`, `p-8`, `md:p-12` |
| Grid gaps | `gap-4`, `gap-6`, `gap-8`, `gap-12` |
| Nav link spacing | `space-x-10` |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-lg` | 8px | Cards, badges |
| `rounded-xl` | 12px | Gallery items |
| `rounded-2xl` | 16px | Contact form panel |
| `rounded-full` | 9999px | Profile image, filter pills, icon circles |
| `rounded` (video) | 4px | Video container |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-md` | default Tailwind | Timeline cards, skill cards |
| `shadow-lg` | default Tailwind | CTAs, profile badge |
| `shadow-xl` | default Tailwind | Profile image, education card |
| `shadow-2xl` | default Tailwind | Contact panel, video section |
| Gallery hover | `0 20px 40px rgba(44, 24, 16, 0.15)` | Custom |
| Lightbox image | `0 20px 60px rgba(0, 0, 0, 0.5)` | Custom |

---

## Component Patterns

### Navigation

- Fixed top, `z-50`
- Background: `bg-cream/90` or `bg-cream/95` + `backdrop-blur-sm`
- Bottom border: `border-b border-amber-50`
- Brand: serif, `text-2xl`, gold accent
- Links: `hover-gold` (color transition 0.3s) or `nav-link` with underline animation (`showcase.html`)
- Mobile: hamburger toggle, slide-down menu
- CTA variant: bordered gold button "Book the Chef"

### Footer

- Background: charcoal, text gray-400
- Top border: `border-gray-800`
- Brand + tagline left; social icons right
- Copyright centred below divider

### Primary CTA

```
bg-charcoal text-white px-8–10 py-4–5 font-medium/bold
hover:bg-opacity-90 transition duration-300 shadow-lg
```

### Secondary CTA

```
border gold-border text-charcoal px-8–10 py-4–5
hover:bg-amber-50 transition duration-300
```

### Service / skill cards

- White background, `rounded-lg`, `shadow-md`
- Icon in `bg-amber-50` circle
- Optional top gold gradient bar on hover (`showcase.html` skill-card)

### Gallery card

- `rounded-xl`, `shadow-lg`, white bg
- Image height `h-80`, `object-cover`
- Hover: `translateY(-8px)`, image `scale(1.05)`
- Overlay slides up from bottom with gradient
- Featured badge: `bg-yellow-600` pill top-right

### Filter pills

- Border `1px solid #B89F6B`, `border-radius: 30px`
- Active/hover: gold fill, white text

### Lightbox

- Full viewport, dark overlay 92%
- Prev/next: circular buttons, gold tint `rgba(184,159,107,0.2)`
- Keyboard: Escape, Arrow keys
- Close: × top-right, hover gold

### Timeline (experience)

- Left gold dot via `::before` pseudo
- Cards: white, `rounded-lg`, `shadow-md`
- Date badge: `bg-amber-50`, `rounded-full`

### Contact panel

- Charcoal section wrapper; white inner card `rounded-2xl`
- Icon-led inquiry checklist grid

### Video showcase (`showcase.html`)

- Charcoal section background
- 16:9 container, `object-fit: cover`
- Cinematic border: gold lines animate on hover
- Custom play overlay with backdrop blur
- Plyr player controls

### Page loader

- Full-screen cream background, `z-index: 9999`
- Spinning ring: gold border-top on gold-tint track
- Showcase adds text: "PREPARING THE CRAFT"
- Hide after 800–1200ms on load

### Scroll progress (`showcase.html`)

- Fixed top, 3px height
- Gradient gold → gold-light

---

## Animation Patterns

| Name | Implementation | Duration | Easing |
|------|----------------|----------|--------|
| Fade in on scroll | `.fade-in` → `.visible` | 0.8s | ease |
| Fade translate Y | `translateY(20–30px)` → `0` | 0.8s | ease |
| Hover gold text | color → `#B89F6B` | 0.3s | ease |
| Skill bar fill | width 0 → `--skill-level` | 1.5s | ease-in-out |
| Gallery lift | `translateY(-8px)` | 0.4s | cubic-bezier bounce |
| Nav underline | width 0 → 100% | 0.4s | cubic-bezier |
| Cinematic border | width 60px → 100% | 0.8s | cubic-bezier |
| School link shimmer | gradient sweep | 0.7s | ease |
| Page loader fade | opacity + visibility | 0.5–0.8s | ease |
| Loader spin | rotate 360° | 1–1.2s | linear / cubic-bezier |

### Scroll-trigger threshold

Elements animate when `elementTop < window.innerHeight - 150`.

---

## Iconography

- **Library:** Font Awesome 6.4.0 (`fas`, `fab`)
- Common icons: utensils, envelope, calendar, users, map-marker, instagram, linkedin, play, chevrons

---

## Breakpoints

Tailwind defaults (prototype uses `md:` and `lg:` heavily):

| Breakpoint | Min width | Typical use |
|------------|-----------|-------------|
| `md` | 768px | Nav desktop, 2-col grids |
| `lg` | 1024px | Hero split layout, 3-col gallery |

---

## Tailwind Config Snippet (Phase 1)

```js
// tailwind.config — extend theme
theme: {
  extend: {
    colors: {
      cream: '#F8F5F0',
      charcoal: '#2C1810',
      gold: {
        DEFAULT: '#B89F6B',
        light: '#D4B483',
      },
    },
    fontFamily: {
      serif: ['Cormorant Garamond', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

---

## Requirements Gap (not in prototype)

| Requirement | Status | Phase |
|-------------|--------|-------|
| Dark / light mode toggle | Not implemented | Phase 8 |
| SEO meta / Open Graph | Minimal (title only) | Phase 1 |
| Structured data (LocalBusiness, Person) | Missing | Phase 1 |
| Form components | Email mailto only | Phase 3 |
| Recipe / blog typography | N/A | Phase 5–6 |
| AI search UI | N/A | Phase 7 |

---

## Reuse Guidance for Phase 1

**Port directly:** color tokens, font pairing, nav/footer structure, CTA styles, fade-in scroll animation, page loader pattern.

**Adapt:** gallery/lightbox → portfolio page; single-page anchor nav → App Router multi-page nav; filter categories → align with real cuisine taxonomy.

**Do not port:** fictional content blocks; misaligned "Modern French" labelling; stock Unsplash imagery.
