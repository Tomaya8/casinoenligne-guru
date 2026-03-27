import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Scale, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Casino en Ligne Suisse — Régulation CFMJ et Légalité",
  description: "Guide de la régulation des casinos en ligne en Suisse : CFMJ, concessions, et jeux autorisés depuis la LJAr de 2019.",
};

export default function RegulationSuissePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Régulation", href: "/regulation" }, { label: "Suisse" }]} />

      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🇨🇭</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Casino en Ligne en <span className="gradient-text">Suisse</span></h1>
          <p className="text-foreground-muted mt-1">Régulé par la CFMJ</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-accent-primary" /> Cadre Légal
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              La Loi fédérale sur les jeux d&apos;argent (LJAr), entrée en vigueur le 1er janvier 2019, autorise les casinos
              en ligne en Suisse. Seuls les casinos terrestres détenant une concession fédérale peuvent proposer des jeux en ligne.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Les sites étrangers non autorisés sont bloqués par les fournisseurs d&apos;accès Internet suisses via une liste
              noire maintenue par la CFMJ.
            </p>
          </section>

          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-green" /> Protection des Joueurs
            </h2>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Vérification d&apos;identité obligatoire</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Programme de détection précoce de l&apos;addiction</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Limites de mise et de dépôt paramétrables</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Auto-exclusion et exclusion par les casinos</li>
            </ul>
          </section>
        </div>

        <div className="glass rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-semibold mb-4">En résumé</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-foreground-muted">Régulateur</dt><dd className="text-foreground font-medium">CFMJ</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Statut</dt><dd className="text-accent-green font-medium">Régulé</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Depuis</dt><dd className="text-foreground font-medium">2019</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Âge minimum</dt><dd className="text-foreground font-medium">18 ans</dd></div>
          </dl>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Casino en Ligne Suisse — Régulation CFMJ et Légalité",
            description: "Guide de la régulation des casinos en ligne en Suisse : CFMJ, concessions, et jeux autorisés depuis la LJAr de 2019.",
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
    </div>
  );
}
