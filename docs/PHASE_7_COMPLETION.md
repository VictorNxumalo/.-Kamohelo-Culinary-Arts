# Phase 7 Completion — AI Culinary Assistant

**Status:** Complete  
**Date:** 2026-06-11

---

## Routes Added

| Route | File | Description |
|-------|------|-------------|
| `/ai` | `app/ai/page.tsx` | Ask Chef Kamohelo — search UI + results |
| `POST /api/ask` | `app/api/ask/route.ts` | Keyword search + optional LLM synthesis |

---

## Search Modes

| Mode | When | Behaviour |
|------|------|-----------|
| **Search-only** | Default (no `OPENAI_API_KEY`) | Keyword scoring over content index; result cards with links |
| **Search + LLM** | `OPENAI_API_KEY` set | Top 5 chunks retrieved → OpenAI summarizes with strict system prompt + citations |

LLM is **never** called without retrieved context chunks.

---

## Content Index

**File:** `lib/ai/content-index.ts` (server-only, in-memory cache)

### Indexed sources

| Source | Type | URL pattern |
|--------|------|-------------|
| `content/recipes/*.md` | `recipe` | `/recipes/[slug]` |
| `content/techniques/*.md` | `technique` | `/techniques/[slug]` |
| `content/blog/*.md` | `blog` | `/blog/[slug]` |
| `lib/ventures.ts` concepts | `concept` | `/concepts#[id]` |
| Business divisions + future ventures | `venture` | `/businesses#…` |
| Brand, timeline, education | `about` | `/about` |
| Private chef + catering services | `service` | `/private-chef`, `/catering` |

### Chunk shape

```ts
{ id, type, title, slug, url, excerpt, bodyText, tags, ingredients? }
```

### How new content is indexed

**Automatic** — any new `.md` file under `content/recipes`, `content/techniques`, or `content/blog` is picked up on the next server start / build. No manual registration.

Ventures and services update when `lib/ventures.ts` or `lib/services-content.ts` change.

Call `resetContentIndexCache()` in dev if hot-reloading content without restart.

---

## Search Algorithm

**File:** `lib/ai/search.ts`

- Tokenize query; expand culinary synonyms (e.g. `beef` → meat, lamb, burger)
- Score: title (+12), tags (+8), ingredients (+9), excerpt (+5), body (+3), phrase bonus (+20)
- Return top 8 results above score threshold

### Test cases (manual)

| Query | Expected hits |
|-------|----------------|
| `beef` | Meat recipes (lamb, roulade via synonym), burgers in body text |
| `pan sear` | Pan-seared white fish recipe, pan-searing technique, blog post |
| `fire and ash` | Fire & Ash concept chunk |
| Nonsense / off-topic | Empty state or polite refusal |

---

## Guardrails

**File:** `lib/ai/guardrails.ts`

- Off-topic patterns (weather, politics, code, etc.) → polite redirect
- Medical/diet advice patterns → refusal
- Empty results → `"No matches in Chef Kamohelo's library"`
- LLM system prompt: answer only from context; no invented recipes

---

## API

### `POST /api/ask`

```json
{ "query": "seafood recipes", "website": "" }
```

| Field | Notes |
|-------|-------|
| `query` | Required search string |
| `website` | Honeypot — non-empty rejects request |

**Rate limit:** 30 requests / minute / IP (in-memory)

**Response:**

```json
{
  "query": "...",
  "mode": "search" | "search+llm",
  "results": [...],
  "answer": { "text": "...", "citations": [...] },
  "message": "..."
}
```

---

## Components

| Component | Path |
|-----------|------|
| AskChefSearch | `components/ai/AskChefSearch.tsx` |
| SearchResultCard | `components/ai/SearchResultCard.tsx` |

### Supporting libs

| File | Purpose |
|------|---------|
| `lib/ai/types.ts` | Shared types (client-safe) |
| `lib/ai/content-index.ts` | Build + cache index |
| `lib/ai/search.ts` | Keyword search |
| `lib/ai/guardrails.ts` | Query validation |
| `lib/ai/llm.ts` | Optional OpenAI synthesis |
| `lib/ai/rate-limit.ts` | Basic rate limiting |

---

## Home & Navigation

### Home — Recipe library section

- Working search form → `/ai?q=…`
- **Launch Culinary AI** → `/ai`
- Removed "Coming soon Phase 7"

### Footer

**Ask Chef** → `/ai`

---

## Environment

See `.env.example`:

```env
OPENAI_API_KEY=          # optional
OPENAI_MODEL=gpt-4o-mini # optional override
```

---

## Design

- Dark hero, cream `.input-ask` with gold focus ring
- Gold example prompt chips
- Result cards match `card-light` site pattern

---

## Out of Scope (unchanged)

User accounts · Chat history · Voice · Image upload · External training data · pgvector (noted for future Supabase upgrade)

---

## Build Verification

```bash
npm run build
```

---

## Handoff — Phase 8+

| Item | Notes |
|------|-------|
| Sitemap | Include `/ai` and content URLs |
| pgvector | Replace keyword search with Supabase embeddings when corpus grows |
| Persistent rate limits | Redis / Vercel KV for production |
| Search analytics | Log popular queries (privacy-conscious) |
