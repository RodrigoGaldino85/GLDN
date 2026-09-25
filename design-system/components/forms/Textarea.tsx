"use client";

import { useId, type ChangeEvent, type CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { FieldChrome, controlAria, fieldStyles } from "./Field";

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  hint?: string;
  /** Error message — turns the border red and replaces the hint. */
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Multi-line field matching Input. */
export function Textarea({
  label, placeholder, value, defaultValue, onChange, rows = 4, hint, error, disabled = false, required = false,
  name, id, forceState, className, style,
}: TextareaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldChrome id={fieldId} label={label} required={required} hint={hint} error={error} className={className} style={style}>
      <textarea {...controlAria(fieldId, error, hint)} name={name} rows={rows} placeholder={placeholder} value={value}
        defaultValue={defaultValue} disabled={disabled} required={required} onChange={onChange}
        data-state={forceState} className={cx(fieldStyles.control, fieldStyles.multi)} />
    </FieldChrome>
  );
}
