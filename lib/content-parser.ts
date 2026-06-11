import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function listContentFiles(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .sort();
}

export function readContentFile<T extends Record<string, unknown>>(
  subdir: string,
  filename: string
): { data: T; content: string } {
  const filePath = path.join(CONTENT_DIR, subdir, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as T, content: content.trim() };
}
