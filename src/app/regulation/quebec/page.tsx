import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Scale, Shield, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Casino en Ligne Québec — Régulation Loto-Québec",
  description: "Guide de la régulation des casinos en ligne au Québec : monopole de Loto-Québec, Espacejeux, et statut des sites internationaux.",
};

export default function RegulationQuebecPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Régulation", href: "/regulation" }, { label: "Québec" }]} />

      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🇨🇦</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Casino en Ligne au <span className="gradient-text">Québec</span></h1>
          <p className="text-foreground-muted mt-1">Monopole de Loto-Québec via Espacejeux</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-accent-primary" /> Cadre Légal
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Au Québec, Loto-Québec détient le monopole des jeux d&apos;argent en ligne via sa plateforme Espacejeux.
              Lancée en 2010, c&apos;est la seule plateforme de jeux en ligne légalement autorisée dans la province.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Les sites internationaux ne sont pas techniquement bloqués, mais ils opèrent dans une zone grise juridique.
              Le projet de loi 74 (2016) avait tenté de bloquer les sites non autorisés, mais a été abandonné.
            </p>
          </section>

          <section className="bg-background-card rounded-xl border border-accent-gold/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-accent-gold" />
              <h2 className="text-xl font-bold">Sites Internationaux</h2>
            </div>
            <p className="text-foreground-muted leading-relaxed">
              De nombreux Québécois jouent sur des sites internationaux qui ne sont pas régulés localement.
              Bien que ce ne soit pas explicitement illégal pour le joueur, ces sites n&apos;offrent pas les mêmes
              garanties de protection que Espacejeux.
            </p>
          </section>

          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-green" /> Protection des Joueurs
            </h2>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Auto-exclusion via Espacejeux</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Programme Mise sur toi (aide aux joueurs)</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Limites de dépôt configurables</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent-green shrink-0 mt-1" /> Tel-Aide et Jeu: aide et référence</li>
            </ul>
          </section>
        </div>

        <div className="glass rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-semibold mb-4">En résumé</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-foreground-muted">Régulateur</dt><dd className="text-foreground font-medium">Loto-Québec</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Statut</dt><dd className="text-accent-gold font-medium">Monopole</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Plateforme</dt><dd className="text-foreground font-medium">Espacejeux</dd></div>
            <div className="flex justify-between"><dt className="text-foreground-muted">Âge minimum</dt><dd className="text-foreground font-medium">18 ans</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}
