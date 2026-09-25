import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./Field.module.css";

export { styles as fieldStyles };

export interface FieldChromeProps {
  id: string;
  label?: string;
  required?: boolean;
  hint?: string;
  /** Error message — turns the border red and replaces the hint. */
  error?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Label + control + hint/error stack shared by Input, Textarea and Select. */
export function FieldChrome({ id, label, required, hint, error, className, style, children }: FieldChromeProps) {
  const message = error || hint;
  return (
    <div className={cx(styles.field, className)} style={style}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}{required && <span className={styles.required} aria-hidden> *</span>}
        </label>
      )}
      {children}
      {message && <span id={`${id}-msg`} className={error ? styles.error : styles.hint} role={error ? "alert" : undefined}>{message}</span>}
    </div>
  );
}

/** aria wiring for a control inside FieldChrome. */
export function controlAria(id: string, error?: string, hint?: string) {
  return {
    id,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error || hint ? `${id}-msg` : undefined,
  };
}
