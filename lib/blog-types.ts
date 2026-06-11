export const BLOG_CATEGORIES = [
  { slug: "all", label: "All Posts" },
  { slug: "kitchen-life", label: "Kitchen Life" },
  { slug: "techniques", label: "Techniques" },
  { slug: "menu-development", label: "Menu Development" },
  { slug: "entrepreneurship", label: "Entrepreneurship" },
  { slug: "food-trends", label: "Food Trends" },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  featuredImage: string;
  draft?: boolean;
  body: string;
  relatedTechnique?: string;
};

export function filterPostsByCategory(
  posts: BlogPost[],
  category: BlogCategorySlug
): BlogPost[] {
  if (category === "all") return posts;
  return posts.filter((post) => post.category === category);
}

export function formatBlogCategory(slug: string): string {
  const match = BLOG_CATEGORIES.find((c) => c.slug === slug);
  return match?.label ?? slug;
}

export function formatPostDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
