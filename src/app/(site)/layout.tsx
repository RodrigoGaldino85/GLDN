import { Footer } from "@ds/patterns";
import { company } from "@/content/site";
import { getArticles } from "@/lib/articles";
import { SiteHeader } from "./SiteHeader";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  legalName: company.legalName,
  slogan: company.tagline,
  description: company.description,
  url: company.url,
  email: company.email,
  areaServed: "BR",
  sameAs: [company.linkedin],
  founder: { "@type": "Person", name: company.founder },
  knowsAbout: ["Microsoft 365 Copilot", "Copilot Studio", "Microsoft Dynamics 365", "Microsoft Purview", "Power Platform", "Governança de IA"],
};

export default function SiteLayout({ children }: LayoutProps<"/">) {
  const hasArticles = getArticles().length > 0;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader showContent={hasArticles} />
      <main>{children}</main>
      <Footer
        blurb={`${company.tagline}. Fazemos o Copilot gerar retorno mensurável, com segurança e custo sob controle — Dynamics incluído.`}
        columns={[
          { title: "Soluções", links: [
            { label: "Diagnóstico Copilot Readiness", href: "/diagnostico" },
            { label: "Governança e FinOps", href: "/solucoes" },
            { label: "Copilot no Dynamics 365", href: "/dynamics" },
            { label: "Capacitação", href: "/capacitacao" },
          ] },
          { title: "Empresa", links: [
            { label: "Sobre a GLDN", href: "/sobre" },
            ...(hasArticles ? [{ label: "Artigos", href: "/conteudo" }] : []),
            { label: "Contato", href: "/contato" },
            { label: "LinkedIn", href: company.linkedin },
          ] },
          { title: "Contato", links: [
            { label: company.email, href: `mailto:${company.email}` },
            { label: "Solicitar proposta", href: "/contato" },
          ] },
        ]}
        tagline={["Governança", "FinOps", "Capacitação", "Agentes"]}
        bottomLinks={[{ label: "Política de privacidade", href: "/privacidade" }]}
        year={String(new Date().getFullYear())}
      />
    </>
  );
}
