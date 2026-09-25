---
version: alpha
name: GLDN Tech
description: >-
  Design system da GLDN Tech, consultoria de Microsoft Copilot e IA corporativa.
  Dark-first, preto quente + ouro, tipografia Cinzel/Montserrat, vidro fumê sobre
  brilhos âmbar. Tema escuro é o padrão da marca; o tema claro é companheiro
  (tokens `light-*`). Implementação: design-system/tokens/*.css — manter em sincronia.
colors:
  # Papéis principais
  primary: "#D4AF37"
  on-primary: "#0B0B0B"
  secondary: "#E08A2E"
  neutral: "#0B0B0B"
  surface: "#1C1D22"
  on-surface: "#F5F5F5"
  error: "#D05A4E"
  # Gold — dos três círculos do logo
  gold-50: "#FBF4DC"
  gold-100: "#F7EBC4"
  gold-200: "#F0D98C"
  gold-300: "#E6C763"
  gold-400: "#DDBB4A"
  gold-500: "#D4AF37"
  gold-600: "#B8962C"
  gold-700: "#9C7A1E"
  gold-800: "#6F5715"
  gold-900: "#3F310C"
  gold-highlight: "#F9E27D"
  gold-metal: "#B8860B"
  # Ember — só como fonte de luz (glows), nunca texto ou preenchimento
  ember-300: "#F2B266"
  ember-500: "#E08A2E"
  ember-700: "#8A4E14"
  # Ink — pretos quentes → pérola
  ink-1000: "#000000"
  ink-950: "#0B0B0B"
  ink-900: "#111113"
  ink-850: "#16161A"
  ink-800: "#1C1D22"
  ink-700: "#26272C"
  ink-600: "#35363C"
  ink-500: "#55585A"
  ink-400: "#6E6A5E"
  ink-300: "#8E8A7E"
  ink-200: "#A7A9AC"
  ink-150: "#C9C6BD"
  ink-100: "#E8E6E1"
  ink-50: "#F5F5F5"
  white: "#FFFFFF"
  ink-tile-stroke: "#3A3A3F"
  # Status (raros, discretos)
  green-500: "#4CAF7A"
  green-600: "#2F8A5A"
  red-500: "#D05A4E"
  red-600: "#B5463B"
  red-900: "#5B0F1A"
  blue-500: "#7C9BD1"
  blue-600: "#4A6CA8"
  blue-900: "#0A1B2E"
  # Semânticos — tema escuro (padrão)
  bg-page: "{colors.ink-950}"
  bg-page-deep: "{colors.ink-1000}"
  bg-raised: "{colors.ink-900}"
  bg-inset: "{colors.ink-850}"
  bg-light: "{colors.ink-50}"
  surface-card: "rgba(28, 29, 34, .55)"
  surface-card-strong: "rgba(28, 29, 34, .85)"
  surface-card-hover: "rgba(38, 39, 44, .7)"
  surface-accent: "rgba(212, 175, 55, .08)"
  surface-ghost-hover: "rgba(255, 255, 255, .06)"
  surface-tag: "rgba(255, 255, 255, .03)"
  surface-header: "rgba(11, 11, 11, .72)"
  border-subtle: "rgba(255, 255, 255, .08)"
  border-default: "rgba(255, 255, 255, .14)"
  border-accent-soft: "rgba(212, 175, 55, .22)"
  border-accent: "rgba(212, 175, 55, .38)"
  border-accent-strong: "rgba(212, 175, 55, .7)"
  text-strong: "{colors.ink-50}"
  text-body: "{colors.ink-150}"
  text-muted: "{colors.ink-300}"
  text-faint: "{colors.ink-500}"
  text-accent: "{colors.gold-500}"
  text-accent-hover: "{colors.gold-200}"
  accent: "{colors.gold-500}"
  accent-hover: "{colors.gold-400}"
  accent-press: "{colors.gold-600}"
  on-accent: "{colors.ink-950}"
  ghost-numeral: "rgba(255, 255, 255, .07)"
  numeral-accent: "rgba(212, 175, 55, .35)"
  glow-ember-color: "rgba(224, 138, 46, .20)"
  glow-gold-color: "rgba(212, 175, 55, .10)"
  status-success: "{colors.green-500}"
  status-danger: "{colors.red-500}"
  status-info: "{colors.blue-500}"
  status-warning: "{colors.gold-500}"
  # Semânticos — tema claro ([data-theme="light"])
  light-bg-page: "{colors.ink-50}"
  light-bg-page-deep: "{colors.ink-100}"
  light-bg-inset: "{colors.white}"
  light-surface-card: "rgba(255, 255, 255, .72)"
  light-surface-accent: "rgba(184, 150, 44, .10)"
  light-border-subtle: "rgba(28, 29, 34, .08)"
  light-border-default: "rgba(28, 29, 34, .16)"
  light-border-accent: "rgba(156, 122, 30, .45)"
  light-text-strong: "{colors.ink-800}"
  light-text-body: "{colors.ink-600}"
  light-text-muted: "{colors.ink-400}"
  light-text-accent: "{colors.gold-800}"
  light-status-success: "{colors.green-600}"
  light-status-danger: "{colors.red-600}"
  light-status-info: "{colors.blue-600}"
typography:
  display-xl:
    fontFamily: Cinzel
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.02em
  headline-display:
    fontFamily: Cinzel
    fontSize: 68px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Cinzel
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Cinzel
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Cinzel
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.01em
  title:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.14em
  body-lg:
    fontFamily: Montserrat
    fontSize: 19px
    fontWeight: 300
    lineHeight: 1.65
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: 0.005em
  body-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.55
  card:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: 300
    lineHeight: 1.55
  caption:
    fontFamily: Montserrat
    fontSize: 12.5px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.28em
  label-wide:
    fontFamily: Montserrat
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.42em
  button-md:
    fontFamily: Montserrat
    fontSize: 12.5px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.18em
  numeral:
    fontFamily: Cinzel
    fontSize: 132px
    fontWeight: 700
    lineHeight: 1
  stat:
    fontFamily: Cinzel
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.01em
  logotype:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1
rounded:
  none: 0px
  xs: 4px
  check: 5px
  sm: 8px
  field: 10px
  md: 12px
  lg: 16px
  card-l: 20px
  xl: 24px
  full: 999px
spacing:
  "0_5": 2px
  "1": 4px
  "1_5": 6px
  "2": 8px
  "2_5": 10px
  "3": 12px
  "3_5": 14px
  "4": 16px
  "4_5": 18px
  "5": 20px
  "5_5": 22px
  "6": 24px
  "6_5": 26px
  "7": 28px
  "7_5": 30px
  "8": 32px
  "9": 36px
  "10": 40px
  "11": 44px
  "12": 48px
  "13": 52px
  "14": 56px
  "16": 64px
  "18": 72px
  "20": 80px
  "24": 96px
  "32": 128px
  "40": 160px
  container-max: 1240px
  container-narrow: 880px
  gutter: "clamp(20px, 5vw, 64px)"
  section-y: "clamp(80px, 11vw, 160px)"
  header-height: 80px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 26px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-active:
    backgroundColor: "{colors.accent-press}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-accent}"
    rounded: "{rounded.full}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-accent}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-strong}"
    rounded: "{rounded.full}"
  button-ghost-hover:
    backgroundColor: "{colors.surface-ghost-hover}"
  button-link:
    textColor: "{colors.text-accent}"
  button-link-hover:
    textColor: "{colors.text-accent-hover}"
  button-sm:
    height: 38px
    padding: 18px
  button-lg:
    height: 58px
    padding: 32px
  eyebrow:
    textColor: "{colors.text-accent}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 32px
    padding: 16px
  tag:
    backgroundColor: "{colors.surface-tag}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.sm}"
    height: 30px
    padding: 14px
  tag-selected:
    backgroundColor: "{colors.surface-accent}"
    textColor: "{colors.text-accent}"
  glass-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: 28px
  glass-card-hover:
    backgroundColor: "{colors.surface-card-hover}"
  glass-panel:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.xl}"
  input-field:
    backgroundColor: "{colors.bg-inset}"
    textColor: "{colors.text-strong}"
    typography: "{typography.card}"
    rounded: "{rounded.field}"
    height: 50px
    padding: 16px
  input-field-error:
    textColor: "{colors.status-danger}"
  field-label:
    textColor: "{colors.text-body}"
    typography: "{typography.label-md}"
  checkbox:
    backgroundColor: "{colors.bg-inset}"
    rounded: "{rounded.check}"
    size: 20px
  checkbox-checked:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  nav-bar:
    backgroundColor: "{colors.surface-header}"
    textColor: "{colors.text-body}"
    height: 80px
  nav-link-active:
    textColor: "{colors.text-accent}"
  stat-value:
    textColor: "{colors.text-accent}"
    typography: "{typography.stat}"
  section-heading:
    textColor: "{colors.text-strong}"
    typography: "{typography.headline-lg}"
  section-heading-highlight:
    textColor: "{colors.text-accent}"
---

# GLDN Tech — DESIGN.md

Contrato visual e **fonte da verdade dos tokens** da GLDN Tech. Os valores do front matter
são normativos; `design-system/tokens/*.css` é a implementação e precisa bater com eles.
Mudou um token? Mude aqui e no CSS no mesmo commit e rode `npm run lint:design`.

## Overview

A GLDN Tech é uma consultoria de **Microsoft Copilot e IA corporativa**: faz a empresa
extrair retorno do investimento em IA (Copilot para Microsoft 365, agentes com Copilot
Studio, governança) e capacita pessoas para usar IA no dia a dia. A superfície principal é
o **site de marketing em pt-BR** — atraente, claro, profissional e refinado.

Personalidade: um consultor sênior — calmo, confiante, preciso. Premium sem ostentação.
O sistema empresta a **tipografia** do guia Altaza (Cinzel + Montserrat, rótulos
maiúsculos bem espaçados, preto e ouro, filetes dourados) e a **linguagem visual** da
apresentação Nexa (telas quase pretas iluminadas por brilhos âmbar, cartões de vidro
fumê, títulos em dois tons, numerais fantasma, contadores "03 ——— SEÇÃO"). Nunca os
nomes, marcas ou imagens dessas referências.

Densidade arejada: uma ideia por seção, no máximo 4 cards por linha. O tema escuro é a
marca; o tema claro (`[data-theme="light"]`) existe para contextos impressos/claros e
reaproveita a mesma hierarquia com ouro mais escuro para contraste.

## Colors

Proporção: **60% ink, 25% charcoal/vidro, 10% ouro, 5% pérola**.

- **Ouro (primary, #D4AF37):** vem dos três círculos do logo (#F0D98C / #D4AF37 / #9C7A1E).
  Ação principal, destaque de título, ícones, filetes. Um botão primário por viewport.
- **Ember (secondary, #E08A2E):** só como **fonte de luz** — brilhos radiais de fundo
  (~20% alfa). Nunca texto nem preenchimento.
- **Ink (neutral, #0B0B0B → #F5F5F5):** pretos quentes para fundos e superfícies; pérola
  (#F5F5F5) para texto forte.
- **Status:** verde, vermelho e azul discretos, raros — validação, pontos, badges.
- **Semânticos:** componentes usam **somente** aliases (`bg-*`, `surface-*`, `border-*`,
  `text-*`, `accent*`, `status-*`), nunca a escala crua. Cada tema redefine os aliases.
- **Gradientes:** apenas (a) brilhos radiais de luz e (b) ouro metálico
  (#D4AF37 → #F9E27D) para filetes/numerais raros. Sem gradiente roxo/azul, sem texto em
  gradiente.

## Typography

- **Cinzel Bold (700)** para títulos, numerais e estatísticas. Minúsculas viram
  versaletes, dando ar titulado automaticamente — escreva títulos em sentence case.
- **Montserrat Light (300)** para corpo; **Medium/SemiBold (500/600)** para UI.
- **Rótulos:** Montserrat 500, MAIÚSCULAS, tracking .28em (.42em para lemas de
  fechamento). Maiúsculas só em eyebrows, labels, nav, botões e rodapés.
- **Título em dois tons (assinatura):** frase-afirmação em pérola + frase-desfecho em ouro,
  cada uma terminando em ponto. Ex.: "Licenças compradas. / Uso que não decola."
- **Logotipo:** "GLDN" em Montserrat Medium com tracking largo; "— TECH —" em ouro
  Montserrat SemiBold entre filetes. Space Grotesk e IBM Plex Sans ficam reservadas para
  trabalho de logotipo.
- Fontes auto-hospedadas (subset latin) em `design-system/fonts/`; Cinzel, Montserrat e
  Space Grotesk são fontes variáveis (eixo wght).

## Layout

- Container de **1240px**, gutters fluidos `clamp(20px, 5vw, 64px)`, respiro de seção
  `clamp(80px, 11vw, 160px)`.
- Escala de espaçamento base **4px** com meios-passos (`--space-6_5` = 26px) usados pelos
  componentes de referência.
- Seções numeradas como capítulos, com `SectionCounter` no canto superior direito.
- Header sticky de vidro fumê com 80px. Grids com `auto-fit/minmax` para refluir sem
  breakpoints.

## Elevation & Depth

- **Fundos nunca chapados:** camadas de `radial-gradient` (ember ~20%, ouro ~10%) fora do
  centro, normalmente atrás de conteúdo de vidro. Em CTAs finais, a palavra "GLDN" gigante
  em Cinzel a ~3,5% de branco.
- **Vidro fumê:** `rgba(28,29,34,.55)` + blur de 18px + filete 1px `rgba(255,255,255,.08)` +
  brilho sutil no topo + sombra profunda e macia. Transparência e blur só em cards de vidro
  e no header, sempre sobre um brilho para o efeito aparecer.
- **Sombras:** externas grandes, escuras e macias (`0 24px 60px -24px rgba(0,0,0,.7)`) com
  highlight interno de 1px no topo. Halo dourado só em itens em destaque/ativos.
- **Movimento:** lento e seguro. `cubic-bezier(.22,1,.36,1)`; 160ms (cor), 280ms
  (elevação/borda), 600–900ms (revelações: fade + subida de 16px, stagger de 120ms). Sem
  bounce, spin decorativo ou parallax. Respeita `prefers-reduced-motion`.

## Shapes

Suave, nunca "bolhudo": **4 / 8 (tags) / 10 (campos) / 12 / 16 (cards) / 20 / 24 (painéis) /
pílula** (botões, eyebrows, badges). Filetes finos por toda parte (8–14% branco); filete
dourado 48×2px separa bloco de título do lema. Órbitas tracejadas douradas em diagramas.
Nunca borda lateral colorida como acento.

## Components

A biblioteca vive em `design-system/components` (React + TypeScript + CSS Modules) e é
importada de `@ds/components`. Catálogo completo com todos os estados: rota
`/design-system`.

- **Button** — pílula, rótulo maiúsculo espaçado. `primary` (ouro sólido, um por view),
  `secondary` (contorno ouro), `ghost` (pérola sobre filete), `link`. Tamanhos 38/48/58px.
  Hover: primário clareia + brilho dourado; contorno preenche 8% de ouro. Press: scale(.98)
  e ouro mais escuro. Foco: anel dourado de 3px a 35%. Estados disabled e loading.
- **Eyebrow** — pílula contornada acima do título (1–3 palavras).
- **SectionHeading** — título em dois tons + eyebrow + lead. `xl` só em heróis (`as="h1"`).
- **SectionCounter**, **StatBlock** (números grandes, com aviso quando ilustrativos),
  **Tag** (chip 8px; com `onClick` vira seletor com estado selecionado).
- **GlassCard** (base de todo card), **FeatureCard**, **StepCard**, **PlanCard** — hover
  sobe 3px e a borda fica dourada; destaque com filete dourado + halo. O StepCard sob o mouse
  acende como o passo ativo (numeral dourado).
- **Input / Textarea / Select / Checkbox** — poço escuro, label maiúsculo espaçado, foco
  com borda + anel dourado, erro em vermelho discreto com mensagem.
- **Accordion** (FAQ numerado, um aberto por vez), **NavBar** (links espaçados, filete
  dourado curto sob o ativo; menu hambúrguer até 1180px).
- **ThemeToggle** — pílula com ícone sol/lua; troca escuro/claro e lembra a escolha.
- **IconList** — lista com ícone de linha à esquerda (escopo, premissas, benefícios).
- **Prose** — texto longo de artigos: `h2` em Cinzel, `h3` em rótulo dourado, marcadores em ouro,
  citações em vidro dourado (nunca borda lateral), largura de leitura de 720px.
- **ArticleCard** — chamada de artigo em vidro; no hover o título fica dourado e a seta avança.
- **Icon** — Lucide outline (traço 2px), herdando `currentColor`. Ouro sobre escuro em
  cards de feature; nunca preenchido, nunca multicolorido.
- **Logo** — use o componente ou os SVGs em `design-system/assets`; nunca redesenhe. Os três
  círculos nunca mudam; o tile é grafite no tema escuro e branco (com filete) no claro.

## Do's and Don'ts

- Do usar só tokens (`var(--…)`) para cor, fonte, espaçamento e raio — o lint bloqueia valores crus.
- Do usar um único botão `primary` por viewport, acompanhado de `secondary` ou `ghost`.
- Do escrever copy em pt-BR, voz de consultor sênior, CTAs com verbo ("Agendar diagnóstico").
- Do manter contraste WCAG AA (4.5:1 em texto normal) nos dois temas.
- Do colocar vidro sempre sobre um brilho (Glow) para a translucidez aparecer.
- Don't usar ember como texto ou preenchimento — é só luz.
- Don't usar emoji, exclamação, hype ("revolucionário", "mágico") ou gradiente em texto.
- Don't recriar o logo, usar ícones preenchidos/multicoloridos ou borda lateral colorida.
- Don't colocar mais de 4 cards por linha nem mais de uma ideia por seção.
- Don't criar componente fora de `design-system/` — estenda a biblioteca.
