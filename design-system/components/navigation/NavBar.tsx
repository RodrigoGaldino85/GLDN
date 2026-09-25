"use client";

import { useEffect, useId, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Button } from "../actions/Button";
import { Icon } from "../brand/Icon";
import { Logo } from "../brand/Logo";
import styles from "./NavBar.module.css";

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover" | "focus";
}

export interface NavBarProps<T extends NavItem = NavItem> {
  links?: T[];
  cta?: string;
  onCta?: () => void;
  ctaHref?: string;
  /** Called with the clicked item (prevents default navigation). */
  onNavigate?: (item: T) => void;
  onLogo?: () => void;
  logoHref?: string;
  /** Extra controls before the CTA (e.g. <ThemeToggle />). Rendered again inside the mobile menu. */
  actions?: ReactNode;
  /** Mobile-menu variant of `actions` (defaults to `actions`). */
  mobileActions?: ReactNode;
  sticky?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Site header: logo, tracked links with gold active rule, CTA; collapses into a menu at 1180px and below. */
export function NavBar<T extends NavItem>({
  links = [], cta, onCta, ctaHref, onNavigate, onLogo, logoHref = "/", actions, mobileActions, sticky = true, className, style,
}: NavBarProps<T>) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const logoClick = onLogo ? (e: MouseEvent) => { e.preventDefault(); setOpen(false); onLogo(); } : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth > 1180) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  const renderLinks = () => links.map((l) => (
    <a key={l.label} href={l.href ?? "#"} aria-current={l.active ? "page" : undefined} data-state={l.forceState}
      className={cx(styles.link, l.active && styles.active)}
      onClick={(e) => { setOpen(false); if (onNavigate) { e.preventDefault(); onNavigate(l); } }}>
      {l.label}
    </a>
  ));
  const ctaButton = (full: boolean) => cta && (
    <Button size={full ? "md" : "sm"} fullWidth={full} href={ctaHref} onClick={() => { setOpen(false); onCta?.(); }}>{cta}</Button>
  );

  return (
    <header className={cx(styles.header, sticky ? styles.sticky : styles.static, links.length === 0 && styles.noLinks, className)} style={style}>
      <div className={styles.inner}>
        <a href={logoHref} onClick={logoClick} className={styles.logoLink} aria-label="GLDN Tech — início"><Logo height={34} /></a>
        {links.length > 0 && <nav className={styles.nav} aria-label="Principal">{renderLinks()}</nav>}
        {(actions || cta) && <div className={styles.end}>{actions}{ctaButton(false)}</div>}
        {(links.length > 0 || actions || cta) && (
          <button type="button" className={styles.menuButton} aria-expanded={open} aria-controls={panelId}
            aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        )}
      </div>
      <div id={panelId} className={styles.panel} hidden={!open}>
        {links.length > 0 && <nav className={styles.panelNav} aria-label="Principal (menu)">{renderLinks()}</nav>}
        <div className={styles.panelEnd}>{mobileActions ?? actions}{ctaButton(true)}</div>
      </div>
    </header>
  );
}
