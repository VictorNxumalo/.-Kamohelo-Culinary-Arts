"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { RecipeFilters } from "@/components/recipes/RecipeFilters";
import type { Recipe, RecipeCategorySlug } from "@/lib/recipes";
import { filterRecipesByCategory } from "@/lib/recipes";

type RecipeGridProps = {
  recipes: Recipe[];
};

export function RecipeGrid({ recipes }: RecipeGridProps) {
  const [activeFilter, setActiveFilter] = useState<RecipeCategorySlug>("all");

  const filteredRecipes = useMemo(
    () => filterRecipesByCategory(recipes, activeFilter),
    [recipes, activeFilter]
  );

  return (
    <>
      <RecipeFilters active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredRecipes.map((recipe, i) => (
          <FadeIn key={recipe.slug} delay={i * 50}>
            <RecipeCard recipe={recipe} />
          </FadeIn>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p className="mt-12 text-center font-body text-sm text-stone-500">
          No recipes in this category yet — check back as the library grows.
        </p>
      )}
    </>
  );
}
