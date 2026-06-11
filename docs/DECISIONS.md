# Brand & Content Decision Worksheet

**Project:** Kamohelo Culinary Group website rebuild  
**Phase:** 0 — Discovery & Foundation  
**Last updated:** 2026-06-11  
**Owner for client decisions:** Chef Kamohelo Mthombeni / Kamohelo Culinary Group

This worksheet records confirmed values, recommended defaults, and open questions that must be resolved before Phase 1 content writing begins.

---

## Logo vs legal name (Phase 1)

| Context | Name | Status |
|---------|------|--------|
| Logo / visual brand | **Kamohelo Culinary Arts** | CONFIRMED (logo file) |
| Legal / copyright / business umbrella | **Kamohelo Culinary Group** | CONFIRMED (requirement PDFs) |
| Person | **Chef Kamohelo Mthombeni** | ASSUMED (per defaults) |

**Phase 1 rule:** Nav and footer use logo image (includes “Culinary Arts” wordmark). Footer copyright reads “© Kamohelo Culinary Group”. Hero headline uses “Chef Kamohelo Mthombeni”.

---

## Decision Summary Table


| Decision | Status | Value / Recommendation | Notes |
|----------|--------|------------------------|-------|
| Chef legal/professional name | **OPEN** | **Recommended:** Kamohelo Mthombeni | Requirement PDFs use **Mthombeni**; prototype HTML uses **Motaung** throughout. Must confirm legal spelling for copyright, contracts, and SEO. |
| Umbrella brand name | **RECOMMENDED** | Kamohelo Culinary Group | `WEBSITE DEVELOPMENT PROPOSAL.pdf` specifies this. `WEBSITE CONCEPT.pdf` uses placeholder "Motaung Culinary Group" — treat as outdated placeholder. |
| Primary identity (public-facing) | **CONFIRMED** (per docs) | Chef Kamohelo Mthombeni | Person-first; umbrella brand wraps services and ventures. |
| Tagline & brand statement | **RECOMMENDED** | See below | Proposal subheadline is authoritative over prototype copy. |
| Business email | **OPEN** | Replace `kamoheloMotaung@chefalexandre.com` | Placeholder domain (`chefalexandre.com`) is fictional. Recommend `hello@` or `bookings@` on owned domain (e.g. `kamoheloculinary.com` — domain TBD). |
| Phone number | **OPEN** | `+27 083 972 5798` (from prototype) | Present on `index.html` only. Confirm this is the correct business line for bookings. |
| Social URLs | **PARTIAL** | Instagram only confirmed | `showcase.html` links Instagram: `https://www.instagram.com/alpha.middoew?igsh=MW1jZ2FmenUwOXI0Mw==`. LinkedIn, Twitter/X, Vimeo are `#` placeholders. Confirm handle ownership and which platforms to promote. |
| Education — institution | **RECOMMENDED** | International Hotel School (South Africa) | `showcase.html` aligns with requirement docs. `index.html` fictional Le Cordon Bleu must be removed. |
| Education — qualification | **OPEN** | **Recommended:** Diploma in Professional Cookery and Kitchen Management | Proposal wording. Showcase says "Degree" and "Master Chef Program" — likely incorrect; confirm exact credential name and graduation status. |
| Education — dates | **OPEN** | **Recommended:** 2022–2024 (from showcase) | Confirm actual enrolment/graduation dates. |
| Real career timeline | **OPEN** | Client must supply | Replace entire fictional timeline (Lyon, Paris Michelin kitchens, London Éclat, etc.) with verified roles: culinary school → internship → current line cook → entrepreneurial ventures. |
| Experience years | **OPEN** | Resolve **3+** vs **15+** | `index.html` hero copy says "15+ years"; experience badge says "3+"; `showcase.html` skill card says "15+ years". Recommend honest figure based on professional kitchen start date (likely 3+ if career began ~2022). |
| Hero tagline (home) | **RECOMMENDED** | "Creating exceptional dining experiences, developing original recipes, and building innovative culinary ventures." | From `WEBSITE DEVELOPMENT PROPOSAL.pdf`. Replace prototype French-cuisine copy. |
| Brand statement (long) | **CONFIRMED** (per proposal) | "Creating exceptional dining experiences, developing innovative culinary concepts, and building a portfolio of hospitality businesses that combine creativity, craftsmanship, and entrepreneurship." | Use on About preview and meta descriptions. |
| Ghost kitchen concepts | **RECOMMENDED (concept stage)** | Fire & Ash, The Bento Lab, Midnight Kitchen | Named in `WEBSITE CONCEPT.pdf` as examples. Treat as **concept/vision** unless client confirms live operations. Label clearly on site (Concept vs Live). |
| Businesses & Ventures page | **CONFIRMED** (per addition doc) | Required hub page | `ADDITION TO HOME PAGE.pdf` adds home preview section + `/businesses` hub with divisions. |
| Copyright year | **OPEN** | Use **2026** at launch | Prototype inconsistency: `index.html` © 2023, `showcase.html` © 2025. |
| Domain name | **OPEN** | TBD | Required for email, SEO, and production deploy. |
| Location / service area | **OPEN** | TBD | Required for private chef and catering pages (city, province, travel radius). |
| Portfolio filter categories | **OPEN** | Replace "Modern French" tags | Current JS tags mislabel burgers, shawarma, grazing boards. Propose: Fine Dining, Comfort Food, Seafood, Meat, Desserts, Catering & Events (per recipe/portfolio docs). |

