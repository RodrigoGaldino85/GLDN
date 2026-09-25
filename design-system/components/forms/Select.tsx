"use client";

import { useId, useState, type ChangeEvent, type CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { Icon } from "../brand/Icon";
import { FieldChrome, controlAria, fieldStyles } from "./Field";
import styles from "./Select.module.css";

export type SelectOption = string | { value: string; label: string };

export interface SelectProps {
  label?: string;
  options?: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  hint?: string;
  /** Error message — turns the border red and replaces the hint. */
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  /** Shown (disabled) when `options` is empty. */
  emptyText?: string;
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Native select styled as a GLDN field with gold chevron. */
export function Select({
  label, options = [], value, defaultValue, placeholder, onChange, hint, error, disabled = false, required = false,
  name, id, emptyText = "Nenhuma opção disponível", forceState, className, style,
}: SelectProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const empty = options.length === 0;
  const initial = defaultValue ?? (placeholder || empty ? "" : undefined);
  const [current, setCurrent] = useState(value ?? initial ?? "");
  const shown = value ?? current;
  return (
    <FieldChrome id={fieldId} label={label} required={required} hint={hint} error={error} className={className} style={style}>
      <span className={styles.wrap}>
        <select {...controlAria(fieldId, error, hint)} name={name} value={value} defaultValue={value === undefined ? initial : undefined}
          disabled={disabled || empty} required={required} data-state={forceState}
          onChange={(e) => { setCurrent(e.target.value); onChange?.(e); }}
          className={cx(fieldStyles.control, fieldStyles.single, styles.select, shown === "" && styles.placeholder)}>
          {(placeholder || empty) && <option value="" disabled>{empty ? emptyText : placeholder}</option>}
          {options.map((o) => {
            const v = typeof o === "string" ? o : o.value;
            const l = typeof o === "string" ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={18} color="var(--text-accent)" className={styles.chevron} />
      </span>
    </FieldChrome>
  );
}
