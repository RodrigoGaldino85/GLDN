import type { Metadata } from "next";
import { SectionHeading } from "@ds/components";
import { Section } from "@ds/patterns";
import { company } from "@/content/site";
import styles from "./privacidade.module.css";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a GLDN Tecnologia trata os dados enviados pelo site, conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <Section top="hero">
      <article className={styles.doc}>
        <SectionHeading as="h1" size="md" eyebrow="LGPD" title="Política de" highlight="privacidade." />
        <p>Esta política explica como a {company.legalName} (“GLDN”) trata os dados pessoais enviados por este site, em conformidade com a Lei nº 13.709/2018 (LGPD).</p>
        <h2>Quais dados coletamos</h2>
        <p>Apenas o que você informa no formulário de contato: nome, e-mail, telefone, empresa, cargo, porte da empresa, uso de Copilot e de ERP, assunto e mensagem. O site não usa cookies de publicidade nem ferramentas de rastreamento de terceiros.</p>
        <h2>Para que usamos</h2>
        <p>Para responder ao seu contato, preparar a conversa de descoberta e elaborar uma proposta comercial. A base legal é o seu consentimento, dado ao enviar o formulário, e o procedimento preliminar a um possível contrato.</p>
        <h2>Com quem compartilhamos</h2>
        <p>Os dados são armazenados nas ferramentas de e-mail e de gestão de contatos usadas pela GLDN, que atuam como operadoras. Não vendemos nem cedemos dados a terceiros para marketing.</p>
        <h2>Por quanto tempo guardamos</h2>
        <p>Enquanto houver relacionamento comercial ou pelo prazo necessário para cumprir obrigações legais. Contatos sem continuidade são excluídos em até 24 meses.</p>
        <h2>Seus direitos</h2>
        <p>Você pode pedir acesso, correção, portabilidade ou exclusão dos seus dados e revogar o consentimento a qualquer momento, pelo e-mail <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        <p className={styles.updated}>Última atualização: setembro de 2026.</p>
      </article>
    </Section>
  );
}
