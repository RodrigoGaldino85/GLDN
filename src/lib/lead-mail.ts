import nodemailer from "nodemailer";
import { leadForm } from "@/content/site";
import type { Lead } from "@/lib/lead";

/**
 * Sends each lead as an e-mail through SMTP (e.g. the Hostinger mailbox contato@gldntech.com.br).
 * Env: SMTP_HOST, SMTP_PORT (465 = SSL, 587 = STARTTLS), SMTP_USER, SMTP_PASS,
 * optional LEAD_TO (defaults to SMTP_USER) and LEAD_FROM (defaults to SMTP_USER).
 */
export function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

const escape = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const interestLabel = (v: string) => leadForm.interests.find((i) => i.value === v)?.label ?? v;

export async function sendLeadEmail(lead: Lead & { recebidoEm: string }) {
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const rows: Array<[string, string | undefined]> = [
    ["Nome", lead.nome],
    ["E-mail", lead.email],
    ["Telefone", lead.telefone],
    ["Empresa", lead.empresa],
    ["Cargo", lead.cargo],
    ["Usuários no M365", lead.usuarios],
    ["Copilot hoje", lead.copilot],
    ["ERP / Business Apps", lead.erp],
    ["Assunto", interestLabel(lead.interesse)],
    ["Origem", lead.origem],
    ["Recebido em", new Date(lead.recebidoEm).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })],
  ];
  const filled = rows.filter(([, v]) => v);

  const text = [
    ...filled.map(([k, v]) => `${k}: ${v}`),
    "",
    "Mensagem:",
    lead.mensagem || "(sem mensagem)",
  ].join("\n");

  // Plain HTML (no inline colours/sizes): e-mail clients can't read the site's CSS tokens.
  const html = `<table cellpadding="6">
${filled.map(([k, v]) => `<tr><td><b>${escape(k)}</b></td><td>${escape(v!)}</td></tr>`).join("\n")}
</table>
<p><b>Mensagem</b><br>${escape(lead.mensagem || "(sem mensagem)").replace(/\n/g, "<br>")}</p>`;

  const from = process.env.LEAD_FROM || process.env.SMTP_USER!;
  await transporter.sendMail({
    from: `"Site GLDN Tech" <${from}>`,
    to: process.env.LEAD_TO || process.env.SMTP_USER,
    replyTo: `"${lead.nome.replace(/"/g, "")}" <${lead.email}>`,
    subject: `Novo lead — ${lead.empresa} · ${interestLabel(lead.interesse)}`,
    text,
    html,
  });
}
