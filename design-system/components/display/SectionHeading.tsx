import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHeading.module.css";

export interface SectionHeadingProps {
  eyebrow?: string;
  /** First line, pearl. */
  title: ReactNode;
  /** Second line, gold. The brand's signature two-tone headline. */
  highlight?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** xl 68 / lg 52 / md 38 / sm 26 px. */
  size?: "xl" | "lg" | "md" | "sm";
  as?: "h1" | "h2" | "h3";
  /** Max width as a CSS length (use a token, e.g. 'var(--container-narrow)'). Default var(--measure-heading). */
  maxWidth?: string;
  className?: string;
  style?: CSSProperties;
}

/** Two-tone Cinzel headline: pearl statement + gold continuation, with optional eyebrow and lead. */
export function SectionHeading({
  eyebrow, title, highlight, lead, align = "left", size = "lg", as: H = "h2", maxWidth, className, style,
}: SectionHeadingProps) {
  return (
    <div className={cx(styles.heading, align === "center" && styles.center, className)} style={{ maxWidth, ...style }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <H className={cx(styles.title, styles[size])}>
        {title}
        {highlight && <><br /><span className={styles.highlight}>{highlight}</span></>}
      </H>
      {lead && <p className={cx(styles.lead, size === "sm" && styles.leadSm)}>{lead}</p>}
    </div>
  );
}
