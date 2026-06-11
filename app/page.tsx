import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  BRAND,
  BRAND_STATEMENT,
  HERO_SUBHEADLINE,
  SERVICES,
  SIGNATURE_DISHES,
} from "@/lib/constants";
import { getRecentPosts } from "@/lib/blog-loader";
import { getRecipeBySlug } from "@/lib/recipes-loader";
import { VENTURE_PREVIEW } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Home",
  description: HERO_SUBHEADLINE,
};

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="section-dark section-hero relative">
        <div className="hero-glow-orb hero-glow-orb--gold" aria-hidden="true" />
        <div className="hero-glow-orb hero-glow-orb--cream" aria-hidden="true" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <FadeIn>
            <p className="sub-label text-brand-gold">Kamohelo Culinary Arts</p>
            <h1 className="brand-caps mt-4 text-3xl font-light leading-tight text-brand-cream md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {BRAND.chef}
            </h1>
            <div className="gold-rule-animate mt-6" />
            <p className="mt-6 max-w-xl font-body text-lg font-light leading-relaxed text-brand-cream-muted md:text-xl">
              {HERO_SUBHEADLINE}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/private-chef" className="btn-primary-solid w-full justify-center sm:w-auto">
                Book Private Chef
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full justify-center sm:w-auto">
                View Signature Dishes
              </Link>
              <a href="#services" className="btn-secondary w-full justify-center sm:w-auto">
                Explore Services
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={180} className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="profile-ring h-72 w-72 md:h-80 md:w-80">
                <Image
                  src="/assets/profile/profile-image.jpeg"
                  alt={BRAND.chef}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="card-dark absolute -bottom-4 -right-2 px-6 py-4 shadow-gold-sm md:-right-4">
                <p className="brand-caps text-xl text-brand-gold">IHS</p>
                <p className="sub-label mt-1 text-brand-cream-muted">Graduate</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <a href="#services" className="scroll-cue hidden md:flex" aria-label="Scroll to services">
          <span className="sub-label text-[10px]">Discover</span>
          <svg className="h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* About preview */}
      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                eyebrow="About"
                title="Culinary Craft & Vision"
                description={BRAND_STATEMENT}
                align="left"
              />
              <Link href="/about" className="btn-primary mt-4 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white">
                Learn More About Me
              </Link>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="gold-border-accent card-light p-8">
                <ul className="space-y-4 font-body text-sm font-light text-stone-600 md:text-base">
                  <li className="flex gap-3">
                    <span className="text-brand-gold">—</span>
                    Diploma in Professional Cookery and Kitchen Management
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">—</span>
                    International Hotel School graduate
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">—</span>
                    Professional kitchen experience on the line
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">—</span>
                    Building ventures under {BRAND.legal}
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-light border-t border-black/5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="What We Offer"
              description="From intimate private dining to scalable culinary concepts — crafted with precision and artistry."
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => {
              const inner = (
                <>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-brand-gold/30 text-brand-gold transition-colors duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold/5">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="brand-caps text-sm text-brand-text-dark">{service.title}</h3>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                </>
              );

              return (
                <FadeIn key={service.title} delay={i * 80} subtle>
                  <Link
                    href={service.href}
                    className="card-light group block h-full p-6"
                  >
                    {inner}
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ventures preview */}
      <section className="section-dark py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Ventures"
              title="Explore Our Culinary Businesses"
              description="Discover the restaurants, ghost kitchens, catering brands, private chef services, and culinary ventures operating under the Kamohelo Culinary Group."
              dark
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {VENTURE_PREVIEW.map((venture, i) => (
              <FadeIn key={venture.name} delay={i * 100}>
                <Link
                  href={venture.href}
                  className="card-dark group block p-6 transition-colors hover:border-brand-gold/30"
                >
                  <span className="sub-label text-brand-gold">{venture.status}</span>
                  <h3 className="brand-caps mt-3 text-base text-brand-cream group-hover:text-brand-gold">
                    {venture.name}
                  </h3>
                  <p className="mt-2 font-body text-sm font-light text-brand-cream-muted">
                    {venture.cuisine}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href="/businesses" className="btn-secondary">
              View All Businesses
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Signature dishes */}
      <section id="signature-dishes" className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Portfolio Preview"
              title="Signature Dishes"
              description="A selection of plated creations — technique, balance, and presentation on every plate."
            />
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {SIGNATURE_DISHES.map((dish, i) => {
              const recipeSlug =
                "recipeSlug" in dish && dish.recipeSlug ? dish.recipeSlug : undefined;
              const href =
                recipeSlug && getRecipeBySlug(recipeSlug)
                  ? `/recipes/${recipeSlug}`
                  : "/portfolio";

              return (
                <FadeIn key={dish.title} delay={i * 60} subtle>
                  <Link
                    href={href}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-brand-bg shadow-md transition-all duration-500 ease-premium active:scale-[0.98] hover:-translate-y-1 hover:shadow-card-lift"
                  >
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <figcaption className="image-card-overlay">
                      <span className="brand-caps text-xs text-brand-cream">{dish.title}</span>
                    </figcaption>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href="/portfolio" className="btn-primary border-brand-gold text-brand-gold">
              View Culinary Portfolio
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Craft teaser */}
      <section className="section-dark border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Craft"
              title="Witness the Craft"
              description="A cinematic study of knife work, technique, and the disciplined art of culinary precision."
              dark
            />
            <Link href="/craft" className="btn-secondary mt-4">
              Watch Craft in Motion
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Recipe library */}
      <section className="section-dark border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Recipe Development Lab"
              title="Explore My Recipe Library"
              description="Signature recipes and technique guides — from fine dining mains to foundational kitchen skills."
              dark
            />
            <form action="/ai" method="get" className="mx-auto mt-10 max-w-xl">
              <label htmlFor="home-ai-search" className="sr-only">
                Search Chef Kamohelo&apos;s culinary library
              </label>
              <div className="flex gap-2">
                <input
                  id="home-ai-search"
                  type="search"
                  name="q"
                  placeholder="Search recipes, techniques, ingredients…"
                  className="input-ask min-w-0 flex-1"
                />
                <button type="submit" className="btn-primary-solid shrink-0 px-6">
                  Search
                </button>
              </div>
            </form>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/ai" className="btn-primary-solid">
                Launch Culinary AI
              </Link>
              <Link href="/recipes" className="btn-secondary">
                Browse Recipes
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Journal teaser */}
      <section className="section-light border-t border-black/5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Journal"
              title="Latest from the Kitchen"
              description="Insights on kitchen life, technique, menu development, and building a culinary brand."
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href="/blog" className="btn-primary border-brand-gold text-brand-gold">
              Read the Journal
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
