# GLDN Tech

Site da GLDN Tech — consultoria de Microsoft Copilot e IA corporativa. Repositório:
[RodrigoGaldino85/GLDN](https://github.com/RodrigoGaldino85/GLDN).

Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules sobre o design system próprio.

## Começando

```bash
npm install
npm run dev
```

Abra http://localhost:3000. O catálogo do design system fica em
http://localhost:3000/design-system.

Os leads do formulário chegam por e-mail (SMTP da caixa `contato@gldntech.com.br`) e/ou por
webhook. Variáveis em `.env.example`; localmente, copie para `.env.local`. Em desenvolvimento,
sem nenhum destino configurado, os leads aparecem no console do servidor.

| Script | Faz |
|---|---|
| `npm run dev` / `build` / `start` | Desenvolvimento, build de produção, servidor de produção |
| `npm run typecheck` | Gera tipos de rota do Next e roda `tsc` |
| `npm run lint` | ESLint com regras de aderência ao design system + checagem de tokens em CSS |
| `npm run lint:design` | Confere `DESIGN.md` ↔ `design-system/tokens` e roda o lint oficial do formato |
| `npm run check` | typecheck + lint + build |

## Publicação (Hostinger)

Node.js Web App no hPanel, conectado ao GitHub: Node 22 ou 24, build `npm run build`, start
`npm run start`, variáveis `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (e opcionalmente
`LEAD_TO`, `LEAD_WEBHOOK_URL`). O build usa Webpack e a config é
`next.config.mjs` porque o servidor de build da Hostinger não roda o compilador nativo do Next
(ver `AGENTS.md`).

## Estrutura

- `DESIGN.md` — contrato visual e fonte da verdade dos tokens (formato DESIGN.md do Google Labs/Stitch).
- `design-system/` — tokens, fontes, assets, componentes, padrões, templates, guidelines e
  HTMLs de referência. Mapa completo em [`design-system/README.md`](design-system/README.md).
- `src/app/(site)/` — o site: `/`, `/diagnostico`, `/solucoes`, `/dynamics`, `/capacitacao`,
  `/sobre`, `/contato`, `/privacidade`. Header e rodapé em `(site)/layout.tsx`.
- `src/content/site.ts` — **todo o texto do site** (ofertas, preço de entrada, FAQ, contatos,
  opções do formulário), extraído do Plano de Negócio e do modelo de proposta. Edite aqui.
- `src/app/api/lead/route.ts` — recebe o formulário, valida e entrega por e-mail
  (`src/lib/lead-mail.ts`, SMTP) e/ou webhook.
- `src/app/design-system/` — catálogo interno do design system (fora dos buscadores).
- `Documents/` — material de negócio (plano, proposta, identidade, referências visuais). Não é código.
- `AGENTS.md` — instruções para agentes de código (lido pelo Claude Code, Codex, Cursor etc.;
  `CLAUDE.md` importa o `AGENTS.md`).
