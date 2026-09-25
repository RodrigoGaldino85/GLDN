import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Icon, type IconName } from "../brand/Icon";
import { GlassCard } from "./GlassCard";
import styles from "./FeatureCard.module.css";

export interface FeatureCardProps {
  /** Lucide icon name. */
  icon?: IconName;
  title: string;
  description?: ReactNode;
  /** row = icon left (compact); stack = icon on top. */
  layout?: "row" | "stack";
  glow?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  /** Stretch to the grid cell height. */
  fill?: boolean;
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Icon + uppercase title + description in a glass card. */
export function FeatureCard({
  icon, title, description, layout = "row", glow = false, interactive = true, onClick, fill = false, forceState, className, style,
}: FeatureCardProps) {
  const row = layout === "row";
  return (
    <GlassCard glow={glow} interactive={interactive} onClick={onClick} forceState={forceState}
      padding={row ? "row" : "lg"} className={cx(fill && styles.fill, className)} style={style}>
      <div className={cx(styles.body, !row && styles.stack)}>
        {icon && <Icon name={icon} size={row ? 34 : 30} color="var(--accent)" className={styles.icon} />}
        <div className={styles.text}>
          <span className={styles.title}>{title}</span>
          {description && <span className={styles.description}>{description}</span>}
        </div>
      </div>
    </GlassCard>
  );
}
