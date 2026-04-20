import { notFound } from "next/navigation";
import Link from "next/link";
import { casinos, getCasinoBySlug } from "@/data/casinos";
import { getReviewBySlug } from "@/data/casino-reviews";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import {
  Shield,
  Clock,
  CreditCard,
  Check,
  X,
  Calendar,
  Gamepad2,
  Wallet,
  ExternalLink,
  User,
  CalendarClock,
  FileCheck,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) return {};
  const review = getReviewBySlug(slug);
  return {
    title: `Avis ${casino.name} ${new Date().getFullYear()} — Test complet, bonus et fiabilité`,
    description: review?.summary ?? casino.description,
    openGraph: {
      title: `Avis ${casino.name} ${new Date().getFullYear()}`,
      description: review?.summary ?? casino.description,
      type: "article",
      publishedTime: review?.publishedDate,
      modifiedTime: review?.updatedDate,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function CasinoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) notFound();
  const review = getReviewBySlug(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Casinos", href: "/casinos" }, { label: casino.name }]} />

      {/* Header */}
      <div className="glass rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-3xl font-bold shrink-0">
            {casino.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Avis {casino.name} — Test complet {new Date().getFullYear()}
                </h1>
                <div className="mt-2 flex items-center gap-3 flex-wrap">
                  <StarRating rating={casino.rating} size={18} />
                  <span className="text-sm text-foreground-muted">
                    {casino.rating.toFixed(1)} / 5
                  </span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {casino.licence.map((l) => (
                  <Badge key={l} variant="green">{l}</Badge>
                ))}
              </div>
            </div>

            {/* E-E-A-T author byline */}
            {review && (
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground-muted border-y border-border py-3">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-accent-primary" />
                  Par <span className="text-foreground font-medium">{review.author}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarClock className="w-4 h-4 text-accent-secondary" />
                  Mis à jour le {formatDate(review.updatedDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-accent-green" />
                  Testé pendant {review.testDurationDays} jours
                </span>
                <Link
                  href="/methodologie"
                  className="text-accent-primary hover:underline ml-auto"
                >
                  Notre méthodologie →
                </Link>
              </div>
            )}

            {review ? (
              <p className="text-foreground-muted mt-4 text-base leading-relaxed">{review.summary}</p>
            ) : (
              <p className="text-foreground-muted mt-4">{casino.description}</p>
            )}

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-accent-primary" />
                <span className="text-foreground-muted">Fondé en {casino.established}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-accent-secondary" />
                <span className="text-foreground-muted">Retrait : {casino.withdrawalTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CreditCard className="w-4 h-4 text-accent-gold" />
                <span className="text-foreground-muted">Min : {casino.minDeposit}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-accent-green" />
                <span className="text-foreground-muted">{casino.licence.length} licence{casino.licence.length > 1 ? "s" : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Table of contents */}
          {review && review.sections.length > 3 && (
            <nav aria-label="Sommaire" className="bg-background-card rounded-xl border border-border p-6">
              <h2 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-3">
                Sommaire
              </h2>
              <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <li>
                  <a href="#bonus" className="text-accent-primary hover:underline">
                    1. Bonus & promotions
                  </a>
                </li>
                {review.sections.map((section, i) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-accent-primary hover:underline">
                      {i + 2}. {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#notation" className="text-accent-primary hover:underline">
                    {review.sections.length + 2}. Notation détaillée
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-accent-primary hover:underline">
                    {review.sections.length + 3}. Questions fréquentes
                  </a>
                </li>
              </ol>
            </nav>
          )}

          {/* Bonus */}
          <section id="bonus" className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24">
            <h2 className="text-xl font-bold mb-4">Bonus & Promotions</h2>
            <div className="p-5 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20">
              <p className="text-sm text-foreground-muted">{casino.bonusTitle}</p>
              <p className="text-2xl font-bold gradient-text mt-1">{casino.bonusAmount}</p>
              <p className="text-sm text-foreground-muted mt-2">Conditions de mise : {casino.bonusWagering}</p>
              <a
                href={casino.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex items-center gap-2 mt-4 py-2.5 px-5 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Récupérer le bonus
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* Long-form review sections */}
          {review?.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24"
            >
              <h2 className="text-xl font-bold mb-4">{section.heading}</h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {/* Intermediate CTA after every 3 sections */}
              {(idx + 1) % 3 === 0 && idx < review.sections.length - 1 && (
                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Prêt à essayer {casino.name} ?</p>
                    <p className="text-xs text-foreground-muted mt-0.5">{casino.bonusAmount}</p>
                  </div>
                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
                  >
                    Jouer
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>
          ))}

          {/* Games */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-accent-primary" /> Jeux Disponibles
            </h2>
            <div className="flex flex-wrap gap-2">
              {casino.gameTypes.map((type) => (
                <Badge key={type} variant="primary">{type}</Badge>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-foreground-muted mt-6 mb-3 uppercase tracking-wider">Fournisseurs de jeux</h3>
            <div className="flex flex-wrap gap-2">
              {casino.gameProviders.map((provider) => (
                <Badge key={provider} variant="outline">{provider}</Badge>
              ))}
            </div>
          </section>

          {/* Payments */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-accent-green" /> Méthodes de Paiement
            </h2>
            <div className="flex flex-wrap gap-2">
              {casino.paymentMethods.map((method) => (
                <Badge key={method} variant="secondary">{method}</Badge>
              ))}
            </div>
          </section>

          {/* Rating breakdown */}
          {review && (
            <section
              id="notation"
              className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24"
            >
              <h2 className="text-xl font-bold mb-4">Notation détaillée</h2>
              <p className="text-sm text-foreground-muted mb-6">
                Note globale issue de nos tests sur {review.testDurationDays} jours, pondérée selon
                les critères ci-dessous.
              </p>
              <div className="space-y-4">
                {review.ratingBreakdown.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{cat.label}</span>
                      <span className="text-foreground-muted font-medium">
                        {cat.score.toFixed(1)} / 5
                      </span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                        style={{ width: `${(cat.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-sm text-foreground-muted">Note globale</span>
                <div className="flex items-center gap-3">
                  <StarRating rating={casino.rating} size={16} />
                  <span className="text-lg font-bold gradient-text">
                    {casino.rating.toFixed(1)} / 5
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* Pros & Cons */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Notre verdict — points forts et faibles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Points forts</h3>
                <ul className="space-y-2">
                  {casino.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Points faibles</h3>
                <ul className="space-y-2">
                  {casino.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <X className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {review && review.faqs.length > 0 && (
            <section
              id="faq"
              className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24"
            >
              <h2 className="text-xl font-bold mb-6">Questions fréquentes sur {casino.name}</h2>
              <div className="space-y-6">
                {review.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Responsible gambling disclaimer */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
              <div className="text-sm text-foreground-muted leading-relaxed">
                <p className="font-semibold text-foreground mb-2">Jouez responsable · 18+</p>
                <p>
                  Les jeux d&apos;argent comportent des risques : endettement, isolement, dépendance.
                  Cet article contient des liens d&apos;affiliation : casinoenligne.guru perçoit une
                  commission sur les inscriptions réalisées via ces liens, sans surcoût pour vous.
                  Cela ne change pas la note attribuée ni la teneur de l&apos;analyse. Consultez notre{" "}
                  <Link href="/risques-jeu" className="text-accent-primary hover:underline">
                    page jeu responsable
                  </Link>{" "}
                  si vous ou un proche rencontrez une difficulté.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* CTA Card */}
            <div className="glass rounded-xl p-6 text-center">
              <p className="text-sm text-foreground-muted mb-2">Bonus exclusif</p>
              <p className="text-xl font-bold gradient-text mb-4">{casino.bonusAmount}</p>
              <a
                href={casino.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="block w-full py-3 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white font-medium hover:opacity-90 transition-opacity text-center"
              >
                Réclamer le bonus {casino.name}
              </a>
              <p className="text-xs text-foreground-muted mt-3">18+ | Jeu responsable | T&C appliqués</p>
            </div>

            {/* Info card */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Informations</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-foreground-muted">Fondé</dt>
                  <dd className="text-foreground font-medium">{casino.established}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-foreground-muted">Dépôt min.</dt>
                  <dd className="text-foreground font-medium">{casino.minDeposit}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-foreground-muted">Retraits</dt>
                  <dd className="text-foreground font-medium">{casino.withdrawalTime}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-foreground-muted">Wagering</dt>
                  <dd className="text-foreground font-medium">{casino.bonusWagering}</dd>
                </div>
              </dl>
            </div>

            {/* Countries */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Pays acceptés</h3>
              <div className="flex flex-wrap gap-2">
                {casino.countries.map((country) => (
                  <Badge key={country} variant="outline">{country}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review + FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: casino.name,
              description: casino.shortDescription,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: casino.rating,
              bestRating: 5,
              worstRating: 1,
            },
            author: {
              "@type": review ? "Organization" : "Organization",
              name: review?.author ?? "casinoenligne.guru",
            },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
            datePublished: review?.publishedDate,
            dateModified: review?.updatedDate,
            reviewBody: review?.summary,
            positiveNotes: {
              "@type": "ItemList",
              itemListElement: casino.pros.map((pro, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: pro,
              })),
            },
            negativeNotes: {
              "@type": "ItemList",
              itemListElement: casino.cons.map((con, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: con,
              })),
            },
          }),
        }}
      />
      {review && review.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: review.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}
