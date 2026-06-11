# Blog & Journal Content

Markdown files in this folder power `/blog` and `/blog/[slug]`. Add a file, rebuild, and the post appears automatically.

## Adding a post

1. Create `content/blog/{slug}.md` (filename should match the `slug` field).
2. Add YAML frontmatter between `---` delimiters.
3. Write the article body in markdown below the closing `---`.

### Required frontmatter

| Field | Description |
|-------|-------------|
| `title` | Post headline |
| `slug` | URL slug (e.g. `my-new-post` → `/blog/my-new-post`) |
| `date` | ISO date (`YYYY-MM-DD`) — used for sorting |
| `excerpt` | Short summary for cards and SEO |
| `category` | Category slug (see below) |
| `author` | Byline (e.g. `Chef Kamohelo Mthombeni`) |
| `featuredImage` | Path under `public/` (e.g. `/assets/dishes/...`) |

### Optional fields

| Field | Description |
|-------|-------------|
| `draft` | Set `true` for work-in-progress posts (shows Draft badge) |
| `relatedTechnique` | Technique slug — adds link to `/techniques/[slug]` |

### Category slugs

`kitchen-life` · `techniques` · `menu-development` · `entrepreneurship` · `food-trends`

### Markdown body support

- `## Heading` and `### Subheading`
- `**bold**`
- `- bullet lists`
- `[link text](/path)` internal links

## Images

Place images in `public/assets/` and reference with a leading slash. Portfolio dish photos work well for featured images.

## Launch content

Four posts are seeded with `draft: true` and **ASSUMED** copy in the body. Remove `draft: true` and replace placeholder narrative when the chef approves final text.

## Rebuild

```bash
npm run dev
# or
npm run build
```

Posts are loaded at build time via `lib/blog-loader.ts`.
