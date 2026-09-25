import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Accordion, Button, FeatureCard, GlassCard, IconList, SectionHeading, StatBlock, StepCard } from "@ds/components";
import { Glow, GoldRule, HubDiagram, Section, TrackedLine } from "@ds/patterns";
import {
  audiences, diagnostic, diagnosticPrice, differentials, faq, idealFor, journey, pains, pillars, positioning, primaryCta,
} from "@/content/site";
import { CtaSection } from "./_components/CtaSection";
import { seo } from "@/content/site";
import styles from "./_components/site.module.css";

const homeMeta = pageMetadata({ ...seo.home, path: "/" });
// Home uses its full title as-is (no " · GLDN Tech" suffix from the layout template).
export const metadata: Metadata = { ...homeMeta, title: { absolute: seo.home.title } };

export default function HomePage() {
  return (
    <>
      <Section top="hero" glow={<><Glow x="78%" y="45%" size={1100} /><Glow x="0%" y="100%" size={700} tone="gold" /></>}>
        <div className={styles.heroRow}>
          <div className={styles.heroCopy}>
            <SectionHeading as="h1" size="xl" eyebrow="Soluções em Copilot & IA para empresas"
              title="Sua licença do Copilot." highlight="Gerando retorno de verdade."
              lead="Fazemos o Microsoft Copilot da sua empresa gerar retorno mensurável — com segurança, custo sob controle e adoção real pelos times. Em qualquer sistema que você já usa, Dynamics incluído." />
            <div className={styles.actions}>
              <Button size="lg" iconRight="arrow-right" href={primaryCta.href}>{primaryCta.label}</Button>
              <Button size="lg" variant="ghost" href="/diagnostico">Como funciona</Button>
            </div>
            <TrackedLine items={["Governança", "FinOps", "Capacitação", "Agentes"]} />
          </div>
          <div className={styles.heroArt}>
            <HubDiagram nodes={[
              { icon: "shield-check", title: "Governança", description: "Dados seguros e auditáveis." },
              { icon: "wallet", title: "FinOps", description: "Licenças e créditos sob controle." },
              { icon: "workflow", title: "Agentes", description: "Processos que andam sozinhos." },
              { icon: "factory", title: "Dynamics", description: "IA dentro do seu ERP." },
            ]} />
          </div>
        </div>
      </Section>

      <Section counter={["01", "O desafio"]} glow={<Glow x="10%" y="40%" size={800} />}>
        <div className={styles.split}>
          <SectionHeading eyebrow="O desafio" title="Licença paga." highlight="Retorno que não aparece."
            lead="O mercado saiu da fase de comprar licença e entrou na de fazer a licença render sem sair do controle. É nessa lacuna que a GLDN trabalha." />
          <div className={styles.stack}>
            {pains.map((p) => <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} />)}
          </div>
        </div>
      </Section>

      <Section counter={["02", "Para quem"]}>
        <SectionHeading align="center" title="Três públicos." highlight="Uma entrega para cada um."
          lead="Dentro da mesma empresa, cada área precisa de uma resposta diferente do Copilot." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {audiences.map((a) => <FeatureCard key={a.title} layout="stack" icon={a.icon} title={a.title} description={a.description} fill />)}
        </div>
        <GlassCard padding="panel-sm" radius="xl" className={styles.mtSm}>
          <p className={`${styles.label} ${styles.labelAccent}`}>Ideal para</p>
          <IconList items={idealFor} icon="circle-check" />
        </GlassCard>
      </Section>

      <Section counter={["03", "Soluções"]} glow={<Glow x="85%" y="30%" size={900} />}>
        <SectionHeading title="Seis frentes." highlight="Do diagnóstico ao agente no ERP."
          lead="Um só parceiro para estratégia, segurança, custo, pessoas, agentes e integração com os sistemas da sua empresa." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {pillars.map((p) => (
            <a key={p.slug} href={`/solucoes#${p.slug}`} aria-label={p.title}>
              <FeatureCard layout="stack" icon={p.icon} title={p.title} description={p.description} fill />
            </a>
          ))}
        </div>
        <div className={`${styles.actions} ${styles.mtSm}`}>
          <Button variant="secondary" iconRight="arrow-right" href="/solucoes">Ver todas as soluções</Button>
        </div>
      </Section>

      <Section counter={["04", "Dynamics"]} glow={<Glow x="15%" y="60%" size={900} tone="gold" />}>
        <div className={`${styles.split} ${styles.splitCenter}`}>
          <SectionHeading eyebrow="Nosso diferencial" title="Copilot para quem" highlight="usa Microsoft Dynamics."
            lead="A maioria das consultorias de Copilot para no Office. Com 16 anos de ecossistema Dynamics, conectamos agentes ao F&O, ao Business Central e ao Dataverse com propriedade." />
          <GlassCard glow padding="panel-sm" radius="xl">
            <IconList items={[
              "Agentes de Copilot embutidos no Finance & Operations, Business Central ou CE",
              "Automação de processos do ERP com Copilot Studio e Power Automate",
              "Governança de dados e permissões no ambiente Dynamics que você já tem",
            ]} />
            <div className={styles.mtSm}><Button variant="secondary" iconRight="arrow-right" href="/dynamics">IA no seu Dynamics</Button></div>
          </GlassCard>
        </div>
      </Section>

      <Section counter={["05", "Por onde começar"]} glow={<Glow x="50%" y="50%" size={1200} />}>
        <GlassCard glow padding="panel" radius="xl">
          <div className={styles.split}>
            <div className={styles.stackLg}>
              <SectionHeading size="md" eyebrow="Diagnóstico Copilot Readiness" title="Três semanas." highlight="Quatro respostas para a diretoria."
                lead="Com dados do seu próprio ambiente: onde o Copilot já gera valor, onde há risco de exposição de informação e quanto dá para economizar em licenças e créditos." />
              <div className={styles.stats}>
                <StatBlock size="sm" value="3 sem." label="Do kick-off ao roadmap" />
                <StatBlock size="sm" value="5" label="Entregáveis" />
                <StatBlock size="sm" value="0" label="Alterações no ambiente" />
              </div>
            </div>
            <div className={styles.stackLg}>
              <IconList items={diagnostic.questions.map((q) => ({ icon: q.icon, title: q.title, text: q.description }))} />
              <div className={styles.priceBox}>
                <span className={styles.priceLabel}>Investimento a partir de</span>
                <span className={styles.price}>{diagnosticPrice.from}</span>
                <p className={styles.note}>{diagnosticPrice.note}. Metade do valor vira crédito se você contratar o projeto seguinte em até 60 dias.</p>
              </div>
              <div className={styles.actions}>
                <Button iconRight="arrow-right" href={primaryCta.href}>{primaryCta.label}</Button>
                <Button variant="secondary" href="/diagnostico">Ver escopo completo</Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </Section>

      <Section counter={["06", "Jornada"]}>
        <SectionHeading align="center" title="Um passo de cada vez." highlight="Com escopo e preço fechados."
          lead="Você decide a cada etapa. O diagnóstico mostra o caminho; o projeto executa; a sustentação mantém a IA rendendo." />
        <div className={`${styles.grid3} ${styles.mt}`}>
          {journey.map((s, i) => <StepCard key={s.number} number={s.number} title={s.title} description={s.description} active={i === 0} fill />)}
        </div>
        <div className={`${styles.cta} ${styles.mtSm}`}><GoldRule center /><TrackedLine wide items={["Medir", "Priorizar", "Implantar", "Evoluir"]} /></div>
      </Section>

      <Section counter={["07", "Por que a GLDN"]} glow={<Glow x="80%" y="40%" size={900} />}>
        <div className={styles.split}>
          <div className={styles.stackLg}>
            <SectionHeading title="Especialista." highlight="Acessível e ponta a ponta."
              lead="Entre a grande integradora cara e o curso genérico de prompt, a GLDN põe a mão no seu tenant do diagnóstico ao agente funcionando." />
            <IconList items={positioning} />
          </div>
          <div className={styles.stack}>
            {differentials.map((d) => <FeatureCard key={d.title} icon={d.icon} title={d.title} description={d.description} />)}
            <Button variant="link" iconRight="arrow-right" href="/sobre">Quem conduz o trabalho</Button>
          </div>
        </div>
      </Section>

      <Section counter={["08", "Perguntas"]}>
        <div className={styles.split}>
          <SectionHeading size="md" title="Dúvidas" highlight="frequentes." lead="Não encontrou a sua? Envie pelo formulário de contato." />
          <Accordion items={faq} defaultOpen={-1} />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
