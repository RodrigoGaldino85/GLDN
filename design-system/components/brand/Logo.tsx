import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import styles from "./Logo.module.css";

export interface LogoProps {
  /**
   * Background the logo sits on. 'auto' (default) follows the active theme;
   * 'dark' = pearl wordmark on a graphite tile, 'light' = ink wordmark on a white tile.
   */
  surface?: "auto" | "dark" | "light";
  /** Rendered height in px. Default 40. Min 24. */
  height?: number;
  /** Show the GLDN wordmark next to the mark. Default true. */
  wordmark?: boolean;
  /** Show the TECH descriptor under the wordmark. Default true. */
  tagline?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** GLDN Tech logo — tile mark + GLDN/TECH wordmark. Geometry mirrors assets/logo-*.svg; never redraw it. */
export function Logo({ surface = "auto", height = 40, wordmark = true, tagline = true, className, style }: LogoProps) {
  const vb = wordmark ? "20 20 524 160" : "20 20 160 160";
  const width = wordmark ? height * 3.275 : height;
  return (
    <svg viewBox={vb} width={width} height={height} role="img" aria-label="GLDN Tech"
      className={cx(styles.logo, styles[surface], className)} style={style}>
      <rect x="20" y="20" width="160" height="160" rx="36" strokeWidth="2"
        className={styles.tile} />
      <g transform="translate(53,53) scale(0.94)">
        <circle cx="38" cy="38" r="26" className={styles.c1} />
        <circle cx="62" cy="38" r="26" className={styles.c2} />
        <circle cx="50" cy="63" r="26" className={styles.c3} />
      </g>
      {wordmark && (
        <text x="212" y={tagline ? 118 : 132} fontSize="80" letterSpacing="24" className={styles.word}>GLDN</text>
      )}
      {wordmark && tagline && (
        <g>
          <line x1="214" y1="152" x2="311" y2="152" strokeWidth="2" className={styles.rule} />
          <text x="325" y="159" fontSize="19" letterSpacing="11" className={styles.sub}>TECH</text>
          <line x1="425" y1="152" x2="522" y2="152" strokeWidth="2" className={styles.rule} />
        </g>
      )}
    </svg>
  );
}
