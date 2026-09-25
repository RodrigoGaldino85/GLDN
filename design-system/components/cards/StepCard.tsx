import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import { GlassCard } from "./GlassCard";
import styles from "./StepCard.module.css";

export interface StepCardProps {
  /** "01", "02"… rendered as a ghost numeral. */
  number: string;
  title: string;
  description?: ReactNode;
  /** Gold numeral + glow for the current step. */
  active?: boolean;
  /** Lights up on hover (gold numeral, border, halo). Default true. */
  interactive?: boolean;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover";
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Process step with oversized ghost numeral. */
export function StepCard({ number, title, description, active = false, interactive = true, forceState, fill = false, className, style }: StepCardProps) {
  return (
    <GlassCard glow={active} padding="step" forceState={forceState}
      className={cx(!active && styles.step, active && styles.active, interactive && styles.lit, fill && styles.fill, className)} style={style}>
      <div className={styles.numeral} aria-hidden>{number}</div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
    </GlassCard>
  );
}
