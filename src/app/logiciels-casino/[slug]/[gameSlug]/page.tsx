import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allGameReviews, getGameReview, getGameReviewsByProvider } from "@/data/game-reviews";
import { getProviderBySlug } from "@/data/providers";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import type { Metadata } from "next";
import { Check, X, ChevronDown, ArrowRight, Gamepad2, BarChart3, Zap, DollarSign, Calendar, Layers, Grid3X3 } from "lucide-react";

export async function generateStaticParams() {
  return allGameReviews.map((g) => ({ slug: g.providerSlug, gameSlug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; gameSlug: string }>;
}): Promise<Metadata> {
  const { slug, gameSlug } = await params;
  const review = getGameReview(slug, gameSlug);
  if (!review) return {};
  return {
    title: review.title,
    description: review.excerpt,
    openGraph: {
      title: review.title,
      description: review.excerpt,
      type: "article",
      images: review.headerImage.startsWith("http") ? [{ url: review.headerImage }] : undefined,
    },
  };
}

export default async function GameReviewPage({
  params,
}: {
  params: Promise<{ slug: string; gameSlug: string }>;
}) {
  const { slug, gameSlug } = await params;
  const review = getGameReview(slug, gameSlug);
  if (!review) notFound();

  const provider = getProviderBySlug(slug);
  const relatedGames = getGameReviewsByProvider(slug).filter((g) => g.slug !== gameSlug).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Logiciels Casino", href: "/logiciels-casino" },
          { label: provider?.name || slug, href: `/logiciels-casino/${slug}` },
          { label: review.name },
        ]}
      />

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        {review.headerImage.startsWith("http") ? (
          <div className="relative h-64 sm:h-80">
            <Image
              src={review.headerImage}
              alt={review.headerImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        ) : (
          <div className="h-64 sm:h-80 bg-gradient-to-br from-accent-primary to-accent-secondary" />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            {provider && <Badge variant="primary">{provider.name}</Badge>}
            <Badge variant="gold">{review.theme}</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{review.name}</h1>
          <div className="flex items-center gap-3">
            <StarRating rating={review.rating} size={18} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <article>
            {/* Game specs bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <BarChart3 className="w-5 h-5 text-accent-primary mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">RTP</p>
                <p className="font-bold text-foreground">{review.rtp}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Zap className="w-5 h-5 text-accent-gold mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Volatilité</p>
                <p className="font-bold text-foreground">{review.volatility}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <DollarSign className="w-5 h-5 text-accent-green mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Gain max</p>
                <p className="font-bold text-foreground">{review.maxWin}</p>
              </div>
              <div className="bg-background-card rounded-xl border border-border p-4 text-center">
                <Layers className="w-5 h-5 text-accent-secondary mx-auto mb-1" />
                <p className="text-xs text-foreground-muted">Rouleaux</p>
                <p className="font-bold text-foreground">{review.reels}</p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {review.sections.map((section, i) => (
                <section key={i} id={`section-${i}`} className="scroll-mt-24">
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
              ))}
            </div>

            {/* Pros / Cons */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Avantages et Inconvénients</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-accent-green/5 rounded-xl border border-accent-green/20 p-6">
                  <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Points forts</h3>
                  <ul className="space-y-2">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent-red/5 rounded-xl border border-accent-red/20 p-6">
                  <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Points faibles</h3>
                  <ul className="space-y-2">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <X className="w-4 h-4 text-accent-red shrink-0 mt-0.5" /> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Verdict */}
            <section className="mt-10">
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-accent-primary" /> Notre Verdict
                </h2>
                <div className="flex items-center gap-3 mb-3">
                  <StarRating rating={review.rating} size={20} />
                </div>
                <p className="text-foreground-muted leading-relaxed">{review.verdict}</p>
              </div>
            </section>

            {/* FAQs */}
            {review.faqs.length > 0 && (
              <section id="faq" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Questions Fréquentes</h2>
                <div className="space-y-4">
                  {review.faqs.map((faq, i) => (
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
              <Badge variant="primary">{review.theme}</Badge>
              <Badge variant="outline">{review.volatility}</Badge>
              <Badge variant="outline">RTP {review.rtp}</Badge>
              {review.features.slice(0, 3).map((f) => (
                <Badge key={f} variant="outline">{f}</Badge>
              ))}
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* Game info card */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Fiche Technique</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Fournisseur", value: provider?.name || slug },
                  { label: "RTP", value: review.rtp },
                  { label: "Volatilité", value: review.volatility },
                  { label: "Mise min.", value: review.minBet },
                  { label: "Mise max.", value: review.maxBet },
                  { label: "Gain max.", value: review.maxWin },
                  { label: "Rouleaux", value: review.reels },
                  { label: "Lignes", value: review.paylines },
                  { label: "Sortie", value: review.releaseDate },
                  { label: "Thème", value: review.theme },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <dt className="text-foreground-muted">{item.label}</dt>
                    <dd className="text-foreground font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Fonctionnalités</h3>
              <div className="flex flex-wrap gap-2">
                {review.features.map((f) => (
                  <Badge key={f} variant="primary">{f}</Badge>
                ))}
              </div>
            </div>

            {/* TOC */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Sommaire</h3>
              <ul className="space-y-2 text-sm">
                {review.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-foreground-muted hover:text-accent-primary transition-colors">
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li><a href="#faq" className="text-foreground-muted hover:text-accent-primary transition-colors">Questions Fréquentes</a></li>
              </ul>
            </div>

            {/* Related games */}
            {relatedGames.length > 0 && (
              <div className="bg-background-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4">Autres jeux {provider?.name}</h3>
                <div className="space-y-3">
                  {relatedGames.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/logiciels-casino/${g.providerSlug}/${g.slug}`}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-sm text-foreground group-hover:text-accent-primary transition-colors">{g.name}</span>
                      <ArrowRight className="w-3 h-3 text-foreground-muted" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "SoftwareApplication",
              name: review.name,
              applicationCategory: "Game",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            },
            reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
      {review.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: review.faqs.map((faq) => ({
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
