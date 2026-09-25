import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Button, FeatureCard, SectionHeading, StepCard } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { seo, training } from "@/content/site";
import { CtaSection } from "../_components/CtaSection";
import styles from "../_components/site.module.css";
import { AreaTracks } from "./AreaTracks";

export const metadata: Metadata = pageMetadata({ ...seo.capacitacao, path: "/capacitacao" });

const cta = { label: "Montar uma turma", href: "/contato?interesse=capacitacao" };

export default function TrainingPage() {
  return (
    <>
      <Section top="hero" glow={<Glow x="15%" y="20%" size={1000} />}>
        <div className={styles.heroCopy}>
          <SectionHeading as="h1" size="xl" eyebrow="Capacitação" title="Pessoas preparadas." highlight="IA que vira hábito."
            lead="Produtividade real, não só familiaridade com o chat. Trilhas práticas por nível e por área, com exemplos do trabalho de cada time." />
          <div className={styles.actions}><Button size="lg" iconRight="arrow-right" href={cta.href}>{cta.label}</Button></div>
        </div>
      </Section>

      <Section top="flush" counter={["01", "Níveis"]}>
        <div className={styles.grid3}>
          {training.levels.map((l, i) => <StepCard key={l.number} number={l.number} title={l.title} description={l.description} active={i === 0} fill />)}
        </div>
      </Section>

      <Section counter={["02", "Por área"]} glow={<Glow x="80%" y="50%" size={900} />}>
        <SectionHeading title="Cada área" highlight="com os seus exemplos."
          lead="O conteúdo muda conforme o time. A trilha de TI cobre governança, agentes e suporte." />
        <div className={styles.mt}><AreaTracks areas={training.areas} /></div>
      </Section>

      <Section counter={["03", "Formato"]}>
        <div className={styles.grid3}>
          {training.formats.map((f) => <FeatureCard key={f.title} layout="stack" icon={f.icon} title={f.title} description={f.description} fill />)}
        </div>
      </Section>

      <CtaSection title="Treinamento sozinho não basta." highlight="Por isso vem com método." cta={cta}
        lead="Capacitação funciona melhor junto com governança e casos de uso priorizados. Conte o tamanho do time e as áreas envolvidas." />
    </>
  );
}
