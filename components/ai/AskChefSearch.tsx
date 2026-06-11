"use client";

import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SearchResultCard } from "@/components/ai/SearchResultCard";
import type { AskResponse } from "@/lib/ai/types";

const EXAMPLE_PROMPTS = [
  "Show me a beef dish",
  "Seafood recipes",
  "Pan-searing technique",
  "Ghost kitchen concepts",
] as const;

type AskChefSearchProps = {
  initialQuery?: string;
};

export function AskChefSearch({ initialQuery = "" }: AskChefSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AskResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runSearch = useCallback(async (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed, website: "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Search failed. Please try again.");
        return;
      }

      setResponse(data as AskResponse);
    } catch {
      setError("Unable to reach the search service. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialQuery.trim()) {
      runSearch(initialQuery);
    }
  }, [initialQuery, runSearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    runSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
        <label htmlFor="ask-query" className="sr-only">
          Search Chef Kamohelo&apos;s culinary library
        </label>
        <div className="relative">
          <input
            id="ask-query"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes, techniques, ingredients, ventures…"
            className="input-ask w-full pr-14"
            autoComplete="off"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-gold px-4 py-2 font-display text-xs uppercase tracking-wide text-brand-bg transition-colors hover:bg-brand-gold-hover disabled:opacity-50"
          >
            {loading ? "…" : "Search"}
          </button>
        </div>
        {/* Honeypot — mirrored server-side; kept hidden from users */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />
      </form>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {EXAMPLE_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => {
              setQuery(prompt);
              runSearch(prompt);
            }}
            disabled={loading}
            className="filter-pill border-white/20 text-brand-cream hover:border-brand-gold hover:bg-brand-gold hover:text-brand-bg"
          >
            {prompt}
          </button>
        ))}
      </div>

      {error && (
        <p className="mt-10 text-center font-body text-sm text-red-300" role="alert">
          {error}
        </p>
      )}

      {response?.message && response.results.length === 0 && (
        <FadeIn className="mt-12">
          <div className="card-dark mx-auto max-w-2xl p-8 text-center">
            <p className="font-body text-sm font-light text-brand-cream-muted">
              {response.message}
            </p>
          </div>
        </FadeIn>
      )}

      {response?.answer && (
        <FadeIn className="mt-12">
          <div className="card-dark mx-auto max-w-3xl p-8 md:p-10">
            <p className="sub-label text-brand-gold">
              {response.mode === "search+llm" ? "Chef Kamohelo's Library" : "Answer"}
            </p>
            <div className="mt-4 whitespace-pre-line font-body text-sm font-light leading-relaxed text-brand-cream-muted md:text-base">
              {response.answer.text}
            </div>
            {response.answer.citations.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="sub-label text-brand-text-muted">Sources</p>
                <ul className="mt-3 space-y-2">
                  {response.answer.citations.map((citation) => (
                    <li key={citation.url}>
                      <a
                        href={citation.url}
                        className="font-body text-sm text-brand-gold underline decoration-brand-gold/40 underline-offset-4 hover:text-brand-gold-hover"
                      >
                        {citation.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </FadeIn>
      )}

      {response && response.results.length > 0 && (
        <FadeIn className="mt-12">
          <p className="mb-6 text-center sub-label text-brand-cream-muted">
            {response.results.length} result{response.results.length !== 1 ? "s" : ""} in the
            library
            {response.mode === "search" && (
              <span className="block mt-1 font-body text-[10px] normal-case text-brand-text-muted">
                Search-only mode — add OPENAI_API_KEY for synthesized answers
              </span>
            )}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {response.results.map((result) => (
              <SearchResultCard
                key={result.id}
                title={result.title}
                url={result.url}
                excerpt={result.excerpt}
                type={result.type}
              />
            ))}
          </div>
        </FadeIn>
      )}
    </div>
  );
}
