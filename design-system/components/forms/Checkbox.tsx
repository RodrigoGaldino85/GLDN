"use client";

import { useId, type CSSProperties, type ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Icon } from "../brand/Icon";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  /** Error message shown under the label (e.g. required consent). */
  error?: string;
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Square checkbox that fills gold when checked. Native input underneath; controlled or uncontrolled. */
export function Checkbox({
  label, checked, defaultChecked, onChange, disabled = false, required, name, error, forceState, className, style,
}: CheckboxProps) {
  const id = useId();
  return (
    <span className={cx(styles.wrap, className)} style={style}>
      <label htmlFor={id} data-state={forceState}
        className={cx(styles.checkbox, disabled && styles.disabled, error && styles.invalid)}>
        <input id={id} type="checkbox" className={styles.input} name={name} checked={checked} defaultChecked={defaultChecked}
          disabled={disabled} required={required} aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-msg` : undefined}
          onChange={(e) => onChange?.(e.target.checked)} />
        <span className={styles.box} aria-hidden><Icon name="check" size={14} className={styles.check} /></span>
        {label && <span>{label}</span>}
      </label>
      {error && <span id={`${id}-msg`} className={styles.error} role="alert">{error}</span>}
    </span>
  );
}
