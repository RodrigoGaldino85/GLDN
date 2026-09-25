"use client";

import { useState } from "react";
import { FeatureCard, SectionHeading, StepCard, Tag } from "../../components";
import { Glow, Section } from "../../patterns";
import { FinalCta } from "./FinalCta";
import styles from "./templates.module.css";
import type { Go } from "./types";

const TRACKS: Record<string, Array<[string, string, string]>> = {
  Liderança: [["01", "Visão estratégica", "Onde a IA gera valor no seu setor."], ["02", "Decisão com dados", "Copilot para análises e briefings."], ["03", "Cultura de IA", "Como liderar a adoção pelo exemplo."]],
  Gestores: [["01", "Rotina assistida", "Reuniões, e-mails e relatórios com Copilot."], ["02", "Times aumentados", "Casos de uso por área."], ["03", "Medir adoção", "Indicadores de uso e impacto."]],
  Operações: [["01", "Primeiros prompts", "Como pedir, revisar e confiar."], ["02", "Documentos & planilhas", "Word e Excel no dia a dia."], ["03", "Automação simples", "Fluxos com Power Automate."]],
  TI: [["01", "Governança", "Permissões, rótulos e políticas."], ["02", "Copilot Studio", "Construindo o primeiro agente."], ["03", "Operação", "Monitoramento, custo e suporte."]],
};

/** Capacitação: role-based tracks (tag switcher) + formats. */
export function TrainingTemplate({ go }: { go: Go }) {
  const [t, setT] = useState("Gestores");
  return (
    <>
      <Section glow={<Glow x="15%" y="20%" size={1000} />}>
        <SectionHeading as="h1" size="xl" eyebrow="Capacitação" title="Pessoas preparadas." highlight="IA que vira hábito."
          lead="Trilhas práticas por função, com exemplos reais do dia a dia de cada time — presenciais, ao vivo ou sob demanda." />
      </Section>
      <Section top="flush" counter={["01", "Trilhas"]}>
        <div className={`${styles.tabs} ${styles.tabsTop}`} role="group" aria-label="Trilhas">
          {Object.keys(TRACKS).map((k) => <Tag key={k} size="lg" active={k === t} onClick={() => setT(k)}>{k}</Tag>)}
        </div>
        <div className={styles.grid260}>
          {TRACKS[t].map(([n, ti, d], i) => <StepCard key={t + n} number={n} title={ti} description={d} active={i === 0} />)}
        </div>
      </Section>
      <Section counter={["02", "Formatos"]} glow={<Glow x="80%" y="50%" size={900} />}>
        <div className={`${styles.grid240} ${styles.flush}`}>
          <FeatureCard layout="stack" icon="presentation" title="Workshops presenciais" description="Imersões de meio período com exercícios em ambiente real." />
          <FeatureCard layout="stack" icon="monitor-play" title="Turmas ao vivo" description="Sessões online curtas, gravadas e com material de apoio." />
          <FeatureCard layout="stack" icon="book-open" title="Biblioteca de prompts" description="Modelos validados por área, prontos para usar." />
          <FeatureCard layout="stack" icon="users" title="Programa de champions" description="Multiplicadores internos que sustentam a adoção." />
        </div>
      </Section>
      <FinalCta go={go} />
    </>
  );
}
