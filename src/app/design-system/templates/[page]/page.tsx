import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TemplateView } from "./TemplateView";

const PAGES = ["home", "solucoes", "capacitacao", "contato"] as const;
type Page = (typeof PAGES)[number];

export function generateStaticParams() {
  return PAGES.map((page) => ({ page }));
}

export default async function TemplatePage({ params }: PageProps<"/design-system/templates/[page]">) {
  const { page } = await params;
  if (!PAGES.includes(page as Page)) notFound();
  return <Suspense><TemplateView page={page as Page} /></Suspense>;
}
