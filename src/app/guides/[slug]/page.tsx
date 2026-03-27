import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";
import { getAllGuideArticles, getGuideArticleBySlug, getGuideArticlesByTopic } from "@/data/guides";
import { guideTopics } from "@/data/guides/types";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import GuideImage from "@/components/guides/GuideImage";
import ArticleDetail from "@/components/editorial/ArticleDetail";
import type { Metadata } from "next";
import { Clock, User, Calendar, ChevronDown, Check, X, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const legacySlugs = articles.filter((a) => a.category === "guides").map((a) => ({ slug: a.slug }));
  const guideSlugs = getAllGuideArticles().map((a) => ({ slug: a.slug }));
  return [...legacySlugs, ...guideSlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const guide = getGuideArticleBySlug(slug);
  if (guide) {
    return {
      title: guide.title,
      description: guide.excerpt,
      openGraph: {
        title: guide.title,
        description: guide.excerpt,
        type: "article",
        images: guide.headerImage ? [{ url: guide.headerImage, alt: guide.headerImageAlt }] : undefined,
      },
    };
  }

  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Check rich guide articles first
  const guide = getGuideArticleBySlug(slug);
  if (guide) {
    const topic = guideTopics.find((t) => t.slug === guide.topic);
    const relatedArticles = getGuideArticlesByTopic(guide.topic).filter((a) => a.slug !== guide.slug).slice(0, 3);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: "Guides", href: "/guides" },
            ...(topic ? [{ label: topic.name, href: `/guides#${topic.slug}` }] : []),
            { label: guide.title },
          ]}
        />

        {/* Hero image */}
        <GuideImage
          src={guide.headerImage}
          alt={guide.headerImageAlt}
          topic={guide.topic}
          className="w-full h-64 sm:h-80 rounded-2xl mb-8"
          hero
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <article>
              <header className="mb-8">
                {topic && <Badge variant="primary" className="mb-4">{topic.name}</Badge>}
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{guide.title}</h1>
                <p className="text-lg text-foreground-muted mb-6">{guide.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted border-t border-border pt-4">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {guide.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(guide.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {guide.readTime} de lecture</span>
                </div>
              </header>

              {/* Sections */}
              <div className="space-y-10">
                {guide.sections.map((section, i) => (
                  <section key={i} id={`section-${i}`} className="scroll-mt-24">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                    {section.image && (
                      <GuideImage
                        src={section.image}
                        alt={section.imageAlt || section.heading}
                        topic={guide.topic}
                        className="w-full h-48 rounded-xl mb-4"
                      />
                    )}
                    <div className="space-y-4">
                      {section.content.split("\n\n").map((paragraph, j) => (
                        <p key={j} className="text-foreground-muted leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Comparison table */}
              {guide.comparison && (
                <section id="comparison" className="mt-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{guide.comparison.title}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-background-secondary">
                          {guide.comparison.headers.map((header, i) => (
                            <th key={i} className="text-left py-3 px-4 text-foreground font-semibold border-b border-border">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {guide.comparison.rows.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-0 hover:bg-background-card-hover transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className={`py-3 px-4 ${j === 0 ? "font-medium text-foreground" : "text-foreground-muted"}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Pros / Cons */}
              {(guide.pros || guide.cons) && (
                <section className="mt-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Avantages et Inconvénients</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {guide.pros && (
                      <div className="bg-accent-green/5 rounded-xl border border-accent-green/20 p-6">
                        <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Points forts</h3>
                        <ul className="space-y-2">
                          {guide.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                              <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {guide.cons && (
                      <div className="bg-accent-red/5 rounded-xl border border-accent-red/20 p-6">
                        <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Points faibles</h3>
                        <ul className="space-y-2">
                          {guide.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                              <X className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {guide.faqs.length > 0 && (
                <section id="faq" className="mt-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Questions Fréquentes</h2>
                  <div className="space-y-4">
                    {guide.faqs.map((faq, i) => (
                      <details key={i} className="group bg-background-card rounded-xl border border-border overflow-hidden">
                        <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-foreground font-medium hover:bg-background-card-hover transition-colors">
                          {faq.question}
                          <ChevronDown className="w-4 h-4 text-foreground-muted shrink-0 ml-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-6 pb-4">
                          <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Table of contents */}
              <div className="bg-background-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4">Sommaire</h3>
                <ul className="space-y-2 text-sm">
                  {guide.sections.map((section, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className="text-foreground-muted hover:text-accent-primary transition-colors">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {guide.comparison && (
                    <li>
                      <a href="#comparison" className="text-foreground-muted hover:text-accent-primary transition-colors">{guide.comparison.title}</a>
                    </li>
                  )}
                  {guide.faqs.length > 0 && (
                    <li>
                      <a href="#faq" className="text-foreground-muted hover:text-accent-primary transition-colors">Questions Fréquentes</a>
                    </li>
                  )}
                </ul>
              </div>

              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-background-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold mb-4">Articles similaires</h3>
                  <div className="space-y-3">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/guides/${related.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        <GuideImage
                          src={related.headerImage}
                          alt={related.headerImageAlt}
                          topic={related.topic}
                          className="w-16 h-12 rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground group-hover:text-accent-primary transition-colors line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-xs text-foreground-muted mt-0.5">{related.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Topic CTA */}
              {topic && (
                <Link
                  href={`/guides#${topic.slug}`}
                  className="block p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors"
                >
                  <p className="text-sm font-medium text-foreground mb-1">Explorer le thème</p>
                  <p className="text-xs text-foreground-muted flex items-center gap-1">
                    {topic.name} <ArrowRight className="w-3 h-3" />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Schema */}
        {guide.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: guide.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              }),
            }}
          />
        )}

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: guide.title,
              description: guide.excerpt,
              image: guide.headerImage,
              author: { "@type": "Person", name: guide.author },
              datePublished: guide.date,
              publisher: { "@type": "Organization", name: "casinoenligne.guru" },
            }),
          }}
        />
      </div>
    );
  }

  // Fallback to legacy article rendering
  const article = getArticleBySlug(slug);
  if (!article || article.category !== "guides") notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: article.title }]} />
      <ArticleDetail article={article} categoryLabel="Guide" categoryVariant="primary" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: article.image?.startsWith("http") ? article.image : undefined,
            author: { "@type": "Person", name: article.author },
            datePublished: article.date,
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
            ...(article.faqs?.length ? {
              mainEntity: article.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            } : {}),
          }),
        }}
      />
    </div>
  );
}
