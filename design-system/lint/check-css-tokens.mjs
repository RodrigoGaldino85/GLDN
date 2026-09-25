#!/usr/bin/env node
// Token adherence for stylesheets (ESLint only sees JS/TS). Fails when a CSS file outside
// design-system/tokens/ hardcodes a colour, a font family, or a px value for spacing, radius or type.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOTS = ["src", "design-system"];
const SKIP = [`design-system${sep}tokens${sep}`, `design-system${sep}reference${sep}`, "node_modules"];
const RULES = [
  { re: /#[0-9a-fA-F]{3,8}\b/, msg: "raw hex colour — use a colour token" },
  { re: /\b(?:rgba?|hsla?|oklch)\(/, msg: "raw colour function — use a colour token" },
  { re: /font-family\s*:\s*(?!\s*var\()/, msg: "font-family must be var(--font-*)" },
  { re: /\b(?:padding|margin|gap|row-gap|column-gap|border-radius|font-size|letter-spacing)(?:-[a-z-]+)?\s*:[^;]*\b\d+(?:\.\d+)?px\b/, msg: "raw px for spacing/radius/type — use a token" },
];

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (SKIP.some((s) => p.includes(s))) continue;
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".css")) files.push(p);
  }
};
ROOTS.forEach(walk);

let problems = 0;
for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    const code = line.replace(/\/\*.*?\*\//g, "");
    for (const { re, msg } of RULES) {
      if (re.test(code)) { problems++; console.error(`${relative(process.cwd(), file)}:${i + 1}  ${msg}\n    ${line.trim()}`); }
    }
  });
}
if (problems) { console.error(`\n✖ ${problems} design-token violation(s) in CSS`); process.exit(1); }
console.log(`✓ CSS token adherence: ${files.length} file(s) clean`);
