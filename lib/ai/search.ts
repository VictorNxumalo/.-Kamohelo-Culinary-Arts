import "server-only";

import { getContentIndex } from "@/lib/ai/content-index";
import type { ContentChunk, SearchResult } from "@/lib/ai/types";

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "me",
  "my",
  "show",
  "find",
  "get",
  "what",
  "how",
  "is",
  "are",
  "in",
  "for",
  "to",
  "of",
]);

/** Expand query tokens with culinary synonyms for broader matching */
const SYNONYMS: Record<string, string[]> = {
  beef: ["beef", "meat", "burger", "lamb", "roulade", "steak", "ribeye"],
  meat: ["meat", "beef", "lamb", "chicken", "roulade", "burger"],
  seafood: ["seafood", "fish", "salmon", "fillet", "pan-seared"],
  fish: ["fish", "seafood", "fillet", "pan-seared", "white fish"],
  dessert: ["dessert", "desserts", "chocolate", "cake", "fondant", "lava"],
  ghost: ["ghost", "kitchen", "delivery", "concept"],
  sear: ["sear", "searing", "pan-sear", "pan", "crust"],
  technique: ["technique", "skill", "method", "guide"],
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function expandTokens(tokens: string[]): string[] {
  const expanded = new Set(tokens);
  for (const token of tokens) {
    for (const [key, values] of Object.entries(SYNONYMS)) {
      if (token.includes(key) || key.includes(token)) {
        values.forEach((v) => expanded.add(v));
      }
    }
  }
  return [...expanded];
}

function scoreChunk(chunk: ContentChunk, queryTokens: string[], phrase: string): number {
  const titleLower = chunk.title.toLowerCase();
  const bodyLower = chunk.bodyText.toLowerCase();
  const excerptLower = chunk.excerpt.toLowerCase();
  const tagsLower = chunk.tags.map((t) => t.toLowerCase());
  const ingredientsLower = (chunk.ingredients ?? []).map((i) => i.toLowerCase());

  let score = 0;

  if (phrase.length > 2 && bodyLower.includes(phrase)) score += 20;
  if (phrase.length > 2 && titleLower.includes(phrase)) score += 25;

  for (const token of queryTokens) {
    if (titleLower.includes(token)) score += 12;
    if (tagsLower.some((t) => t.includes(token))) score += 8;
    if (ingredientsLower.some((i) => i.includes(token))) score += 9;
    if (excerptLower.includes(token)) score += 5;
    if (bodyLower.includes(token)) score += 3;
  }

  return score;
}

export function searchContentIndex(query: string, limit = 8): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const rawTokens = tokenize(trimmed);
  if (rawTokens.length === 0) return [];

  const queryTokens = expandTokens(rawTokens);
  const phrase = rawTokens.join(" ");

  const scored = getContentIndex()
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(chunk, queryTokens, phrase),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit);
}
