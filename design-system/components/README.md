# Componentes — guia de uso

Importe sempre de `@ds/components`. Props completas nos tipos de cada arquivo; estados
visíveis na rota `/design-system`. Notas herdadas dos `*.prompt.md` do export original,
atualizadas para a API atual.

## brand/

**Logo** — tile + wordmark GLDN/TECH; use em nav, rodapé e capas, nunca redesenhe.
```tsx
<Logo height={36} />                 // surface="auto" segue o tema
<Logo wordmark={false} height={48} /> // só o tile (favicon, avatar)
```
`surface`: `auto` (padrão, segue o tema) | `dark` (tile grafite) | `light` (tile branco com filete). `tagline={false}` remove "TECH". Espaço livre
≥ raio do tile em volta; altura mínima 24px.

**Icon** — ícone Lucide outline, tingido por `currentColor`.
```tsx
<Icon name="sparkles" color="var(--accent)" size={28} />
<Icon name="arrow-up-right" size={16} />
```
Qualquer nome Lucide (tipado). Favoritos da marca vêm embutidos (renderizam no servidor); os
demais carregam sob demanda. Ouro sobre escuro; nunca preenchido nem multicolorido.

## actions/

**Button** — CTA em pílula com rótulo maiúsculo espaçado.
```tsx
<Button iconRight="arrow-right">Agendar diagnóstico</Button>
<Button variant="secondary">Ver soluções</Button>
<Button variant="link" iconRight="arrow-right">Saiba mais</Button>
<Button type="submit" loading>Enviando</Button>
```
- Um `primary` por viewport; combine com `secondary` ou `ghost`.
- Tamanhos `sm` 38 / `md` 48 / `lg` 58px. `href` renderiza `<a>`. `fullWidth` para formulários.
- Estados: hover, active (scale .98), focus-visible (anel dourado), disabled, loading (spinner + `aria-busy`).

**ThemeToggle** — alterna tema escuro/claro da página e lembra a escolha.
`<ThemeToggle />` (só ícone, no header) · `<ThemeToggle showLabel />` (menu mobile).

## display/

**Eyebrow** — pílula contornada acima do título (1–3 palavras, maiúsculas automáticas).
`<Eyebrow>O desafio</Eyebrow>` · `<Eyebrow tone="neutral">Microsoft Copilot</Eyebrow>`

**SectionCounter** — marcador "NN ——— RÓTULO" no canto da seção.
`<SectionCounter index="04" label="Como funciona" />`

**SectionHeading** — afirmação em pérola + desfecho em ouro, eyebrow e lead opcionais.
```tsx
<SectionHeading eyebrow="A solução" title="IA que trabalha com você." highlight="Todos os dias."
  lead="Implantamos o Microsoft Copilot e capacitamos seu time." />
```
`highlight` é a segunda frase (o desfecho), não o título inteiro. `size="xl"` + `as="h1"` só em heróis.

**StatBlock** — métrica grande em ouro, rótulo espaçado, descrição curta.
`<StatBlock value="-60%" label="Trabalho manual" description="Menos tarefas repetitivas." />`
Só números reais; se ilustrativos, inclua "Métricas ilustrativas para fins de apresentação."
Agrupe 3–4 por linha.

**Tag** — chip de 8px para tópicos/ferramentas; com `onClick` vira seletor (`aria-pressed`).
`<Tag>Teams</Tag>` · `<Tag active>Outlook</Tag>` · `<Tag size="lg" active={x} onClick={…}>Gestores</Tag>`

**IconList** — lista vertical com ícone à esquerda: escopo, benefícios, premissas.
```tsx
<IconList items={[{ title: "Estamos seguros?", text: " Dados expostos e o que corrigir." }, "Acesso somente leitura"]} />
<IconList tone="muted" icon="minus" items={["Implantação de ERP"]} />
```
`tone`: `accent` (padrão) · `muted` · `success` · `danger`. `compact` para listas densas.

## cards/

**GlassCard** — superfície de vidro fumê; base de todo card.
`<GlassCard glow padding="lg">…</GlassCard>` — coloque sobre um `Glow`. `glow` marca o único
item em destaque do grupo. Presets de `padding` (`md`, `lg`, `plan`, `row`, `step`, `panel`,
`panel-sm`) e `radius` (`lg`, `card-l`, `xl`). `onClick` torna o card um botão acessível.

**FeatureCard** — ícone dourado + título maiúsculo + descrição.
`<FeatureCard icon="bot" title="Copilot em produção" description="Implantação segura no Microsoft 365." />`
`layout="stack"` para grids de 3–4 colunas; `row` para diagramas e listas de 2 colunas.

**StepCard** — etapa com numeral fantasma; 3–4 por linha em "Como funciona".
`<StepCard number="01" title="Diagnóstico" description="Mapeamos processos e licenças." active />`
Acende no hover (numeral dourado, borda, halo, sobe 3px); enquanto outro card da mesma linha está
sob o mouse, o `active` padrão apaga. `interactive={false}` desliga o hover.

**PlanCard** — formato de projeto; 3 por linha, o do meio `featured`.
```tsx
<PlanCard number="02" name="Adoção" audience="Para times prontos para escalar." featured badge="Mais escolhido"
  features={[{ icon: "graduation-cap", label: "Trilhas de capacitação" }]} cta="Falar com especialista" />
```
No hover, o card acende como o `featured` (numeral, nome e ícones dourados, halo, CTA sólido); o
`featured` recua enquanto outro card da mesma linha está sob o mouse. `interactive={false}` desliga.

## forms/

**Input** — label maiúsculo espaçado, poço escuro, foco dourado.
```tsx
<Input label="E-mail corporativo" type="email" placeholder="voce@empresa.com.br" required />
<Input label="Empresa" error="Informe o nome da empresa" />
```
**Textarea** — igual ao Input, multilinha. `<Textarea label="Mensagem" rows={5} />`
**Select** — select nativo com chevron dourado; `emptyText` quando não há opções.
`<Select label="Tamanho da empresa" placeholder="Selecione" options={["1–50", "51–500"]} />`
**Checkbox** — quadrado que preenche em ouro; input nativo por baixo.
`<Checkbox label="Aceito receber comunicações da GLDN Tech." defaultChecked />`

Todos: `hint`, `error` (borda vermelha + mensagem com `role="alert"`), `disabled`, `required`,
controlado (`value`/`checked` + `onChange`) ou não controlado.

## navigation/

**Accordion** — FAQ numerado, um item aberto por vez; `emptyText` quando vazio.
`<Accordion items={[{ question: "O Copilot funciona com meus dados?", answer: "Sim — respeitando as permissões do Microsoft 365." }]} />`

**NavBar** — header de vidro sticky: logo, links espaçados (filete dourado sob o ativo), CTA.
Até 1180px vira menu (botão hambúrguer, fecha com Esc). `actions` entra antes do CTA e
dentro do menu (`mobileActions` para uma versão diferente no menu).
`<NavBar links={[{ label: "Soluções", href: "/solucoes", active: true }]} cta="Fale conosco" ctaHref="/contato" actions={<ThemeToggle />} />`
