import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog-loader";
import { getRecipeSlugs } from "@/lib/recipes-loader";
import { SITE_URL } from "@/lib/site";
import { getTechniqueSlugs } from "@/lib/techniques-loader";

const STATIC_ROUTES = [
  "",
  "/about",
  "/portfolio",
  "/craft",
  "/recipes",
  "/techniques",
  "/blog",
  "/ai",
  "/businesses",
  "/concepts",
  "/private-chef",
  "/catering",
  "/consulting",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const recipeEntries: MetadataRoute.Sitemap = getRecipeSlugs().map((slug) => ({
    url: `${SITE_URL}/recipes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const techniqueEntries: MetadataRoute.Sitemap = getTechniqueSlugs().map((slug) => ({
    url: `${SITE_URL}/techniques/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getPostSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...recipeEntries, ...techniqueEntries, ...blogEntries];
}
