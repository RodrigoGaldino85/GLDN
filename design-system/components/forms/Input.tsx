"use client";

import { useId, type ChangeEvent, type CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { FieldChrome, controlAria, fieldStyles } from "./Field";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "tel" | "url" | "password" | "number";
  hint?: string;
  /** Error message — turns the border red and replaces the hint. */
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  autoComplete?: string;
  id?: string;
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** Text field with tracked uppercase label, dark inset well and gold focus ring. */
export function Input({
  label, placeholder, value, defaultValue, onChange, type = "text", hint, error, disabled = false, required = false,
  name, autoComplete, id, forceState, className, style,
}: InputProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldChrome id={fieldId} label={label} required={required} hint={hint} error={error} className={className} style={style}>
      <input {...controlAria(fieldId, error, hint)} name={name} type={type} placeholder={placeholder} value={value}
        defaultValue={defaultValue} disabled={disabled} required={required} onChange={onChange} autoComplete={autoComplete}
        data-state={forceState} className={cx(fieldStyles.control, fieldStyles.single)} />
    </FieldChrome>
  );
}
