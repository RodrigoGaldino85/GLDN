import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import styles from "./SectionCounter.module.css";

export interface SectionCounterProps {
  /** Two-digit index, e.g. "03". */
  index: string;
  /** Section name, e.g. "Como funciona". */
  label: string;
  className?: string;
  style?: CSSProperties;
}

/** Index marker "03 ——— SOBRE NÓS" used in section corners. */
export function SectionCounter({ index, label, className, style }: SectionCounterProps) {
  return (
    <div className={cx(styles.counter, className)} style={style}>
      <span className={styles.index}>{index}</span>
      <span className={styles.line} aria-hidden />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
