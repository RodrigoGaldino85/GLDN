import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./Tag.module.css";

export interface TagProps {
  children: ReactNode;
  /** Selected state — gold text and border. */
  active?: boolean;
  /** When set, the tag renders as a toggle button (aria-pressed). */
  onClick?: () => void;
  disabled?: boolean;
  /** md 30px (topics) / lg 40px (switchers, as used in the website kit). */
  size?: "md" | "lg";
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Small squared chip for parameters / topics; with onClick it becomes a selectable switcher. */
export function Tag({ children, active = false, onClick, disabled = false, size = "md", forceState, className, style }: TagProps) {
  const cls = cx(styles.tag, size === "lg" && styles.lg, active && styles.active, className);
  if (onClick) {
    return (
      <button type="button" className={cls} style={style} aria-pressed={active} disabled={disabled}
        data-state={forceState} onClick={onClick}>{children}</button>
    );
  }
  return <span className={cls} style={style} aria-disabled={disabled || undefined} data-state={forceState}>{children}</span>;
}
