# Origem do design system

- Gerado no **Claude Design** (export "GLDN Tech Design System", setembro de 2026) a partir do
  logo enviado e de duas referências; importado para este repositório e portado para
  Next.js/React/TypeScript. O repositório GitHub associado era
  `RodrigoGaldino85/GLDN` (branch `main`), vazio no momento do export.
- **Logo:** `Documents/logo/gldn-logo.svg` → limpo em `design-system/assets/`.
- **Referência tipográfica — guia de marca "Altaza Motors Dubai"** (`Documents/Examples/altaza-01…21.png`):
  Cinzel Bold + Montserrat, rótulos maiúsculos espaçados, preto + ouro, filetes dourados.
- **Referência visual — apresentação "NEXA AI marketing agent"** (`Documents/Examples/nexa-01…08.webp`):
  telas quase pretas com brilhos âmbar, cards de vidro fumê com borda quente, títulos em dois
  tons, eyebrows contornados, numerais fantasma, contadores "03 ——— SEÇÃO", rodapés com pipes.
- **Briefing:** *"Website completo para uma consultoria de tecnologia com foco em Microsoft
  Copilot e IA… atrativo e claro mantendo um ar profissional e requintado."*

Essas referências pertencem a outros projetos: a GLDN empresta o **sistema tipográfico**
(Altaza) e a **linguagem visual** (Nexa) — nunca nomes, marcas ou imagens.

**Fontes:** Cinzel e Montserrat são as famílias do guia Altaza, auto-hospedadas do Google Fonts
(subset latin). Nenhum arquivo de fonte proprietária foi fornecido; se a GLDN licenciar outros
cortes, substitua em `design-system/fonts/` e atualize `tokens/fonts.css` e `DESIGN.md`.
