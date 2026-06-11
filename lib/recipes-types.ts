export const RECIPE_CATEGORIES = [
  { slug: "all", label: "All Recipes" },
  { slug: "appetizers", label: "Appetizers" },
  { slug: "mains", label: "Mains" },
  { slug: "seafood", label: "Seafood" },
  { slug: "meat", label: "Meat" },
  { slug: "desserts", label: "Desserts" },
  { slug: "sauces", label: "Sauces" },
  { slug: "fine-dining", label: "Fine Dining" },
  { slug: "comfort-food", label: "Comfort Food" },
] as const;

export type RecipeCategorySlug = (typeof RECIPE_CATEGORIES)[number]["slug"];

export type Recipe = {
  slug: string;
  title: string;
  category: string;
  categories: string[];
  story: string;
  ingredients: string[];
  method: string[];
  image: string;
  images: string[];
  tags: string[];
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  yield?: string;
  draft?: boolean;
  portfolioSlug?: string;
};

export function filterRecipesByCategory(
  recipes: Recipe[],
  category: RecipeCategorySlug
): Recipe[] {
  if (category === "all") return recipes;
  return recipes.filter((recipe) => recipe.categories.includes(category));
}

export function formatCategoryLabel(slug: string): string {
  const match = RECIPE_CATEGORIES.find((c) => c.slug === slug);
  return match?.label ?? slug;
}
