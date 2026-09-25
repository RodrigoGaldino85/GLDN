/** Lead payload shared by the contact form and the /api/lead route. */
export interface Lead {
  nome: string;
  email: string;
  telefone?: string;
  empresa: string;
  cargo?: string;
  usuarios: string;
  copilot?: string;
  erp?: string;
  interesse: string;
  mensagem?: string;
  consentimento: boolean;
  origem?: string;
}

export type LeadErrors = Partial<Record<keyof Lead, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FREE_MAIL = /@(gmail|hotmail|outlook|live|yahoo|icloud|uol|bol|terra)\./i;

/** Validates a lead; returns field errors (empty object when valid). */
export function validateLead(l: Partial<Lead>): LeadErrors {
  const e: LeadErrors = {};
  if (!l.nome?.trim()) e.nome = "Informe seu nome";
  if (!l.email?.trim()) e.email = "Informe seu e-mail corporativo";
  else if (!EMAIL.test(l.email.trim())) e.email = "Informe um e-mail válido";
  if (!l.empresa?.trim()) e.empresa = "Informe o nome da empresa";
  if (!l.usuarios) e.usuarios = "Selecione o porte";
  if (!l.interesse) e.interesse = "Selecione o assunto";
  if (!l.consentimento) e.consentimento = "Precisamos do seu consentimento para responder";
  for (const [k, v] of Object.entries(l)) {
    if (typeof v === "string" && v.length > (k === "mensagem" ? 4000 : 200)) e[k as keyof Lead] = "Texto muito longo";
  }
  return e;
}

/** Soft hint only — personal e-mails are accepted, but corporate ones speed up the proposal. */
export function isPersonalEmail(email: string) {
  return FREE_MAIL.test(email);
}
