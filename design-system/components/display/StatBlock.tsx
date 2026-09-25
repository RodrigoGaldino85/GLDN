import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./StatBlock.module.css";

export interface StatBlockProps {
  /** The metric, e.g. "+38%", "12h", "24/7". */
  value: ReactNode;
  /** Uppercase tracked label. */
  label?: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** sm 40 / md 56 / lg 96 px numerals. */
  size?: "sm" | "md" | "lg";
  /** Hairline rule on the left (left-aligned only). Default true. */
  rule?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Big gold metric with tracked label and short description. */
export function StatBlock({ value, label, description, align = "left", size = "md", rule = true, className, style }: StatBlockProps) {
  return (
    <div className={cx(styles.stat, align === "center" && styles.center, rule && align === "left" && styles.rule, className)} style={style}>
      <span className={cx(styles.value, styles[size])}>{value}</span>
      {label && <span className={styles.label}>{label}</span>}
      {description && <span className={styles.description}>{description}</span>}
    </div>
  );
}
