import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Icon, type IconName } from "../brand/Icon";
import styles from "./IconList.module.css";

export interface IconListItem {
  /** Optional bold lead-in. */
  title?: string;
  text?: ReactNode;
  /** Overrides the list icon for this item. */
  icon?: IconName;
}

export interface IconListProps {
  items: Array<IconListItem | string>;
  /** Default icon for every item. Default 'check'. */
  icon?: IconName;
  /** accent (gold, default) · muted · success · danger (e.g. "fora do escopo"). */
  tone?: "accent" | "muted" | "success" | "danger";
  compact?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Vertical list with a leading line icon — scope lists, benefits, premises. */
export function IconList({ items, icon = "check", tone = "accent", compact = false, className, style }: IconListProps) {
  return (
    <ul className={cx(styles.list, styles[tone], compact && styles.compact, className)} style={style}>
      {items.map((raw) => {
        const it = typeof raw === "string" ? { text: raw } : raw;
        const text = typeof it.text === "string" ? it.text.trim() : it.text;
        return (
          <li key={(it.title ?? "") + String(it.text ?? "")} className={styles.item}>
            <Icon name={it.icon ?? icon} size={18} className={styles.icon} />
            <span>{it.title && <strong className={styles.title}>{it.title}</strong>}{text}</span>
          </li>
        );
      })}
    </ul>
  );
}
