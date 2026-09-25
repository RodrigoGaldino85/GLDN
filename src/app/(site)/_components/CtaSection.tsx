import { Button, SectionHeading } from "@ds/components";
import { GhostWordmark, Glow, GoldRule, Section, TrackedLine } from "@ds/patterns";
import { company, primaryCta } from "@/content/site";
import styles from "./site.module.css";

interface CtaSectionProps {
  title?: string;
  highlight?: string;
  lead?: string;
  cta?: { label: string; href: string };
}

/** Closing call to action shared by every page. */
export function CtaSection({
  title = "Ideias complexas.",
  highlight = "Resultados claros.",
  lead = "Conte onde sua empresa está com o Copilot. Voltamos com os próximos passos e, se fizer sentido, uma proposta com escopo e preço fechados.",
  cta = primaryCta,
}: CtaSectionProps) {
  return (
    <Section ruled glow={<><GhostWordmark /><Glow x="50%" y="60%" size={900} /></>}>
      <div className={styles.cta}>
        <SectionHeading align="center" size="xl" title={title} highlight={highlight} lead={lead} />
        <div className={`${styles.actions} ${styles.actionsCenter}`}>
          <Button size="lg" iconRight="arrow-right" href={cta.href}>{cta.label}</Button>
          <Button size="lg" variant="ghost" iconLeft="mail" href={`mailto:${company.email}`}>Enviar e-mail</Button>
        </div>
        <GoldRule center />
        <TrackedLine items={["Mais clareza", "Mais impacto"]} />
      </div>
    </Section>
  );
}
