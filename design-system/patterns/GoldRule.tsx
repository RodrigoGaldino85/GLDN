import type { CSSProperties } from "react";
import { cx } from "../lib/cx";
import styles from "./patterns.module.css";

/** 48×2 gold rule that separates a headline block from its motto. */
export function GoldRule({ center = false, className, style }: { center?: boolean; className?: string; style?: CSSProperties }) {
  return <div aria-hidden className={cx(styles.rule, center && styles.ruleCenter, className)} style={style} />;
}
