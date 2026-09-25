"use client";

import { usePathname } from "next/navigation";
import { NavBar, ThemeToggle } from "@ds/components";
import { nav, primaryCta } from "@/content/site";

/** `showContent` adds "Conteúdo" to the menu once at least one article is published. */
export function SiteHeader({ showContent = false }: { showContent?: boolean }) {
  const pathname = usePathname();
  const items = showContent ? [...nav, { label: "Conteúdo", href: "/conteudo" }] : nav;
  return (
    <NavBar
      links={items.map((l) => ({ ...l, active: pathname === l.href || pathname.startsWith(`${l.href}/`) }))}
      cta={primaryCta.label} ctaHref={primaryCta.href}
      actions={<ThemeToggle />} mobileActions={<ThemeToggle showLabel />}
    />
  );
}
