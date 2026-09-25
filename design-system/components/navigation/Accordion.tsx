"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Icon } from "../brand/Icon";
import styles from "./Accordion.module.css";

export interface AccordionItem { question: string; answer: ReactNode }

export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for none. Default 0. */
  defaultOpen?: number;
  /** Shown when `items` is empty. */
  emptyText?: string;
  /** Forces a visual state on the first trigger (showcase only). */
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Numbered FAQ disclosure list; one item open at a time. */
export function Accordion({ items = [], defaultOpen = 0, emptyText = "Nenhuma pergunta por aqui ainda.", forceState, className, style }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const base = useId();
  if (items.length === 0) {
    return <div className={cx(styles.accordion, className)} style={style}><p className={styles.empty}>{emptyText}</p></div>;
  }
  return (
    <div className={cx(styles.accordion, className)} style={style}>
      {items.map((it, i) => {
        const on = open === i;
        const panelId = `${base}-panel-${i}`;
        return (
          <div key={it.question} className={cx(styles.item, on && styles.open)}>
            <button type="button" className={styles.trigger} aria-expanded={on} aria-controls={panelId}
              data-state={i === 0 ? forceState : undefined} onClick={() => setOpen(on ? -1 : i)}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.question}>{it.question}</span>
              <Icon name={on ? "minus" : "plus"} size={20} color="var(--accent)" />
            </button>
            <div id={panelId} role="region" className={styles.panel} aria-hidden={!on}>
              <div className={styles.panelInner}><p className={styles.answer}>{it.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
