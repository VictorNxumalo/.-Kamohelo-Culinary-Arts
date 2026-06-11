"use client";

import type { RecipeCategorySlug } from "@/lib/recipes";
import { RECIPE_CATEGORIES } from "@/lib/recipes";

type RecipeFiltersProps = {
  active: RecipeCategorySlug;
  onChange: (slug: RecipeCategorySlug) => void;
};

export function RecipeFilters({ active, onChange }: RecipeFiltersProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3"
      role="tablist"
      aria-label="Filter recipes by category"
    >
      {RECIPE_CATEGORIES.map((category) => (
        <button
          key={category.slug}
          type="button"
          role="tab"
          aria-selected={active === category.slug}
          onClick={() => onChange(category.slug)}
          className={`filter-pill ${active === category.slug ? "active" : ""}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
