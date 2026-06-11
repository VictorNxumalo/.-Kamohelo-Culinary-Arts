# Content — Recipe Development Lab

Markdown files in this folder power the Recipe Library (`/recipes`) and Technique Library (`/techniques`). No code changes are needed to add new content — drop in a file and rebuild.

## Adding a recipe

1. Create a new file in `content/recipes/` named `{slug}.md` (e.g. `herb-crusted-salmon.md`).
2. Copy the frontmatter structure from an existing recipe.
3. Required fields:

| Field | Description |
|-------|-------------|
| `title` | Display name |
| `slug` | URL slug (must match filename without `.md`) |
| `category` | Primary category slug (see below) |
| `categories` | Array of category slugs for filtering |
| `story` | Brand/chef narrative (supports paragraphs) |
| `ingredients` | YAML list of ingredient strings |
| `method` | YAML list of step strings |
| `image` | Path under `public/` (e.g. `/assets/dishes/...`) |

3. Optional: `images`, `tags`, `prepTime` / `cookTime` (ISO 8601, e.g. `PT30M`), `servings`, `yield`, `portfolioSlug`, `draft: true`.

### Category slugs

`appetizers` · `mains` · `seafood` · `meat` · `desserts` · `sauces` · `fine-dining` · `comfort-food`

A recipe can belong to multiple categories via the `categories` array.

4. Run `npm run dev` or `npm run build` — the recipe appears automatically on `/recipes`.

## Adding a technique

1. Create `content/techniques/{slug}.md`.
2. Required: `title`, `slug`, `summary`, `steps` (YAML list).
3. Optional: `tips`, `relatedRecipes` (recipe slugs), `tags`, `draft`.
4. Optional body text after the closing `---` for additional narrative.

## Images

Place photos in `public/assets/dishes/` (or a new subfolder under `public/assets/`). Reference them with a leading slash: `/assets/dishes/my-photo.jpeg`.

## Draft content

Set `draft: true` for work-in-progress recipes. Drafts show a badge in the library and on detail pages until the chef removes the flag.

## Current launch content

Five recipes and three techniques are seeded from portfolio dishes. Copy marked **ASSUMED** in story/body is draft placeholder until Chef Kamohelo confirms final recipes.
