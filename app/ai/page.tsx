import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { AskChefSearch } from "@/components/ai/AskChefSearch";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ask Chef Kamohelo",
  description: `Search ${BRAND.chef}'s recipe library, techniques, journal, and culinary ventures — answers from site content only.`,
};

type AiPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function AiPage({ searchParams }: AiPageProps) {
  const { q } = await searchParams;
  const initialQuery = typeof q === "string" ? q : "";

  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <p className="sub-label text-brand-gold">Culinary AI</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Ask Chef Kamohelo
            </h1>
            <div className="gold-rule mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Explore recipes, techniques, journal posts, and ventures — trained only on
              Chef Kamohelo&apos;s published library. No generic cooking chatbot.
            </p>
          </FadeIn>

          <FadeIn className="mt-12">
            <AskChefSearch initialQuery={initialQuery} />
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-body text-sm font-light text-stone-600">
              Answers are drawn from indexed recipes, techniques, blog posts, ventures, and
              services on this site. For bookings, visit{" "}
              <a href="/private-chef" className="text-brand-gold underline underline-offset-4">
                Private Chef
              </a>{" "}
              or{" "}
              <a href="/contact" className="text-brand-gold underline underline-offset-4">
                Contact
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
