import { NextResponse } from "next/server";
import { validateLead, type Lead } from "@/lib/lead";

/**
 * Receives contact-form leads and forwards them as JSON to LEAD_WEBHOOK_URL
 * (e.g. Make, Zapier, Power Automate, n8n or a CRM inbound webhook).
 * Optional LEAD_WEBHOOK_SECRET is sent as the `x-webhook-secret` header.
 * Without a webhook: logs the lead in development; answers 503 in production so the
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

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead] LEAD_WEBHOOK_URL não configurada — lead recebido (dev):", lead);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", ...(process.env.LEAD_WEBHOOK_SECRET ? { "x-webhook-secret": process.env.LEAD_WEBHOOK_SECRET } : {}) },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch (err) {
    console.error("[lead] falha ao entregar lead:", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
