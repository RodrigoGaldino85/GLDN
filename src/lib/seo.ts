import type { Metadata } from "next";
import { company } from "@/content/site";

/**
 * Full per-page metadata. Next merges metadata shallowly, so each page must send its own
 * canonical + Open Graph block (otherwise og:url of the root layout leaks into every page).
 * The share image is src/app/opengraph-image.png (served at /opengraph-image.png). The file
 * convention only fills the root segment, so pages that set openGraph must list it again.
 */
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "GLDN Tech — Consultoria em Microsoft Copilot e IA",
};

interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** Article pages: Open Graph type "article" with dates and tags. */
  article?: { publishedTime: string; modifiedTime?: string; tags?: string[] };
  /** Keep the page out of search results (e.g. an empty listing). */
  noindex?: boolean;
}

export function pageMetadata({ title, description, path, article, noindex }: PageMeta): Metadata {
  const base = { locale: "pt_BR", siteName: company.name, url: path, title, description, images: [shareImage] };
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: article
      ? { ...base, type: "article", publishedTime: article.publishedTime, modifiedTime: article.modifiedTime, authors: [company.founder], tags: article.tags }
      : { ...base, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [shareImage.url] },
  };
}
