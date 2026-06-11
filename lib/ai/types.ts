export type ContentChunkType =
  | "recipe"
  | "technique"
  | "blog"
  | "concept"
  | "venture"
  | "about"
  | "service";

export type ContentChunk = {
  id: string;
  type: ContentChunkType;
  title: string;
  slug: string;
  url: string;
  excerpt: string;
  bodyText: string;
  tags: string[];
  ingredients?: string[];
};

export type SearchResult = ContentChunk & {
  score: number;
};

export type AskCitation = {
  title: string;
  url: string;
  type: ContentChunkType;
};

export type AskResponse = {
  query: string;
  mode: "search" | "search+llm";
  results: SearchResult[];
  answer?: {
    text: string;
    citations: AskCitation[];
  };
  message?: string;
};
