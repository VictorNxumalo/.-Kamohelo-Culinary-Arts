import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export function draftRobots(draft?: boolean): Pick<Metadata, "robots"> | undefined {
  if (!draft || process.env.NODE_ENV === "development") return undefined;
  return { robots: { index: false, follow: false } };
}

export function pageOpenGraph(
  title: string,
  description: string,
  image?: string
): Metadata["openGraph"] {
  return {
    title,
    description,
    type: "website",
    images: [
      {
        url: image ?? DEFAULT_OG_IMAGE,
        alt: title,
      },
    ],
  };
}
