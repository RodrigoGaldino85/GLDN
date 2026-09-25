import type { Metadata } from "next";
import { Suspense } from "react";
import { GlassCard, Icon, SectionHeading, StepCard } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { company } from "@/content/site";
import siteStyles from "../_components/site.module.css";
import styles from "./contato.module.css";
import { LeadForm } from "./LeadForm";

export const metadata: Metadata = {
  title: "Contato e proposta",
  description: "Conte onde sua empresa está com o Microsoft Copilot. Respondemos com os próximos passos e uma proposta com escopo e preço fechados.",
  alternates: { canonical: "/contato" },
};

const steps = [
  { number: "01", title: "Descoberta", description: "Uma conversa para entender o ambiente, as licenças e a dor principal." },
  { number: "02", title: "Proposta", description: "Escopo, entregáveis, prazo e preço fechados, por escrito." },
  { number: "03", title: "Kick-off", description: "Início em até 5 dias úteis após o aceite." },
];

export default function ContactPage() {
  return (
    <>
      <Section top="hero" glow={<><Glow x="85%" y="30%" size={1000} /><Glow x="0%" y="90%" size={700} tone="gold" /></>}>
        <div className={siteStyles.split}>
          <div className={siteStyles.stackLg}>
            <SectionHeading as="h1" size="lg" eyebrow="Contato" title="Vamos conversar" highlight="sobre o seu Copilot."
              lead="Conte onde sua empresa está. Com essas informações já preparamos a conversa de descoberta e, se fizer sentido, a proposta." />
            <div className={styles.info}>
              <div className={styles.infoItem}><Icon name="mail" size={20} color="var(--accent)" /><a href={`mailto:${company.email}`}>{company.email}</a></div>
              <div className={styles.infoItem}><Icon name="users" size={20} color="var(--accent)" /><a href={company.linkedin}>LinkedIn da GLDN</a></div>
              <div className={styles.infoItem}><Icon name="globe" size={20} color="var(--accent)" />Atendimento remoto em todo o Brasil</div>
            </div>
          </div>
          <GlassCard glow padding="panel-sm" radius="card-l">
            <Suspense fallback={null}><LeadForm /></Suspense>
          </GlassCard>
        </div>
      </Section>
      <Section counter={["01", "Próximos passos"]} top="flush">
        <div className={siteStyles.grid3}>
          {steps.map((s, i) => <StepCard key={s.number} number={s.number} title={s.title} description={s.description} active={i === 0} fill />)}
        </div>
      </Section>
    </>
  );
}
