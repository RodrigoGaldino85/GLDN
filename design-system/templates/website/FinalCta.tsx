"use client";

import { Button } from "../../components/actions/Button";
import { SectionHeading } from "../../components/display/SectionHeading";
import { GhostWordmark } from "../../patterns/GhostWordmark";
import { Glow } from "../../patterns/Glow";
import { GoldRule } from "../../patterns/GoldRule";
import { Section } from "../../patterns/Section";
import { TrackedLine } from "../../patterns/TrackedLine";
import styles from "./templates.module.css";
import type { Go } from "./types";

/** Closing CTA: ghost GLDN wordmark, two-tone headline, gold rule and motto. */
export function FinalCta({ go }: { go: Go }) {
  return (
    <Section ruled glow={<><GhostWordmark /><Glow x="50%" y="60%" size={900} /></>}>
      <div className={styles.cta}>
        <SectionHeading align="center" size="xl" title="Ideias complexas." highlight="Resultados claros." />
        <Button size="lg" iconRight="arrow-right" onClick={() => go("contato")}>Agendar diagnóstico gratuito</Button>
        <GoldRule center />
        <TrackedLine items={["Mais clareza", "Mais impacto"]} />
      </div>
    </Section>
  );
}
