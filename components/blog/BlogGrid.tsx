"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilters } from "@/components/blog/BlogFilters";
import type { BlogCategorySlug, BlogPost } from "@/lib/blog";
import { filterPostsByCategory } from "@/lib/blog";

type BlogGridProps = {
  posts: BlogPost[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  const [activeFilter, setActiveFilter] = useState<BlogCategorySlug>("all");

  const filteredPosts = useMemo(
    () => filterPostsByCategory(posts, activeFilter),
    [posts, activeFilter]
  );

  return (
    <>
      <BlogFilters active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {filteredPosts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 60}>
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-12 text-center font-body text-sm text-brand-text-muted">
          No posts in this category yet — check back soon.
        </p>
      )}
    </>
  );
}
