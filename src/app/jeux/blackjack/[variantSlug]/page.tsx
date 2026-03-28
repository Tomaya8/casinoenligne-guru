import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allBlackjackVariants, getBlackjackVariantBySlug } from "@/data/blackjack-variants";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { Check, X, ChevronDown, ArrowRight, BookOpen, BarChart3, Layers, Shield, Lightbulb, Shuffle } from "lucide-react";

export async function generateStaticParams() {
  return allBlackjackVariants.map((v) => ({ variantSlug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variantSlug: string }>;
}): Promise<Metadata> {
  const { variantSlug } = await params;
  const variant = getBlackjackVariantBySlug(variantSlug);
  if (!variant) return {};
  return {
    title: variant.title,
    description: variant.excerpt,
    openGraph: {
      title: variant.title,
      description: variant.excerpt,
      type: "article",
    },
  };
}

export default async function BlackjackVariantPage({
  params,
}: {
  params: Promise<{ variantSlug: string }>;
}) {
  const { variantSlug } = await params;
  const variant = getBlackjackVariantBySlug(variantSlug);
  if (!variant) notFound();

  const related = allBlackjackVariants.filter((v) => v.slug !== variantSlug).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Jeux", href: "/jeux" },
          { label: "Blackjack", href: "/jeux/blackjack" },
          { label: variant.name },
        ]}
      />

      {/* Hero */}
      {variant.headerImage.startsWith("http") && (
        <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-80">
          <Image
            src={variant.headerImage}
            alt={variant.headerImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <Badge variant="primary" className="mb-3">Blackjack</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{variant.name}</h1>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <article>
            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <BarChart3 className="w-5 h-5 text-accent-primary mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">RTP</p>
                <p className="font-bold text-foreground">{variant.rtp}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Layers className="w-5 h-5 text-accent-secondary mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Jeux de cartes</p>
                <p className="font-bold text-foreground">{variant.decks}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Shield className="w-5 h-5 text-accent-green mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Avantage maison</p>
                <p className="font-bold text-foreground">{variant.houseEdge}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Shuffle className="w-5 h-5 text-accent-gold mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Limites</p>
                <p className="font-bold text-foreground text-xs">{variant.tableLimit}</p>
              </div>
            </div>

            <p className="text-lg text-foreground-muted mb-8">{variant.excerpt}</p>

            {/* Sections with rules, differences, pros/cons integrated */}
            <div className="space-y-10">
              {variant.sections.map((section, i) => (
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

                  {/* Rules after 1st section */}
                  {i === 0 && (
                    <section id="rules" className="mt-10 scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-accent-primary" /> Règles Spécifiques
                      </h2>
                      <div className="bg-background-card rounded-xl border border-border p-6">
                        <ul className="space-y-3">
                          {variant.rules.map((rule, ri) => (
                            <li key={ri} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{ri + 1}</span>
                              <span className="text-foreground-muted">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}

                  {/* Pros/Cons + Differences after 2nd section */}
                  {i === 1 && (
                    <>
                      <section className="mt-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Avantages et Inconvénients</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="bg-accent-green/5 rounded-xl border border-accent-green/20 p-6">
                            <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Points forts</h3>
                            <ul className="space-y-2">
                              {variant.pros.map((pro, pi) => (
                                <li key={pi} className="flex items-start gap-2 text-sm text-foreground-muted">
                                  <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" /> {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-accent-red/5 rounded-xl border border-accent-red/20 p-6">
                            <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Points faibles</h3>
                            <ul className="space-y-2">
                              {variant.cons.map((con, ci) => (
                                <li key={ci} className="flex items-start gap-2 text-sm text-foreground-muted">
                                  <X className="w-4 h-4 text-accent-red shrink-0 mt-0.5" /> {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="differences" className="mt-10 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-accent-gold" /> Différences avec le Blackjack Classique
                        </h2>
                        <div className="space-y-3">
                          {variant.keyDifferences.map((diff, di) => (
                            <div key={di} className="flex items-start gap-3 p-3 rounded-lg bg-background-secondary border border-border">
                              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0" />
                              <span className="text-foreground-muted">{diff}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Best for */}
            <section className="mt-10">
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">Notre Verdict</h2>
                <p className="text-foreground-muted leading-relaxed">{variant.bestFor}</p>
              </div>
            </section>

            {/* FAQs */}
            {variant.faqs.length > 0 && (
              <section id="faq" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Questions Fréquentes</h2>
                <div className="space-y-4">
                  {variant.faqs.map((faq, i) => (
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
            {/* Specs */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Fiche Technique</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Variante", value: variant.name },
                  { label: "RTP", value: variant.rtp },
                  { label: "Jeux de cartes", value: variant.decks },
                  { label: "Avantage maison", value: variant.houseEdge },
                  { label: "Limites de table", value: variant.tableLimit },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <dt className="text-foreground-muted">{item.label}</dt>
                    <dd className="text-foreground font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* TOC */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Sommaire</h3>
              <ul className="space-y-2 text-sm">
                {variant.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-foreground-muted hover:text-accent-primary transition-colors">{section.heading}</a>
                  </li>
                ))}
                <li><a href="#rules" className="text-foreground-muted hover:text-accent-primary transition-colors">Règles Spécifiques</a></li>
                <li><a href="#differences" className="text-foreground-muted hover:text-accent-primary transition-colors">Différences</a></li>
                <li><a href="#faq" className="text-foreground-muted hover:text-accent-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Other variants */}
            {related.length > 0 && (
              <div className="bg-background-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4">Autres Variantes</h3>
                <div className="space-y-3">
                  {related.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/jeux/blackjack/${v.slug}`}
                      className="flex items-center justify-between group"
                    >
                      <div>
                        <span className="text-sm text-foreground group-hover:text-accent-primary transition-colors">{v.name}</span>
                        <span className="block text-xs text-foreground-muted">RTP {v.rtp}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-foreground-muted" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/jeux/blackjack"
              className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors text-sm font-medium text-foreground"
            >
              Guide complet du Blackjack <ArrowRight className="w-4 h-4 ml-auto" />
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
            headline: variant.title,
            description: variant.excerpt,
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
      {variant.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: variant.faqs.map((faq) => ({
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
