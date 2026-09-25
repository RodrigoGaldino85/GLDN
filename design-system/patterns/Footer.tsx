"use client";

import type { MouseEvent } from "react";
import { Logo } from "../components/brand/Logo";
import { TrackedLine } from "./TrackedLine";
import styles from "./patterns.module.css";

export interface FooterLink { label: string; href?: string; target?: string }
export interface FooterColumn { title: string; links: FooterLink[] }

export interface FooterProps {
  columns?: FooterColumn[];
  blurb?: string;
  /** Called with the link's `target` key; prevents default navigation. */
  onNavigate?: (target: string) => void;
  year?: string;
  /** Pipe-separated tracked line at the bottom right. */
  tagline?: string[];
  /** Small links in the bottom bar (e.g. privacy policy). */
  bottomLinks?: FooterLink[];
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  { title: "Soluções", links: [{ label: "Copilot para Microsoft 365", target: "solucoes" }, { label: "Copilot Studio & agentes", target: "solucoes" }, { label: "Governança de IA", target: "solucoes" }] },
  { title: "Empresa", links: [{ label: "Capacitação", target: "capacitacao" }, { label: "Método", target: "home" }, { label: "Contato", target: "contato" }] },
];

/** Site footer: logo + blurb, link columns, tracked bottom line. */
export function Footer({
  columns = DEFAULT_COLUMNS,
  blurb = "Consultoria especializada em Microsoft Copilot e IA corporativa. Do diagnóstico à adoção, com governança e resultado.",
  onNavigate, year = "2026", tagline = ["Diagnóstico", "Implantação", "Capacitação", "Resultado"], bottomLinks = [],
}: FooterProps) {
  const click = (l: FooterLink) => (e: MouseEvent) => { if (onNavigate && l.target) { e.preventDefault(); onNavigate(l.target); } };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Logo height={38} />
          <p>{blurb}</p>
        </div>
        {columns.map((c) => (
          <div key={c.title} className={styles.footerCol}>
            <span className={styles.footerTitle}>{c.title}</span>
            {c.links.map((l) => <a key={l.label} href={l.href ?? "#"} onClick={click(l)} className={styles.footerLink}>{l.label}</a>)}
          </div>
        ))}
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerLegal}>
          <TrackedLine items={["GLDN Tech", year]} />
          {bottomLinks.map((l) => <a key={l.label} href={l.href ?? "#"} onClick={click(l)} className={styles.footerSmall}>{l.label}</a>)}
        </div>
        <TrackedLine items={tagline} />
      </div>
    </footer>
  );
}
