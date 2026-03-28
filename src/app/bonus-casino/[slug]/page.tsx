import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allBonusArticles, getBonusArticleBySlug } from "@/data/bonus-articles";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { Check, X, ChevronDown, ArrowRight, Lightbulb, Gift, Star } from "lucide-react";

export async function generateStaticParams() {
  return allBonusArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBonusArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function BonusDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBonusArticleBySlug(slug);
  if (!article) notFound();

  const related = allBonusArticles.filter((a) => a.slug !== slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Bonus Casino", href: "/bonus-casino" },
          { label: article.title },
        ]}
      />

      {/* Hero */}
      {article.headerImage.startsWith("http") && (
        <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-80">
          <Image
            src={article.headerImage}
            alt={article.headerImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="text-4xl mb-3 block">{article.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{article.title}</h1>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <article>
            <p className="text-lg text-foreground-muted mb-8">{article.excerpt}</p>

            {/* Sections with pros/cons and examples integrated */}
            <div className="space-y-10">
              {article.sections.map((section, i) => (
                <div key={i}>
                  <section id={`section-${i}`} className="scroll-mt-24">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                    {section.image && section.image.startsWith("http") && (
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={section.image}
                          alt={section.imageAlt || section.heading}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    )}
                    <div className="space-y-4">
                      {section.content.split("\n\n").map((p, j) => (
                        <p key={j} className="text-foreground-muted leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </section>

                  {/* Pros/Cons after 2nd section */}
                  {i === 1 && (
                    <section className="mt-10">
                      <h2 className="text-2xl font-bold text-foreground mb-4">Avantages et Inconvénients</h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-accent-green/5 rounded-xl border border-accent-green/20 p-6">
                          <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Avantages</h3>
                          <ul className="space-y-2">
                            {article.pros.map((pro, pi) => (
                              <li key={pi} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" /> {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-accent-red/5 rounded-xl border border-accent-red/20 p-6">
                          <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Inconvénients</h3>
                          <ul className="space-y-2">
                            {article.cons.map((con, ci) => (
                              <li key={ci} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <X className="w-4 h-4 text-accent-red shrink-0 mt-0.5" /> {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Examples after 3rd section */}
                  {i === 2 && article.examples.length > 0 && (
                    <section id="examples" className="mt-10 scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Gift className="w-6 h-6 text-accent-gold" /> Exemples Concrets
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                          <thead>
                            <tr className="bg-background-secondary">
                              <th className="text-left py-3 px-4 text-foreground font-semibold border-b border-border whitespace-nowrap">Casino</th>
                              <th className="text-left py-3 px-4 text-foreground font-semibold border-b border-border whitespace-nowrap">Offre</th>
                              <th className="text-left py-3 px-4 text-foreground font-semibold border-b border-border whitespace-nowrap">Wagering</th>
                              <th className="text-left py-3 px-4 text-foreground font-semibold border-b border-border whitespace-nowrap">Verdict</th>
                            </tr>
                          </thead>
                          <tbody>
                            {article.examples.map((ex, ei) => (
                              <tr key={ei} className="border-b border-border last:border-0 hover:bg-background-card-hover transition-colors">
                                <td className="py-3 px-4 font-medium text-foreground">{ex.casino}</td>
                                <td className="py-3 px-4 text-accent-gold font-medium">{ex.offer}</td>
                                <td className="py-3 px-4 text-foreground-muted">{ex.wagering}</td>
                                <td className="py-3 px-4 text-foreground-muted">{ex.verdict}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  )}
                </div>
              ))}
            </div>

            {/* Tips */}
            {article.tips.length > 0 && (
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent-gold" /> Nos Conseils
                </h2>
                <div className="bg-background-card rounded-xl border border-border p-6">
                  <ul className="space-y-3">
                    {article.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent-gold/20 text-accent-gold text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {i + 1}
                        </span>
                        <span className="text-foreground-muted">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* FAQs */}
            {article.faqs.length > 0 && (
              <section id="faq" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Questions Fréquentes</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
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
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* TOC */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Sommaire</h3>
              <ul className="space-y-2 text-sm">
                {article.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-foreground-muted hover:text-accent-primary transition-colors">{section.heading}</a>
                  </li>
                ))}
                <li><a href="#examples" className="text-foreground-muted hover:text-accent-primary transition-colors">Exemples Concrets</a></li>
                <li><a href="#faq" className="text-foreground-muted hover:text-accent-primary transition-colors">Questions Fréquentes</a></li>
              </ul>
            </div>

            {/* Related bonus types */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Autres types de bonus</h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/bonus-casino/${r.slug}`}
                    className="flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2 text-sm text-foreground group-hover:text-accent-primary transition-colors">
                      <span>{r.icon}</span> {r.title.split("—")[0].split(":")[0].trim()}
                    </span>
                    <ArrowRight className="w-3 h-3 text-foreground-muted" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to all bonuses */}
            <Link
              href="/bonus-casino"
              className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-accent-gold/10 to-accent-primary/10 border border-accent-gold/20 hover:border-accent-gold/40 transition-colors text-sm font-medium text-foreground"
            >
              <Star className="w-4 h-4 text-accent-gold" />
              Tous les bonus casino <ArrowRight className="w-4 h-4 ml-auto" />
            </Link>
          </div>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
      {article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}
