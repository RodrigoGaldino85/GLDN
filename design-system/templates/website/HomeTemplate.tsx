"use client";

import { useState } from "react";
import { Accordion, Button, FeatureCard, PlanCard, SectionHeading, StatBlock, StepCard, type IconName } from "../../components";
import { Glow, GoldRule, HubDiagram, Section, TrackedLine } from "../../patterns";
import { FinalCta } from "./FinalCta";
import styles from "./templates.module.css";
import type { Go } from "./types";

function Hero({ go }: { go: Go }) {
  return (
    <Section top="hero" glow={<><Glow x="78%" y="45%" size={1100} /><Glow x="0%" y="100%" size={700} tone="gold" /></>}>
      <div className={styles.heroRow}>
        <div className={styles.heroCopy}>
          <SectionHeading as="h1" size="xl" eyebrow="Microsoft Copilot · IA corporativa" title="IA que eleva" highlight="o potencial do seu time."
            lead="Transformamos suas licenças de Microsoft Copilot em produtividade real — com implantação segura, agentes sob medida e capacitação para cada área." />
          <div className={styles.actions}>
            <Button size="lg" iconRight="arrow-right" onClick={() => go("contato")}>Agendar diagnóstico</Button>
            <Button size="lg" variant="ghost" onClick={() => go("solucoes")}>Ver soluções</Button>
          </div>
          <TrackedLine items={["Diagnóstico", "Implantação", "Capacitação", "Resultado"]} className={styles.heroTracked} />
        </div>
        <div className={styles.heroArt}><HubDiagram /></div>
      </div>
    </Section>
  );
}

function Challenge() {
  return (
    <Section counter={["01", "O desafio"]} glow={<Glow x="10%" y="40%" size={800} />}>
      <div className={styles.split}>
        <SectionHeading eyebrow="O desafio" title="Licenças compradas." highlight="Uso que não decola."
          lead="A maioria das empresas ativa o Copilot e espera que a adoção aconteça sozinha. Sem método, a IA vira mais uma ferramenta esquecida." />
        <div className={styles.stackSm}>
          <FeatureCard icon="circle-dashed" title="Licenças ociosas" description="Investimento ativo, uso esporádico e sem métrica de retorno." />
          <FeatureCard icon="circle-help" title="Times sem confiança" description="Colaboradores não sabem o que pedir — nem quando confiar na resposta." />
          <FeatureCard icon="lock-open" title="Governança improvisada" description="Permissões antigas expõem dados que o Copilot passa a encontrar." />
        </div>
      </div>
    </Section>
  );
}

const SOLUTIONS: Array<[IconName, string, string]> = [
  ["bot", "Copilot para Microsoft 365", "Word, Excel, Outlook, Teams e PowerPoint trabalhando a favor de cada função."],
  ["workflow", "Copilot Studio & agentes", "Agentes que conhecem seus processos, sistemas e políticas internas."],
  ["shield-check", "Governança & segurança", "Revisão de permissões, rótulos de sensibilidade e políticas de uso."],
  ["graduation-cap", "Capacitação contínua", "Trilhas por área, prompts de referência e champions internos."],
];

function Solutions({ go }: { go: Go }) {
  return (
    <Section counter={["02", "Soluções"]}>
      <SectionHeading align="center" title="Uma consultoria." highlight="Toda a jornada da IA."
        lead="Da estratégia ao hábito diário — cobrimos cada etapa para que o investimento em IA se pague." />
      <div className={styles.grid240}>
        {SOLUTIONS.map(([i, t, d]) => (
          <FeatureCard key={t} layout="stack" icon={i} title={t} description={d} fill onClick={() => go("solucoes")} />
        ))}
      </div>
    </Section>
  );
}

const STEPS: Array<[string, string, string]> = [
  ["01", "Diagnóstico", "Maturidade, processos, dados e licenças."],
  ["02", "Implantação", "Governança, piloto e casos de uso prioritários."],
  ["03", "Capacitação", "Trilhas práticas por área e por função."],
  ["04", "Evolução", "Métricas de uso, novos agentes e melhoria contínua."],
];

