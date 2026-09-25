import type { Metadata } from "next";
import { ArticleCard, Button, SectionHeading } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { company, primaryCta, seo } from "@/content/site";
import { formatDate, getArticles, readingLabel } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { CtaSection } from "../_components/CtaSection";
import siteStyles from "../_components/site.module.css";
import styles from "./conteudo.module.css";

export function generateMetadata(): Metadata {
  // An empty listing is a thin page: keep it out of the index until the first article is published.
  return pageMetadata({ ...seo.conteudo, path: "/conteudo", noindex: getArticles().length === 0 });
}

export default function ContentPage() {
  const articles = getArticles();
  return (
    <>
      <Section top="hero" glow={<Glow x="85%" y="20%" size={1000} />}>
        <SectionHeading as="h1" size="xl" eyebrow="Conteúdo" title="Copilot na prática." highlight="Sem hype, com números."
          lead="Guias sobre custo, governança e adoção do Microsoft Copilot — do SharePoint ao Dynamics 365." />
      </Section>
      <Section top="flush">
        {articles.length > 0 ? (
          <div className={styles.grid}>
            {articles.map((a) => (
              <ArticleCard key={a.slug} href={`/conteudo/${a.slug}`} title={a.title} excerpt={a.description}
                date={formatDate(a.date)} readingTime={readingLabel(a.readingMinutes)} tags={a.tags} draft={a.draft} />
            ))}
          </div>
        ) : (
          <div className={`${styles.empty} ${siteStyles.stackLg}`}>
            <p className={siteStyles.body}>Os primeiros artigos estão a caminho. Enquanto isso, acompanhe a GLDN no LinkedIn ou fale diretamente conosco.</p>
            <div className={siteStyles.actions}>
              <Button variant="secondary" iconRight="arrow-up-right" href={company.linkedin}>LinkedIn da GLDN</Button>
              <Button href={primaryCta.href} iconRight="arrow-right">{primaryCta.label}</Button>
            </div>
          </div>
        )}
      </Section>
      <CtaSection />
    </>
  );
}
