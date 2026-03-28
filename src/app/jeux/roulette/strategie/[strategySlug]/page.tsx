import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allRouletteStrategies, getRouletteStrategyBySlug } from "@/data/roulette-strategies";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { Check, X, ChevronDown, ArrowRight, BookOpen, BarChart3, Shield, Zap } from "lucide-react";

export async function generateStaticParams() {
  return allRouletteStrategies.map((s) => ({ strategySlug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ strategySlug: string }> }): Promise<Metadata> {
  const { strategySlug } = await params;
  const strategy = getRouletteStrategyBySlug(strategySlug);
  if (!strategy) return {};
  return {
    title: strategy.title,
    description: strategy.excerpt,
    openGraph: { title: strategy.title, description: strategy.excerpt, type: "article" },
  };
}

export default async function RouletteStrategyPage({ params }: { params: Promise<{ strategySlug: string }> }) {
  const { strategySlug } = await params;
  const strategy = getRouletteStrategyBySlug(strategySlug);
  if (!strategy) notFound();

  const related = allRouletteStrategies.filter((s) => s.slug !== strategySlug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Jeux", href: "/jeux" }, { label: "Roulette", href: "/jeux/roulette" }, { label: strategy.name }]} />

      {/* Hero */}
      {strategy.headerImage.startsWith("http") && (
        <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-80">
          <Image src={strategy.headerImage} alt={strategy.headerImageAlt} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">Stratégie Roulette</Badge>
              <Badge variant="gold">{strategy.difficulty}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{strategy.name}</h1>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article>
            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <BarChart3 className="w-5 h-5 text-accent-primary mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Difficulté</p>
                <p className="font-bold text-foreground text-sm">{strategy.difficulty}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Shield className="w-5 h-5 text-accent-red mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Niveau de risque</p>
                <p className="font-bold text-foreground text-sm">{strategy.riskLevel}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Zap className="w-5 h-5 text-accent-gold mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Efficacité</p>
                <p className="font-bold text-foreground text-xs">{strategy.effectiveness}</p>
              </div>
            </div>

            <p className="text-lg text-foreground-muted mb-8">{strategy.excerpt}</p>

            {/* Sections with steps, pros/cons, comparison integrated */}
            <div className="space-y-10">
              {strategy.sections.map((section, i) => (
                <div key={i}>
                  <section id={`section-${i}`} className="scroll-mt-24">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                    {section.image && section.image.startsWith("http") && (
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <Image src={section.image} alt={section.imageAlt || section.heading} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
                      </div>
                    )}
                    <div className="space-y-4">
                      {section.content.split("\n\n").map((p, j) => (
                        <p key={j} className="text-foreground-muted leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </section>

                  {/* Steps after 1st section */}
                  {i === 0 && (
                    <section id="steps" className="mt-10 scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-accent-primary" /> Comment Appliquer
                      </h2>
                      <div className="bg-background-card rounded-xl border border-border p-6">
                        <ul className="space-y-3">
                          {strategy.steps.map((step, si) => (
                            <li key={si} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{si + 1}</span>
                              <span className="text-foreground-muted">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}

                  {/* Pros/Cons after 2nd section */}
                  {i === 1 && (
                    <section className="mt-10">
                      <h2 className="text-2xl font-bold text-foreground mb-4">Avantages et Inconvénients</h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-accent-green/5 rounded-xl border border-accent-green/20 p-6">
                          <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Points forts</h3>
                          <ul className="space-y-2">
                            {strategy.pros.map((pro, pi) => (
                              <li key={pi} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" /> {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-accent-red/5 rounded-xl border border-accent-red/20 p-6">
                          <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Points faibles</h3>
                          <ul className="space-y-2">
                            {strategy.cons.map((con, ci) => (
                              <li key={ci} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <X className="w-4 h-4 text-accent-red shrink-0 mt-0.5" /> {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Comparison after 3rd section */}
                  {i === 2 && strategy.comparison && (
                    <section id="comparison" className="mt-10 scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground mb-4">{strategy.comparison.title}</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                          <thead>
                            <tr className="bg-background-secondary">
                              {strategy.comparison.headers.map((h, hi) => (
                                <th key={hi} className="text-left py-3 px-4 text-foreground font-semibold border-b border-border whitespace-nowrap">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {strategy.comparison.rows.map((row, ri) => (
                              <tr key={ri} className="border-b border-border last:border-0 hover:bg-background-card-hover transition-colors">
                                {row.map((cell, ci) => (
                                  <td key={ci} className={`py-3 px-4 ${ci === 0 ? "font-medium text-foreground" : "text-foreground-muted"}`}>{cell}</td>
                                ))}
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

            {/* Verdict */}
            <section className="mt-10">
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">Notre Verdict</h2>
                <p className="text-foreground-muted leading-relaxed">{strategy.verdict}</p>
              </div>
            </section>

            {/* FAQs */}
            {strategy.faqs.length > 0 && (
              <section id="faq" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Questions Fréquentes</h2>
                <div className="space-y-4">
                  {strategy.faqs.map((faq, i) => (
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
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Fiche Stratégie</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-foreground-muted">Difficulté</dt><dd className="text-foreground font-medium">{strategy.difficulty}</dd></div>
                <div className="flex justify-between"><dt className="text-foreground-muted">Risque</dt><dd className="text-foreground font-medium">{strategy.riskLevel}</dd></div>
                <div className="flex justify-between"><dt className="text-foreground-muted">Efficacité</dt><dd className="text-foreground font-medium text-xs">{strategy.effectiveness}</dd></div>
              </dl>
            </div>

            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Sommaire</h3>
              <ul className="space-y-2 text-sm">
                {strategy.sections.map((section, i) => (
                  <li key={i}><a href={`#section-${i}`} className="text-foreground-muted hover:text-accent-primary transition-colors">{section.heading}</a></li>
                ))}
                <li><a href="#steps" className="text-foreground-muted hover:text-accent-primary transition-colors">Comment Appliquer</a></li>
                <li><a href="#comparison" className="text-foreground-muted hover:text-accent-primary transition-colors">Comparatif</a></li>
                <li><a href="#faq" className="text-foreground-muted hover:text-accent-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Autres Stratégies</h3>
              <div className="space-y-3">
                {related.map((s) => (
                  <Link key={s.slug} href={`/jeux/roulette/strategie/${s.slug}`} className="flex items-center justify-between group">
                    <div>
                      <span className="text-sm text-foreground group-hover:text-accent-primary transition-colors">{s.name}</span>
                      <span className="block text-xs text-foreground-muted">{s.difficulty} · Risque {s.riskLevel}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-foreground-muted" />
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/jeux/roulette" className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 border border-accent-secondary/20 hover:border-accent-secondary/40 transition-colors text-sm font-medium text-foreground">
              Guide complet de la Roulette <ArrowRight className="w-4 h-4 ml-auto" />
            </Link>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: strategy.title, description: strategy.excerpt,
        author: { "@type": "Organization", name: "casinoenligne.guru" },
        publisher: { "@type": "Organization", name: "casinoenligne.guru" },
      }) }} />
      {strategy.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: strategy.faqs.map((faq) => ({
            "@type": "Question", name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }) }} />
      )}
    </div>
  );
}
