import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard, Button, GlassCard, Prose, SectionHeading, Tag } from "@ds/components";
import { Glow, Section } from "@ds/patterns";
import { company, primaryCta } from "@/content/site";
import { formatDate, getArticle, getArticles, readingLabel } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import siteStyles from "../../_components/site.module.css";
import styles from "../conteudo.module.css";

// Only articles that exist at build time; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conteudo/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/conteudo/${article.slug}`,
    article: { publishedTime: article.date, modifiedTime: article.updated ?? article.date, tags: article.tags },
  });
}

export default async function ArticlePage({ params }: PageProps<"/conteudo/[slug]">) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = getArticles().filter((a) => a.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    inLanguage: "pt-BR",
    keywords: article.tags.join(", "),
    mainEntityOfPage: `${company.url}/conteudo/${article.slug}`,
    image: `${company.url}/opengraph-image.png`,
    author: { "@type": "Person", name: company.founder },
    publisher: { "@type": "Organization", name: company.name, url: company.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section top="hero" glow={<Glow x="85%" y="15%" size={1000} />}>
        <header className={styles.header}>
          <Button variant="link" iconLeft="arrow-left" href="/conteudo" className={styles.back}>Todos os artigos</Button>
          <div className={styles.meta}>
            {article.draft && <span className={styles.draftNote}>Rascunho — não aparece no site publicado</span>}
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden>·</span>
            <span>{readingLabel(article.readingMinutes)}</span>
            <span aria-hidden>·</span>
            <span>{company.founder}</span>
          </div>
          <SectionHeading as="h1" size="lg" title={article.title} lead={article.description} />
          {article.tags.length > 0 && <div className={siteStyles.chips}>{article.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
        </header>
        <Prose as="article" html={article.html} className={styles.body} />

        <GlassCard glow padding="panel-sm" radius="xl" className={styles.aside}>
          <h2 className={styles.asideTitle}>Quer esse diagnóstico no seu ambiente?</h2>
          <p className={styles.asideText}>Em 3 semanas, com dados do seu próprio tenant: riscos de exposição, uso de licenças e créditos e um roadmap de 90 dias.</p>
          <div className={siteStyles.actions}>
            <Button href={primaryCta.href} iconRight="arrow-right">{primaryCta.label}</Button>
            <Button variant="secondary" href="/diagnostico">Ver o escopo</Button>
          </div>
        </GlassCard>
      </Section>

      {related.length > 0 && (
        <Section top="flush" counter={["+", "Continue lendo"]}>
          <div className={styles.grid}>
            {related.map((a) => (
              <ArticleCard key={a.slug} href={`/conteudo/${a.slug}`} title={a.title} excerpt={a.description}
                date={formatDate(a.date)} readingTime={readingLabel(a.readingMinutes)} tags={a.tags} draft={a.draft} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
