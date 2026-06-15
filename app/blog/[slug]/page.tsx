import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { BlogPost, blogPostJsonLd } from "@/components/blog/BlogPost";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BRAND } from "@/lib/constants";
import { getPostBySlug, getPostSlugs } from "@/lib/blog-loader";
import { draftRobots } from "@/lib/metadata-helpers";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    ...draftRobots(post.draft),
    openGraph: {
      title: `${post.title} | ${BRAND.visual}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.featuredImage, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = blogPostJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Journal", href: "/blog" },
                { label: post.title },
              ]}
            />
            <BlogPost post={post} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
