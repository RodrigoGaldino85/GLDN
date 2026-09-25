"use client";

import { useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, type Theme } from "./theme-script";

export { THEME_STORAGE_KEY, themeInitScript, type Theme } from "./theme-script";

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/** Applies a theme to <html>; `persist` saves it as the visitor's choice. */
export function setTheme(theme: Theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  if (persist) {
    try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch { /* storage unavailable */ }
  }
}

/** Re-applies the visitor's saved choice (or the dark default). */
export function restoreTheme() {
  let saved: string | null = null;
  try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch { /* storage unavailable */ }
  document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** Current page theme, kept in sync with <html data-theme>. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getTheme, () => "dark");
}
