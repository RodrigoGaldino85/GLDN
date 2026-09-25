import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Icon, type IconName } from "../brand/Icon";
import styles from "./Button.module.css";

const ICON_SIZE = { sm: 15.5, md: 16.5, lg: 17.5 } as const;

export interface ButtonProps {
  children: ReactNode;
  /** primary = solid gold (one per view); secondary = gold outline; ghost = pearl text on hairline; link = gold text, no chrome. */
  variant?: "primary" | "secondary" | "ghost" | "link";
  /** sm 38 / md 48 / lg 58 px tall. */
  size?: "sm" | "md" | "lg";
  /** Lucide icon name before the label. */
  iconLeft?: IconName;
  /** Lucide icon name after the label (e.g. 'arrow-right'). */
  iconRight?: IconName;
  disabled?: boolean;
  /** Shows a spinner, sets aria-busy and blocks clicks. */
  loading?: boolean;
  fullWidth?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  /** Forces a visual state for documentation (showcase only). */
  forceState?: "hover" | "active" | "focus";
  className?: string;
  style?: CSSProperties;
}

/** GLDN button — pill, uppercase tracked Montserrat. */
export function Button({
  children, variant = "primary", size = "md", iconLeft, iconRight, disabled = false, loading = false,
  fullWidth = false, href, onClick, type = "button", forceState, className, style,
}: ButtonProps) {
  const inert = disabled || loading;
  const cls = cx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth,
    loading && styles.loading, className);
  const iconSize = ICON_SIZE[size];
  const content = (
    <>
      {loading
        ? <Icon name="loader-circle" size={iconSize} className={styles.spinner} />
        : iconLeft && <Icon name={iconLeft} size={iconSize} />}
      <span>{children}</span>
      {iconRight && !loading && <Icon name={iconRight} size={iconSize} className={styles.iconRight} />}
    </>
  );
  const shared = {
    className: cls, style, "aria-disabled": inert || undefined, "aria-busy": loading || undefined,
    "data-variant": variant, "data-size": size, "data-state": forceState,
  };
  if (href) {
    return (
      <a {...shared} href={inert ? undefined : href} onClick={inert ? undefined : onClick}>{content}</a>
    );
  }
  return (
    <button {...shared} type={type} disabled={disabled} onClick={inert ? undefined : onClick}>{content}</button>
  );
}
