import "server-only";

import { listContentFiles, readContentFile } from "@/lib/content-parser";
import { filterPublished, isPublished } from "@/lib/content-visibility";
import type { Recipe } from "@/lib/recipes-types";

type RecipeFrontmatter = {
  title: string;
  slug: string;
  category: string;
  categories?: string[];
  story: string;
  ingredients: string[];
  method: string[];
  image: string;
  images?: string[];
  tags?: string[];
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  yield?: string;
  draft?: boolean;
  portfolioSlug?: string;
};

function normalizeRecipe(data: RecipeFrontmatter): Recipe {
  const categories = data.categories?.length
    ? data.categories
    : [data.category];

  return {
    slug: data.slug,
    title: data.title,
    category: data.category,
    categories,
    story: data.story.trim(),
    ingredients: data.ingredients,
    method: data.method,
    image: data.image,
    images: data.images?.length ? data.images : [data.image],
    tags: data.tags ?? categories,
    prepTime: data.prepTime,
    cookTime: data.cookTime,
    servings: data.servings,
    yield: data.yield,
    draft: data.draft ?? false,
    portfolioSlug: data.portfolioSlug,
  };
}

export function getAllRecipes(): Recipe[] {
  return listContentFiles("recipes")
    .map((file) => {
      const { data } = readContentFile<RecipeFrontmatter>("recipes", file);
      return normalizeRecipe(data);
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPublishedRecipes(): Recipe[] {
  return filterPublished(getAllRecipes());
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  const recipe = getAllRecipes().find((item) => item.slug === slug);
  if (!recipe || !isPublished(recipe.draft)) return undefined;
  return recipe;
}

export function getRecipeSlugs(): string[] {
  return getPublishedRecipes().map((recipe) => recipe.slug);
}
