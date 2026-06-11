import "server-only";

import { listContentFiles, readContentFile } from "@/lib/content-parser";
import { filterPublished, isPublished } from "@/lib/content-visibility";

export type Technique = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  steps: string[];
  tips: string[];
  relatedRecipes: string[];
  tags: string[];
  draft?: boolean;
};

type TechniqueFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  steps: string[];
  tips?: string[];
  relatedRecipes?: string[];
  tags?: string[];
  draft?: boolean;
};

function normalizeTechnique(
  data: TechniqueFrontmatter,
  body: string
): Technique {
  return {
    slug: data.slug,
    title: data.title,
    summary: data.summary.trim(),
    body: body.trim(),
    steps: data.steps,
    tips: data.tips ?? [],
    relatedRecipes: data.relatedRecipes ?? [],
    tags: data.tags ?? [],
    draft: data.draft ?? false,
  };
}

export function getAllTechniques(): Technique[] {
  return listContentFiles("techniques")
    .map((file) => {
      const { data, content } = readContentFile<TechniqueFrontmatter>(
        "techniques",
        file
      );
      return normalizeTechnique(data, content);
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPublishedTechniques(): Technique[] {
  return filterPublished(getAllTechniques());
}

export function getTechniqueBySlug(slug: string): Technique | undefined {
  const technique = getAllTechniques().find((item) => item.slug === slug);
  if (!technique || !isPublished(technique.draft)) return undefined;
  return technique;
}

export function getTechniqueSlugs(): string[] {
  return getPublishedTechniques().map((technique) => technique.slug);
}
