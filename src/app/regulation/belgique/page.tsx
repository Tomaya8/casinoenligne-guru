import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Shield, Scale, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Casino en Ligne Belgique — Régulation et Légalité",
  description: "Guide complet de la régulation des casinos en ligne en Belgique : Commission des Jeux de Hasard, licences et protection des joueurs.",
};

export default function RegulationBelgiquePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Régulation", href: "/regulation" }, { label: "Belgique" }]} />

      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🇧🇪</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Casino en Ligne en <span className="gradient-text">Belgique</span></h1>
          <p className="text-foreground-muted mt-1">Régulé par la Commission des Jeux de Hasard</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-accent-primary" /> Cadre Légal
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              La Belgique possède l&apos;un des cadres réglementaires les plus stricts d&apos;Europe pour les jeux en ligne.
              La loi du 7 mai 1999, modifiée en 2011, encadre les jeux de hasard et autorise les casinos en ligne
              sous licence de la Commission des Jeux de Hasard.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Contrairement à la France, la Belgique autorise les jeux de casino en ligne (slots, roulette, blackjack)
              via des opérateurs licenciés. Les licences sont liées aux casinos terrestres (A+) ou aux salles de jeux (B+).
            </p>
          </section>

          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-green" /> Protection des Joueurs
            </h2>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Système EPIS d&apos;exclusion obligatoire</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Limites de perte hebdomadaires (500€/semaine par défaut)</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Vérification d&apos;identité avec eID</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Interdiction de la publicité agressive</li>
            </ul>
          </section>
        </div>

        <div className="glass rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-semibold mb-4">En résumé</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-foreground-muted">Régulateur</dt><dd className="text-foreground font-medium">CJH</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Statut</dt><dd className="text-accent-green font-medium">Régulé</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Casino en ligne</dt><dd className="text-accent-green font-medium">Autorisé</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Âge minimum</dt><dd className="text-foreground font-medium">21 ans</dd></div>
          </dl>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Casino en Ligne Belgique — Régulation et Légalité",
            description: "Guide complet de la régulation des casinos en ligne en Belgique : Commission des Jeux de Hasard, licences et protection des joueurs.",
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
    </div>
  );
}
