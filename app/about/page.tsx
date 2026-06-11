import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Icon, IconBox } from "@/components/icons/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND, BRAND_STATEMENT, EDUCATION, TIMELINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${BRAND.chef} — culinary education, professional journey, and vision for ${BRAND.legal}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">About</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl">
              {BRAND.chefShort}
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              A culinary professional and emerging entrepreneur — trained at the International Hotel School,
              experienced on the line, and building a portfolio of hospitality ventures across South Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Journey */}
      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                eyebrow="My Journey"
                title="From Training to the Line"
                align="left"
              />
              <div className="space-y-5 font-body text-base font-light leading-relaxed text-stone-600">
                <p>
                  My path into professional kitchens began with formal education — learning classical
                  techniques, kitchen discipline, and the standards that define fine hospitality.
                </p>
                <p>
                  Today I bring that foundation to private dining, catering, recipe development, and the
                  entrepreneurial ventures taking shape under {BRAND.legal}.
                </p>
                <p>
                  My ambition extends beyond cooking alone: to build culinary brands that combine creativity,
                  hospitality, technology, and exceptional food experiences.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="gold-border-accent">
                <IconBox name="leaf" className="mb-4" />
                <h3 className="brand-caps text-sm text-brand-text-dark">Culinary Philosophy</h3>
                <p className="mt-4 font-body text-base font-light leading-relaxed text-stone-600">
                  Precision meets creativity. Every plate should tell a story — of ingredients respected,
                  technique refined, and hospitality felt. I believe in seasonality, consistency, and the
                  quiet discipline of a well-run kitchen.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-light border-t border-black/5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Education"
              title="Formal Training"
              description="True skill begins with disciplined education — learning techniques refined over generations."
            />
          </FadeIn>
          <FadeIn>
            <div className="card-light mx-auto max-w-4xl p-8 md:p-12">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                <div className="shrink-0">
                  <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-brand-gold/30 bg-white p-4">
                    <Image
                      src="/assets/education/ihs-logo.webp"
                      alt={`${EDUCATION.institution} logo`}
                      width={120}
                      height={120}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <Icon name="graduation" size={16} className="text-brand-gold" />
                    <span className="sub-label text-brand-gold">Formal Education</span>
                  </div>
                  <h3 className="brand-caps mt-3 text-xl text-brand-text-dark">
                    {EDUCATION.institution}
                  </h3>
                  <p className="mt-3 font-body text-base font-light text-stone-600">
                    {EDUCATION.qualification}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
                    <span className="inline-flex items-center gap-2 font-body text-sm text-stone-500">
                      <Icon name="calendar" size={14} className="text-brand-gold" />
                      {EDUCATION.dates}
                    </span>
                    <span className="inline-flex items-center gap-2 font-body text-sm text-stone-500">
                      <Icon name="map-pin" size={14} className="text-brand-gold" />
                      South Africa
                    </span>
                  </div>
                  <a
                    href={EDUCATION.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8 inline-flex items-center gap-2 border-brand-gold text-brand-gold"
                  >
                    Discover International Hotel School
                    <Icon name="external" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="Professional Timeline"
              description="Education, kitchen experience, and entrepreneurial development."
            />
          </FadeIn>
          <div className="space-y-10 border-l border-brand-gold/30 pl-8">
            {TIMELINE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <article className="timeline-dot relative">
                  <div className="card-light p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-start gap-4">
                        <IconBox name={item.icon} className="mb-0 h-10 w-10" size={18} />
                        <div>
                        <h3 className="brand-caps text-sm text-brand-text-dark">{item.title}</h3>
                        <p className="mt-1 font-body text-sm font-medium text-brand-gold">{item.org}</p>
                        </div>
                      </div>
                      <span className="sub-label text-stone-400">{item.period}</span>
                    </div>
                    <p className="mt-4 font-body text-sm font-light leading-relaxed text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Vision"
              title="Building a Culinary Group"
              description={BRAND_STATEMENT}
              dark
            />
            <Link href="/contact" className="btn-primary-solid mt-8 inline-flex items-center gap-2">
              <Icon name="mail" size={16} />
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
