import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "@/lib/recipes";
import { formatCategoryLabel } from "@/lib/recipes";
import { BRAND } from "@/lib/constants";
import { showDraftBadge } from "@/lib/content-visibility";

type RecipeDetailProps = {
  recipe: Recipe;
};

function formatStoryParagraphs(story: string): string[] {
  return story
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const storyParagraphs = formatStoryParagraphs(recipe.story);

  return (
    <article>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-4">
          {recipe.images.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden bg-brand-bg ${
                i === 0 ? "aspect-[4/3]" : "aspect-video"
              }`}
            >
              <Image
                src={src}
                alt={i === 0 ? recipe.title : `${recipe.title} — photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {recipe.categories.map((cat) => (
              <span
                key={cat}
                className="border border-brand-gold/30 px-3 py-1 font-body text-[10px] uppercase tracking-wide text-brand-gold"
              >
                {formatCategoryLabel(cat)}
              </span>
            ))}
            {showDraftBadge(recipe.draft) && (
              <span className="border border-white/20 px-3 py-1 font-body text-[10px] uppercase tracking-wide text-brand-cream-muted">
                Draft
              </span>
            )}
          </div>

          <h1 className="brand-caps mt-6 text-2xl text-brand-cream md:text-3xl">
            {recipe.title}
          </h1>

          {(recipe.prepTime || recipe.cookTime || recipe.yield) && (
            <dl className="mt-6 flex flex-wrap gap-6 font-body text-sm text-brand-cream-muted">
              {recipe.prepTime && (
                <div>
                  <dt className="sub-label text-brand-text-muted">Prep</dt>
                  <dd className="mt-1">{formatDuration(recipe.prepTime)}</dd>
                </div>
              )}
              {recipe.cookTime && (
                <div>
                  <dt className="sub-label text-brand-text-muted">Cook</dt>
                  <dd className="mt-1">{formatDuration(recipe.cookTime)}</dd>
                </div>
              )}
              {recipe.yield && (
                <div>
                  <dt className="sub-label text-brand-text-muted">Yield</dt>
                  <dd className="mt-1">{recipe.yield}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="mt-8 space-y-4">
            {storyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-sm font-light leading-relaxed text-brand-cream-muted whitespace-pre-line"
              >
                {paragraph.replace(/\*\*/g, "")}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="brand-caps text-lg text-brand-cream">Ingredients</h2>
          <div className="gold-rule mt-4" />
          <ul className="mt-6 space-y-3">
            {recipe.ingredients.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-body text-sm font-light text-brand-cream-muted"
              >
                <span className="text-brand-gold" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="brand-caps text-lg text-brand-cream">Method</h2>
          <div className="gold-rule mt-4" />
          <ol className="mt-6 space-y-4">
            {recipe.method.map((step, i) => (
              <li key={step} className="flex gap-4 font-body text-sm font-light text-brand-cream-muted">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-brand-gold/40 font-display text-xs text-brand-gold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-white/10 pt-10">
        <Link href="/recipes" className="btn-secondary">
          Back to Recipe Library
        </Link>
        <Link href="/techniques" className="btn-secondary">
          Technique Library
        </Link>
        {recipe.portfolioSlug && (
          <Link href="/portfolio" className="btn-secondary">
            View Portfolio
          </Link>
        )}
      </div>

      <p className="mt-8 font-body text-xs text-brand-text-muted">
        Recipe by {BRAND.chef} · {BRAND.legal}
      </p>
    </article>
  );
}

function formatDuration(iso: string): string {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return iso;
  const hours = match[1] ? `${match[1]} hr` : "";
  const mins = match[2] ? `${match[2]} min` : "";
  return [hours, mins].filter(Boolean).join(" ") || iso;
}

export function recipeJsonLd(recipe: Recipe, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.story.split("\n\n")[0]?.replace(/\*\*/g, "") ?? recipe.title,
    image: recipe.images.map((img) => `${siteUrl}${img}`),
    author: {
      "@type": "Person",
      name: BRAND.chef,
    },
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    recipeYield: recipe.yield,
    recipeCategory: recipe.categories.map(formatCategoryLabel).join(", "),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.method.map((text) => ({
      "@type": "HowToStep",
      text,
    })),
    keywords: recipe.tags.join(", "),
  };
}
