"use client";

import { useState } from "react";
import { GlassCard, IconList, Tag } from "@ds/components";
import styles from "../_components/site.module.css";

/** Area switcher with example topics per team. */
export function AreaTracks({ areas }: { areas: Record<string, string[]> }) {
  const names = Object.keys(areas);
  const [area, setArea] = useState(names[0]);
  return (
    <>
      <div className={styles.tabs} role="group" aria-label="Áreas">
        {names.map((n) => <Tag key={n} size="lg" active={n === area} onClick={() => setArea(n)}>{n}</Tag>)}
      </div>
      <GlassCard glow padding="panel-sm" radius="xl">
        <p className={`${styles.label} ${styles.labelAccent}`}>Exemplos na trilha de {area}</p>
        <IconList items={areas[area]} icon="sparkles" />
      </GlassCard>
    </>
  );
}
