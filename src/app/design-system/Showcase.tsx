"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import {
  Accordion, Button, Checkbox, Eyebrow, FeatureCard, GlassCard, Icon, Input, Logo, NavBar, PlanCard, SectionCounter,
  SectionHeading, Select, StatBlock, StepCard, Tag, Textarea, ThemeToggle, IconList, ArticleCard, Prose, type IconName,
} from "@ds/components";
import { Footer, GhostWordmark, Glow, GoldRule, HubDiagram, Section, TrackedLine } from "@ds/patterns";
import styles from "./showcase.module.css";

type Theme = "dark" | "light";

const COLOR_GROUPS: Array<[string, string[]]> = [
  ["Gold", ["gold-50", "gold-100", "gold-200", "gold-300", "gold-400", "gold-500", "gold-600", "gold-700", "gold-800", "gold-900", "gold-highlight", "gold-metal"]],
  ["Ember (só luz)", ["ember-300", "ember-500", "ember-700"]],
  ["Ink", ["ink-1000", "ink-950", "ink-900", "ink-850", "ink-800", "ink-700", "ink-600", "ink-500", "ink-400", "ink-300", "ink-200", "ink-150", "ink-100", "ink-50", "white"]],
  ["Superfícies (semântico)", ["bg-page", "bg-page-deep", "bg-raised", "bg-inset", "surface-card", "surface-card-strong", "surface-card-hover", "surface-accent", "surface-header"]],
  ["Texto (semântico)", ["text-strong", "text-body", "text-muted", "text-faint", "text-accent", "text-accent-hover"]],
  ["Bordas (semântico)", ["border-subtle", "border-default", "border-accent-soft", "border-accent", "border-accent-strong"]],
  ["Ação & status", ["accent", "accent-hover", "accent-press", "on-accent", "status-success", "status-danger", "status-info", "status-warning"]],
];

const TYPE_SCALE: Array<[string, CSSProperties, string]> = [
  ["Display-XL 88", { font: "var(--fw-bold) var(--fs-display-xl)/var(--lh-tight) var(--font-display)" }, "Copilot"],
  ["Display-L 68", { font: "var(--type-display)" }, "Copilot"],
  ["H1 52", { font: "var(--type-h1)" }, "Copilot na prática"],
  ["H2 38", { font: "var(--type-h2)" }, "Governança primeiro"],
  ["H3 26", { font: "var(--type-h3)" }, "Trilhas por função"],
  ["H4 20 · Montserrat 600", { font: "var(--fw-semibold) var(--fs-h4)/var(--lh-snug) var(--font-body)" }, "Diagnóstico de maturidade"],
  ["Body-L 19", { font: "var(--type-body-l)" }, "Resultados que aparecem no dia a dia."],
  ["Body 16", { font: "var(--type-body)" }, "Resultados que aparecem no dia a dia."],
  ["Caption 12.5", { font: "var(--fw-regular) var(--fs-caption)/var(--lh-card) var(--font-body)" }, "Métricas ilustrativas."],
  ["Label 12 · .28em", { font: "var(--type-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase" }, "Diagnóstico | Implantação | Adoção"],
];

const SPACES = ["1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40"];
const RADII = ["xs", "check", "sm", "field", "md", "lg", "card-l", "xl", "pill"];
const ICONS: IconName[] = ["sparkles", "bot", "workflow", "brain-circuit", "shield-check", "graduation-cap", "users", "bar-chart-3", "file-text",
  "presentation", "settings-2", "target", "sliders-horizontal", "arrow-right", "arrow-up-right", "check", "plus", "minus"];

function Item({ title, path, children }: { title: string; path?: string; children: ReactNode }) {
  return (
    <div className={styles.item}>
      <h4 className={styles.itemTitle}>{title}{path && <span className={styles.itemPath}>{path}</span>}</h4>
      {children}
    </div>
  );
}

function State({ label, children }: { label: string; children: ReactNode }) {
  return <div className={styles.state}><span className={styles.stateLabel}>{label}</span>{children}</div>;
}

function Block({ id, title, lead, children }: { id: string; title: string; lead?: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.block}>
      <h3 className={styles.blockTitle}>{title}</h3>
      {lead && <p className={styles.blockLead}>{lead}</p>}
      {children}
    </section>
  );
}

