# Kamohelo Culinary Arts — Website

Official website for **Chef Kamohelo Mthombeni** under the **Kamohelo Culinary Group** umbrella.

**Visual brand:** Kamohelo Culinary Arts (logo)  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS

## Local development

```bash
npm install
cp .env.example .env.local   # optional — forms & AI
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push the repo to GitHub (or GitLab/Bitbucket).
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables (Project → Settings → Environment Variables):

| Variable | Required | Purpose |
|----------|----------|---------|
| `FORMSPREE_FORM_ID` | **Yes** (for forms) | Contact & inquiry form submissions |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for sitemap & Open Graph |
| `OPENAI_API_KEY` | Optional | AI synthesized answers on `/ai` |
| `OPENAI_MODEL` | Optional | Default `gpt-4o-mini` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Plausible analytics |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 |

5. Deploy. Vercel runs `npm run build` automatically.
6. After deploy, test:
   - `https://your-domain.com/sitemap.xml`
   - `https://your-domain.com/robots.txt`
   - Submit a test inquiry on `/contact`
   - Search on `/ai`

### Formspree setup

1. Create a form at [formspree.io](https://formspree.io).
2. Copy the form ID (e.g. `xyzabcde`).
3. Set `FORMSPREE_FORM_ID=xyzabcde` in Vercel env for **Production**, **Preview**, and **Development**.
4. Redeploy if the variable was added after the first deploy.

## Editing content

| Content | Path | Guide |
|---------|------|-------|
| Recipes | `content/recipes/*.md` | `content/README.md` |
| Techniques | `content/techniques/*.md` | `content/README.md` |
| Blog / Journal | `content/blog/*.md` | `content/blog/README.md` |
| Ventures & concepts | `lib/ventures.ts` | Code change + redeploy |
| Services copy | `lib/services-content.ts` | Code change + redeploy |
| Nav & contact | `lib/constants.ts` | Code change + redeploy |

### Publishing draft content

Set `draft: true` in frontmatter while content is in review. In **production**, drafts are:

- Hidden from `/recipes`, `/blog`, `/techniques` indexes
- Excluded from sitemap and AI search index
- Not accessible via direct URL (404)

Remove `draft: true` (or set `draft: false`) and redeploy to publish.

In **development** (`npm run dev`), drafts are visible with a "Draft" badge.

## Project structure

```
app/              # Routes & API
components/       # UI components
content/          # Markdown recipes, techniques, blog
lib/              # Data loaders, AI index, constants
public/assets/    # Logo, profile, dishes, education
docs/             # Phase documentation & launch checklist
legacy/           # Original HTML prototypes (reference)
```

## Documentation

| Doc | Purpose |
|-----|---------|
| `docs/PHASE_8_COMPLETION.md` | Launch checklist & ASSUMED content list |
| `docs/DECISIONS.md` | Client decisions & `LAUNCH_CHECKLIST` |
| `docs/DESIGN_TOKENS.md` | Brand colours & typography |
| `docs/TECH_STACK.md` | Architecture reference |

## Security

- Never commit `.env.local` or API keys.
- `.env.example` contains placeholders only.
