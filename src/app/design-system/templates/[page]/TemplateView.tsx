"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { restoreTheme, setTheme } from "@ds/lib/theme";
import { ContactTemplate, HomeTemplate, SiteShell, SolutionsTemplate, TrainingTemplate, type PageKey } from "@ds/templates/website";

const VIEWS = { home: HomeTemplate, solucoes: SolutionsTemplate, capacitacao: TrainingTemplate, contato: ContactTemplate };

/** Renders a website template inside the site shell; `?theme=light` previews the light theme. */
export function TemplateView({ page }: { page: PageKey }) {
  const router = useRouter();
  const theme = useSearchParams().get("theme") === "light" ? "light" : "dark";
  useEffect(() => {
    if (theme === "light") setTheme("light", false);
    return () => restoreTheme();
  }, [theme]);
  const go = (p: PageKey) => { router.push(`/design-system/templates/${p}${theme === "light" ? "?theme=light" : ""}`); window.scrollTo(0, 0); };
  const View = VIEWS[page];
  return <SiteShell page={page} go={go}><View go={go} /></SiteShell>;
}
