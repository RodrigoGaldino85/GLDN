import type { Metadata } from "next";
import { Button, GlassCard, Icon, IconList, PlanCard, SectionHeading } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { coe, engagementModels, pillars, primaryCta, products } from "@/content/site";
import { CtaSection } from "../_components/CtaSection";
import styles from "../_components/site.module.css";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Estratégia e adoção, governança e LGPD, FinOps de licenças e créditos, capacitação, agentes com Copilot Studio e integração com Dynamics 365.",
  alternates: { canonical: "/solucoes" },
};

export default function SolutionsPage() {
  return (
    <>
      <Section top="hero" bottom="tight" glow={<Glow x="85%" y="10%" size={1000} />}>
        <SectionHeading as="h1" size="xl" eyebrow="Soluções" title="Tudo o que o Copilot precisa" highlight="para dar retorno."
          lead="Seis frentes de trabalho sob a mesma marca — do diagnóstico à sustentação — para usuários, TI e diretoria." />
      </Section>

      <Section top="tight" counter={["01", "Frentes"]}>
        <div className={styles.grid2}>
          {pillars.map((p) => (
            <GlassCard key={p.slug} as="article" interactive padding="panel-sm" radius="xl" className={styles.fill}>
              <div id={p.slug}>
                <h2 className={styles.cardTitle}><Icon name={p.icon} size={26} color="var(--accent)" />{p.title}</h2>
                <p className={styles.cardText}>{p.description}</p>
                <IconList items={p.items} compact />
              </div>
            </GlassCard>
          ))}
        </div>
        <GlassCard glow padding="panel-sm" radius="xl" className={styles.mtSm}>
          <h2 className={styles.cardTitle}><Icon name="refresh-cw" size={26} color="var(--accent)" />{coe.title}</h2>
          <p className={styles.body}>{coe.description}</p>
        </GlassCard>
      </Section>

      <Section counter={["02", "Produtos"]} glow={<Glow x="15%" y="50%" size={1000} />}>
        <SectionHeading title="Produtos de escopo fechado." highlight="Entregável claro, aceite por escrito."
          lead="Cada produto sai com escopo, entregáveis e critérios de aceite definidos na proposta." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {products.map((p) => (
            <GlassCard key={p.name} as="article" interactive padding="lg" className={styles.fill}>
              <h3 className={styles.cardTitle}><Icon name={p.icon} size={24} color="var(--accent)" />{p.name}</h3>
              <p className={styles.cardText}>{p.description}</p>
              <div className={styles.meta}><Icon name="clock" size={14} />{p.effort}</div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section counter={["03", "Contratação"]}>
        <SectionHeading align="center" title="Três formas de contratar." highlight="Você escolhe o ritmo."
          lead="A jornada mais comum: diagnóstico, depois um projeto fechado e, por fim, sustentação mensal." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {engagementModels.map((m) => (
            <PlanCard key={m.number} number={m.number} name={m.name} audience={m.audience} kicker={m.kicker}
              featured={m.featured} badge={m.badge} features={m.features} cta="Solicitar proposta" ctaHref="/contato" />
          ))}
        </div>
        <GlassCard padding="panel-sm" radius="xl" className={styles.mtSm}>
          <IconList items={[
            { title: "Licenças e créditos são sempre seus.", text: " A GLDN não revende licenças — recomendamos só o que faz sentido comprar." },
            { title: "Mudança de escopo é combinada antes.", text: " Tudo que ficar fora da proposta vira um pedido de mudança com estimativa aprovada." },
          ]} icon="handshake" />
        </GlassCard>
      </Section>

      <Section>
        <div className={`${styles.actions} ${styles.actionsCenter}`}>
          <Button size="lg" iconRight="arrow-right" href={primaryCta.href}>{primaryCta.label}</Button>
          <Button size="lg" variant="secondary" href="/diagnostico">Conhecer o diagnóstico</Button>
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
