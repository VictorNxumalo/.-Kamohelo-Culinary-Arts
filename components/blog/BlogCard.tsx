import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatBlogCategory, formatPostDate } from "@/lib/blog";
import { showDraftBadge } from "@/lib/content-visibility";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-light group block overflow-hidden transition-shadow duration-500 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-bg">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {showDraftBadge(post.draft) && (
          <span className="absolute left-3 top-3 bg-brand-bg/90 px-2 py-1 font-body text-[10px] uppercase tracking-wide text-brand-gold">
            Draft
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="sub-label text-brand-gold">{formatBlogCategory(post.category)}</span>
          <time
            dateTime={post.date}
            className="font-body text-[10px] uppercase tracking-wide text-stone-400"
          >
            {formatPostDate(post.date)}
          </time>
        </div>
        <h3 className="brand-caps mt-3 text-sm text-brand-text-dark group-hover:text-brand-gold">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 font-body text-sm font-light text-stone-600">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