function Method() {
  const [active, setActive] = useState(0);
  return (
    <Section counter={["03", "Método"]} glow={<Glow x="50%" y="100%" size={1000} />}>
      <SectionHeading align="center" title="Um ciclo contínuo" highlight="do piloto à escala." lead="Cada etapa alimenta a próxima — e a IA fica mais útil a cada mês." />
      <div className={styles.grid230}>
        {STEPS.map(([n, t, d], i) => (
          <div key={n} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
            <StepCard number={n} title={t} description={d} active={i === active} fill />
          </div>
        ))}
      </div>
      <div className={styles.motto}><GoldRule center /><TrackedLine wide items={["Sempre medindo, sempre evoluindo."]} /></div>
    </Section>
  );
}

function Impact() {
  return (
    <Section counter={["04", "Impacto"]} glow={<Glow x="50%" y="55%" size={1200} />}>
      <SectionHeading align="center" title="Menos trabalho manual." highlight="Mais tempo para decidir." />
      <div className={styles.grid220}>
        <StatBlock value="+30%" label="Adoção ativa" description="Usuários que usam o Copilot toda semana." />
        <StatBlock size="lg" value="8h" label="Por pessoa / mês" description="Tempo devolvido em tarefas repetitivas." />
        <StatBlock value="6 sem." label="Até o piloto" description="Do diagnóstico ao primeiro caso de uso em produção." />
      </div>
      <p className={styles.disclaimer}>Métricas ilustrativas para fins de apresentação.</p>
    </Section>
  );
}

function Plans({ go }: { go: Go }) {
  return (
    <Section counter={["05", "Formatos"]}>
      <SectionHeading title="Comece do seu ponto." highlight="Escale no seu ritmo." lead="Três formatos de projeto. O mesmo compromisso com resultado." />
      <div className={styles.grid280}>
        <PlanCard number="01" name="Essencial" audience="Para quem está começando." kicker="Um começo sólido"
          features={[{ icon: "search", label: "Diagnóstico de maturidade" }, { icon: "shield-check", label: "Revisão de governança" }, { icon: "presentation", label: "Workshop executivo" }]}
          cta="Quero começar" onCta={() => go("contato")} />
        <PlanCard number="02" name="Adoção" audience="Para times prontos para escalar." kicker="Mais impacto" featured badge="Mais escolhido"
          features={[{ icon: "rocket", label: "Piloto com casos de uso" }, { icon: "graduation-cap", label: "Trilhas por área" }, { icon: "users", label: "Programa de champions" }, { icon: "bar-chart-3", label: "Painel de adoção" }]}
          cta="Falar com especialista" onCta={() => go("contato")} />
        <PlanCard number="03" name="Enterprise" audience="Para ecossistemas complexos." kicker="Sob medida"
          features={[{ icon: "workflow", label: "Agentes com Copilot Studio" }, { icon: "plug", label: "Integrações com seus sistemas" }, { icon: "headset", label: "Squad dedicado" }]}
          cta="Montar projeto" onCta={() => go("contato")} />
      </div>
    </Section>
  );
}

const FAQ = [
  { question: "O Copilot acessa dados que o colaborador não pode ver?", answer: "Não. O Copilot respeita as permissões do Microsoft 365 — por isso toda implantação começa revisando quem tem acesso a quê." },
  { question: "Quanto tempo leva para ver resultado?", answer: "Um piloto bem desenhado entrega os primeiros casos de uso em produção em cerca de seis semanas." },
  { question: "Vocês capacitam áreas não técnicas?", answer: "Sim. As trilhas são desenhadas por função — jurídico, financeiro, comercial, RH — com exemplos do dia a dia de cada time." },
  { question: "Precisamos já ter licenças do Copilot?", answer: "Não. O diagnóstico ajuda a definir quantas licenças fazem sentido e para quem, antes de qualquer compra." },
];

function Faq() {
  return (
    <Section counter={["06", "Perguntas"]}>
      <div className={styles.faq}>
        <SectionHeading size="md" title="Dúvidas" highlight="frequentes." lead="Não encontrou sua pergunta? Fale com a gente." />
        <div className={styles.faqList}><Accordion items={FAQ} /></div>
      </div>
    </Section>
  );
}

/** Home: Hero + hub diagram, Desafio, Soluções, Método, Impacto, Formatos, FAQ, CTA. */
export function HomeTemplate({ go }: { go: Go }) {
  return <><Hero go={go} /><Challenge /><Solutions go={go} /><Method /><Impact /><Plans go={go} /><Faq /><FinalCta go={go} /></>;
}
