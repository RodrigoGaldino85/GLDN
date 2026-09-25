# GLDN Tech — design system

Biblioteca de UI da GLDN Tech. O contrato visual e a fonte da verdade dos tokens é o
[`DESIGN.md`](../DESIGN.md) na raiz; esta pasta é a implementação (Next.js 16 · React 19 ·
TypeScript · CSS Modules sobre CSS custom properties). Catálogo vivo: rota
[`/design-system`](../src/app/design-system/Showcase.tsx) (`npm run dev` → http://localhost:3000/design-system).

## Mapa

| Pasta | O que tem |
|---|---|
| `styles.css` | Entrada única de CSS global (importada por `src/app/globals.css`). |
| `tokens/` | `colors.css` (primitivos + aliases semânticos por tema), `typography.css`, `spacing.css` (espaço, tamanhos, medidas, raios), `effects.css` (sombras, vidro, gradientes, movimento), `fonts.css` (@font-face), `base.css` (reset mínimo). |
| `fonts/` | woff2 auto-hospedados: Cinzel, Montserrat e Space Grotesk variáveis; Montserrat Light Italic; IBM Plex Sans Medium. |
| `assets/` | `logo-dark.svg`, `logo-light.svg`, `mark.svg` (o favicon `src/app/icon.svg` é cópia do `mark.svg`). |
| `components/` | 22 componentes, um `.tsx` + `.module.css` por componente, agrupados em `brand/`, `actions/`, `display/`, `cards/`, `forms/`, `navigation/`. API pública em `components/index.ts` (`@ds/components`). Uso de cada um: [`components/README.md`](components/README.md). |
| `patterns/` | Padrões de composição do site: `Section`, `Glow`, `TrackedLine`, `GoldRule`, `GhostWordmark`, `HubDiagram`, `Footer` (`@ds/patterns`). |
| `templates/website/` | Telas completas do site: `HomeTemplate`, `SolutionsTemplate`, `TrainingTemplate`, `ContactTemplate`, `FinalCta`, `SiteShell` (`@ds/templates/website`). Pré-visualização em `/design-system/templates/{home,solucoes,capacitacao,contato}` (`?theme=light` para o tema claro). |
| `guidelines/` | Regras que não cabem em token: [`content.md`](guidelines/content.md) (voz e copy pt-BR), [`iconography.md`](guidelines/iconography.md), [`sources.md`](guidelines/sources.md) (referências de origem). |
| `lint/` | `adherence.mjs` (regras ESLint de aderência), `check-css-tokens.mjs` (valores crus em CSS), `check-design-md-sync.mjs` (DESIGN.md ↔ tokens). |
| `lib/` | `cx`; `theme.ts` (hook `useTheme`, `setTheme`, `restoreTheme`) e `theme-script.ts` (script anti-flash para o `<head>`). |
| `reference/` | HTMLs de referência visual do export original — ver abaixo. |

## HTMLs de referência

`design-system/reference/` guarda os HTMLs originais do export do Claude Design, só para
consulta visual (não são código de produção):

- `reference/index.html` — índice de tudo; abra direto no navegador (`file://`).
- `reference/guidelines/*.html` — 17 cards de fundamentos (cores, tipo, espaçamento, marca).
- `reference/components/*.card.html` — 6 cards dos componentes originais.
- `reference/website/index.html` — o UI kit click-through original (Home, Soluções, Capacitação, Contato).
- `reference/thumbnail.html` — capa do design system.

Eles usam os tokens vivos de `design-system/styles.css` e os assets de `design-system/assets`.
Os cards de componente e o UI kit rodam sobre o bundle compilado do export
(`reference/_runtime/_ds_bundle.js`) + React/Babel/Lucide via CDN, então precisam de internet.

## Temas

Escuro é o padrão (`<html data-theme="dark">`). O `ThemeToggle` troca o tema da página e
salva a escolha em `localStorage` (`gldn-theme`); o `themeInitScript` (em `lib/theme-script.ts`)
aplica essa escolha antes da primeira pintura. `data-theme="light"` em `<html>` ou em
qualquer subárvore aplica o tema claro — os aliases semânticos são redefinidos por escopo,
então dá para misturar temas na mesma página (o showcase faz isso).

## Regras

1. Tela nova nasce de componentes/padrões desta pasta. Não crie componente de UI em `src/`.
2. Nenhum valor cru de cor, fonte, espaçamento ou raio em código: use `var(--token)`.
   `npm run lint` falha com valores crus em TS/TSX (ESLint) e em CSS (`check-css-tokens`).
3. Importe pelos barrels (`@ds/components`, `@ds/patterns`, `@ds/templates/website`), nunca
   de arquivos internos.
4. Componentes usam só aliases semânticos (`--text-*`, `--surface-*`, `--border-*`,
   `--accent*`…), nunca a escala crua (`--gold-500`), para funcionar nos dois temas.

## Como criar um componente novo

1. Confira se um componente/padrão existente resolve (ou ganha uma variante) — prefira
   estender a duplicar.
2. Precisa de valor novo? Adicione o token em `DESIGN.md` **e** em `tokens/*.css` (mesmo
   nome), com valor para os dois temas se for cor semântica. Rode `npm run lint:design`.
3. Crie `components/<grupo>/<Nome>.tsx` + `<Nome>.module.css`:
   - props tipadas e exportadas (`<Nome>Props`), `className`/`style` repassados;
   - todos os estados aplicáveis: default, hover, active, focus-visible, disabled, loading,
     erro, vazio, selecionado — via CSS (`:hover`, `:focus-visible`, `aria-*`), não via
     estado JS;
   - `forceState` opcional (`data-state`) se o estado precisar aparecer no showcase;
   - `"use client"` só se o componente tiver estado/handlers próprios.
4. Exporte em `components/index.ts` e documente o uso em `components/README.md`.
5. Registre props e enums em `lint/adherence.mjs` (`COMPONENTS`).
6. Adicione o componente com todos os estados em `src/app/design-system/Showcase.tsx`.
7. `npm run check` (typecheck + lint + build) precisa passar.
