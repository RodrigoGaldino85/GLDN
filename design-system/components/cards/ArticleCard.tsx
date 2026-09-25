import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { Icon } from "../brand/Icon";
import { Tag } from "../display/Tag";
import { GlassCard } from "./GlassCard";
import styles from "./ArticleCard.module.css";

export interface ArticleCardProps {
  title: string;
  excerpt?: string;
  href: string;
  /** Already formatted, e.g. "25 set 2026". */
  date?: string;
  /** e.g. "6 min de leitura". */
  readingTime?: string;
  tags?: string[];
  /** Shows a "Rascunho" marker (drafts are only listed in development). */
  draft?: boolean;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover";
  className?: string;
  style?: CSSProperties;
}

/** Article teaser: meta line, Cinzel title, excerpt, tags and "Ler artigo" — the whole card is a link. */
export function ArticleCard({ title, excerpt, href, date, readingTime, tags = [], draft = false, forceState, className, style }: ArticleCardProps) {
  return (
    <a href={href} className={cx(styles.link, className)} style={style}>
      <GlassCard as="article" interactive padding="lg" forceState={forceState} className={styles.card}>
        {(date || readingTime || draft) && (
          <div className={styles.meta}>
            {draft && <span className={styles.draft}>Rascunho</span>}
            {date && <span>{date}</span>}
            {date && readingTime && <span aria-hidden>·</span>}
            {readingTime && <span>{readingTime}</span>}
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        {tags.length > 0 && <div className={styles.tags}>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
        <span className={styles.more}>Ler artigo <Icon name="arrow-right" size={14} className={styles.arrow} /></span>
      </GlassCard>
    </a>
  );
}
