"use client";

import type { GalleryFilterSlug } from "@/lib/gallery";
import { GALLERY_FILTERS } from "@/lib/gallery";

type GalleryFiltersProps = {
  active: GalleryFilterSlug;
  onChange: (slug: GalleryFilterSlug) => void;
};

export function GalleryFilters({ active, onChange }: GalleryFiltersProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3"
      role="tablist"
      aria-label="Filter dishes by category"
    >
      {GALLERY_FILTERS.map((filter) => (
        <button
          key={filter.slug}
          type="button"
          role="tab"
          aria-selected={active === filter.slug}
          onClick={() => onChange(filter.slug)}
          className={`filter-pill ${active === filter.slug ? "active" : ""}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
