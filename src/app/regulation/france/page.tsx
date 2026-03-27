import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Shield, Scale, AlertTriangle, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Casino en Ligne France — Régulation ANJ et Légalité",
  description: "Tout savoir sur la régulation des casinos en ligne en France : rôle de l'ANJ, licences, jeux autorisés, et protection des joueurs.",
};

export default function RegulationFrancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Régulation", href: "/regulation" }, { label: "France" }]} />

      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">🇫🇷</span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Casino en Ligne en <span className="gradient-text">France</span></h1>
            <p className="text-foreground-muted mt-1">Régulé par l&apos;ANJ (Autorité Nationale des Jeux)</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-accent-primary" /> Cadre Légal
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              En France, les jeux d&apos;argent en ligne sont encadrés par la loi du 12 mai 2010. L&apos;Autorité Nationale des Jeux (ANJ),
              qui a remplacé l&apos;ARJEL en 2020, est chargée de réguler l&apos;ensemble du secteur des jeux d&apos;argent et de hasard.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Seuls les opérateurs disposant d&apos;un agrément ANJ sont autorisés à proposer des jeux d&apos;argent en ligne aux résidents français.
              La liste des opérateurs agréés est disponible sur le site officiel de l&apos;ANJ.
            </p>
          </section>

          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Jeux Autorisés / Interdits</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wider">Autorisés en ligne</h3>
                <ul className="space-y-2">
                  {["Poker (cash game et tournois)", "Paris sportifs", "Paris hippiques", "Fantasy sports"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Check className="w-4 h-4 text-accent-green" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent-red mb-3 uppercase tracking-wider">Non régulés en ligne</h3>
                <ul className="space-y-2">
                  {["Machines à sous", "Roulette", "Blackjack", "Jeux de table (casino)", "Live casino"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <X className="w-4 h-4 text-accent-red" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-green" /> Protection des Joueurs
            </h2>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Interdiction aux mineurs (vérification d&apos;identité obligatoire)</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Auto-exclusion volontaire disponible</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Limites de dépôt configurables</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Fichier des interdits de jeux</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Obligation d&apos;information sur les risques</li>
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-4">En résumé</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-foreground-muted">Régulateur</dt><dd className="text-foreground font-medium">ANJ</dd></div>
                <div className="flex justify-between"><dt className="text-foreground-muted">Statut</dt><dd className="text-accent-green font-medium">Régulé</dd></div>
                <div className="flex justify-between"><dt className="text-foreground-muted">Depuis</dt><dd className="text-foreground font-medium">2010</dd></div>
                <div className="flex justify-between"><dt className="text-foreground-muted">Âge minimum</dt><dd className="text-foreground font-medium">18 ans</dd></div>
                <div className="flex justify-between"><dt className="text-foreground-muted">Imposition</dt><dd className="text-foreground font-medium">Gains non imposés*</dd></div>
              </dl>
              <p className="text-xs text-foreground-muted mt-4">*Les gains réguliers de jeux de hasard ne sont pas imposés en France. Les joueurs professionnels peuvent être soumis à l&apos;impôt.</p>
            </div>

            <div className="bg-background-card rounded-xl border border-accent-gold/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-semibold text-accent-gold">Important</span>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Jouer sur un site non agréé par l&apos;ANJ n&apos;est pas illégal pour le joueur, mais vous ne bénéficiez
                d&apos;aucune protection en cas de litige. Nous recommandons de privilégier les sites régulés.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Casino en Ligne France — Régulation ANJ et Légalité",
            description: "Tout savoir sur la régulation des casinos en ligne en France : rôle de l'ANJ, licences, jeux autorisés, et protection des joueurs.",
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
    </div>
  );
}
