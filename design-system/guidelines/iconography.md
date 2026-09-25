# Iconografia

- **Sistema:** [Lucide](https://lucide.dev) outline (traço 2px, pontas arredondadas) via
  `lucide-react`, renderizado pelo componente `Icon` e tingido por `currentColor`.
  O export original carregava o Lucide por CDN (`lucide-static@0.469.0`) como máscara CSS; a
  referência Nexa usa um set de traço fino de origem desconhecida e o Lucide é o equivalente mais
  próximo.
- **Cor:** ouro sobre escuro em ícones de feature; cinza de corpo em bullets de cards não
  destacados. Nunca multicolorido, nunca preenchido.
- **Tamanhos:** 16–18 inline, 20 em UI, 28–34 em cards de feature.
- **Favoritos:** sparkles, bot, workflow, brain-circuit, shield-check, graduation-cap, users,
  bar-chart-3, file-text, presentation, settings-2, target, sliders-horizontal, arrow-right,
  arrow-up-right, check, plus, minus. Estes (e os usados nos templates) são empacotados
  estaticamente em `components/brand/Icon.tsx`; ao adotar um ícone novo com frequência, inclua-o
  em `BRAND_ICONS`.
- **Sem emoji e sem pictogramas unicode** — os únicos glifos decorativos são "|" e "——" em
  rótulos espaçados.
- **Logo:** use `<Logo/>` ou os SVGs de `design-system/assets` — nunca recrie. Só o tile para
  favicon/avatar.
