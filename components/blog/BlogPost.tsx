import Image from "next/image";
import Link from "next/link";
import type { BlogPost as BlogPostType } from "@/lib/blog";
import { formatBlogCategory, formatPostDate } from "@/lib/blog";
import { BRAND } from "@/lib/constants";
import { showDraftBadge } from "@/lib/content-visibility";
import { markdownToHtml } from "@/lib/markdown";
import { SITE_URL } from "@/lib/site";

type BlogPostProps = {
  post: BlogPostType;
};

export function BlogPost({ post }: BlogPostProps) {
  const html = markdownToHtml(post.body);

  return (
    <article>
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <span className="sub-label text-brand-gold">{formatBlogCategory(post.category)}</span>
          {showDraftBadge(post.draft) && (
            <span className="sub-label text-brand-text-muted">Draft</span>
          )}
        </div>
        <h1 className="brand-caps mt-4 text-2xl text-brand-cream md:text-4xl">{post.title}</h1>
        <div className="gold-rule mt-6" />
        <div className="mt-6 flex flex-wrap items-center gap-4 font-body text-sm text-brand-cream-muted">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </div>
        <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-brand-cream-muted">
          {post.excerpt}
        </p>
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-brand-bg">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
        />
      </div>

      <div
        className="prose-brand mt-12"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {post.relatedTechnique && (
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="sub-label text-brand-gold">Related technique</p>
          <Link
            href={`/techniques/${post.relatedTechnique}`}
            className="mt-2 inline-block font-body text-sm text-brand-cream-muted transition-colors hover:text-brand-gold"
          >
            View technique guide →
          </Link>
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-10">
        <Link href="/blog" className="btn-secondary">
          All Journal Posts
        </Link>
        <Link href="/recipes" className="btn-secondary">
          Recipe Library
        </Link>
      </div>

      <p className="mt-8 font-body text-xs text-brand-text-muted">
        {BRAND.visual} · {BRAND.legal}
      </p>
    </article>
  );
}

export function blogPostJsonLd(post: BlogPostType) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.legal,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo/kamohelo-culinary-arts.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: formatBlogCategory(post.category),
  };
}
