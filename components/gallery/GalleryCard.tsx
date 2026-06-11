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
      className="group relative w-full overflow-hidden bg-brand-bg text-left shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
          <span className="absolute right-3 top-3 bg-brand-gold px-3 py-1 font-display text-[10px] uppercase tracking-wide text-brand-bg">
            Featured
          </span>
        )}
      </div>
    </button>
  );
}
