import { Fragment, type CSSProperties } from "react";
import { cx } from "../lib/cx";
import styles from "./patterns.module.css";

export interface TrackedLineProps {
  items: string[];
  /** .42em tracking for closing mottos. */
  wide?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** "DIAGNÓSTICO | IMPLANTAÇÃO | CAPACITAÇÃO" — pipe-separated tracked line. */
export function TrackedLine({ items, wide = false, className, style }: TrackedLineProps) {
  return (
    <div className={cx(styles.tracked, wide && styles.trackedWide, className)} style={style}>
      {items.map((t, i) => (
        <Fragment key={t}>{i > 0 && <span className={styles.pipe} aria-hidden>|</span>}<span>{t}</span></Fragment>
      ))}
    </div>
  );
}
