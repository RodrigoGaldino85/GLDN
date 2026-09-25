/* @ds-bundle: {"format":4,"namespace":"GLDNTechDesignSystem_247012","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"GlassCard","sourcePath":"components/cards/GlassCard.jsx"},{"name":"PlanCard","sourcePath":"components/cards/PlanCard.jsx"},{"name":"StepCard","sourcePath":"components/cards/StepCard.jsx"},{"name":"Eyebrow","sourcePath":"components/display/Eyebrow.jsx"},{"name":"SectionCounter","sourcePath":"components/display/SectionCounter.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/display/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"602ae7297066","components/brand/Icon.jsx":"fba5718cf176","components/brand/Logo.jsx":"a3ad76732fe1","components/cards/FeatureCard.jsx":"e06fe339b1d2","components/cards/GlassCard.jsx":"c2ee2c085d44","components/cards/PlanCard.jsx":"1a3f965115bd","components/cards/StepCard.jsx":"cd659a4cc75d","components/display/Eyebrow.jsx":"c02a34325cb4","components/display/SectionCounter.jsx":"d6870a865278","components/display/SectionHeading.jsx":"77cfa7cbfdf7","components/display/StatBlock.jsx":"a05f7f42d508","components/display/Tag.jsx":"0f320d09975a","components/forms/Checkbox.jsx":"d1bf14afdafc","components/forms/Input.jsx":"9af7f780e539","components/forms/Select.jsx":"2319dc311676","components/forms/Textarea.jsx":"2a18b42d3e06","components/navigation/Accordion.jsx":"40f32383bc82","components/navigation/NavBar.jsx":"e6ab741ca912","ui_kits/website/ContactPage.jsx":"bdc394e2d5cf","ui_kits/website/Home.jsx":"29d344646e22","ui_kits/website/Shared.jsx":"49adaf170930","ui_kits/website/SolutionsPage.jsx":"216b7307c76c","ui_kits/website/TrainingPage.jsx":"30baccc55357"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GLDNTechDesignSystem_247012 = window.GLDNTechDesignSystem_247012 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
const LUCIDE = 'https://unpkg.com/lucide-static@0.469.0/icons/';
/** Line icon (Lucide, 1.5–2px stroke) tinted via currentColor using a CSS mask. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  title
}) {
  const url = 'url(' + LUCIDE + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 38,
    px: 18,
    fs: 11.5
  },
  md: {
    h: 48,
    px: 26,
    fs: 12.5
  },
  lg: {
    h: 58,
    px: 34,
    fs: 13.5
  }
};
/** GLDN button — pill, uppercase tracked Montserrat. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: variant === 'link' ? 'auto' : s.h,
    padding: variant === 'link' ? 0 : '0 ' + s.px + 'px',
    borderRadius: 999,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.fs,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .4 : 1,
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    transform: press && !disabled ? 'scale(.98)' : 'none'
  };
  const on = hover && !disabled;
  const v = {
    primary: {
      background: press ? 'var(--accent-press)' : on ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--on-accent)',
      boxShadow: on ? 'var(--shadow-button)' : 'none'
    },
    secondary: {
      background: on ? 'var(--surface-accent)' : 'transparent',
      color: 'var(--text-accent)',
      borderColor: on ? 'var(--border-accent-strong)' : 'var(--border-accent)'
    },
    ghost: {
      background: on ? 'rgba(255,255,255,.06)' : 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-default)'
    },
    link: {
      background: 'none',
      color: on ? 'var(--gold-200)' : 'var(--text-accent)'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  const iconSize = s.fs + 4;
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize,
    style: {
      transition: 'transform var(--dur-base) var(--ease-out)',
      transform: on && variant === 'link' ? 'translateX(4px)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/** GLDN Tech logo — reproduces assets/logo-*.svg inline so the logotype fonts load. */
