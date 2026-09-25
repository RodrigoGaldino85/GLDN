// Design-system adherence rules for ESLint (flat config).
// Ported from the Claude Design export `_adherence.oxlintrc.json` (oxlint format). ESLint is the
// project linter (create-next-app default) and runs no-restricted-syntax natively, which oxlint
// only supports through a JS-plugin shim. Keep COMPONENTS in sync with the prop interfaces in
// design-system/components when an API changes.

const BASE_PROPS = ["key", "ref", "className", "style", "children"];

/** Declared props and enum-valued props of every library component (and data shapes used as JSX in the export). */
const COMPONENTS = {
  Accordion: { props: ["items", "defaultOpen", "emptyText", "forceState"] },
  AccordionItem: { props: ["question", "answer"] },
  Button: {
    props: ["variant", "size", "iconLeft", "iconRight", "disabled", "loading", "fullWidth", "href", "onClick", "type", "forceState"],
    enums: { variant: ["primary", "secondary", "ghost", "link"], size: ["sm", "md", "lg"], type: ["button", "submit", "reset"] },
  },
  Checkbox: { props: ["label", "checked", "defaultChecked", "onChange", "disabled", "required", "name", "error", "forceState"] },
  Eyebrow: { props: ["tone"], enums: { tone: ["gold", "neutral"] } },
  FeatureCard: {
    props: ["icon", "title", "description", "layout", "glow", "interactive", "onClick", "fill", "forceState"],
    enums: { layout: ["row", "stack"] },
  },
  GlassCard: {
    props: ["glow", "interactive", "padding", "radius", "onClick", "forceState", "as"],
    enums: { padding: ["none", "md", "lg", "plan", "row", "step", "panel", "panel-sm"], radius: ["lg", "card-l", "xl"] },
  },
  Icon: { props: ["name", "size", "color", "title"] },
  Input: {
    props: ["label", "placeholder", "value", "defaultValue", "onChange", "type", "hint", "error", "disabled", "required", "name", "autoComplete", "id", "forceState"],
    enums: { type: ["text", "email", "tel", "url", "password", "number"] },
  },
  Logo: { props: ["surface", "height", "wordmark", "tagline"], enums: { surface: ["auto", "dark", "light"] } },
  NavBar: { props: ["links", "cta", "onCta", "ctaHref", "onNavigate", "onLogo", "logoHref", "actions", "mobileActions", "sticky"] },
  ThemeToggle: { props: ["showLabel", "forceState"] },
  IconList: { props: ["items", "icon", "tone", "compact"], enums: { tone: ["accent", "muted", "success", "danger"] } },
  NavItem: { props: ["label", "href", "active", "forceState"] },
  PlanCard: { props: ["number", "name", "audience", "kicker", "features", "featured", "badge", "cta", "onCta", "ctaHref", "interactive", "forceState"] },
  PlanFeature: { props: ["icon", "label"] },
  SectionCounter: { props: ["index", "label"] },
  SectionHeading: {
    props: ["eyebrow", "title", "highlight", "lead", "align", "size", "as", "maxWidth"],
    enums: { align: ["left", "center"], size: ["xl", "lg", "md", "sm"], as: ["h1", "h2", "h3"] },
  },
  Select: {
    props: ["label", "options", "value", "defaultValue", "placeholder", "onChange", "hint", "error", "disabled", "required", "name", "id", "emptyText", "forceState"],
  },
  StatBlock: {
    props: ["value", "label", "description", "align", "size", "rule"],
    enums: { align: ["left", "center"], size: ["sm", "md", "lg"] },
  },
  StepCard: { props: ["number", "title", "description", "active", "interactive", "forceState", "fill"] },
  Tag: { props: ["active", "onClick", "disabled", "size", "forceState"], enums: { size: ["md", "lg"] } },
  Textarea: {
    props: ["label", "placeholder", "value", "defaultValue", "onChange", "rows", "hint", "error", "disabled", "required", "name", "id", "forceState"],
  },
};

const FONTS = ["Cinzel", "IBM Plex Sans", "Montserrat", "Space Grotesk"];

function componentSelectors() {
  const out = [];
  for (const [name, { props, enums = {} }] of Object.entries(COMPONENTS)) {
    const allowed = [...props, ...BASE_PROPS];
    out.push({
      selector: `JSXOpeningElement[name.name='${name}'] > JSXAttribute > JSXIdentifier[name!=/^(?:${allowed.join("|")})$/]`,
      message: `<${name}> doesn't accept that prop. Declared props: ${props.join(", ")}.`,
    });
    for (const [prop, values] of Object.entries(enums)) {
      out.push({
        selector: `JSXOpeningElement[name.name='${name}'] > JSXAttribute[name.name='${prop}'] > Literal[value!=/^(?:${values.join("|")})$/]`,
        message: `<${name}> ${prop} must be one of ${values.map((v) => `'${v}'`).join(" | ")}.`,
      });
    }
  }
  return out;
}

/** Hardcoded-value rules: colours, px and fonts must come from tokens (var(--…)). */
export const valueSelectors = [
  { selector: "Literal[value=/#[0-9a-fA-F]{3,8}\\b/]", message: "Raw hex color — use a design-system color token via var()." },
  { selector: "TemplateElement[value.raw=/#[0-9a-fA-F]{3,8}\\b/]", message: "Raw hex color — use a design-system color token via var()." },
  { selector: "Literal[value=/\\brgba?\\(/]", message: "Raw rgb()/rgba() color — use a design-system color token via var()." },
  { selector: "Literal[value=/\\b\\d+px\\b/]", message: "Raw px value — use a design-system spacing/size token via var()." },
  { selector: "TemplateElement[value.raw=/\\b\\d+px\\b/]", message: "Raw px value — use a design-system spacing/size token via var()." },
  {
    selector: `Literal[value=/font-family\\s*:\\s*(?!['"]?(?:${FONTS.join("|")}|var\\())/i]`,
    message: `Font not provided by the design system. Available: ${FONTS.join(", ")} (use var(--font-display) / var(--font-body)).`,
  },
];

const restrictedSyntax = ["warn", ...valueSelectors, ...componentSelectors()];

/** Flat-config entries. Spread into eslint.config.mjs. */
export const designSystemAdherence = [
  {
    name: "design-system/adherence",
    files: ["src/**/*.{ts,tsx,js,jsx}", "design-system/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "no-restricted-syntax": restrictedSyntax,
      "no-restricted-imports": ["warn", {
        patterns: [{
          group: ["@ds/components/*/*", "**/design-system/components/*/*", "@ds/patterns/*", "@ds/templates/*/*"],
          message: "Import design-system components from '@ds/components' (patterns from '@ds/patterns', templates from '@ds/templates/website'), not component internals.",
        }],
      }],
    },
  },
  {
    // The library itself is allowed to import its own internals.
    name: "design-system/internals",
    files: ["design-system/**/*.{ts,tsx}"],
    rules: { "no-restricted-imports": "off" },
  },
];