---

## Detailed Decisions

### 1. Chef legal/professional name

| Field | Value |
|-------|-------|
| **Requirement docs** | Kamohelo **Mthombeni** |
| **Prototype (`index.html`, `showcase.html`)** | Kamohelo **Motaung** |
| **Recommendation** | **Kamohelo Mthombeni** — requirement PDFs are the authoritative business brief |
| **If unresolved** | Phase 1 may use **ASSUMED: Kamohelo Mthombeni** with client sign-off gate before launch |

### 2. Umbrella brand name

| Field | Value |
|-------|-------|
| **Requirement docs** | Kamohelo Culinary Group |
| **WEBSITE CONCEPT.pdf** | Motaung Culinary Group (marked placeholder) |
| **Recommendation** | **Kamohelo Culinary Group** |
| **Nav/footer usage** | "Kamohelo Culinary Group" as brand lockup; "Chef Kamohelo Mthombeni" as personal headline |

### 3. Tagline & brand statement

**Short tagline (concept doc):**  
*"From private dining experiences to scalable culinary concepts."*

**Home subheadline (proposal — preferred for hero):**  
*"Creating exceptional dining experiences, developing original recipes, and building innovative culinary ventures."*

**Brand statement (proposal — About / meta):**  
*"Creating exceptional dining experiences, developing innovative culinary concepts, and building a portfolio of hospitality businesses that combine creativity, craftsmanship, and entrepreneurship."*

### 4. Business email

| Current (prototype) | `kamoheloMotaung@chefalexandre.com` |
|---------------------|-------------------------------------|
| **Action** | Remove entirely; replace with client-owned address |
| **Recommendation** | `hello@kamoheloculinary.co.za` or similar once domain confirmed |

### 5. Phone number

| Current | `+27 083 972 5798` (`index.html` contact section) |
|---------|---------------------------------------------------|
| **Status** | OPEN — confirm for all pages and structured data |

### 6. Social URLs

| Platform | `index.html` | `showcase.html` | Action |
|----------|--------------|-----------------|--------|
| Instagram | `#` | `https://www.instagram.com/alpha.middoew?igsh=MW1jZ2FmenUwOXI0Mw==` | Confirm handle; unify across site |
| LinkedIn | `#` | `#` | OPEN — provide URL or omit |
| Twitter/X | `#` | — | OPEN |
| Vimeo | — | `#` | OPEN — only if video portfolio hosted there |

### 7. Education

| Field | Requirement docs | `showcase.html` | `index.html` (remove) |
|-------|------------------|-----------------|------------------------|
| Institution | International Hotel School | Internation Hotel School *(typo)* | Le Cordon Bleu, Paris |
| Qualification | Professional Cookery and Kitchen Management | "Degree", "Master Chef Program" | Grand Diplôme |
| Dates | Not specified | 2022–2024 | 2005–2007 |
| Logo asset | — | `Assets/Education/logo.webp` | — |

**Recommendation:** International Hotel School · Diploma in Professional Cookery and Kitchen Management · dates per client confirmation.

### 8. Real career timeline

**Must replace (fictional content in `index.html`):**

- Born Lyon, France / grandmother's kitchen narrative
- Le Cordon Bleu Paris (2005–2007)
- Michelin Star Recognition at Restaurant Le Jardin (2014–2015)
- World Culinary Championship Gold Medal (2018)
- Certified Master Chef WACS (2020)
- Chef de Partie, La Maison Blanche, Lyon (2009–2013)
- Sous Chef, Restaurant Le Jardin, Paris (2013–2019)
- Head Chef, Éclat Restaurant, London (2019–Present)

**Required from client (per proposal structure):**

1. Culinary education (International Hotel School)
2. Internship / training placements
3. Current line cook position (employer name optional on public site)
4. Entrepreneurial development / ventures in progress

### 9. Experience years

| Source | Claim |
|--------|-------|
| `index.html` hero paragraph | 15+ years |
| `index.html` hero badge | 3+ years |
| `showcase.html` Knife Precision card | 15+ years |
| `index.html` footer | "since 2022" |
| `showcase.html` education dates | 2022–2024 |

**Recommendation:** If culinary career started with formal training in 2022, use **3+ years** consistently or remove numeric badge in favour of "International Hotel School graduate" until client provides preferred framing.

