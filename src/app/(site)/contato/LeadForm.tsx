"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { Button, Checkbox, Icon, Input, SectionHeading, Select, Textarea } from "@ds/components";
import { company, leadForm } from "@/content/site";
import { isPersonalEmail, validateLead, type Lead, type LeadErrors } from "@/lib/lead";
import styles from "./contato.module.css";

type Status = "idle" | "sending" | "sent" | "fallback";

const interestLabel = (v: string) => leadForm.interests.find((i) => i.value === v)?.label ?? v;

/** ?interesse=… from the URL, read on the client only — keeps the form in the static HTML (no layout shift). */
const noop = () => () => {};
function useInterestParam() {
  return useSyncExternalStore(noop, () => {
    const v = new URLSearchParams(window.location.search).get("interesse") ?? "";
    return leadForm.interests.some((i) => i.value === v) ? v : "";
  }, () => "");
}

export function LeadForm() {
  const initialInterest = useInterestParam();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [draft, setLead] = useState<Partial<Lead>>({ consentimento: false });
  // The visitor's own choice wins; otherwise the subject preselected by the link that brought them here.
  const lead: Partial<Lead> = { ...draft, interesse: draft.interesse ?? initialInterest };
  const set = (k: keyof Lead) => (v: string | boolean) => { setLead((l) => ({ ...l, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateLead(lead);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    const website = (new FormData(e.currentTarget).get("website") as string) || "";
    try {
      const res = await fetch("/api/lead", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...lead, website, origem: initialInterest ? `site:${initialInterest}` : "site" }),
      });
      if (res.status === 422) { setErrors((await res.json()).errors ?? {}); setStatus("idle"); return; }
      setStatus(res.ok ? "sent" : "fallback");
    } catch {
      setStatus("fallback");
    }
  };

  if (status === "sent") {
    return (
      <div className={styles.result} role="status">
        <div className={styles.badge}><Icon name="check" size={26} color="var(--accent)" /></div>
        <SectionHeading size="sm" title="Mensagem recebida." highlight="Falamos em breve."
          lead={`Obrigado, ${lead.nome?.split(" ")[0]}. Vamos responder em ${lead.email} com os próximos passos para a ${lead.empresa}.`} />
        <Button variant="secondary" href="/diagnostico">Enquanto isso, veja o diagnóstico</Button>
      </div>
    );
  }

  if (status === "fallback") {
    const body = [
      `Nome: ${lead.nome}`, `E-mail: ${lead.email}`, `Telefone: ${lead.telefone ?? ""}`, `Empresa: ${lead.empresa}`, `Cargo: ${lead.cargo ?? ""}`,
      `Porte: ${lead.usuarios}`, `Copilot: ${lead.copilot ?? ""}`, `ERP: ${lead.erp ?? ""}`, `Assunto: ${interestLabel(lead.interesse ?? "")}`,
      "", lead.mensagem ?? "",
    ].join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Contato pelo site — ${lead.empresa}`)}&body=${encodeURIComponent(body)}`;
    return (
      <div className={styles.result} role="alert">
        <div className={styles.badge}><Icon name="mail" size={24} color="var(--accent)" /></div>
        <SectionHeading size="sm" title="Não conseguimos enviar agora." highlight="Mande por e-mail."
          lead="Seus dados já estão no rascunho — é só enviar pelo seu cliente de e-mail." />
        <div className={styles.actions}>
          <Button iconLeft="send" href={href}>Abrir e-mail pronto</Button>
          <Button variant="ghost" onClick={() => setStatus("idle")}>Tentar de novo</Button>
        </div>
      </div>
    );
  }

  const emailHint = lead.email && !errors.email && isPersonalEmail(lead.email) ? "Se puder, use o e-mail da empresa — agiliza a proposta." : undefined;

  return (
    <form onSubmit={submit} className={styles.form} noValidate aria-describedby="form-note">
      <Input label="Nome" name="nome" autoComplete="name" required value={lead.nome ?? ""} onChange={(e) => set("nome")(e.target.value)} error={errors.nome} />
      <Input label="E-mail corporativo" name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com.br"
        value={lead.email ?? ""} onChange={(e) => set("email")(e.target.value)} error={errors.email} hint={emailHint} />
      <Input label="Empresa" name="empresa" autoComplete="organization" required value={lead.empresa ?? ""} onChange={(e) => set("empresa")(e.target.value)} error={errors.empresa} />
      <Input label="Cargo" name="cargo" autoComplete="organization-title" value={lead.cargo ?? ""} onChange={(e) => set("cargo")(e.target.value)} />
      <Input label="Telefone / WhatsApp" name="telefone" type="tel" autoComplete="tel" placeholder="(11) 90000-0000" value={lead.telefone ?? ""} onChange={(e) => set("telefone")(e.target.value)} />
      <Select label="Usuários no Microsoft 365" name="usuarios" required placeholder="Selecione" options={leadForm.sizes}
        value={lead.usuarios ?? ""} onChange={(e) => set("usuarios")(e.target.value)} error={errors.usuarios} />
      <Select label="Copilot hoje" name="copilot" placeholder="Selecione" options={leadForm.copilotStatus}
        value={lead.copilot ?? ""} onChange={(e) => set("copilot")(e.target.value)} />
      <Select label="ERP / Business Apps" name="erp" placeholder="Selecione" options={leadForm.erp}
        value={lead.erp ?? ""} onChange={(e) => set("erp")(e.target.value)} />
      <Select label="Assunto" name="interesse" required placeholder="Selecione" options={leadForm.interests} className={styles.full}
        value={lead.interesse ?? ""} onChange={(e) => set("interesse")(e.target.value)} error={errors.interesse} />
      <Textarea label="Qual é o desafio?" name="mensagem" rows={4} className={styles.full}
        placeholder="Ex.: temos 120 licenças do Copilot, uso baixo e receio de expor dados no SharePoint."
        value={lead.mensagem ?? ""} onChange={(e) => set("mensagem")(e.target.value)} />
      <div className={styles.honeypot} aria-hidden>
        <label>Site <input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <Checkbox className={styles.full} name="consentimento" required checked={!!lead.consentimento} onChange={set("consentimento")}
        error={errors.consentimento}
        label={<>Concordo que a GLDN use estes dados para responder e preparar uma proposta, conforme a <a href="/privacidade">política de privacidade</a>.</>} />
      <div className={styles.full}>
        <Button type="submit" size="lg" fullWidth iconRight="arrow-right" loading={status === "sending"}>
          {status === "sending" ? "Enviando" : "Enviar e pedir proposta"}
        </Button>
        <p id="form-note" className={styles.note}>Sem spam. Usamos seus dados só para responder a este contato.</p>
      </div>
    </form>
  );
}
