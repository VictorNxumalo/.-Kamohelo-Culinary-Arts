"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { Lightbox } from "@/components/gallery/Lightbox";
import { Icon } from "@/components/icons/Icon";
import type { GalleryFilterSlug, GalleryItem } from "@/lib/gallery";
import { GALLERY_ITEMS } from "@/lib/gallery";

type GalleryGridProps = {
  items?: GalleryItem[];
};

export function GalleryGrid({ items = GALLERY_ITEMS }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterSlug>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filterKey, setFilterKey] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) => item.tags.includes(activeFilter));
  }, [activeFilter, items]);

  function handleFilterChange(slug: GalleryFilterSlug) {
    setActiveFilter(slug);
    setFilterKey((k) => k + 1);
  }

  return (
    <>
      <GalleryFilters active={activeFilter} onChange={handleFilterChange} />

      <div key={filterKey} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredItems.map((item, i) => (
          <FadeIn key={item.id} delay={i * 50} subtle>
            <GalleryCard item={item} onClick={() => setLightboxIndex(i)} />
          </FadeIn>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <FadeIn className="mt-12">
          <div className="card-light mx-auto max-w-md p-10 text-center">
            <Icon name="images" size={28} className="mx-auto text-brand-gold" />
            <p className="brand-caps mt-6 text-sm text-brand-cream">No dishes in this category yet</p>
            <p className="mt-3 font-body text-sm font-light text-brand-cream-muted">
              Try browsing all creations or explore another category.
            </p>
            <button
              type="button"
              onClick={() => handleFilterChange("all")}
              className="btn-primary mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              View All Creations
            </button>
          </div>
        </FadeIn>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
