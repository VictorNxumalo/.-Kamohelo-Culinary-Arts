import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { BRAND } from "@/lib/constants";
import { getPublishedRecipes } from "@/lib/recipes-loader";

export const metadata: Metadata = {
  title: "Recipe Development Lab",
  description: `Signature recipes, techniques, and culinary development by ${BRAND.chef}.`,
};

export default function RecipesPage() {
  const recipes = getPublishedRecipes();

  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">Recipe Development Lab</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Recipe Library
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Original recipes developed in the kitchen — from fine dining mains to comfort classics.
              Filter by category or explore the technique library for foundational skills.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {recipes.length > 0 ? (
            <RecipeGrid recipes={recipes} />
          ) : (
            <FadeIn>
              <div className="card-light mx-auto max-w-xl p-10 text-center">
                <p className="sub-label text-brand-gold">Coming Soon</p>
                <p className="mt-4 font-body text-sm font-light text-stone-600">
                  Recipes are being finalised by the chef. Check back soon or explore the{" "}
                  <Link href="/portfolio" className="text-brand-gold underline underline-offset-4">
                    culinary portfolio
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-body text-base font-light text-brand-cream-muted">
              Building technique? Browse step-by-step guides in the technique library.
            </p>
            <Link href="/techniques" className="btn-secondary mt-8">
              View Technique Library
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
