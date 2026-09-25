import type { Metadata } from "next";
import { Button, FeatureCard, GlassCard, IconList, SectionHeading, StatBlock } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { dynamics } from "@/content/site";
import { CtaSection } from "../_components/CtaSection";
import styles from "../_components/site.module.css";

export const metadata: Metadata = {
  title: "Copilot para Microsoft Dynamics 365",
  description: "Agentes de Copilot embutidos no Finance & Operations, Business Central e Customer Engagement, conectados ao Dataverse — com 16 anos de experiência em Dynamics.",
  alternates: { canonical: "/dynamics" },
};

const cta = { label: "Falar sobre o meu Dynamics", href: "/contato?interesse=dynamics" };

export default function DynamicsPage() {
  return (
    <>
      <Section top="hero" glow={<><Glow x="80%" y="30%" size={1100} /><Glow x="0%" y="90%" size={700} tone="gold" /></>}>
        <div className={styles.split}>
          <div className={styles.heroCopy}>
            <SectionHeading as="h1" size="xl" eyebrow="IA aplicada ao ecossistema Dynamics" title="Copilot para quem" highlight="usa Microsoft Dynamics."
              lead="Quase nenhuma consultoria de Copilot para Office sabe conectar agentes ao Finance & Operations, ao Business Central ou ao Dataverse com propriedade. Esse é o nosso ponto de partida." />
            <div className={styles.actions}><Button size="lg" iconRight="arrow-right" href={cta.href}>{cta.label}</Button></div>
          </div>
          <div className={styles.stats}>
            <StatBlock value="16" label="Anos em Dynamics" description="No ecossistema Microsoft Dynamics, em operações multinacionais." />
            <StatBlock value="3" label="Países de rollout" description="EUA, Canadá e Brasil." />
            <StatBlock value="MB-500" size="sm" label="Certificação" description="Dynamics 365 Finance & Operations Developer." />
          </div>
        </div>
      </Section>

      <Section counter={["01", "Casos de uso"]}>
        <SectionHeading title="O ERP respondendo" highlight="dentro do Teams."
          lead="Exemplos típicos de agentes conectados aos dados do Dynamics — sempre com as permissões do próprio ERP." />
        <div className={`${styles.grid4} ${styles.mt}`}>
          {dynamics.useCases.map((u) => <FeatureCard key={u.title} layout="stack" icon={u.icon} title={u.title} description={u.description} fill />)}
        </div>
      </Section>

      <Section counter={["02", "Escopo"]} glow={<Glow x="50%" y="60%" size={1000} />}>
        <SectionHeading align="center" title="Foco em IA." highlight="Não em reimplantar o ERP."
          lead="Trabalhamos sobre o Dynamics que você já tem. Isso mantém os projetos curtos e o investimento previsível." />
        <div className={`${styles.grid2} ${styles.mt}`}>
          <GlassCard glow padding="panel-sm" radius="xl">
            <p className={`${styles.label} ${styles.labelAccent}`}>Fazemos</p>
            <IconList items={dynamics.inScope} />
          </GlassCard>
          <GlassCard padding="panel-sm" radius="xl">
            <p className={styles.label}>Não fazemos</p>
            <IconList items={dynamics.outOfScope} icon="minus" tone="muted" />
          </GlassCard>
        </div>
      </Section>

      <CtaSection title="Seu ERP já tem os dados." highlight="O Copilot pode usar." cta={cta} />
    </>
  );
}