### 10. Ghost kitchen & restaurant concepts

| Concept | Cuisine (per concept doc) | Status |
|---------|---------------------------|--------|
| Fire & Ash | Modern flame-grilled cuisine | **ASSUMED: concept** |
| The Bento Lab | Asian-inspired fast casual | **ASSUMED: concept** |
| Midnight Kitchen | Late-night delivery | **ASSUMED: concept** |

**Recommendation:** Present on Concepts page and Ventures hub with "Concept" or "In Development" labelling unless client confirms operational status.

### 11. Copyright year

| File | Year |
|------|------|
| `index.html` | 2023 |
| `showcase.html` | 2025 |

**Recommendation:** Dynamic year (`new Date().getFullYear()`) or **2026** at launch; legal name must match confirmed surname.

---

## Content to Remove (Prototype)

| Item | Location | Reason |
|------|----------|--------|
| `kamoheloMotaung@chefalexandre.com` | `index.html` | Fictional placeholder |
| French/Michelin biography | `index.html` | Contradicts real education |
| Le Cordon Bleu credentials | `index.html` | Fictional |
| London/Paris/Lyon employers | `index.html` | Fictional |
| "Award-winning" / Michelin claims | `index.html` | Unverified |
| Unsplash stock hands image | `showcase.html` | Replace with chef-owned media |
| "Le Cordon Bleu training" alt text | `showcase.html` | Incorrect; image is IHS logo |
| "#1 Culinary School" badge | `showcase.html` | Unverified claim |
| "Master Chef Program" label | `showcase.html` | Likely inaccurate |

---

## Assumed Defaults (if client says "just go")

Use these only when explicitly authorised; mark **ASSUMED** in Phase 1 copy and confirm before launch:

| Item | Assumed value |
|------|---------------|
| Name | Kamohelo Mthombeni |
| Brand | Kamohelo Culinary Group |
| Education | International Hotel School, Diploma in Professional Cookery and Kitchen Management |
| Experience framing | Early-career professional chef & entrepreneur (avoid "15+ years") |
| Ghost kitchens | Concept stage |
| Instagram | Existing showcase URL until client provides official handle |

---

## Blockers for Phase 1

| # | Blocker | Owner | Recommended default |
|---|---------|-------|---------------------|
| 1 | Confirm legal surname (Mthombeni vs Motaung) | Client | Mthombeni |
| 2 | Provide real bio & career timeline | Client | Placeholder sections with `[TBD]` in draft only — not for public launch |
| 3 | Confirm business email & domain | Client | Form-only contact until domain ready |
| 4 | Confirm phone for public display | Client | Omit until confirmed |
| 5 | Confirm social media URLs | Client | Instagram from showcase; hide others |
| 6 | Confirm education dates & exact diploma name | Client | IHS diploma per proposal |
| 7 | Confirm ghost kitchen status (concept vs live) | Client | Label as concepts |
| 8 | Confirm service geography | Client | South Africa (assumed from phone + IHS) |

---

## LAUNCH_CHECKLIST

Use this before pointing the production domain at Vercel. Do **not** change confirmed values without client sign-off.

### Client sign-off (from open items above)

- [ ] Legal surname confirmed (**Mthombeni** vs Motaung) — site currently uses **Mthombeni**
- [ ] Business email & domain live (`hello@kamoheloculinary.co.za` — confirm)
- [ ] Phone `+27 083 972 5798` approved for public display
- [ ] Instagram handle confirmed (`alpha.middoew` — verify ownership)
- [ ] Education dates & exact diploma name confirmed (IHS 2022–2024)
- [ ] Real career timeline & bio approved (replace any ASSUMED narrative)
- [ ] Ghost kitchen status confirmed (**Concept** until client says live)
- [ ] Service geography & travel radius for private chef / catering
- [ ] Remove `draft: true` from approved recipes, techniques, and blog posts in `content/`

### Technical launch

- [ ] Vercel project connected to git repo
- [ ] `FORMSPREE_FORM_ID` set in Vercel env — test `/contact` on production URL
- [ ] `OPENAI_API_KEY` set (optional) — test `/ai` synthesized answers
- [ ] `NEXT_PUBLIC_SITE_URL` matches production domain (for sitemap & OG)
- [ ] Analytics env set if required (`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- [ ] Verify `/sitemap.xml` and `/robots.txt` on production
- [ ] Lighthouse spot-check: home, portfolio, recipes

### Content hygiene

- [ ] All `draft: true` content reviewed — publish or keep hidden (production hides drafts automatically)
- [ ] ASSUMED copy in `content/` replaced with chef-approved text (see `docs/PHASE_8_COMPLETION.md`)
- [ ] Portfolio dish photos and alt text accurate

### Post-launch roadmap (Phase 9+)

- Culinary Academy pages
- E-commerce / product lines
- Supabase pgvector for semantic AI search
- CMS for non-technical content editing
