import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./Eyebrow.module.css";

export interface EyebrowProps {
  children: ReactNode;
  /** gold (default) or neutral pearl-on-hairline. */
  tone?: "gold" | "neutral";
  className?: string;
  style?: CSSProperties;
}

/** Outlined gold pill label that sits above a headline ("A SOLUÇÃO"). */
export function Eyebrow({ children, tone = "gold", className, style }: EyebrowProps) {
  return <span className={cx(styles.eyebrow, styles[tone], className)} style={style}>{children}</span>;
}
