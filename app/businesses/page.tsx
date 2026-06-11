import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ConceptCard } from "@/components/ventures/ConceptCard";
import { BRAND } from "@/lib/constants";
import {
  BUSINESS_DIVISIONS,
  FUTURE_VENTURES,
  GHOST_KITCHEN_CONCEPTS,
  RESTAURANT_CONCEPTS,
} from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Businesses & Ventures",
  description: `Explore restaurants, ghost kitchens, catering, private chef services, and future ventures under ${BRAND.legal}.`,
};

export default function BusinessesPage() {
  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">{BRAND.legal}</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Businesses & Ventures
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              The central hub for every hospitality and food-service venture operating under
              Kamohelo Culinary Group — from private dining and catering to ghost kitchens and
              future culinary brands.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="font-body text-base font-light leading-relaxed text-brand-cream-muted">
              {BRAND.visual} brings together chef-led services and entrepreneurial concepts under one
              umbrella — combining craftsmanship, hospitality, and scalable food businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Restaurants */}
      <section id="restaurants" className="section-light border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Restaurants"
              title="Restaurant Division"
              description={BUSINESS_DIVISIONS.find((d) => d.id === "restaurants")?.description}
            />
          </FadeIn>
          {RESTAURANT_CONCEPTS.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RESTAURANT_CONCEPTS.map((concept, i) => (
                <FadeIn key={concept.id} delay={i * 80}>
                  <ConceptCard concept={concept} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="card-light mx-auto max-w-2xl p-8 text-center">
                <p className="sub-label text-brand-gold">In Development</p>
                <p className="mt-4 font-body text-sm font-light text-brand-cream-muted">
                  Brick-and-mortar restaurant concepts are in early development. Explore our ghost
                  kitchen brands below or view the full concepts showcase.
                </p>
                <Link href="/concepts" className="btn-primary mt-8 border-brand-gold text-brand-gold">
                  View Culinary Concepts
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Ghost Kitchens */}
      <section id="ghost-kitchens" className="section-dark py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Ghost Kitchens"
              title="Delivery-Focused Brands"
              description={BUSINESS_DIVISIONS.find((d) => d.id === "ghost-kitchens")?.description}
              dark
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {GHOST_KITCHEN_CONCEPTS.map((concept, i) => (
              <FadeIn key={concept.id} delay={i * 80}>
                <ConceptCard concept={concept} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href="/concepts" className="btn-secondary">
              Explore All Concepts
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Service divisions */}
      {(["private-chef", "catering", "consulting"] as const).map((divisionId) => {
        const division = BUSINESS_DIVISIONS.find((d) => d.id === divisionId)!;
        const isLight = divisionId !== "consulting";

        return (
          <section
            key={divisionId}
            id={divisionId}
            className={
              isLight
                ? "section-light border-t border-white/10 py-20 md:py-24"
                : "section-dark py-20 md:py-24"
            }
          >
            <div className="mx-auto max-w-4xl px-6">
              <FadeIn>
                <SectionHeading
                  eyebrow={division.eyebrow}
                  title={division.title}
                  description={division.description}
                  dark={!isLight}
                  align="center"
                />
                {division.cta && (
                  <div className="mt-10 text-center">
                    <Link
                      href={division.cta.href}
                      className={isLight ? "btn-primary-solid" : "btn-primary-solid"}
                    >
                      {division.cta.label}
                    </Link>
                  </div>
                )}
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* Future Ventures */}
      <section id="future-ventures" className="section-light border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Roadmap"
              title="Future Ventures"
              description={BUSINESS_DIVISIONS.find((d) => d.id === "future-ventures")?.description}
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {FUTURE_VENTURES.map((venture, i) => (
              <FadeIn key={venture.title} delay={i * 60}>
                <article className="card-light gold-border-accent p-6">
                  <span className="sub-label text-brand-gold">{venture.status}</span>
                  <h3 className="brand-caps mt-3 text-sm text-brand-cream">{venture.title}</h3>
                  <p className="mt-3 font-body text-sm font-light text-brand-cream-muted">
                    {venture.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <Link href="/contact?type=general" className="btn-primary border-brand-gold text-brand-gold">
              Discuss Partnership Opportunities
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
