import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { designSystemAdherence } from "./design-system/lint/adherence.mjs";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Design-system adherence: no hardcoded colours/px/fonts, only declared component props,
  // imports through the public barrels. See design-system/lint/adherence.mjs.
  ...designSystemAdherence,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Static visual references (vendored export runtime, not app code):
    "design-system/reference/**",
  ]),
]);

export default eslintConfig;
