/**
 * Draft content is visible in development (with badges).
 * In production, drafts are excluded from listings, sitemap, AI index, and return 404 on direct access.
 */
export function isPublished(draft?: boolean): boolean {
  if (!draft) return true;
  return process.env.NODE_ENV === "development";
}

export function filterPublished<T extends { draft?: boolean }>(items: T[]): T[] {
  return items.filter((item) => isPublished(item.draft));
}

export function showDraftBadge(draft?: boolean): boolean {
  return Boolean(draft) && process.env.NODE_ENV === "development";
}
