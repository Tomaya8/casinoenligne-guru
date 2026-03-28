import { notFound } from "next/navigation";
import { casinos, getCasinoBySlug } from "@/data/casinos";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { Shield, Clock, CreditCard, Check, X, Calendar, Gamepad2, Wallet } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) return {};
  return {
    title: `${casino.name} — Avis et Bonus ${new Date().getFullYear()}`,
    description: casino.description,
  };
}

export default async function CasinoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) notFound();

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
                <h1 className="text-3xl font-bold text-foreground">{casino.name}</h1>
                <div className="mt-2">
                  <StarRating rating={casino.rating} size={18} />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {casino.licence.map((l) => (
                  <Badge key={l} variant="green">{l}</Badge>
                ))}
              </div>
            </div>
            <p className="text-foreground-muted mt-4">{casino.description}</p>

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
          {/* Bonus */}
          <section id="bonus" className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24">
            <h2 className="text-xl font-bold mb-4">Bonus & Promotions</h2>
            <div className="p-4 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20">
              <p className="text-sm text-foreground-muted">{casino.bonusTitle}</p>
              <p className="text-2xl font-bold gradient-text mt-1">{casino.bonusAmount}</p>
              <p className="text-sm text-foreground-muted mt-2">Conditions de mise : {casino.bonusWagering}</p>
            </div>
          </section>

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

          {/* Pros & Cons */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Notre Avis</h2>
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
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* CTA Card */}
            <div className="glass rounded-xl p-6 text-center">
              <p className="text-sm text-foreground-muted mb-2">Bonus exclusif</p>
              <p className="text-xl font-bold gradient-text mb-4">{casino.bonusAmount}</p>
              <a
                href="#bonus"
                className="block w-full py-3 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white font-medium hover:opacity-90 transition-opacity text-center"
              >
                Voir le bonus {casino.name}
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
      {/* JSON-LD Schema */}
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
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
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
    </div>
  );
}
