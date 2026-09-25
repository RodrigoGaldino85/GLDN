import type { Metadata } from "next";
import { Button, FeatureCard, GlassCard, IconList, SectionHeading, StepCard } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { company, differentials, founder } from "@/content/site";
import { CtaSection } from "../_components/CtaSection";
import styles from "../_components/site.module.css";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A GLDN Tecnologia nasce de 16 anos no ecossistema Microsoft Dynamics e de formação Lean para fazer o Copilot gerar retorno mensurável.",
  alternates: { canonical: "/sobre" },
};

const kaizen = [
  { number: "01", title: "Mapear", description: "Uma semana dentro de uma área, acompanhando o fluxo real do trabalho (Gemba)." },
  { number: "02", title: "Eliminar", description: "Identificar desperdícios: retrabalho, esperas, tarefas repetitivas e buscas de informação." },
  { number: "03", title: "Implantar", description: "Colocar agentes e automações nos pontos de maior ganho." },
  { number: "04", title: "Medir", description: "Comparar o antes e o depois com métricas combinadas no início (PDCA)." },
];

export default function AboutPage() {
  return (
    <>
      <Section top="hero" glow={<Glow x="80%" y="30%" size={1000} />}>
        <div className={styles.split}>
          <SectionHeading as="h1" size="xl" eyebrow="Sobre a GLDN" title="Lapidar o que você já tem." highlight="Revelar o valor."
            lead="GLDN vem de Galdino, sem as vogais — e ecoa golden. A metáfora é lapidar: a licença do Copilot já está paga, o valor está bruto. Nosso trabalho é revelá-lo." />
          <GlassCard glow padding="panel-sm" radius="xl">
            <p className={`${styles.label} ${styles.labelAccent}`}>{founder.name} · {founder.role}</p>
            <IconList items={founder.bio} icon="badge-check" />
            <div className={styles.mtSm}><Button variant="secondary" iconRight="arrow-up-right" href={company.linkedin}>LinkedIn da GLDN</Button></div>
          </GlassCard>
        </div>
      </Section>

      <Section counter={["01", "Diferenciais"]}>
        <div className={styles.grid3}>
          {differentials.map((d) => <FeatureCard key={d.title} layout="stack" icon={d.icon} title={d.title} description={d.description} fill />)}
        </div>
      </Section>

      <Section counter={["02", "Kaizen de IA"]} glow={<Glow x="50%" y="100%" size={1000} />}>
        <SectionHeading align="center" title="Uma área. Uma semana." highlight="Métricas de antes e depois."
          lead="O Kaizen de IA aplica o método Lean à adoção do Copilot: não ensinamos prompt no vazio, mudamos um processo e medimos o resultado." />
        <div className={`${styles.grid4} ${styles.mt}`}>
          {kaizen.map((k, i) => <StepCard key={k.number} number={k.number} title={k.title} description={k.description} active={i === 0} fill />)}
        </div>
        <div className={`${styles.actions} ${styles.actionsCenter} ${styles.mtSm}`}>
          <Button iconRight="arrow-right" href="/contato?interesse=kaizen">Quero um Kaizen de IA</Button>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
