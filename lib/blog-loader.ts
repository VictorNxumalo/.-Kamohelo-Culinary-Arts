import "server-only";

import { listContentFiles, readContentFile } from "@/lib/content-parser";
import type { BlogPost } from "@/lib/blog-types";
import { filterPublished, isPublished } from "@/lib/content-visibility";

type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  featuredImage: string;
  draft?: boolean;
  relatedTechnique?: string;
};

function normalizePost(data: BlogFrontmatter, body: string): BlogPost {
  return {
    slug: data.slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt.trim(),
    category: data.category,
    author: data.author,
    featuredImage: data.featuredImage,
    draft: data.draft ?? false,
    body: body.trim(),
    relatedTechnique: data.relatedTechnique,
  };
}

export function getAllPosts(): BlogPost[] {
  return listContentFiles("blog")
    .filter((file) => !file.toLowerCase().startsWith("readme"))
    .map((file) => {
      const { data, content } = readContentFile<BlogFrontmatter>("blog", file);
      return normalizePost(data, content);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPublishedPosts(): BlogPost[] {
  return filterPublished(getAllPosts());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = getAllPosts().find((item) => item.slug === slug);
  if (!post || !isPublished(post.draft)) return undefined;
  return post;
}

export function getPostSlugs(): string[] {
  return getPublishedPosts().map((post) => post.slug);
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return getPublishedPosts().slice(0, limit);
}
