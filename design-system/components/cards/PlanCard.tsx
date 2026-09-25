import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { Button } from "../actions/Button";
import { Icon, type IconName } from "../brand/Icon";
import { GlassCard } from "./GlassCard";
import styles from "./PlanCard.module.css";

export interface PlanFeature { icon?: IconName; label: string }

export interface PlanCardProps {
  number: string;
  name: string;
  audience?: string;
  /** Small tracked line top-right, e.g. "Mais impacto". */
  kicker?: string;
  features?: Array<PlanFeature | string>;
  /** Highlight tier: gold numeral, glow, primary CTA. */
  featured?: boolean;
  /** Pill badge, e.g. "Mais escolhido". */
  badge?: string;
  cta?: string;
  onCta?: () => void;
  /** Link target for the CTA (renders an <a>). */
  ctaHref?: string;
  /** Lights up like the featured tier on hover. Default true. */
  interactive?: boolean;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover";
  className?: string;
  style?: CSSProperties;
}

/** Engagement/plan tier card. */
export function PlanCard({
  number, name, audience, kicker, features = [], featured = false, badge, cta, onCta, ctaHref, interactive = true, forceState, className, style,
}: PlanCardProps) {
  return (
    <GlassCard glow={featured} interactive={interactive} forceState={forceState} padding="plan"
      className={cx(styles.plan, featured && styles.featured, interactive && styles.lit, className)} style={style}>
      <div className={styles.top}>
        <span className={styles.numeral} aria-hidden>{number}</span>
        <div className={styles.meta}>
          {badge && <span className={styles.badge}>{badge}</span>}
          {kicker && <span className={styles.kicker}>{kicker}</span>}
        </div>
      </div>
      <div className={styles.head}>
        <div className={styles.name}>{name}</div>
        {audience && <div className={styles.audience}>{audience}</div>}
      </div>
      <ul className={styles.list}>
        {features.map((f) => {
          const item = typeof f === "string" ? { label: f } : f;
          return (
            <li key={item.label} className={styles.item}>
              <Icon name={item.icon ?? "check"} size={18} className={styles.itemIcon} />{item.label}
            </li>
          );
        })}
      </ul>
      {cta && <Button variant={featured ? "primary" : "secondary"} fullWidth onClick={onCta} href={ctaHref}>{cta}</Button>}
    </GlassCard>
  );
}
