const OFF_TOPIC_PATTERNS = [
  /\b(weather|forecast|temperature today)\b/i,
  /\b(stock market|crypto|bitcoin|invest(?!ment in hospitality))\b/i,
  /\b(homework|essay|python code|javascript|programming)\b/i,
  /\b(politics|election|president)\b/i,
  /\b(movie|netflix|football score)\b/i,
];

const MEDICAL_PATTERNS = [
  /\b(diagnos(e|is)|medication|prescri(be|ption))\b/i,
  /\b(cure|treat)\s+(my|your)?\s*(diabetes|celiac|allergy)\b/i,
  /\b(gluten.?free diet plan|keto diet for|weight loss plan)\b/i,
  /\b(is it safe to eat .+ if i am (pregnant|allergic))\b/i,
];

const CULINARY_HINTS =
  /\b(recipe|technique|cook|chef|dish|menu|food|kitchen|seafood|meat|beef|lamb|chicken|fish|dessert|sauce|catering|private chef|ghost kitchen|venture|concept|blog|portfolio|fire|ash|bento|midnight|pan.?sear|roulade|lava|pesto|grill|bake|roast)\b/i;

export type GuardrailResult =
  | { allowed: true }
  | { allowed: false; message: string };

export function checkQueryGuardrails(query: string): GuardrailResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      allowed: false,
      message: "Please enter a question about Chef Kamohelo's recipes, techniques, or culinary content.",
    };
  }

  if (OFF_TOPIC_PATTERNS.some((pattern) => pattern.test(trimmed))) {
    return {
      allowed: false,
      message:
        "I'm focused on Chef Kamohelo's culinary library — recipes, techniques, ventures, and journal posts. Try asking about a dish, technique, or ghost kitchen concept.",
    };
  }

  if (MEDICAL_PATTERNS.some((pattern) => pattern.test(trimmed))) {
    return {
      allowed: false,
      message:
        "I can't provide medical or dietary advice. For ingredient questions, search for a specific recipe in Chef Kamohelo's library or consult a healthcare professional.",
    };
  }

  if (trimmed.length > 500) {
    return {
      allowed: false,
      message: "Please keep your question shorter so I can search the library effectively.",
    };
  }

  return { allowed: true };
}

/** True when query has no culinary signal and is likely off-topic */
export function isLikelyOffTopic(query: string): boolean {
  return !CULINARY_HINTS.test(query) && query.trim().split(/\s+/).length <= 3;
}
