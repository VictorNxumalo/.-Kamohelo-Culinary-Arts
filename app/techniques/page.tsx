import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ComingSoonCard } from "@/components/ComingSoonCard";
import { MotionHero } from "@/components/motion/MotionHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND } from "@/lib/constants";
import { showDraftBadge } from "@/lib/content-visibility";
import { MOTION_HEROES } from "@/lib/motion";
import { getPublishedTechniques } from "@/lib/techniques-loader";

export const metadata: Metadata = {
  title: "Technique Library",
  description: `Culinary techniques and foundational skills from ${BRAND.chef}.`,
};

export default function TechniquesPage() {
  const techniques = getPublishedTechniques();

  return (
    <>
      <MotionHero config={MOTION_HEROES.techniques} size="default">
        <FadeIn>
          <p className="sub-label text-brand-gold">Recipe Development Lab</p>
          <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
            Technique Library
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
            Step-by-step technique guides — the skills behind the recipes. From butchery to
            pastry fundamentals.
          </p>
        </FadeIn>
      </MotionHero>

      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Guides"
              title="Core Techniques"
              description="Select a technique to view steps, tips, and related recipes."
            />
          </FadeIn>
          {techniques.length === 0 ? (
            <FadeIn>
              <ComingSoonCard
                icon="technique"
                description="Step-by-step technique guides are being finalised. Browse the recipe library or ask the chef while new content is on the way."
                primaryCta={{ href: "/contact", label: "Get in Touch" }}
                secondaryCta={{ href: "/ai", label: "Ask Chef" }}
              />
            </FadeIn>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {techniques.map((technique, i) => (
                <FadeIn key={technique.slug} delay={i * 80}>
                  <Link
                    href={`/techniques/${technique.slug}`}
                    className="card-light group block h-full p-6 transition-shadow hover:shadow-md"
                  >
                    {showDraftBadge(technique.draft) && (
                      <span className="sub-label text-brand-text-muted">Draft</span>
                    )}
                    <h2 className="brand-caps mt-2 text-sm text-brand-cream group-hover:text-brand-gold">
                      {technique.title}
                    </h2>
                    <p className="mt-3 font-body text-sm font-light text-brand-cream-muted">
                      {technique.summary}
                    </p>
                    <p className="sub-label mt-4 text-brand-gold">Read technique →</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <Link href="/recipes" className="btn-secondary">
              Browse Recipe Library
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
