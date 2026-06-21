import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ConceptCard } from "@/components/ventures/ConceptCard";
import { BRAND } from "@/lib/constants";
import { CULINARY_CONCEPTS } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Ghost Kitchen & Restaurant Concepts",
  description: `Culinary concepts developed by ${BRAND.chef} — ghost kitchens and restaurant brands under ${BRAND.legal}.`,
};

export default function ConceptsPage() {
  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">Ventures</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Culinary Concepts
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Original restaurant and ghost kitchen concepts developed by Chef Kamohelo Mthombeni —
              each brand designed with a distinct cuisine, audience, and culinary identity.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="font-body text-sm font-light text-brand-cream-muted">
              All concepts below are labelled <span className="text-brand-gold">Concept</span> —
              brands in active development, not yet operating as live businesses unless otherwise
              noted by the client.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Showcase"
              title="Ghost Kitchen & Restaurant Concepts"
              description="Brand stories, target markets, and signature dishes for each venture in development."
              dark
            />
          </FadeIn>
          <div className="space-y-10">
            {CULINARY_CONCEPTS.map((concept, i) => (
              <FadeIn key={concept.id} delay={i * 100}>
                <ConceptCard concept={concept} detailed />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <SectionHeading title="Explore the Full Group" />
            <p className="-mt-6 font-body text-sm font-light text-brand-cream-muted">
              See how these concepts fit within the broader Kamohelo Culinary Group portfolio.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/businesses" className="btn-primary-solid">
                View All Businesses
              </Link>
              <Link href="/contact?type=general" className="btn-primary">
                Partnership Inquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
