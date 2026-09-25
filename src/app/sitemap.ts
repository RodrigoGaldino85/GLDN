import type { MetadataRoute } from "next";
import { company } from "@/content/site";

const pages = ["", "/diagnostico", "/solucoes", "/dynamics", "/capacitacao", "/sobre", "/contato", "/privacidade"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${company.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/diagnostico" || p === "/contato" ? 0.9 : 0.7,
  }));
}
