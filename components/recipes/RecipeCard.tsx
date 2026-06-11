import Image from "next/image";
import Link from "next/link";
import { showDraftBadge } from "@/lib/content-visibility";
import type { Recipe } from "@/lib/recipes";
import { formatCategoryLabel } from "@/lib/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="card-light group block overflow-hidden rounded-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {showDraftBadge(recipe.draft) && (
          <span className="absolute left-3 top-3 bg-brand-bg/90 px-2 py-1 font-body text-[10px] uppercase tracking-wide text-brand-gold">
            Draft
          </span>
        )}
        <div className="image-card-overlay !opacity-100 md:!opacity-0 md:group-hover:!opacity-100">
          <span className="sub-label text-brand-gold">{formatCategoryLabel(recipe.category)}</span>
          <h3 className="brand-caps mt-2 text-xs text-brand-cream">{recipe.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="sub-label text-brand-gold">{formatCategoryLabel(recipe.category)}</p>
        <h3 className="brand-caps mt-2 text-sm text-brand-text-dark transition-colors duration-300 group-hover:text-brand-gold">
          {recipe.title}
        </h3>
        <p className="mt-3 line-clamp-2 font-body text-sm font-light text-stone-600">
          {recipe.story.replace(/\*\*ASSUMED:\*\*[\s\S]*/, "").trim()}
        </p>
      </div>
    </Link>
  );
}