function Logo({
  surface = 'dark',
  height = 40,
  wordmark = true,
  tagline = true,
  style
}) {
  const word = surface === 'dark' ? '#F5F5F5' : '#1C1D22';
  const sub = surface === 'dark' ? '#D4AF37' : '#B8962C';
  const vb = wordmark ? '20 20 524 160' : '20 20 160 160';
  const w = wordmark ? height * 3.275 : height;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: vb,
    width: w,
    height: height,
    role: "img",
    "aria-label": "GLDN Tech",
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "20",
    width: "160",
    height: "160",
    rx: "36",
    fill: "#1C1D22",
    stroke: surface === 'dark' ? '#3A3A3F' : 'none',
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(53,53) scale(0.94)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "38",
    r: "26",
    fill: "#F0D98C",
    fillOpacity: "0.82"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "38",
    r: "26",
    fill: "#D4AF37",
    fillOpacity: "0.82"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "63",
    r: "26",
    fill: "#9C7A1E",
    fillOpacity: "0.82"
  })), wordmark && /*#__PURE__*/React.createElement("text", {
    x: "212",
    y: tagline ? 118 : 132,
    fontFamily: "'Montserrat',Arial,sans-serif",
    fontWeight: "500",
    fontSize: "80",
    letterSpacing: "24",
    fill: word
  }, "GLDN"), wordmark && tagline && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "214",
    y1: "152",
    x2: "311",
    y2: "152",
    stroke: sub,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "325",
    y: "159",
    fontFamily: "'Montserrat',Arial,sans-serif",
    fontWeight: "600",
    fontSize: "19",
    letterSpacing: "11",
    fill: sub
  }, "TECH"), /*#__PURE__*/React.createElement("line", {
    x1: "425",
    y1: "152",
    x2: "522",
    y2: "152",
    stroke: sub,
    strokeWidth: "2"
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/GlassCard.jsx
try { (() => {
const {
  useState
} = React;
/** Smoked-glass surface with hairline border; the base of every card. */
function GlassCard({
  children,
  glow = false,
  interactive = false,
  padding = 28,
  radius = 16,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const on = interactive && hover;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      padding,
      borderRadius: radius,
      background: 'var(--gradient-card-sheen), ' + (on ? 'var(--surface-card-hover)' : 'var(--surface-card)'),
      border: '1px solid ' + (glow || on ? 'var(--border-accent)' : 'var(--border-subtle)'),
      boxShadow: glow ? 'var(--shadow-card), 0 0 60px -20px rgba(212,175,55,.35)' : 'var(--shadow-card)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      cursor: onClick ? 'pointer' : undefined,
      transform: on ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
/** Icon + uppercase title + description in a glass card. */
function FeatureCard({
  icon,
  title,
  description,
  layout = 'row',
  glow = false,
  interactive = true,
  style
}) {
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    glow: glow,
    interactive: interactive,
    padding: row ? '26px 28px' : 32,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      gap: row ? 22 : 20,
      alignItems: 'flex-start'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: row ? 34 : 30,
    color: "var(--accent)",
    style: {
      marginTop: row ? 2 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, description))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PlanCard.jsx
try { (() => {
/** Engagement/plan tier card. */
function PlanCard({
  number,
  name,
  audience,
  kicker,
  features = [],
  featured = false,
  badge,
  cta,
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    glow: featured,
    padding: 30,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      height: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 80,
      lineHeight: .9,
      color: featured ? 'rgba(212,175,55,.4)' : 'var(--ghost-numeral)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 10
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      height: 24,
      padding: '0 10px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 999,
      border: '1px solid var(--border-accent-strong)',
      color: 'var(--text-accent)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase'
    }
  }, badge), kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      textAlign: 'right',
      maxWidth: 140,
      lineHeight: 1.6
    }
  }, kicker))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: featured ? 'var(--text-accent)' : 'var(--text-strong)'
    }
  }, name), audience && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontWeight: 300,
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, audience)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      fontSize: 14.5,
      color: 'var(--text-strong)',
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f.icon || 'check',
    size: 18,
    color: featured ? 'var(--accent)' : 'var(--text-body)'
  }), f.label || f))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'secondary',
    fullWidth: true,
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StepCard.jsx
try { (() => {
/** Process step with oversized ghost numeral. */
function StepCard({
  number,
  title,
  description,
  active = false,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    glow: active,
    padding: "18px 28px 30px",
    style: {
      borderColor: active ? undefined : 'rgba(212,175,55,.22)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 112,
      lineHeight: 1,
      color: active ? 'rgba(212,175,55,.35)' : 'var(--ghost-numeral)',
      marginBottom: 6,
      letterSpacing: '-.01em'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, description));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Eyebrow.jsx
try { (() => {
/** Outlined gold pill label that sits above a headline ("A SOLUÇÃO"). */
function Eyebrow({
  children,
  tone = 'gold',
  style
}) {
  const c = tone === 'gold' ? {
    color: 'var(--text-accent)',
    borderColor: 'var(--border-accent)'
  } : {
    color: 'var(--text-body)',
    borderColor: 'var(--border-default)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 32,
      padding: '0 16px',
      borderRadius: 999,
      border: '1px solid',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 11.5,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...c,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionCounter.jsx
try { (() => {
/** Index marker "03 ——— SOBRE NÓS" used in section corners. */
function SectionCounter({
  index,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 600,
      letterSpacing: '.12em'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, label));
}
Object.assign(__ds_scope, { SectionCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionCounter.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
const SZ = {
  xl: 'var(--fs-display-l)',
  lg: 'var(--fs-h1)',
  md: 'var(--fs-h2)',
  sm: 'var(--fs-h3)'
};
/** Two-tone Cinzel headline: pearl statement + gold continuation, with optional eyebrow and lead. */
function SectionHeading({
  eyebrow,
  title,
  highlight,
  lead,
  align = 'left',
  size = 'lg',
  as = 'h2',
  maxWidth = 820,
  style
}) {
  const H = as;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: SZ[size],
      lineHeight: 1.1,
      letterSpacing: '.01em',
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title, highlight && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, highlight))), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: size === 'sm' ? 16 : 19,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 640,
      textWrap: 'pretty'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/display/StatBlock.jsx
try { (() => {
/** Big gold metric with tracked label and short description. */
function StatBlock({
  value,
  label,
  description,
  align = 'left',
  size = 'md',
  rule = true,
  style
}) {
  const fs = size === 'lg' ? 96 : size === 'sm' ? 40 : 56;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      paddingLeft: rule && align === 'left' ? 20 : 0,
      borderLeft: rule && align === 'left' ? '1px solid var(--border-default)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1,
      color: 'var(--text-accent)',
      letterSpacing: '.01em'
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: 260
    }
  }, description));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Small squared chip for parameters / topics. */
function Tag({
  children,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 30,
      padding: '0 14px',
      borderRadius: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 500,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)',
      background: active ? 'var(--surface-accent)' : 'rgba(255,255,255,.03)',
      color: active ? 'var(--text-accent)' : 'var(--text-body)',
      border: '1px solid ' + (active ? 'var(--border-accent)' : 'var(--border-subtle)'),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
/** Square checkbox with gold check. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 5,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-default)'),
      background: on ? 'var(--accent)' : 'var(--bg-inset)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--on-accent)"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 11.5,
  letterSpacing: '.24em',
  textTransform: 'uppercase',
  color: 'var(--text-body)'
};
const fieldStyle = (focus, error, disabled) => ({
  width: '100%',
  background: 'var(--bg-inset)',
  color: 'var(--text-strong)',
  border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--border-accent-strong)' : 'var(--border-default)'),
  borderRadius: 10,
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 400,
  outline: 'none',
  boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
  opacity: disabled ? .45 : 1,
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
});
const Hint = ({
  error,
  hint
}) => error || hint ? /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12.5,
    color: error ? 'var(--status-danger)' : 'var(--text-muted)'
  }
}, error || hint) : null;
/** Text field with tracked uppercase label. */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  hint,
  error,
  disabled = false,
  required = false,
  name,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldStyle(focus, error, disabled),
      height: 50,
      padding: '0 16px'
    }
  }), /*#__PURE__*/React.createElement(Hint, {
    error: error,
    hint: hint
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 11.5,
  letterSpacing: '.24em',
  textTransform: 'uppercase',
  color: 'var(--text-body)'
};
const fieldStyle = (focus, error, disabled) => ({
  width: '100%',
  background: 'var(--bg-inset)',
  color: 'var(--text-strong)',
  border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--border-accent-strong)' : 'var(--border-default)'),
  borderRadius: 10,
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 400,
  outline: 'none',
  boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
  opacity: disabled ? .45 : 1,
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
});
const Hint = ({
  error,
  hint
}) => error || hint ? /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12.5,
    color: error ? 'var(--status-danger)' : 'var(--text-muted)'
  }
}, error || hint) : null;
/** Native select styled as a GLDN field. */
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  hint,
  error,
  disabled = false,
  required = false,
  name,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    defaultValue: defaultValue ?? (placeholder ? '' : undefined),
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldStyle(focus, error, disabled),
      height: 50,
      padding: '0 44px 0 16px',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: '#16161A'
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-accent)",
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement(Hint, {
    error: error,
    hint: hint
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const {
  useState
} = React;
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 11.5,
  letterSpacing: '.24em',
  textTransform: 'uppercase',
  color: 'var(--text-body)'
};
const fieldStyle = (focus, error, disabled) => ({
  width: '100%',
  background: 'var(--bg-inset)',
  color: 'var(--text-strong)',
  border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--border-accent-strong)' : 'var(--border-default)'),
  borderRadius: 10,
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 400,
  outline: 'none',
  boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
  opacity: disabled ? .45 : 1,
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
});
const Hint = ({
  error,
  hint
}) => error || hint ? /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12.5,
    color: error ? 'var(--status-danger)' : 'var(--text-muted)'
  }
}, error || hint) : null;
/** Multi-line text field. */
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 4,
  hint,
  error,
  disabled = false,
  required = false,
  name,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", {
    name: name,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldStyle(focus, error, disabled),
      padding: '14px 16px',
      lineHeight: 1.55,
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement(Hint, {
    error: error,
    hint: hint
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/** FAQ-style disclosure list; one item open at a time. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        padding: '26px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--text-accent)',
        width: 28
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 17,
        color: on ? 'var(--text-strong)' : 'var(--text-body)',
        transition: 'color var(--dur-fast)'
      }
    }, it.question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? 'minus' : 'plus',
      size: 20,
      color: "var(--accent)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 52px 28px 52px',
        fontWeight: 300,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: 'var(--text-body)',
        maxWidth: 760
      }
    }, it.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
function NavLink({
  item,
  onNavigate
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(item);
      }
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      padding: '8px 0',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      color: item.active ? 'var(--text-accent)' : hover ? 'var(--text-strong)' : 'var(--text-body)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, item.label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 1,
      width: item.active ? 24 : hover ? '100%' : 0,
      background: 'var(--accent)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }));
}
/** Site header: logo, tracked links with gold active rule, CTA. */
function NavBar({
  links = [],
  cta,
  onCta,
  onNavigate,
  onLogo,
  sticky = true,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      background: 'rgba(11,11,11,.72)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      if (onLogo) {
        e.preventDefault();
        onLogo();
      }
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 34
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 36,
      marginLeft: 'auto',
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.label,
    item: l,
    onNavigate: onNavigate
  }))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
const {
  SectionHeading: CH,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button: CBtn,
  GlassCard: CGlass,
  Icon: CIcon
} = window.GLDNTechDesignSystem_247012;
function ContactPage({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErr('Informe um e-mail corporativo válido');
      return;
    }
    setSent(true);
  };
  const info = [['mail', 'contato@gldn.tech'], ['map-pin', 'São Paulo · Atendimento em todo o Brasil'], ['clock', 'Resposta em até 1 dia útil']];
  return /*#__PURE__*/React.createElement(Section, {
    glow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Glow, {
      x: "85%",
      y: "30%",
      size: 1000
    }), /*#__PURE__*/React.createElement(Glow, {
      x: "0%",
      y: "90%",
      size: 700,
      color: "rgba(212,175,55,.10)"
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(CH, {
    as: "h1",
    size: "lg",
    eyebrow: "Contato",
    title: "Vamos conversar",
    highlight: "sobre o seu momento.",
    lead: "Conte onde sua empresa est\xE1 com IA. Em at\xE9 um dia \xFAtil, um especialista retorna com os pr\xF3ximos passos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, info.map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: i,
    size: 20,
    color: "var(--accent)"
  }), t)))), /*#__PURE__*/React.createElement(CGlass, {
    glow: true,
    padding: "clamp(24px,4vw,44px)",
    radius: 20
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: '1px solid var(--border-accent-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "check",
    size: 26,
    color: "var(--accent)"
  })), /*#__PURE__*/React.createElement(CH, {
    size: "sm",
    title: "Mensagem recebida.",
    highlight: "Falamos em breve.",
    lead: 'Enviamos uma confirmação para ' + email + '.'
  }), /*#__PURE__*/React.createElement(CBtn, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      go('home');
    }
  }, "Voltar ao in\xEDcio")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail corporativo",
    type: "email",
    placeholder: "voce@empresa.com.br",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setErr('');
    },
    error: err,
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Nome da empresa"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Colaboradores",
    placeholder: "Selecione",
    options: ['1–50', '51–500', '501–5.000', '5.000+']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Interesse",
    placeholder: "Selecione",
    options: ['Copilot para Microsoft 365', 'Copilot Studio & agentes', 'Governança de IA', 'Capacitação'],
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Mensagem",
    rows: 4,
    placeholder: "Qual processo voc\xEA quer acelerar com IA?",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "Aceito receber comunica\xE7\xF5es da GLDN Tech.",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Enviar mensagem"))))));
}
Object.assign(window, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  FeatureCard,
  StepCard,
  StatBlock,
  PlanCard,
  Accordion,
  Icon: HIcon,
  Logo: HLogo,
  Eyebrow
} = window.GLDNTechDesignSystem_247012;
function HubDiagram() {
  const node = (pos, icon, title, desc) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      ...pos,
      width: 250
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: icon,
    title: title,
    description: desc
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 560,
      height: 560,
      flex: 'none',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 40,
      borderRadius: '50%',
      border: '1px dashed rgba(212,175,55,.28)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 130,
      borderRadius: '50%',
      border: '1px dashed rgba(212,175,55,.2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 180,
      height: 180,
      transform: 'translate(-50%,-50%)',
      borderRadius: '50%',
      border: '1px solid var(--border-accent-strong)',
      background: 'radial-gradient(closest-side,rgba(212,175,55,.18),rgba(11,11,11,.9))',
      boxShadow: '0 0 80px -10px rgba(212,175,55,.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HLogo, {
    wordmark: false,
    height: 84
  })), node({
    left: 155,
    top: 0
  }, 'bot', 'Copilot', 'Microsoft 365 no dia a dia.'), node({
    left: 0,
    top: 215
  }, 'workflow', 'Agentes', 'Processos automatizados.'), node({
    right: 0,
    top: 215
  }, 'shield-check', 'Governança', 'Dados seguros e auditáveis.'), node({
    left: 155,
    bottom: 0
  }, 'graduation-cap', 'Pessoas', 'Capacitação contínua.'));
}
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 96
    },
    glow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Glow, {
      x: "78%",
      y: "45%",
      size: 1100
    }), /*#__PURE__*/React.createElement(Glow, {
      x: "0%",
      y: "100%",
      size: 700,
      color: "rgba(212,175,55,.10)"
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 460px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    size: "xl",
    eyebrow: "Microsoft Copilot \xB7 IA corporativa",
    title: "IA que eleva",
    highlight: "o potencial do seu time.",
    lead: "Transformamos suas licen\xE7as de Microsoft Copilot em produtividade real \u2014 com implanta\xE7\xE3o segura, agentes sob medida e capacita\xE7\xE3o para cada \xE1rea."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('contato')
  }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: () => go('solucoes')
  }, "Ver solu\xE7\xF5es")), /*#__PURE__*/React.createElement(TrackedLine, {
    items: ['Diagnóstico', 'Implantação', 'Capacitação', 'Resultado'],
    style: {
      marginTop: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 560px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(HubDiagram, null))));
}
function Challenge() {
  return /*#__PURE__*/React.createElement(Section, {
    counter: ['01', 'O desafio'],
    glow: /*#__PURE__*/React.createElement(Glow, {
      x: "10%",
      y: "40%",
      size: 800
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "O desafio",
    title: "Licen\xE7as compradas.",
    highlight: "Uso que n\xE3o decola.",
    lead: "A maioria das empresas ativa o Copilot e espera que a ado\xE7\xE3o aconte\xE7a sozinha. Sem m\xE9todo, a IA vira mais uma ferramenta esquecida."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "circle-dashed",
    title: "Licen\xE7as ociosas",
    description: "Investimento ativo, uso espor\xE1dico e sem m\xE9trica de retorno."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "circle-help",
    title: "Times sem confian\xE7a",
    description: "Colaboradores n\xE3o sabem o que pedir \u2014 nem quando confiar na resposta."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "lock-open",
    title: "Governan\xE7a improvisada",
    description: "Permiss\xF5es antigas exp\xF5em dados que o Copilot passa a encontrar."
  }))));
}
function Solutions({
  go
}) {
  const items = [['bot', 'Copilot para Microsoft 365', 'Word, Excel, Outlook, Teams e PowerPoint trabalhando a favor de cada função.'], ['workflow', 'Copilot Studio & agentes', 'Agentes que conhecem seus processos, sistemas e políticas internas.'], ['shield-check', 'Governança & segurança', 'Revisão de permissões, rótulos de sensibilidade e políticas de uso.'], ['graduation-cap', 'Capacitação contínua', 'Trilhas por área, prompts de referência e champions internos.']];
  return /*#__PURE__*/React.createElement(Section, {
    counter: ['02', 'Soluções']
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Uma consultoria.",
    highlight: "Toda a jornada da IA.",
    lead: "Da estrat\xE9gia ao h\xE1bito di\xE1rio \u2014 cobrimos cada etapa para que o investimento em IA se pague."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16,
      marginTop: 64
    }
  }, items.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    onClick: () => go('solucoes'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    layout: "stack",
    icon: i,
    title: t,
    description: d,
    style: {
      height: '100%'
    }
  })))));
}
function Method() {
  const steps = [['01', 'Diagnóstico', 'Maturidade, processos, dados e licenças.'], ['02', 'Implantação', 'Governança, piloto e casos de uso prioritários.'], ['03', 'Capacitação', 'Trilhas práticas por área e por função.'], ['04', 'Evolução', 'Métricas de uso, novos agentes e melhoria contínua.']];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement(Section, {
    counter: ['03', 'Método'],
    glow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Glow, {
      x: "50%",
      y: "100%",
      size: 1000
    }))
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Um ciclo cont\xEDnuo",
    highlight: "do piloto \xE0 escala.",
    lead: "Cada etapa alimenta a pr\xF3xima \u2014 e a IA fica mais \xFAtil a cada m\xEAs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
      gap: 16,
      marginTop: 64
    }
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    onMouseEnter: () => setActive(i)
  }, /*#__PURE__*/React.createElement(StepCard, {
    number: n,
    title: t,
    description: d,
    active: i === active,
    style: {
      height: '100%'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(GoldRule, {
    center: true
  }), /*#__PURE__*/React.createElement(TrackedLine, {
    items: ['Sempre medindo, sempre evoluindo.'],
    style: {
      letterSpacing: '.42em'
    }
  })));
}
function Impact() {
  return /*#__PURE__*/React.createElement(Section, {
    counter: ['04', 'Impacto'],
    glow: /*#__PURE__*/React.createElement(Glow, {
      x: "50%",
      y: "55%",
      size: 1200
    })
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Menos trabalho manual.",
    highlight: "Mais tempo para decidir."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 40,
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+30%",
    label: "Ado\xE7\xE3o ativa",
    description: "Usu\xE1rios que usam o Copilot toda semana."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    size: "lg",
    value: "8h",
    label: "Por pessoa / m\xEAs",
    description: "Tempo devolvido em tarefas repetitivas."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "6 sem.",
    label: "At\xE9 o piloto",
    description: "Do diagn\xF3stico ao primeiro caso de uso em produ\xE7\xE3o."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48,
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--text-faint)'
    }
  }, "M\xE9tricas ilustrativas para fins de apresenta\xE7\xE3o."));
}
function Plans({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    counter: ['05', 'Formatos']
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Comece do seu ponto.",
    highlight: "Escale no seu ritmo.",
    lead: "Tr\xEAs formatos de projeto. O mesmo compromisso com resultado."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 16,
      marginTop: 56,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PlanCard, {
    number: "01",
    name: "Essencial",
    audience: "Para quem est\xE1 come\xE7ando.",
    kicker: "Um come\xE7o s\xF3lido",
    features: [{
      icon: 'search',
      label: 'Diagnóstico de maturidade'
    }, {
      icon: 'shield-check',
      label: 'Revisão de governança'
    }, {
      icon: 'presentation',
      label: 'Workshop executivo'
    }],
    cta: "Quero come\xE7ar",
    onCta: () => go('contato')
  }), /*#__PURE__*/React.createElement(PlanCard, {
    number: "02",
    name: "Ado\xE7\xE3o",
    audience: "Para times prontos para escalar.",
    kicker: "Mais impacto",
    featured: true,
    badge: "Mais escolhido",
    features: [{
      icon: 'rocket',
      label: 'Piloto com casos de uso'
    }, {
      icon: 'graduation-cap',
      label: 'Trilhas por área'
    }, {
      icon: 'users',
      label: 'Programa de champions'
    }, {
      icon: 'bar-chart-3',
      label: 'Painel de adoção'
    }],
    cta: "Falar com especialista",
    onCta: () => go('contato')
  }), /*#__PURE__*/React.createElement(PlanCard, {
    number: "03",
    name: "Enterprise",
    audience: "Para ecossistemas complexos.",
    kicker: "Sob medida",
    features: [{
      icon: 'workflow',
      label: 'Agentes com Copilot Studio'
    }, {
      icon: 'plug',
      label: 'Integrações com seus sistemas'
    }, {
      icon: 'headset',
      label: 'Squad dedicado'
    }],
    cta: "Montar projeto",
    onCta: () => go('contato')
  })));
}
function Faq() {
  return /*#__PURE__*/React.createElement(Section, {
    counter: ['06', 'Perguntas']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    title: "D\xFAvidas",
    highlight: "frequentes.",
    lead: "N\xE3o encontrou sua pergunta? Fale com a gente."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'O Copilot acessa dados que o colaborador não pode ver?',
      answer: 'Não. O Copilot respeita as permissões do Microsoft 365 — por isso toda implantação começa revisando quem tem acesso a quê.'
    }, {
      question: 'Quanto tempo leva para ver resultado?',
      answer: 'Um piloto bem desenhado entrega os primeiros casos de uso em produção em cerca de seis semanas.'
    }, {
      question: 'Vocês capacitam áreas não técnicas?',
      answer: 'Sim. As trilhas são desenhadas por função — jurídico, financeiro, comercial, RH — com exemplos do dia a dia de cada time.'
    }, {
      question: 'Precisamos já ter licenças do Copilot?',
      answer: 'Não. O diagnóstico ajuda a definir quantas licenças fazem sentido e para quem, antes de qualquer compra.'
    }]
  }))));
}
function FinalCta({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    },
    glow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'min(34vw,440px)',
        lineHeight: 1,
        color: 'rgba(255,255,255,.035)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none'
      }
    }, "GLDN"), /*#__PURE__*/React.createElement(Glow, {
      x: "50%",
      y: "60%",
      size: 900
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 36,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    size: "xl",
    title: "Ideias complexas.",
    highlight: "Resultados claros."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('contato')
  }, "Agendar diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement(GoldRule, {
    center: true
  }), /*#__PURE__*/React.createElement(TrackedLine, {
    items: ['Mais clareza', 'Mais impacto']
  })));
}
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Challenge, null), /*#__PURE__*/React.createElement(Solutions, {
    go: go
  }), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Impact, null), /*#__PURE__*/React.createElement(Plans, {
    go: go
  }), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
