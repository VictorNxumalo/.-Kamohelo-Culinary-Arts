import { NextResponse } from "next/server";
import { checkQueryGuardrails, isLikelyOffTopic } from "@/lib/ai/guardrails";
import { synthesizeAnswer } from "@/lib/ai/llm";
import { checkRateLimit } from "@/lib/ai/rate-limit";
import { searchContentIndex } from "@/lib/ai/search";
import type { AskCitation, AskResponse } from "@/lib/ai/types";

const EMPTY_MESSAGE =
  "No matches in Chef Kamohelo's library. Try a recipe name, ingredient, technique, or venture concept.";

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "anonymous";
}

function toCitations(
  results: ReturnType<typeof searchContentIndex>
): AskCitation[] {
  const seen = new Set<string>();
  return results
    .filter((r) => {
      if (seen.has(r.url)) return false;
      seen.add(r.url);
      return true;
    })
    .map((r) => ({
      title: r.title,
      url: r.url,
      type: r.type,
    }));
}

export async function POST(request: Request) {
  try {
    const rate = checkRateLimit(getClientKey(request));
    if (!rate.ok) {
      return NextResponse.json(
        { error: `Too many requests. Try again in ${rate.retryAfter} seconds.` },
        { status: 429 }
      );
    }

    const body = (await request.json()) as {
      query?: string;
      website?: string;
    };

    if (body.website) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    const query = typeof body.query === "string" ? body.query.trim() : "";
    const guardrail = checkQueryGuardrails(query);

    if (!guardrail.allowed) {
      const response: AskResponse = {
        query,
        mode: "search",
        results: [],
        message: guardrail.message,
      };
      return NextResponse.json(response);
    }

    const results = searchContentIndex(query);

    if (results.length === 0) {
      const message = isLikelyOffTopic(query)
        ? "I'm focused on Chef Kamohelo's culinary library — recipes, techniques, ventures, and journal posts. Try one of the example prompts below."
        : EMPTY_MESSAGE;

      const response: AskResponse = {
        query,
        mode: "search",
        results: [],
        message,
      };
      return NextResponse.json(response);
    }

    const citations = toCitations(results);
    let answerText: string | undefined;
    let mode: AskResponse["mode"] = "search";

    const llmText = await synthesizeAnswer(query, results.slice(0, 5));
    if (llmText) {
      answerText = llmText;
      mode = "search+llm";
    }

    const response: AskResponse = {
      query,
      mode,
      results,
      answer: answerText
        ? { text: answerText, citations }
        : undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Ask API error:", error);
    return NextResponse.json(
      { error: "Unable to search the library right now." },
      { status: 500 }
    );
  }
}
