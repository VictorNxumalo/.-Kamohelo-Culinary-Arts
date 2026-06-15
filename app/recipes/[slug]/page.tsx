import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecipeDetail, recipeJsonLd } from "@/components/recipes/RecipeDetail";
import { draftRobots } from "@/lib/metadata-helpers";
import { BRAND } from "@/lib/constants";
import { getRecipeBySlug, getRecipeSlugs } from "@/lib/recipes-loader";
import { SITE_URL } from "@/lib/site";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getRecipeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe Not Found" };
  }

  const description = recipe.story
    .split("\n\n")[0]
    ?.replace(/\*\*/g, "")
    .trim()
    .slice(0, 160);

  return {
    title: recipe.title,
    description,
    ...draftRobots(recipe.draft),
    openGraph: {
      title: `${recipe.title} | ${BRAND.visual}`,
      description,
      images: [{ url: recipe.image, alt: recipe.title }],
      type: "article",
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const jsonLd = recipeJsonLd(recipe, SITE_URL);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Recipes", href: "/recipes" },
                { label: recipe.title },
              ]}
            />
            <RecipeDetail recipe={recipe} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