function Foundations({ t }: { t: Theme }) {
  return (
    <Block id={`${t}-foundations`} title="Fundamentos" lead="Tokens de design/tokens/*.css — fonte da verdade em DESIGN.md.">
      <Item title="Cores" path="tokens/colors.css">
        <div className={styles.col}>
          {COLOR_GROUPS.map(([group, names]) => (
            <div key={group}>
              <div className={styles.stateLabel}>{group}</div>
              <div className={styles.swatches}>
                {names.map((n) => (
                  <div key={n} className={styles.swatch}>
                    <div className={styles.chip} style={{ background: `var(--${n})` }} />
                    <span className={styles.swatchName}>--{n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Item>
      <Item title="Tipografia" path="tokens/typography.css">
        {TYPE_SCALE.map(([label, style, sample]) => (
          <div key={label} className={styles.typeRow}><span className={styles.typeLabel}>{label}</span><span className={styles.typeSample} style={style}>{sample}</span></div>
        ))}
      </Item>
      <Item title="Espaçamento" path="tokens/spacing.css">
        <div className={styles.col}>
          {SPACES.map((s) => (
            <div key={s} className={styles.spaceRow}><span className={styles.spaceName}>--space-{s}</span><div className={styles.bar} style={{ width: `var(--space-${s})` }} /></div>
          ))}
        </div>
      </Item>
      <Item title="Raios" path="tokens/spacing.css">
        <div className={styles.grid4}>
          {RADII.map((r) => (
            <div key={r} className={styles.swatch}><div className={styles.radiusBox} style={{ borderRadius: `var(--radius-${r})` }} /><span className={styles.swatchName}>--radius-{r}</span></div>
          ))}
        </div>
      </Item>
      <Item title="Elevação, vidro & gradientes" path="tokens/effects.css">
        <div className={`${styles.stage} ${styles.glowStage}`}>
          <div className={styles.grid3}>
            <div className={styles.elevBox} style={{ boxShadow: "var(--shadow-card)" }}>shadow-card</div>
            <div className={styles.elevBox} style={{ boxShadow: "var(--shadow-float)" }}>shadow-float</div>
            <div className={styles.elevBox} style={{ boxShadow: "var(--shadow-glow-gold)" }}>shadow-glow-gold</div>
          </div>
          <div className={styles.grid4} style={{ marginTop: "var(--space-5)" }}>
            {["gradient-gold", "gradient-gold-metal", "gradient-black-metal", "glow-ember"].map((g) => (
              <div key={g} className={styles.swatch}><div className={styles.gradBox} style={{ background: `var(--${g}), var(--bg-page)` }} /><span className={styles.swatchName}>--{g}</span></div>
            ))}
          </div>
        </div>
      </Item>
    </Block>
  );
}

function Components({ t }: { t: Theme }) {
  const [tag, setTag] = useState("Teams");
  const [checked, setChecked] = useState(true);
  const [navActive, setNavActive] = useState("Soluções");
  return (
    <Block id={`${t}-components`} title="Componentes" lead="22 componentes · design-system/components · import de @ds/components.">
      <Item title="Logo" path="brand/Logo">
        <div className={styles.row}>
          <State label="auto (segue o tema)"><Logo height={44} /></State>
          <State label="mark only"><Logo wordmark={false} height={44} /></State>
          <State label="sem tagline"><Logo tagline={false} height={44} /></State>
          <State label="surface=dark"><div className={styles.stage} style={{ background: "var(--ink-950)" }}><Logo surface="dark" height={36} /></div></State>
          <State label="surface=light"><div className={styles.stage} style={{ background: "var(--ink-50)" }}><Logo surface="light" height={36} /></div></State>
        </div>
      </Item>
      <Item title="Icon" path="brand/Icon">
        <div className={styles.row}>{ICONS.map((n) => <Icon key={n} name={n} size={24} color="var(--accent)" title={n} />)}</div>
      </Item>

      <Item title="Button" path="actions/Button">
        <div className={styles.col}>
          {(["primary", "secondary", "ghost", "link"] as const).map((v) => (
            <div key={v} className={styles.row}>
              <State label={`${v} · default`}><Button variant={v} iconRight={v === "link" ? "arrow-right" : undefined}>Agendar</Button></State>
              <State label="hover"><Button variant={v} forceState="hover" iconRight={v === "link" ? "arrow-right" : undefined}>Agendar</Button></State>
              <State label="active"><Button variant={v} forceState="active">Agendar</Button></State>
              <State label="focus"><Button variant={v} forceState="focus">Agendar</Button></State>
              <State label="disabled"><Button variant={v} disabled>Agendar</Button></State>
              <State label="loading"><Button variant={v} loading>Enviando</Button></State>
            </div>
          ))}
          <div className={styles.row}>
            <State label="lg"><Button size="lg" iconRight="arrow-right">Large</Button></State>
            <State label="md"><Button>Medium</Button></State>
            <State label="sm + iconLeft"><Button size="sm" variant="secondary" iconLeft="calendar">Agendar</Button></State>
            <State label="href (link)"><Button href="#" variant="ghost" iconLeft="play">Assistir demo</Button></State>
          </div>
          <State label="fullWidth"><div style={{ width: "100%" }}><Button fullWidth iconRight="arrow-right">Enviar mensagem</Button></div></State>
        </div>
      </Item>

      <Item title="Eyebrow" path="display/Eyebrow">
        <div className={styles.row}><Eyebrow>A solução</Eyebrow><Eyebrow tone="neutral">Microsoft Copilot</Eyebrow></div>
      </Item>
      <Item title="SectionCounter" path="display/SectionCounter"><SectionCounter index="03" label="Como funciona" /></Item>
      <Item title="SectionHeading" path="display/SectionHeading">
        <div className={styles.col}>
          <SectionHeading size="xl" as="h2" eyebrow="A solução" title="IA que trabalha com você." highlight="Todos os dias." lead="Implantamos o Microsoft Copilot e capacitamos seu time." />
          <SectionHeading size="lg" title="Licenças compradas." highlight="Uso que não decola." />
          <SectionHeading size="md" align="center" title="Um ciclo contínuo" highlight="do piloto à escala." lead="Cada etapa alimenta a próxima." />
          <SectionHeading size="sm" title="Mensagem recebida." highlight="Falamos em breve." lead="Variação sm com lead menor." />
        </div>
      </Item>
      <Item title="StatBlock" path="display/StatBlock">
        <div className={styles.row}>
          <StatBlock size="sm" value="+38%" label="Produtividade" />
          <StatBlock value="12h" label="Por semana" description="Tempo devolvido em tarefas repetitivas." />
          <StatBlock size="lg" value="8h" label="Por pessoa / mês" />
          <StatBlock align="center" value="24/7" label="Suporte" />
          <StatBlock rule={false} value="6 sem." label="Sem régua" />
        </div>
      </Item>
      <Item title="Tag" path="display/Tag">
        <div className={styles.col}>
          <div className={styles.row}>
            <State label="default"><Tag>Word</Tag></State>
            <State label="selected"><Tag active>Teams</Tag></State>
            <State label="hover"><Tag onClick={() => undefined} forceState="hover">Excel</Tag></State>
            <State label="focus"><Tag onClick={() => undefined} forceState="focus">Outlook</Tag></State>
            <State label="disabled"><Tag disabled>Loop</Tag></State>
          </div>
          <State label="switcher interativo (lg)">
            <div className={styles.row}>{["Word", "Excel", "Teams", "Outlook"].map((x) => <Tag key={x} size="lg" active={tag === x} onClick={() => setTag(x)}>{x}</Tag>)}</div>
          </State>
        </div>
      </Item>

      <Item title="IconList" path="display/IconList">
        <div className={styles.grid2}>
          <State label="accent (padrão)"><IconList items={[{ title: "Estamos seguros?", text: " Dados expostos e o que corrigir." }, "Acesso somente leitura", "Roadmap de 90 dias"]} /></State>
          <State label="muted · compact"><IconList tone="muted" icon="minus" compact items={["Implantação de ERP", "Revenda de licenças"]} /></State>
          <State label="success"><IconList tone="success" icon="circle-check" items={["Entregue"]} /></State>
          <State label="danger"><IconList tone="danger" icon="circle-x" items={["Fora do escopo"]} /></State>
        </div>
      </Item>
      <Item title="Prose" path="display/Prose">
        <Prose html={'<h2>Por que o risco só aparece agora</h2><p>O Copilot responde com base no que <strong>cada usuário já pode ver</strong>. Veja o <a href="#">diagnóstico</a>.</p><h3>Casos comuns</h3><ul><li>Sites abertos para toda a organização</li><li>Links do tipo “qualquer pessoa”</li></ul><blockquote><p>O objetivo não é trancar tudo.</p></blockquote><ol><li>Mapear</li><li>Priorizar</li></ol><p>Código: <code>draft: true</code></p><hr><table><thead><tr><th>Frente</th><th>Prazo</th></tr></thead><tbody><tr><td>Diagnóstico</td><td>3 semanas</td></tr></tbody></table>'} />
      </Item>
      <Item title="ThemeToggle" path="actions/ThemeToggle">
        <div className={styles.row}>
          <State label="default"><ThemeToggle /></State>
          <State label="hover"><ThemeToggle forceState="hover" /></State>
          <State label="focus"><ThemeToggle forceState="focus" /></State>
          <State label="com rótulo (menu mobile)"><ThemeToggle showLabel /></State>
        </div>
      </Item>
      <Item title="GlassCard" path="cards/GlassCard">
        <div className={`${styles.stage} ${styles.glowStage}`}>
          <div className={styles.grid4}>
            <State label="default"><GlassCard>Superfície de vidro</GlassCard></State>
            <State label="glow (destaque)"><GlassCard glow>Card em destaque</GlassCard></State>
            <State label="interactive · hover"><GlassCard interactive forceState="hover">Lift + borda dourada</GlassCard></State>
            <State label="clickable · focus"><GlassCard onClick={() => undefined} forceState="focus">Card clicável</GlassCard></State>
          </div>
        </div>
      </Item>
      <Item title="FeatureCard" path="cards/FeatureCard">
        <div className={`${styles.stage} ${styles.glowStage}`}>
          <div className={styles.grid3}>
            <FeatureCard icon="bot" title="Copilot" description="Implantação segura no Microsoft 365." />
            <FeatureCard icon="graduation-cap" glow title="Capacitação (glow)" description="Trilhas por área." />
            <FeatureCard icon="shield-check" forceState="hover" title="Governança (hover)" description="Dados seguros e auditáveis." />
            <FeatureCard layout="stack" icon="workflow" title="Agentes (stack)" description="Processos automatizados." />
            <FeatureCard layout="stack" icon="sparkles" title="Sem descrição" />
          </div>
        </div>
      </Item>
      <Item title="ArticleCard" path="cards/ArticleCard">
        <div className={styles.grid3}>
          <ArticleCard href="#" title="Oversharing no SharePoint — o risco que o Copilot revela" excerpt="Por que permissões antigas viram risco quando a IA é ligada." date="25 set 2026" readingTime="4 min de leitura" tags={["Governança", "SharePoint"]} />
          <ArticleCard href="#" title="Hover" excerpt="Título dourado e seta deslizando." date="25 set 2026" readingTime="3 min de leitura" forceState="hover" />
          <ArticleCard href="#" title="Rascunho sem tags" excerpt="Rascunhos só aparecem no ambiente de desenvolvimento." draft />
        </div>
      </Item>
      <Item title="StepCard" path="cards/StepCard">
        <div className={styles.grid3}>
          <StepCard number="01" title="Diagnóstico" description="Mapeamos processos, dados e licenças." active />
          <StepCard number="02" title="Implantação" description="Governança, piloto e casos de uso." />
          <StepCard number="03" title="Capacitação (hover)" description="Trilhas práticas por área." forceState="hover" />
          <StepCard number="04" title="Estático" description="interactive={false}: sem hover." interactive={false} />
        </div>
      </Item>
      <Item title="PlanCard" path="cards/PlanCard">
        <div className={styles.grid3}>
          <PlanCard number="01" name="Essencial" audience="Para quem está começando." kicker="Um começo sólido" features={["Diagnóstico de maturidade", "Workshop executivo"]} cta="Quero começar" />
          <PlanCard number="02" name="Adoção" audience="Times prontos para escalar." kicker="Mais impacto" featured badge="Mais escolhido"
            features={[{ icon: "graduation-cap", label: "Trilhas por área" }, { icon: "bar-chart-3", label: "Painel de adoção" }]} cta="Falar com especialista" />
          <State label="hover (acende como o featured)"><PlanCard number="03" name="Enterprise" audience="Sob medida." kicker="Hover" features={["Squad dedicado"]} cta="Montar projeto" forceState="hover" /></State>
          <State label="vazio (sem features / sem CTA)"><PlanCard number="04" name="Vazio" audience="Sem itens." /></State>
        </div>
      </Item>

      <Item title="Input" path="forms/Input">
        <div className={styles.grid3}>
          <Input label="Nome" placeholder="Seu nome completo" required />
          <Input label="Preenchido" defaultValue="Ana Souza" hint="Como aparece no certificado." />
          <Input label="Hover" placeholder="Passe o mouse" forceState="hover" />
          <Input label="Focus" placeholder="Com foco" forceState="focus" />
          <Input label="E-mail corporativo" defaultValue="ana@" error="Informe um e-mail válido" />
          <Input label="Cargo" placeholder="Opcional" disabled />
        </div>
      </Item>
      <Item title="Textarea" path="forms/Textarea">
        <div className={styles.grid3}>
          <Textarea label="Mensagem" rows={3} placeholder="Qual processo você quer acelerar com IA?" />
          <Textarea label="Focus" rows={3} forceState="focus" defaultValue="Relatórios semanais." />
          <Textarea label="Erro" rows={3} error="Conte um pouco mais" />
          <Textarea label="Desabilitado" rows={3} disabled placeholder="Indisponível" />
        </div>
      </Item>
      <Item title="Select" path="forms/Select">
        <div className={styles.grid3}>
          <Select label="Tamanho da empresa" placeholder="Selecione" options={["1–50", "51–500", "501–5.000", "5.000+"]} />
          <Select label="Selecionado" defaultValue="51–500" options={["1–50", "51–500", "501–5.000", "5.000+"]} />
          <Select label="Focus" placeholder="Selecione" forceState="focus" options={["A", "B"]} />
          <Select label="Erro" placeholder="Selecione" error="Escolha uma opção" options={["A", "B"]} />
          <Select label="Desabilitado" placeholder="Selecione" disabled options={["A"]} />
          <Select label="Vazio" options={[]} hint="Sem opções carregadas." />
        </div>
      </Item>
      <Item title="Checkbox" path="forms/Checkbox">
        <div className={styles.row}>
          <State label="unchecked"><Checkbox label="Aceito" /></State>
          <State label="checked (controlado)"><Checkbox label="Aceito" checked={checked} onChange={setChecked} /></State>
          <State label="hover"><Checkbox label="Aceito" forceState="hover" /></State>
          <State label="focus"><Checkbox label="Aceito" forceState="focus" /></State>
          <State label="disabled"><Checkbox label="Aceito" disabled /></State>
          <State label="disabled checked"><Checkbox label="Aceito" disabled defaultChecked /></State>
          <State label="erro"><Checkbox label="Aceito os termos" error="Obrigatório" /></State>
        </div>
      </Item>

      <Item title="Accordion" path="navigation/Accordion">
        <div className={styles.grid2}>
          <State label="primeiro aberto · focus no 1º">
            <Accordion forceState="focus" items={[
              { question: "O Copilot acessa dados que o usuário não pode ver?", answer: "Não. O Copilot respeita as permissões do Microsoft 365." },
              { question: "Quanto tempo leva uma implantação?", answer: "Pilotos rodam em 4 a 6 semanas." },
            ]} />
          </State>
          <State label="todos fechados · hover no 1º">
            <Accordion defaultOpen={-1} forceState="hover" items={[{ question: "Vocês treinam áreas não técnicas?", answer: "Sim, as trilhas são por função." }, { question: "Precisamos já ter licenças?", answer: "Não." }]} />
          </State>
          <State label="vazio"><Accordion items={[]} /></State>
        </div>
      </Item>
      <Item title="NavBar" path="navigation/NavBar">
        <div className={`${styles.stage} ${styles.navStage}`}>
          <NavBar sticky={false} cta="Fale conosco" actions={<ThemeToggle />} onNavigate={(i) => setNavActive(i.label)}
            links={["Soluções", "Capacitação", "Método", "Sobre"].map((l, i) => ({ label: l, active: l === navActive, forceState: i === 2 ? "hover" as const : i === 3 ? "focus" as const : undefined }))} />
        </div>
      </Item>
    </Block>
  );
}

function Patterns({ t }: { t: Theme }) {
  return (
    <Block id={`${t}-patterns`} title="Padrões de composição" lead="design-system/patterns · import de @ds/patterns.">
      <Item title="TrackedLine + GoldRule" path="patterns/TrackedLine · GoldRule">
        <div className={styles.col}>
          <TrackedLine items={["Diagnóstico", "Implantação", "Capacitação", "Resultado"]} />
          <GoldRule />
          <TrackedLine wide items={["Mais clareza", "Mais impacto"]} />
        </div>
      </Item>
      <Item title="Section + Glow + SectionCounter" path="patterns/Section · Glow">
        <div className={styles.stage} style={{ padding: 0 }}>
          <Section counter={["04", "Impacto"]} glow={<><Glow x="70%" y="40%" size={700} /><Glow x="10%" y="90%" size={500} tone="gold" /></>}>
            <SectionHeading title="Menos trabalho manual." highlight="Mais tempo para decidir." />
          </Section>
        </div>
      </Item>
      <Item title="GhostWordmark" path="patterns/GhostWordmark">
        <div className={`${styles.stage} ${styles.ghostStage}`}><GhostWordmark /><SectionHeading align="center" size="md" title="Ideias complexas." highlight="Resultados claros." /></div>
      </Item>
      <Item title="HubDiagram" path="patterns/HubDiagram">
        <div className={`${styles.stage} ${styles.glowStage} ${styles.hubStage}`}><HubDiagram /></div>
      </Item>
      <Item title="Footer" path="patterns/Footer"><div className={`${styles.stage} ${styles.navStage}`}><Footer /></div></Item>
    </Block>
  );
}

function ThemePanel({ theme }: { theme: Theme }) {
  return (
    <div data-theme={theme} className={styles.themePanel} id={theme}>
      <div className={styles.panelHead}>
        <Eyebrow>{theme === "dark" ? "Tema escuro · padrão" : "Tema claro"}</Eyebrow>
        <span className={styles.code}>data-theme=&quot;{theme}&quot;</span>
      </div>
      <Foundations t={theme} />
      <Components t={theme} />
      <Patterns t={theme} />
    </div>
  );
}

export function Showcase() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <Logo height={28} />
        <span className={styles.topTitle}>Design system</span>
        <nav className={styles.toc} aria-label="Seções">
          <a href="#dark">Escuro</a><a href="#light">Claro</a><a href="#templates">Templates</a>
        </nav>
        <ThemeToggle showLabel />
      </div>
      <div className={styles.intro}>
        <SectionHeading as="h1" size="lg" eyebrow="GLDN Tech" title="Design system." highlight="A biblioteca inteira."
          lead="Fundamentos, 22 componentes com todos os estados, padrões de composição e templates do site — renderizados nos temas escuro e claro. Fonte da verdade dos tokens: DESIGN.md." />
      </div>
      <ThemePanel theme="dark" />
      <ThemePanel theme="light" />
      <section id="templates" className={styles.block} style={{ paddingTop: "var(--space-16)" }}>
        <h3 className={styles.blockTitle}>Templates do site</h3>
        <p className={styles.blockLead}>design-system/templates/website · click-through com NavBar e Footer.</p>
        <div className={styles.linkList}>
          <Link href="/design-system/templates/home">Home — hero, desafio, soluções, método, impacto, formatos, FAQ, CTA</Link>
          <Link href="/design-system/templates/solucoes">Soluções — frentes em abas</Link>
          <Link href="/design-system/templates/capacitacao">Capacitação — trilhas por função</Link>
          <Link href="/design-system/templates/contato">Contato — formulário validado → loading → sucesso</Link>
          <Link href="/design-system/templates/home?theme=light">Home no tema claro</Link>
        </div>
      </section>
    </div>
  );
}
