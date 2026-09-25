import type { CSSProperties, ReactNode } from "react";
import { SectionCounter } from "../components/display/SectionCounter";
import { cx } from "../lib/cx";
import styles from "./patterns.module.css";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Background layer (Glow elements, GhostWordmark). */
  glow?: ReactNode;
  /** [index, label] — renders a top-right SectionCounter. */
  counter?: [string, string];
  /** Vertical rhythm overrides. */
  top?: "default" | "flush" | "tight" | "hero";
  bottom?: "default" | "tight";
  /** Hairline divider on top. */
  ruled?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Page section: fluid vertical padding, 1240 container, optional counter and glow layer. */
export function Section({ children, id, glow, counter, top = "default", bottom = "default", ruled = false, className, style }: SectionProps) {
  return (
    <section id={id} style={style} className={cx(styles.section, top === "flush" && styles.flushTop, top === "tight" && styles.tightTop,
      top === "hero" && styles.heroTop, bottom === "tight" && styles.tightBottom, ruled && styles.ruled, className)}>
      {glow}
      <div className={styles.inner}>
        {counter && <div className={styles.counterRow}><SectionCounter index={counter[0]} label={counter[1]} /></div>}
        {children}
      </div>
    </section>
  );
}
