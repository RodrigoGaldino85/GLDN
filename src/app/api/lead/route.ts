import { NextResponse } from "next/server";
import { validateLead, type Lead } from "@/lib/lead";
import { isSmtpConfigured, sendLeadEmail } from "@/lib/lead-mail";

/**
 * Receives contact-form leads and delivers them by:
 *  - e-mail via SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, optional LEAD_TO) — see lib/lead-mail.ts;
 *  - and/or JSON to LEAD_WEBHOOK_URL (Make, Zapier, Power Automate, n8n, CRM), with optional
 *    LEAD_WEBHOOK_SECRET sent as `x-webhook-secret`.
 * With nothing configured: logs the lead in development; answers 503 in production so the
 * form offers the e-mail fallback instead of silently losing the lead.
 */
export async function POST(request: Request) {
  let body: Partial<Lead> & { website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateLead(body);
  if (Object.keys(errors).length > 0) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const lead: Lead & { recebidoEm: string } = {
    nome: body.nome!.trim(), email: body.email!.trim(), telefone: body.telefone?.trim(), empresa: body.empresa!.trim(),
    cargo: body.cargo?.trim(), usuarios: body.usuarios!, copilot: body.copilot, erp: body.erp, interesse: body.interesse!,
    mensagem: body.mensagem?.trim(), consentimento: true, origem: body.origem, recebidoEm: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const channels: Array<[string, () => Promise<void>]> = [];
  if (isSmtpConfigured()) channels.push(["email", () => sendLeadEmail(lead)]);
  if (webhookUrl) channels.push(["webhook", () => postWebhook(webhookUrl, lead)]);

  if (channels.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead] nenhum destino configurado (SMTP_* ou LEAD_WEBHOOK_URL) — lead recebido (dev):", lead);
      return NextResponse.json({ ok: true, delivered: false });
    }
    console.error("[lead] nenhum destino configurado: defina SMTP_HOST/SMTP_USER/SMTP_PASS ou LEAD_WEBHOOK_URL");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  // Delivered if at least one channel succeeds; failures are logged for the hosting panel.
  const results = await Promise.allSettled(channels.map(([, send]) => send()));
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[lead] falha no envio por ${channels[i][0]}:`, r.reason);
  });
  if (!results.some((r) => r.status === "fulfilled")) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}

async function postWebhook(url: string, lead: Lead & { recebidoEm: string }) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", ...(process.env.LEAD_WEBHOOK_SECRET ? { "x-webhook-secret": process.env.LEAD_WEBHOOK_SECRET } : {}) },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error(`webhook respondeu ${res.status}`);
}
