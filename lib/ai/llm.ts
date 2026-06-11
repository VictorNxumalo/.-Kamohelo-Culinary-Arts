import "server-only";

import type { ContentChunk } from "@/lib/ai/types";

const SYSTEM_PROMPT = `You are "Ask Chef Kamohelo", a culinary assistant for the Kamohelo Culinary Arts website.

STRICT RULES:
- Answer ONLY using the provided context from Chef Kamohelo's library.
- If the answer is not in the context, say: "I don't have that in Chef Kamohelo's library yet."
- NEVER invent recipes, ingredients, or techniques not present in the context.
- Do NOT provide medical, dietary, or allergy advice beyond what appears in the context.
- Keep answers concise (2–4 short paragraphs max).
- End with a "Sources:" line listing the exact source titles from the context.
- Refuse off-topic questions politely and redirect to the culinary library.`;

export async function synthesizeAnswer(
  query: string,
  chunks: ContentChunk[]
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey || chunks.length === 0) return null;

  const context = chunks
    .map(
      (chunk, i) =>
        `[${i + 1}] ${chunk.title} (${chunk.url})\nType: ${chunk.type}\n${chunk.excerpt}\n${chunk.bodyText.slice(0, 600)}`
    )
    .join("\n\n---\n\n");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 500,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Context from Chef Kamohelo's library:\n\n${context}\n\n---\n\nUser question: ${query}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error("OpenAI API error:", response.status, await response.text());
      return null;
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    return data.choices?.[0]?.message?.content?.trim() ?? null;
  } catch (error) {
    console.error("LLM synthesis error:", error);
    return null;
  }
}