Object.assign(window, {
  HomePage,
  FinalCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const DS = window.GLDNTechDesignSystem_247012;
const {
  Logo,
  Icon,
  SectionCounter
} = DS;
function Glow({
  x = '80%',
  y = '20%',
  size = 900,
  color = 'rgba(224,138,46,.20)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      transform: 'translate(-50%,-50%)',
      background: 'radial-gradient(closest-side,' + color + ',transparent)',
      pointerEvents: 'none'
    }
  });
}
function Section({
  children,
  id,
  glow,
  counter,
  style,
  inner
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--section-y) 0',
      ...style
    }
  }, glow, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...inner
    }
  }, counter && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionCounter, {
    index: counter[0],
    label: counter[1]
  })), children));
}
function TrackedLine({
  items,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 18px',
      alignItems: 'center',
      fontSize: 11.5,
      fontWeight: 500,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      ...style
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, t))));
}
function GoldRule({
  center,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 2,
      background: 'var(--accent)',
      margin: center ? '0 auto' : 0,
      ...style
    }
  });
}
function Footer({
  go
}) {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, title), links.map(([l, p]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      p && go(p);
    },
    style: {
      color: 'var(--text-body)',
      fontSize: 14.5,
      fontWeight: 300
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-page-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      gridColumn: 'span 2',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 38
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.65
    }
  }, "Consultoria especializada em Microsoft Copilot e IA corporativa. Do diagn\xF3stico \xE0 ado\xE7\xE3o, com governan\xE7a e resultado.")), col('Soluções', [['Copilot para Microsoft 365', 'solucoes'], ['Copilot Studio & agentes', 'solucoes'], ['Governança de IA', 'solucoes']]), col('Empresa', [['Capacitação', 'capacitacao'], ['Método', 'home'], ['Contato', 'contato']])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px var(--gutter) 40px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(TrackedLine, {
    items: ['GLDN Tech', '2026']
  }), /*#__PURE__*/React.createElement(TrackedLine, {
    items: ['Diagnóstico', 'Implantação', 'Capacitação', 'Resultado']
  })));
}
Object.assign(window, {
  Glow,
  Section,
  TrackedLine,
  GoldRule,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SolutionsPage.jsx
try { (() => {
const {
  SectionHeading: SH,
  Tag: STag,
  GlassCard: SGlass,
  Icon: SIcon,
  Button: SBtn,
  FeatureCard: SFeat
} = window.GLDNTechDesignSystem_247012;
const SOLUTIONS = {
  m365: {
    tab: 'Copilot para Microsoft 365',
    title: 'O Copilot dentro',
    hi: 'de cada aplicativo.',
    lead: 'Configuramos, validamos e ensinamos o Copilot onde o trabalho já acontece.',
    apps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'Loop'],
    feats: [['file-text', 'Documentos em minutos', 'Rascunhos, resumos e revisões a partir dos seus arquivos.'], ['mail', 'Caixa de entrada sob controle', 'Resumo de threads e respostas no tom certo.'], ['table', 'Análises sem fórmula', 'Perguntas em linguagem natural sobre planilhas.'], ['video', 'Reuniões que viram ação', 'Atas, decisões e próximos passos automáticos.']]
  },
  studio: {
    tab: 'Copilot Studio & agentes',
    title: 'Agentes que conhecem',
    hi: 'o seu negócio.',
    lead: 'Criamos agentes com Copilot Studio conectados às suas bases, sistemas e políticas.',
    apps: ['SharePoint', 'Dataverse', 'Power Automate', 'ServiceNow', 'SAP'],
    feats: [['headset', 'Atendimento interno', 'RH, TI e jurídico respondendo 24/7 com fontes oficiais.'], ['workflow', 'Fluxos automatizados', 'Aprovações e rotinas acionadas por conversa.'], ['database', 'Conhecimento conectado', 'Respostas baseadas nos documentos certos.'], ['gauge', 'Monitoramento', 'Uso, custo e qualidade das respostas em um painel.']]
  },
  gov: {
    tab: 'Governança & segurança',
    title: 'IA com segurança',
    hi: 'desde o primeiro dia.',
    lead: 'Revisamos permissões e políticas para que o Copilot encontre só o que deve.',
    apps: ['Purview', 'Entra ID', 'SharePoint', 'Defender'],
    feats: [['shield-check', 'Revisão de acessos', 'Sites e pastas com permissões excessivas identificados.'], ['tag', 'Rótulos de sensibilidade', 'Classificação que acompanha o documento.'], ['scroll-text', 'Política de uso', 'Regras claras e comunicáveis para toda a empresa.'], ['eye', 'Auditoria', 'Rastreabilidade de prompts e respostas.']]
  }
};
function SolutionsPage({
  go
}) {
  const [k, setK] = React.useState('m365');
  const s = SOLUTIONS[k];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 48
    },
    glow: /*#__PURE__*/React.createElement(Glow, {
      x: "85%",
      y: "10%",
      size: 1000
    })
  }, /*#__PURE__*/React.createElement(SH, {
    as: "h1",
    size: "xl",
    eyebrow: "Solu\xE7\xF5es",
    title: "Tudo o que a IA precisa",
    highlight: "para dar certo.",
    lead: "Escolha uma frente para ver como trabalhamos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 48
    }
  }, Object.entries(SOLUTIONS).map(([key, v]) => /*#__PURE__*/React.createElement(STag, {
    key: key,
    active: k === key,
    onClick: () => setK(key),
    style: {
      height: 40,
      padding: '0 18px',
      fontSize: 13.5
    }
  }, v.tab)))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 24
    },
    glow: /*#__PURE__*/React.createElement(Glow, {
      x: "20%",
      y: "60%",
      size: 900
    })
  }, /*#__PURE__*/React.createElement(SGlass, {
    glow: true,
    padding: "clamp(28px,5vw,56px)",
    radius: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SH, {
    size: "md",
    title: s.title,
    highlight: s.hi,
    lead: s.lead
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Onde atuamos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, s.apps.map(a => /*#__PURE__*/React.createElement(STag, {
    key: a
  }, a)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SBtn, {
    iconRight: "arrow-right",
    onClick: () => go('contato')
  }, "Conversar sobre ", s.tab.split(' ')[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 14
    }
  }, s.feats.map(([i, t, d]) => /*#__PURE__*/React.createElement(SFeat, {
    key: t,
    layout: "stack",
    icon: i,
    title: t,
    description: d
  })))))), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
