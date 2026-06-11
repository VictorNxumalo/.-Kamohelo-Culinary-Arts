import "server-only";

import { getPublishedPosts } from "@/lib/blog-loader";
import {
  BRAND,
  BRAND_STATEMENT,
  EDUCATION,
  HERO_SUBHEADLINE,
  TIMELINE,
} from "@/lib/constants";
import { getPublishedRecipes } from "@/lib/recipes-loader";
import {
  BOOKING_STEPS,
  CATERING_EVENT_TYPES,
  PRIVATE_CHEF_SERVICES,
} from "@/lib/services-content";
import { getPublishedTechniques } from "@/lib/techniques-loader";
import {
  BUSINESS_DIVISIONS,
  CULINARY_CONCEPTS,
  FUTURE_VENTURES,
} from "@/lib/ventures";
import type { ContentChunk } from "@/lib/ai/types";

let cachedIndex: ContentChunk[] | null = null;

function stripAssumed(text: string): string {
  return text.replace(/\*\*ASSUMED:\*\*[\s\S]*/g, "").trim();
}

function buildContentIndex(): ContentChunk[] {
  const chunks: ContentChunk[] = [];

  for (const recipe of getPublishedRecipes()) {
    chunks.push({
      id: `recipe-${recipe.slug}`,
      type: "recipe",
      title: recipe.title,
      slug: recipe.slug,
      url: `/recipes/${recipe.slug}`,
      excerpt: stripAssumed(recipe.story).slice(0, 200),
      bodyText: [
        recipe.title,
        recipe.story,
        recipe.categories.join(" "),
        recipe.tags.join(" "),
        recipe.ingredients.join(" "),
        recipe.method.join(" "),
      ].join("\n"),
      tags: [...recipe.categories, ...recipe.tags],
      ingredients: recipe.ingredients,
    });
  }

  for (const technique of getPublishedTechniques()) {
    chunks.push({
      id: `technique-${technique.slug}`,
      type: "technique",
      title: technique.title,
      slug: technique.slug,
      url: `/techniques/${technique.slug}`,
      excerpt: technique.summary,
      bodyText: [
        technique.title,
        technique.summary,
        technique.body,
        technique.steps.join(" "),
        technique.tips.join(" "),
        technique.tags.join(" "),
      ].join("\n"),
      tags: technique.tags,
    });
  }

  for (const post of getPublishedPosts()) {
    chunks.push({
      id: `blog-${post.slug}`,
      type: "blog",
      title: post.title,
      slug: post.slug,
      url: `/blog/${post.slug}`,
      excerpt: post.excerpt,
      bodyText: [post.title, post.excerpt, post.body, post.category].join("\n"),
      tags: [post.category],
    });
  }

  for (const concept of CULINARY_CONCEPTS) {
    chunks.push({
      id: `concept-${concept.id}`,
      type: "concept",
      title: concept.name,
      slug: concept.id,
      url: `/concepts#${concept.id}`,
      excerpt: concept.cuisine,
      bodyText: [
        concept.name,
        concept.cuisine,
        concept.brandStory,
        concept.targetMarket,
        concept.signatureDishes.join(" "),
        concept.statusLabel,
        concept.developmentPlans ?? "",
        "ghost kitchen restaurant concept venture",
      ].join("\n"),
      tags: [concept.type, concept.cuisine, concept.statusLabel, "ghost kitchen"],
    });
  }

  for (const division of BUSINESS_DIVISIONS) {
    chunks.push({
      id: `venture-${division.id}`,
      type: "venture",
      title: division.title,
      slug: division.id,
      url: `/businesses#${division.id}`,
      excerpt: division.description,
      bodyText: [division.title, division.description, division.eyebrow].join("\n"),
      tags: ["business", "venture", division.id],
    });
  }

  for (const venture of FUTURE_VENTURES) {
    chunks.push({
      id: `future-${venture.title.toLowerCase().replace(/\s+/g, "-")}`,
      type: "venture",
      title: venture.title,
      slug: venture.title.toLowerCase().replace(/\s+/g, "-"),
      url: "/businesses#future-ventures",
      excerpt: venture.description,
      bodyText: [venture.title, venture.description, venture.status].join("\n"),
      tags: ["future venture", venture.status],
    });
  }

  chunks.push({
    id: "about-brand",
    type: "about",
    title: `${BRAND.visual} — About`,
    slug: "about",
    url: "/about",
    excerpt: BRAND_STATEMENT,
    bodyText: [
      BRAND.visual,
      BRAND.legal,
      BRAND.chef,
      BRAND_STATEMENT,
      HERO_SUBHEADLINE,
      EDUCATION.institution,
      EDUCATION.qualification,
      EDUCATION.dates,
      TIMELINE.map((t) => `${t.title} ${t.description}`).join(" "),
    ].join("\n"),
    tags: ["about", "philosophy", "education", "chef"],
  });

  for (const service of PRIVATE_CHEF_SERVICES) {
    chunks.push({
      id: `service-private-${service.title.toLowerCase().replace(/\s+/g, "-")}`,
      type: "service",
      title: `Private Chef — ${service.title}`,
      slug: "private-chef",
      url: "/private-chef",
      excerpt: service.description,
      bodyText: [service.title, service.description, "private chef dining"].join("\n"),
      tags: ["private chef", "service", "dining"],
    });
  }

  for (const event of CATERING_EVENT_TYPES) {
    chunks.push({
      id: `service-catering-${event.title.toLowerCase().replace(/\s+/g, "-")}`,
      type: "service",
      title: `Catering — ${event.title}`,
      slug: "catering",
      url: "/catering",
      excerpt: event.description,
      bodyText: [event.title, event.description, "catering events"].join("\n"),
      tags: ["catering", "service", "events"],
    });
  }

  chunks.push({
    id: "service-booking-process",
    type: "service",
    title: "Private Chef Booking Process",
    slug: "private-chef",
    url: "/private-chef",
    excerpt: "How to book a private dining experience.",
    bodyText: BOOKING_STEPS.map((s) => `${s.title} ${s.description}`).join(" "),
    tags: ["private chef", "booking", "process"],
  });

  return chunks;
}

export function getContentIndex(): ContentChunk[] {
  if (!cachedIndex) {
    cachedIndex = buildContentIndex();
  }
  return cachedIndex;
}

/** Clears cache — useful in dev when content changes */
export function resetContentIndexCache(): void {
  cachedIndex = null;
}
