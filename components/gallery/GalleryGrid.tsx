"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { Lightbox } from "@/components/gallery/Lightbox";
import type { GalleryFilterSlug, GalleryItem } from "@/lib/gallery";
import { GALLERY_ITEMS } from "@/lib/gallery";

type GalleryGridProps = {
  items?: GalleryItem[];
};

export function GalleryGrid({ items = GALLERY_ITEMS }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterSlug>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) => item.tags.includes(activeFilter));
  }, [activeFilter, items]);

  return (
    <>
      <GalleryFilters active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredItems.map((item, i) => (
          <FadeIn key={item.id} delay={i * 50}>
            <GalleryCard item={item} onClick={() => setLightboxIndex(i)} />
          </FadeIn>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="mt-12 text-center font-body text-sm text-stone-500">
          No dishes in this category yet.
        </p>
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
