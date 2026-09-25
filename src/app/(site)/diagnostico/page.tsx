import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Button, FeatureCard, GlassCard, IconList, SectionHeading, StepCard } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { diagnostic, diagnosticPrice, primaryCta, seo } from "@/content/site";
import { CtaSection } from "../_components/CtaSection";
import styles from "../_components/site.module.css";

export const metadata: Metadata = pageMetadata({ ...seo.diagnostico, path: "/diagnostico" });

export default function DiagnosticPage() {
  return (
    <>
      <Section top="hero" glow={<Glow x="85%" y="20%" size={1000} />}>
        <div className={styles.split}>
          <div className={styles.heroCopy}>
            <SectionHeading as="h1" size="xl" eyebrow="Oferta de entrada" title="Diagnóstico" highlight="Copilot Readiness."
              lead="Um diagnóstico de 3 semanas que mostra, com dados do seu próprio ambiente, onde o Copilot já gera valor, onde há risco de exposição de informação e quanto a empresa pode economizar em licenças e créditos." />
            <div className={styles.actions}>
              <Button size="lg" iconRight="arrow-right" href={primaryCta.href}>Solicitar proposta</Button>
              <Button size="lg" variant="ghost" href="#investimento">Ver investimento</Button>
            </div>
          </div>
          <GlassCard glow padding="panel-sm" radius="xl">
            <p className={`${styles.label} ${styles.labelAccent}`}>As quatro perguntas que respondemos</p>
            <IconList items={diagnostic.questions.map((q) => ({ icon: q.icon, title: q.title, text: q.description }))} />
          </GlassCard>
        </div>
      </Section>

      <Section counter={["01", "Escopo"]}>
        <SectionHeading title="Cinco frentes avaliadas." highlight="Nenhuma configuração alterada."
          lead="Trabalhamos com acesso somente leitura. O diagnóstico observa, mede e recomenda — as correções ficam para depois, se você quiser." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {diagnostic.scope.map((s) => <FeatureCard key={s.title} layout="stack" icon={s.icon} title={s.title} description={s.description} fill />)}
        </div>
      </Section>

      <Section counter={["02", "Cronograma"]} glow={<Glow x="50%" y="100%" size={1000} />}>
        <SectionHeading align="center" title="Ir onde o trabalho acontece." highlight="Medir. Só então propor."
          lead="O método segue a lógica Lean do Gemba: observar o trabalho real antes de recomendar qualquer coisa." />
        <div className={`${styles.grid4} ${styles.mt}`}>
          {diagnostic.schedule.map((s, i) => <StepCard key={s.number} number={s.number} title={s.title} description={s.description} active={i === 3} fill />)}
        </div>
      </Section>

      <Section counter={["03", "Entregáveis"]}>
        <SectionHeading title="Cinco entregáveis." highlight="Todos seus após o pagamento." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {diagnostic.deliverables.map((d) => <FeatureCard key={d.title} icon={d.icon} title={d.title} description={d.description} fill />)}
        </div>
      </Section>

      <Section counter={["04", "Premissas"]}>
        <div className={styles.grid2}>
          <GlassCard padding="panel-sm" radius="xl">
            <p className={`${styles.label} ${styles.labelAccent}`}>Premissas</p>
            <IconList items={diagnostic.premises} />
          </GlassCard>
          <GlassCard padding="panel-sm" radius="xl">
            <p className={styles.label}>Fora do escopo — contratável à parte</p>
            <IconList items={diagnostic.outOfScope} icon="minus" tone="muted" />
          </GlassCard>
        </div>
      </Section>

      <Section id="investimento" counter={["05", "Investimento"]} glow={<Glow x="30%" y="50%" size={1100} />}>
        <GlassCard glow padding="panel" radius="xl">
          <div className={styles.split}>
            <div className={styles.stackLg}>
              <SectionHeading size="md" title="Preço fechado." highlight="Sem surpresa na fatura." />
              <div className={styles.priceBox}>
                <span className={styles.priceLabel}>A partir de</span>
                <span className={styles.price}>{diagnosticPrice.from}</span>
                <p className={styles.note}>{diagnosticPrice.note}. O valor final sai na proposta, depois de uma conversa de descoberta.</p>
              </div>
              <div className={styles.actions}><Button iconRight="arrow-right" href={primaryCta.href}>Solicitar proposta</Button></div>
            </div>
            <div className={styles.stackLg}>
              <div><p className={styles.label}>Condições</p><IconList items={diagnostic.conditions} icon="circle-check" /></div>
              <div><p className={styles.label}>Depois do diagnóstico</p><IconList items={diagnostic.after} icon="arrow-right" /></div>
            </div>
          </div>
        </GlassCard>
      </Section>

      <CtaSection title="Decida com dados." highlight="Comece pelo diagnóstico." cta={{ label: "Solicitar proposta", href: primaryCta.href }} />
    </>
  );
}
