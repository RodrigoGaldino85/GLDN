"use client";

import { useState, type FormEvent } from "react";
import { Button, Checkbox, GlassCard, Icon, Input, SectionHeading, Select, Textarea, type IconName } from "../../components";
import { Glow, Section } from "../../patterns";
import styles from "./templates.module.css";
import type { Go } from "./types";

const INFO: Array<[IconName, string]> = [["mail", "contato@gldn.tech"], ["map-pin", "São Paulo · Atendimento em todo o Brasil"], ["clock", "Resposta em até 1 dia útil"]];

/** Contato: validated form → loading → success state. */
export function ContactTemplate({ go }: { go: Go }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) { setErr("Informe um e-mail corporativo válido"); return; }
    setSending(true);
    // Placeholder for the real submission; keeps the loading state visible.
    window.setTimeout(() => { setSending(false); setSent(true); }, 900);
  };
  return (
    <Section glow={<><Glow x="85%" y="30%" size={1000} /><Glow x="0%" y="90%" size={700} tone="gold" /></>}>
      <div className={styles.contact}>
        <div className={styles.contactCopy}>
          <SectionHeading as="h1" size="lg" eyebrow="Contato" title="Vamos conversar" highlight="sobre o seu momento."
            lead="Conte onde sua empresa está com IA. Em até um dia útil, um especialista retorna com os próximos passos." />
          <div className={styles.info}>
            {INFO.map(([i, t]) => <div key={t} className={styles.infoItem}><Icon name={i} size={20} color="var(--accent)" />{t}</div>)}
          </div>
        </div>
        <GlassCard glow padding="panel-sm" radius="card-l">
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successBadge}><Icon name="check" size={26} color="var(--accent)" /></div>
              <SectionHeading size="sm" title="Mensagem recebida." highlight="Falamos em breve." lead={`Enviamos uma confirmação para ${email}.`} />
              <Button variant="secondary" onClick={() => { setSent(false); go("home"); }}>Voltar ao início</Button>
            </div>
          ) : (
            <form onSubmit={submit} className={styles.form} noValidate>
              <Input label="Nome" placeholder="Seu nome" required name="nome" autoComplete="name" />
              <Input label="E-mail corporativo" type="email" placeholder="voce@empresa.com.br" value={email}
                onChange={(e) => { setEmail(e.target.value); setErr(""); }} error={err} required name="email" autoComplete="email" />
              <Input label="Empresa" placeholder="Nome da empresa" name="empresa" autoComplete="organization" />
              <Select label="Colaboradores" placeholder="Selecione" options={["1–50", "51–500", "501–5.000", "5.000+"]} name="colaboradores" />
              <Select label="Interesse" placeholder="Selecione" className={styles.full} name="interesse"
                options={["Copilot para Microsoft 365", "Copilot Studio & agentes", "Governança de IA", "Capacitação"]} />
              <Textarea label="Mensagem" rows={4} placeholder="Qual processo você quer acelerar com IA?" className={styles.full} name="mensagem" />
              <Checkbox defaultChecked label="Aceito receber comunicações da GLDN Tech." className={styles.full} name="consentimento" />
              <div className={styles.full}><Button type="submit" size="lg" fullWidth iconRight="arrow-right" loading={sending}>Enviar mensagem</Button></div>
            </form>
          )}
        </GlassCard>
      </div>
    </Section>
  );
}
