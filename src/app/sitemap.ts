import type { MetadataRoute } from "next";
import { company } from "@/content/site";
import { getArticles } from "@/lib/articles";

const pages = ["", "/diagnostico", "/solucoes", "/dynamics", "/capacitacao", "/sobre", "/contato", "/privacidade"];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles();
  const entries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${company.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/diagnostico" || p === "/contato" ? 0.9 : 0.7,
  }));
  if (articles.length > 0) {
    entries.push({ url: `${company.url}/conteudo`, changeFrequency: "weekly", priority: 0.8 });
    for (const a of articles) {
      entries.push({ url: `${company.url}/conteudo/${a.slug}`, lastModified: a.updated ?? a.date, changeFrequency: "yearly", priority: 0.7 });
    }
  }
  return entries;
}
