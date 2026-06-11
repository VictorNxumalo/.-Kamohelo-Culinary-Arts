/** Canonical production URL — override via env for preview deploys */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kamoheloculinary.co.za";

export const DEFAULT_OG_IMAGE = "/assets/logo/kamohelo-culinary-arts.png";
