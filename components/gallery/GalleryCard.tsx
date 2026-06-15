import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery";
import { formatTagLabel } from "@/lib/gallery";

type GalleryCardProps = {
  item: GalleryItem;
  onClick: () => void;
};

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-sm border border-transparent bg-brand-bg text-left shadow-md transition-all duration-500 ease-premium active:scale-[0.98] hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-card-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="image-card-vignette object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="image-card-overlay">
          <h3 className="brand-caps text-sm text-brand-cream">{item.title}</h3>
          <p className="mt-2 line-clamp-2 font-body text-xs font-light text-brand-cream-muted">
            {item.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border border-white/20 px-2 py-0.5 font-body text-[10px] uppercase tracking-wide text-brand-cream"
              >
                {formatTagLabel(tag)}
              </span>
            ))}
          </div>
        </div>
        {item.featured && (
          <span className="absolute right-3 top-3 bg-brand-gold px-3 py-1 font-display text-[10px] uppercase tracking-wide text-brand-bg shadow-gold-sm">
            Featured
          </span>
        )}
      </div>
    </button>
  );
}
