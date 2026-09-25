#!/usr/bin/env node
// DESIGN.md is the source of truth for tokens. This checks that the literal primitives in its
// front matter (hex colours, rounded, spacing in px) match design-system/tokens/*.css.
import { readFileSync } from "node:fs";

const front = readFileSync("DESIGN.md", "utf8").split(/^---$/m)[1] ?? "";
const css = ["colors", "spacing"].map((f) => readFileSync(`design-system/tokens/${f}.css`, "utf8")).join("\n");
const cssVar = (name) => css.match(new RegExp(`--${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*([^;]+);`))?.[1].trim();
const ROLE_ALIASES = new Set(["primary", "on-primary", "secondary", "neutral", "surface", "on-surface", "error"]);

let section = "";
const problems = [];
for (const line of front.split("\n")) {
  const top = line.match(/^([a-z]+):\s*$/);
  if (top) { section = top[1]; continue; }
  const m = line.match(/^ {2}"?([a-z0-9_-]+)"?:\s*"?([^"#\n]+?|#[0-9A-Fa-f]{3,8})"?\s*(?:#.*)?$/);
  if (!m) continue;
  const [, key, value] = m;
  let cssName;
  if (section === "colors" && value.startsWith("#") && !ROLE_ALIASES.has(key)) cssName = key;
  else if (section === "rounded" && /px$/.test(value) && key !== "none") cssName = key === "full" ? "radius-pill" : `radius-${key}`;
  else if (section === "spacing" && /^\d+px$/.test(value)) cssName = /^\d/.test(key) ? `space-${key}` : key === "header-height" ? "size-header" : key;
  if (!cssName) continue;
  const actual = cssVar(cssName);
  if (!actual || actual.toLowerCase() !== value.toLowerCase()) problems.push(`${section}.${key} = ${value}  ≠  --${cssName}: ${actual ?? "(missing)"}`);
}
if (problems.length) { console.error("✖ DESIGN.md and tokens CSS are out of sync:\n  " + problems.join("\n  ")); process.exit(1); }
console.log("✓ DESIGN.md tokens match design-system/tokens");