Object.assign(window, {
  SolutionsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SolutionsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrainingPage.jsx
try { (() => {
const {
  SectionHeading: TH,
  Tag: TTag,
  StepCard: TStep,
  FeatureCard: TFeat
} = window.GLDNTechDesignSystem_247012;
const TRACKS = {
  Liderança: [['01', 'Visão estratégica', 'Onde a IA gera valor no seu setor.'], ['02', 'Decisão com dados', 'Copilot para análises e briefings.'], ['03', 'Cultura de IA', 'Como liderar a adoção pelo exemplo.']],
  Gestores: [['01', 'Rotina assistida', 'Reuniões, e-mails e relatórios com Copilot.'], ['02', 'Times aumentados', 'Casos de uso por área.'], ['03', 'Medir adoção', 'Indicadores de uso e impacto.']],
  Operações: [['01', 'Primeiros prompts', 'Como pedir, revisar e confiar.'], ['02', 'Documentos & planilhas', 'Word e Excel no dia a dia.'], ['03', 'Automação simples', 'Fluxos com Power Automate.']],
  TI: [['01', 'Governança', 'Permissões, rótulos e políticas.'], ['02', 'Copilot Studio', 'Construindo o primeiro agente.'], ['03', 'Operação', 'Monitoramento, custo e suporte.']]
};
function TrainingPage({
  go
}) {
  const [t, setT] = React.useState('Gestores');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    glow: /*#__PURE__*/React.createElement(Glow, {
      x: "15%",
      y: "20%",
      size: 1000
    })
  }, /*#__PURE__*/React.createElement(TH, {
    as: "h1",
    size: "xl",
    eyebrow: "Capacita\xE7\xE3o",
    title: "Pessoas preparadas.",
    highlight: "IA que vira h\xE1bito.",
    lead: "Trilhas pr\xE1ticas por fun\xE7\xE3o, com exemplos reais do dia a dia de cada time \u2014 presenciais, ao vivo ou sob demanda."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    },
    counter: ['01', 'Trilhas']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, Object.keys(TRACKS).map(k => /*#__PURE__*/React.createElement(TTag, {
    key: k,
    active: k === t,
    onClick: () => setT(k),
    style: {
      height: 40,
      padding: '0 20px',
      fontSize: 13.5
    }
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 16
    }
  }, TRACKS[t].map(([n, ti, d], i) => /*#__PURE__*/React.createElement(TStep, {
    key: t + n,
    number: n,
    title: ti,
    description: d,
    active: i === 0
  })))), /*#__PURE__*/React.createElement(Section, {
    counter: ['02', 'Formatos'],
    glow: /*#__PURE__*/React.createElement(Glow, {
      x: "80%",
      y: "50%",
      size: 900
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TFeat, {
    layout: "stack",
    icon: "presentation",
    title: "Workshops presenciais",
    description: "Imers\xF5es de meio per\xEDodo com exerc\xEDcios em ambiente real."
  }), /*#__PURE__*/React.createElement(TFeat, {
    layout: "stack",
    icon: "monitor-play",
    title: "Turmas ao vivo",
    description: "Sess\xF5es online curtas, gravadas e com material de apoio."
  }), /*#__PURE__*/React.createElement(TFeat, {
    layout: "stack",
    icon: "book-open",
    title: "Biblioteca de prompts",
    description: "Modelos validados por \xE1rea, prontos para usar."
  }), /*#__PURE__*/React.createElement(TFeat, {
    layout: "stack",
    icon: "users",
    title: "Programa de champions",
    description: "Multiplicadores internos que sustentam a ado\xE7\xE3o."
  }))), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
Object.assign(window, {
  TrainingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrainingPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionCounter = __ds_scope.SectionCounter;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
