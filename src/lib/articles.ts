import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

/**
 * Articles live as Markdown files in src/content/artigos/<slug>.md (files starting with "_" are
 * ignored — see _modelo.md). Front matter keys: title, description, date (YYYY-MM-DD),
 * updated (optional), tags (comma-separated or [a, b]), draft (true/false).
 * Drafts show up in `npm run dev` only; production builds leave them out.
 */
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
  html: string;
}

const DIR = join(process.cwd(), "src/content/artigos");
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function parseFrontMatter(raw: string, file: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`[artigos] ${file}: faltou o bloco --- de front matter no topo`);
  const data: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: m[2] };
}

function load(file: string): Article {
  const slug = file.replace(/\.md$/, "");
  if (!SLUG.test(slug)) throw new Error(`[artigos] ${file}: use só letras minúsculas, números e hífens no nome do arquivo`);
  const { data, body } = parseFrontMatter(readFileSync(join(DIR, file), "utf8"), file);
  for (const key of ["title", "description", "date"]) {
    if (!data[key]) throw new Error(`[artigos] ${file}: faltou "${key}" no front matter`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) throw new Error(`[artigos] ${file}: date deve estar no formato AAAA-MM-DD`);
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated || undefined,
    tags: data.tags ? data.tags.replace(/^\[|\]$/g, "").split(",").map((t) => t.trim()).filter(Boolean) : [],
    draft: data.draft === "true",
    readingMinutes: Math.max(1, Math.round(words / 200)),
    html: marked.parse(body, { async: false }),
  };
}

/** Articles visible in this environment, newest first. */
export function getArticles(): Article[] {
  const showDrafts = process.env.NODE_ENV !== "production";
  let files: string[] = [];
  try {
    files = readdirSync(DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  } catch {
    return [];
  }
  return files
    .map(load)
    .filter((a) => showDrafts || !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

/** "2026-09-25" → "25 set 2026" (no timezone surprises). */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export const readingLabel = (min: number) => `${min} min de leitura`;
