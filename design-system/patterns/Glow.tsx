import type { CSSProperties } from "react";
import { cx } from "../lib/cx";
import styles from "./patterns.module.css";

export interface GlowProps {
  /** Centre position, CSS length/percentage. */
  x?: string;
  y?: string;
  /** Diameter in px. */
  size?: number;
  /** ember (default warm light) or gold (subtle secondary light). */
  tone?: "ember" | "gold";
}

/** Radial light source placed behind glass content. Position/size are layout geometry, colour comes from tokens. */
export function Glow({ x = "80%", y = "20%", size = 900, tone = "ember" }: GlowProps) {
  const style: CSSProperties = { left: x, top: y, width: size, height: size };
  return <div aria-hidden className={cx(styles.glow, styles[tone])} style={style} />;
}
