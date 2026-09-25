import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./Prose.module.css";

export interface ProseProps {
  /** Rendered HTML (e.g. Markdown converted at build time). Only pass trusted, author-owned content. */
  html?: string;
  /** Or plain JSX children. */
  children?: ReactNode;
  as?: "div" | "article" | "section";
  className?: string;
  style?: CSSProperties;
}

/** Typographic wrapper for long-form content (articles): h2/h3, lists, quotes, tables, code, links. */
export function Prose({ html, children, as: Element = "div", className, style }: ProseProps) {
  if (html !== undefined) {
    return <Element className={cx(styles.prose, className)} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <Element className={cx(styles.prose, className)} style={style}>{children}</Element>;
}
