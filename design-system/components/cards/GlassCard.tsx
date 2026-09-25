import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./GlassCard.module.css";

export type GlassPadding = "none" | "md" | "lg" | "plan" | "row" | "step" | "panel" | "panel-sm";
export type GlassRadius = "lg" | "card-l" | "xl";

export interface GlassCardProps {
  children?: ReactNode;
  /** Gold hairline + soft gold halo — for the featured/active item. */
  glow?: boolean;
  /** Lift + gold border on hover. */
  interactive?: boolean;
  /** Token-backed padding preset. md 28 (default) · lg 32 · plan 30 · row 26/28 · step 18/28/30 · panel fluid 28–56 · panel-sm fluid 24–44. */
  padding?: GlassPadding;
  /** lg 16 (default) · card-l 20 · xl 24 (large panels). */
  radius?: GlassRadius;
  /** Makes the whole card a keyboard-accessible button. */
  onClick?: () => void;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover" | "focus";
  as?: "div" | "article" | "section" | "li";
  className?: string;
  style?: CSSProperties;
}

/** Smoked-glass surface with hairline border; the base of every card. */
export function GlassCard({
  children, glow = false, interactive = false, padding = "md", radius = "lg", onClick, forceState, as: Element = "div", className, style,
}: GlassCardProps) {
  const onKeyDown = onClick
    ? (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }
    : undefined;
  return (
    <Element
      className={cx(styles.card, styles[`pad-${padding}`], styles[`radius-${radius}`], glow && styles.glow,
        (interactive || onClick) && styles.interactive, onClick && styles.clickable, className)}
      style={style} data-state={forceState}
      onClick={onClick} onKeyDown={onKeyDown} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Element>
  );
}
