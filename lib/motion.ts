/**
 * Motion graphics configuration — drop MP4 files into `public/assets/motion/`.
 * Until a page-specific clip exists, `fallbackVideoSrc` (craft showcase) is used when available.
 *
 * Recommended exports: H.264 MP4, 10–30s loop, silent, 1920×1080 or 1280×720.
 */

export const CRAFT_SHOWCASE_VIDEO = "/assets/showcase/showcase.mp4";
export const CRAFT_SHOWCASE_POSTER = "/assets/showcase/showcase.image.jpeg";

export type MotionOverlay = "cinematic" | "bottom" | "balanced";

export type MotionHeroConfig = {
  /** Still frame when video is unavailable or reduced-motion is on */
  poster: string;
  /** Page-specific loop — e.g. `/assets/motion/recipes-hero.mp4` */
  videoSrc?: string;
  /** Used when `videoSrc` is missing or fails to load */
  fallbackVideoSrc?: string;
  /** Background media strength (0–1) */
  mediaOpacity?: number;
  overlay?: MotionOverlay;
};

export const MOTION_HEROES = {
  portfolio: {
    poster: "/assets/dishes/Pan-Seared White Fish Fillet.jpeg",
    videoSrc: "/assets/motion/portfolio-hero.mp4",
    fallbackVideoSrc: CRAFT_SHOWCASE_VIDEO,
    mediaOpacity: 0.4,
    overlay: "cinematic",
  },
  recipes: {
    poster: "/assets/dishes/Chicken roulade.jpeg",
    videoSrc: "/assets/motion/recipes-hero.mp4",
    fallbackVideoSrc: CRAFT_SHOWCASE_VIDEO,
    mediaOpacity: 0.28,
    overlay: "balanced",
  },
  journal: {
    poster: CRAFT_SHOWCASE_POSTER,
    videoSrc: "/assets/motion/journal-hero.mp4",
    fallbackVideoSrc: CRAFT_SHOWCASE_VIDEO,
    mediaOpacity: 0.25,
    overlay: "balanced",
  },
  techniques: {
    poster: "/assets/dishes/Rack of lamb.jpeg",
    videoSrc: "/assets/motion/techniques-hero.mp4",
    fallbackVideoSrc: CRAFT_SHOWCASE_VIDEO,
    mediaOpacity: 0.3,
    overlay: "bottom",
  },
} as const satisfies Record<string, MotionHeroConfig>;

export type MotionHeroPreset = keyof typeof MOTION_HEROES;
