"use client";

import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { setTheme, useTheme } from "../../lib/theme";
import { Icon } from "../brand/Icon";
import styles from "./ThemeToggle.module.css";

export interface ThemeToggleProps {
  /** Shows "Claro"/"Escuro" next to the icon (e.g. inside the mobile menu). */
  showLabel?: boolean;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Switches the page between the dark (default) and light themes and remembers the choice. */
export function ThemeToggle({ showLabel = false, forceState, className, style }: ThemeToggleProps) {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  const label = next === "light" ? "Ativar tema claro" : "Ativar tema escuro";
  return (
    <button type="button" onClick={() => setTheme(next)} aria-label={label} title={label} data-state={forceState}
      className={cx(styles.toggle, showLabel && styles.withLabel, className)} style={style}>
      <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
      {showLabel && <span>{next === "light" ? "Tema claro" : "Tema escuro"}</span>}
    </button>
  );
}
