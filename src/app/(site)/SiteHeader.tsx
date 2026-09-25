"use client";

import { usePathname } from "next/navigation";
import { NavBar, ThemeToggle } from "@ds/components";
import { nav, primaryCta } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <NavBar
      links={nav.map((l) => ({ ...l, active: pathname === l.href || pathname.startsWith(`${l.href}/`) }))}
      cta={primaryCta.label} ctaHref={primaryCta.href}
      actions={<ThemeToggle />} mobileActions={<ThemeToggle showLabel />}
    />
  );
}
