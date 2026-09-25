"use client";

import type { ReactNode } from "react";
import { NavBar } from "../../components";
import { Footer } from "../../patterns";
import type { Go, PageKey } from "./types";

const LINKS: Array<[string, PageKey]> = [["Soluções", "solucoes"], ["Capacitação", "capacitacao"], ["Contato", "contato"]];

/** Router shell of the website kit: NavBar + page + Footer. */
export function SiteShell({ page, go, children }: { page: PageKey; go: Go; children: ReactNode }) {
  return (
    <>
      <NavBar links={LINKS.map(([label, key]) => ({ label, key, active: key === page }))}
        onNavigate={(i) => go(i.key)} onLogo={() => go("home")} cta="Agendar diagnóstico" onCta={() => go("contato")} />
      <main data-screen-label={page}>{children}</main>
      <Footer onNavigate={(t) => go(t as PageKey)} />
    </>
  );
}
