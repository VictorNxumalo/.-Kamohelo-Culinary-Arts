import Link from "next/link";
import type { ContentChunkType } from "@/lib/ai/types";

type SearchResultCardProps = {
  title: string;
  url: string;
  excerpt: string;
  type: ContentChunkType;
};

const TYPE_LABELS: Record<ContentChunkType, string> = {
  recipe: "Recipe",
  technique: "Technique",
  blog: "Journal",
  concept: "Concept",
  venture: "Venture",
  about: "About",
  service: "Service",
};

export function SearchResultCard({ title, url, excerpt, type }: SearchResultCardProps) {
  return (
    <Link
      href={url}
      className="card-light group block p-6 transition-shadow duration-300 hover:shadow-md"
    >
      <span className="sub-label text-brand-gold">{TYPE_LABELS[type]}</span>
      <h3 className="brand-caps mt-2 text-sm text-brand-cream group-hover:text-brand-gold">
        {title}
      </h3>
      <p className="mt-3 line-clamp-2 font-body text-sm font-light text-brand-cream-muted">
        {excerpt}
      </p>
      <p className="sub-label mt-4 text-brand-text-muted group-hover:text-brand-gold">View →</p>
    </Link>
  );
}
