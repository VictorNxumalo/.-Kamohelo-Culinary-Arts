"use client";

import type { BlogCategorySlug } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blog";

type BlogFiltersProps = {
  active: BlogCategorySlug;
  onChange: (slug: BlogCategorySlug) => void;
};

export function BlogFilters({ active, onChange }: BlogFiltersProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3"
      role="tablist"
      aria-label="Filter blog posts by category"
    >
      {BLOG_CATEGORIES.map((category) => (
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
