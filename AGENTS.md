<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GLDN Tech — site

Site de marketing (pt-BR) da GLDN Tech, consultoria de Microsoft Copilot e IA corporativa.
Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · CSS Modules. Sem Tailwind e sem
shadcn/ui: a estilização vem do design system próprio em `design-system/`.

## Site

- Páginas em `src/app/(site)/`; layout com `SiteHeader` (NavBar + ThemeToggle) e Footer.
- **Conteúdo em `src/content/site.ts`** — textos, ofertas, preço público do Diagnóstico, FAQ e
  opções do formulário. Mudança de copy é nesse arquivo, não nas páginas.
- Leads: formulário `(site)/contato/LeadForm.tsx` → `POST /api/lead` (validação em
  `src/lib/lead.ts`) → `LEAD_WEBHOOK_URL`. Campos espelham a proposta comercial (porte em
  usuários, situação do Copilot, ERP, assunto). Sem webhook em produção: 503 e o formulário
  oferece e-mail pré-preenchido.
- Tema: escuro por padrão; escolha do visitante salva em `localStorage` (`gldn-theme`) e
  aplicada antes da pintura pelo script em `src/app/layout.tsx` (`@ds/lib/theme`).
- SEO: metadata por página, `sitemap.ts`, `robots.ts` (bloqueia `/design-system` e `/api`),
  JSON-LD `ProfessionalService` no layout do site.

## Comandos

- `npm run dev` — servidor local (http://localhost:3000; catálogo em `/design-system`)
- `npm run check` — typecheck + lint + build (tem que passar antes de entregar)
- `npm run lint` — ESLint (inclui regras de aderência ao design system, `--max-warnings=0`) + checagem de tokens em CSS
- `npm run lint:design` — DESIGN.md em sincronia com `design-system/tokens` + lint oficial do formato DESIGN.md

## Design system (obrigatório)

- **`DESIGN.md` na raiz é o contrato visual e a fonte da verdade dos tokens.** Está versionado
  junto com o código. Token novo ou alterado: mude `DESIGN.md` e `design-system/tokens/*.css`
  no mesmo commit e rode `npm run lint:design`.
- **Componentes novos saem da biblioteca em `design-system/`.** Antes de criar UI, procure em
  `@ds/components`, `@ds/patterns` e `@ds/templates/website`; se faltar algo, estenda a
  biblioteca (não crie componente de UI em `src/`).
- **Nenhum valor hardcoded de cor, fonte, espaçamento ou raio** em TS/TSX/CSS — sempre
  `var(--token)`. Componentes usam os aliases semânticos (`--text-*`, `--surface-*`,
  `--border-*`, `--accent*`), nunca a escala crua, para funcionar nos temas escuro (padrão) e
  claro (`data-theme="light"`). O lint falha com valores crus.
- Importe só pelos barrels: `@ds/components`, `@ds/patterns`, `@ds/templates/website`.
- Copy em pt-BR com a voz da marca: `design-system/guidelines/content.md`.

### Mapa da biblioteca

| Onde | O quê |
|---|---|
| `design-system/tokens/` | Tokens CSS (cores por tema, tipografia, espaçamento/raios, efeitos, fontes, base) |
| `design-system/components/{brand,actions,display,cards,forms,navigation}/` | 20 componentes tipados; uso em `design-system/components/README.md` |
| `design-system/patterns/` | Padrões de composição (Section, Glow, TrackedLine, GoldRule, GhostWordmark, HubDiagram, Footer) |
| `design-system/templates/website/` | Telas do site (Home, Soluções, Capacitação, Contato) + SiteShell |
| `design-system/guidelines/` | Voz/copy, iconografia, origem das referências |
| `design-system/assets/`, `design-system/fonts/` | Logos SVG e fontes woff2 auto-hospedadas |
| `design-system/lint/` | Regras de aderência (ESLint), checagem de CSS e de sincronia com DESIGN.md |
| `design-system/reference/` | HTMLs de referência visual do export original — abrir `reference/index.html` direto no navegador |
| `src/app/design-system/` | Rota de showcase: biblioteca inteira, todos os estados, ambos os temas |

### Criar um componente novo

Siga `design-system/README.md#como-criar-um-componente-novo`: token primeiro (DESIGN.md +
CSS), depois `components/<grupo>/<Nome>.tsx` + `.module.css` com todos os estados, export em
`components/index.ts`, props em `design-system/lint/adherence.mjs`, exemplo no showcase e
`npm run check`.
