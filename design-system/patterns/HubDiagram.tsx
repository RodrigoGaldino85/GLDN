import { Logo } from "../components/brand/Logo";
import { FeatureCard } from "../components/cards/FeatureCard";
import type { IconName } from "../components/brand/Icon";
import { cx } from "../lib/cx";
import styles from "./patterns.module.css";

export interface HubNode { icon: IconName; title: string; description: string }

const DEFAULT_NODES: [HubNode, HubNode, HubNode, HubNode] = [
  { icon: "bot", title: "Copilot", description: "Microsoft 365 no dia a dia." },
  { icon: "workflow", title: "Agentes", description: "Processos automatizados." },
  { icon: "shield-check", title: "Governança", description: "Dados seguros e auditáveis." },
  { icon: "graduation-cap", title: "Pessoas", description: "Capacitação contínua." },
];

/** Hero diagram: logo core inside dashed gold orbits with four feature nodes (top, left, right, bottom). */
export function HubDiagram({ nodes = DEFAULT_NODES }: { nodes?: [HubNode, HubNode, HubNode, HubNode] }) {
  const pos = [styles.nodeTop, styles.nodeLeft, styles.nodeRight, styles.nodeBottom];
  return (
    <div className={styles.hub}>
      <div className={styles.orbit} aria-hidden />
      <div className={styles.orbitInner} aria-hidden />
      <div className={styles.core}><Logo wordmark={false} height={84} /></div>
      {nodes.map((n, i) => (
        <div key={n.title} className={cx(styles.node, pos[i])}>
          <FeatureCard icon={n.icon} title={n.title} description={n.description} />
        </div>
      ))}
    </div>
  );
}
