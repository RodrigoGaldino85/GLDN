"use client";

import { useState } from "react";
import { Button, FeatureCard, GlassCard, SectionHeading, Tag, type IconName } from "../../components";
import { Glow, Section } from "../../patterns";
import { FinalCta } from "./FinalCta";
import styles from "./templates.module.css";
import type { Go } from "./types";

interface Solution { tab: string; title: string; hi: string; lead: string; apps: string[]; feats: Array<[IconName, string, string]> }

const SOLUTIONS: Record<"m365" | "studio" | "gov", Solution> = {
  m365: { tab: "Copilot para Microsoft 365", title: "O Copilot dentro", hi: "de cada aplicativo.", lead: "Configuramos, validamos e ensinamos o Copilot onde o trabalho já acontece.", apps: ["Word", "Excel", "PowerPoint", "Outlook", "Teams", "Loop"],
    feats: [["file-text", "Documentos em minutos", "Rascunhos, resumos e revisões a partir dos seus arquivos."], ["mail", "Caixa de entrada sob controle", "Resumo de threads e respostas no tom certo."], ["table", "Análises sem fórmula", "Perguntas em linguagem natural sobre planilhas."], ["video", "Reuniões que viram ação", "Atas, decisões e próximos passos automáticos."]] },
  studio: { tab: "Copilot Studio & agentes", title: "Agentes que conhecem", hi: "o seu negócio.", lead: "Criamos agentes com Copilot Studio conectados às suas bases, sistemas e políticas.", apps: ["SharePoint", "Dataverse", "Power Automate", "ServiceNow", "SAP"],
    feats: [["headset", "Atendimento interno", "RH, TI e jurídico respondendo 24/7 com fontes oficiais."], ["workflow", "Fluxos automatizados", "Aprovações e rotinas acionadas por conversa."], ["database", "Conhecimento conectado", "Respostas baseadas nos documentos certos."], ["gauge", "Monitoramento", "Uso, custo e qualidade das respostas em um painel."]] },
  gov: { tab: "Governança & segurança", title: "IA com segurança", hi: "desde o primeiro dia.", lead: "Revisamos permissões e políticas para que o Copilot encontre só o que deve.", apps: ["Purview", "Entra ID", "SharePoint", "Defender"],
    feats: [["shield-check", "Revisão de acessos", "Sites e pastas com permissões excessivas identificados."], ["tag", "Rótulos de sensibilidade", "Classificação que acompanha o documento."], ["scroll-text", "Política de uso", "Regras claras e comunicáveis para toda a empresa."], ["eye", "Auditoria", "Rastreabilidade de prompts e respostas."]] },
};

/** Soluções: tabbed solution detail (M365 / Studio / Governança). */
export function SolutionsTemplate({ go }: { go: Go }) {
  const [k, setK] = useState<keyof typeof SOLUTIONS>("m365");
  const s = SOLUTIONS[k];
  return (
    <>
      <Section bottom="tight" glow={<Glow x="85%" y="10%" size={1000} />}>
        <SectionHeading as="h1" size="xl" eyebrow="Soluções" title="Tudo o que a IA precisa" highlight="para dar certo." lead="Escolha uma frente para ver como trabalhamos." />
        <div className={styles.tabs} role="group" aria-label="Frentes">
          {(Object.keys(SOLUTIONS) as Array<keyof typeof SOLUTIONS>).map((key) => (
            <Tag key={key} size="lg" active={k === key} onClick={() => setK(key)}>{SOLUTIONS[key].tab}</Tag>
          ))}
        </div>
      </Section>
      <Section top="tight" glow={<Glow x="20%" y="60%" size={900} />}>
        <GlassCard glow padding="panel" radius="xl">
          <div className={styles.panelGrid}>
            <div className={styles.panelCopy}>
              <SectionHeading size="md" title={s.title} highlight={s.hi} lead={s.lead} />
              <div>
                <div className={styles.miniLabel}>Onde atuamos</div>
                <div className={styles.chips}>{s.apps.map((a) => <Tag key={a}>{a}</Tag>)}</div>
              </div>
              <div><Button iconRight="arrow-right" onClick={() => go("contato")}>Conversar sobre {s.tab.split(" ")[0]}</Button></div>
            </div>
            <div className={styles.gridFeat}>
              {s.feats.map(([i, t, d]) => <FeatureCard key={t} layout="stack" icon={i} title={t} description={d} />)}
            </div>
          </div>
        </GlassCard>
      </Section>
      <FinalCta go={go} />
    </>
  );
}
