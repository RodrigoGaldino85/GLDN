/** Server-safe theme constants (no React). */
export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "gldn-theme";

/**
 * Inline script for <head>: applies the saved theme before first paint (no flash).
 * Dark is the brand default; only an explicit choice switches to light.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
