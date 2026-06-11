import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BRAND } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/blog-loader";

export const metadata: Metadata = {
  title: "Journal — Blog & Insights",
  description: `Culinary insights, kitchen life, and entrepreneurship from ${BRAND.chef}.`,
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">Blog & Insights</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Journal
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Stories from the kitchen, technique insights, menu development thinking, and the
              entrepreneurship journey behind Kamohelo Culinary Group.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {posts.length > 0 ? (
            <BlogGrid posts={posts} />
          ) : (
            <FadeIn>
              <div className="card-light mx-auto max-w-xl p-10 text-center">
                <p className="sub-label text-brand-gold">Coming Soon</p>
                <p className="mt-4 font-body text-sm font-light text-stone-600">
                  Journal posts are in preparation. Follow on Instagram for updates.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
