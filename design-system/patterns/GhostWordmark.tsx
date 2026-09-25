import styles from "./patterns.module.css";

/** Giant ~3.5% Cinzel "GLDN" placed behind final CTAs. */
export function GhostWordmark({ text = "GLDN" }: { text?: string }) {
  return <div aria-hidden className={styles.ghost}>{text}</div>;
}
