import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BRAND } from "@/lib/constants";
import { showDraftBadge } from "@/lib/content-visibility";
import { draftRobots } from "@/lib/metadata-helpers";
import { getRecipeBySlug } from "@/lib/recipes-loader";
import {
  getTechniqueBySlug,
  getTechniqueSlugs,
} from "@/lib/techniques-loader";

type TechniquePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTechniqueSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TechniquePageProps): Promise<Metadata> {
  const { slug } = await params;
  const technique = getTechniqueBySlug(slug);

  if (!technique) {
    return { title: "Technique Not Found" };
  }

  return {
    title: technique.title,
    description: technique.summary,
    ...draftRobots(technique.draft),
    openGraph: {
      title: `${technique.title} | ${BRAND.visual}`,
      description: technique.summary,
      type: "article",
    },
  };
}

export default async function TechniquePage({ params }: TechniquePageProps) {
  const { slug } = await params;
  const technique = getTechniqueBySlug(slug);

  if (!technique) {
    notFound();
  }

  const relatedRecipes = technique.relatedRecipes
    .map((recipeSlug) => getRecipeBySlug(recipeSlug))
    .filter(Boolean);

  return (
    <section className="section-dark py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Techniques", href: "/techniques" },
              { label: technique.title },
            ]}
          />
          {showDraftBadge(technique.draft) && (
            <span className="sub-label text-brand-text-muted">Draft</span>
          )}
          <p className="sub-label mt-2 text-brand-gold">Technique</p>
          <h1 className="brand-caps mt-4 text-2xl text-brand-cream md:text-3xl">
            {technique.title}
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-6 font-body text-base font-light leading-relaxed text-brand-cream-muted">
            {technique.summary}
          </p>

          {technique.body && (
            <div className="mt-8 space-y-4">
              {technique.body.split(/\n\n+/).map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-sm font-light leading-relaxed text-brand-cream-muted whitespace-pre-line"
                >
                  {paragraph.replace(/\*\*/g, "")}
                </p>
              ))}
            </div>
          )}

          <section className="mt-12">
            <h2 className="brand-caps text-lg text-brand-cream">Steps</h2>
            <div className="gold-rule mt-4" />
            <ol className="mt-6 space-y-4">
              {technique.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 font-body text-sm font-light text-brand-cream-muted"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-brand-gold/40 font-display text-xs text-brand-gold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          {technique.tips.length > 0 && (
            <section className="mt-12">
              <h2 className="brand-caps text-lg text-brand-cream">Chef Tips</h2>
              <div className="gold-rule mt-4" />
              <ul className="mt-6 space-y-3">
                {technique.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex gap-3 font-body text-sm font-light text-brand-cream-muted"
                  >
                    <span className="text-brand-gold" aria-hidden="true">
                      —
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {relatedRecipes.length > 0 && (
            <section className="mt-12 border-t border-white/10 pt-10">
              <h2 className="brand-caps text-sm text-brand-cream">Related Recipes</h2>
              <ul className="mt-4 space-y-2">
                {relatedRecipes.map(
                  (recipe) =>
                    recipe && (
                      <li key={recipe.slug}>
                        <Link
                          href={`/recipes/${recipe.slug}`}
                          className="font-body text-sm text-brand-gold transition-colors hover:text-brand-gold-hover"
                        >
                          {recipe.title} →
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </section>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/techniques" className="btn-secondary">
              All Techniques
            </Link>
            <Link href="/recipes" className="btn-secondary">
              Recipe Library
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
