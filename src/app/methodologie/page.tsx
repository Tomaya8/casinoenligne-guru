import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { ClipboardCheck, Search, BarChart3, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Méthodologie — Comment Nous Évaluons les Casinos",
  description: "Découvrez notre méthodologie rigoureuse d'évaluation des casinos en ligne : critères, processus de test et système de notation transparent.",
};

export default function MethodologiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Méthodologie" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Notre <span className="gradient-text">Méthodologie</span>
      </h1>
      <p className="text-foreground-muted mb-12">
        Transparence totale sur notre processus d&apos;évaluation des casinos en ligne.
      </p>

      <div className="space-y-8">
        {/* Process */}
        <section className="bg-background-card rounded-xl border border-border p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-accent-primary" /> Processus d&apos;Évaluation
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "Recherche initiale", desc: "Vérification de la licence, de l'historique de l'opérateur et de sa réputation dans l'industrie." },
              { step: 2, title: "Test en conditions réelles", desc: "Inscription, dépôt réel, test des jeux, du support client et du processus de retrait." },
              { step: 3, title: "Analyse des bonus", desc: "Évaluation des conditions de mise, de la générosité réelle du bonus et des restrictions." },
              { step: 4, title: "Évaluation technique", desc: "Test de la vitesse du site, de la compatibilité mobile et de la sécurité (SSL, certificats)." },
              { step: 5, title: "Notation finale", desc: "Attribution d'une note globale basée sur nos critères pondérés et rédaction de l'avis." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground-muted mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Criteria */}
        <section className="bg-background-card rounded-xl border border-border p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-accent-gold" /> Critères de Notation
          </h2>
          <div className="space-y-4">
            {[
              { criteria: "Sécurité & Licence", weight: "25%", desc: "Validité de la licence, protocoles de sécurité, historique" },
              { criteria: "Bonus & Promotions", weight: "20%", desc: "Générosité, conditions de mise, variété des offres" },
              { criteria: "Catalogue de Jeux", weight: "20%", desc: "Nombre de jeux, fournisseurs, variété, qualité" },
              { criteria: "Paiements", weight: "15%", desc: "Méthodes disponibles, délais de retrait, limites" },
              { criteria: "Support Client", weight: "10%", desc: "Disponibilité, réactivité, langues, canaux" },
              { criteria: "Expérience Mobile", weight: "10%", desc: "Application, responsive design, performance" },
            ].map((item) => (
              <div key={item.criteria} className="flex items-center gap-4 p-4 rounded-lg bg-background-secondary border border-border">
                <span className="text-lg font-bold text-accent-primary w-12 shrink-0">{item.weight}</span>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.criteria}</p>
                  <p className="text-xs text-foreground-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Update frequency */}
        <section className="bg-background-card rounded-xl border border-border p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-accent-green" /> Mises à Jour
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Nos évaluations sont revues et mises à jour trimestriellement. Si un changement majeur
            survient (perte de licence, changement de conditions, problème de paiement), nous mettons
            à jour immédiatement notre évaluation et en informons nos lecteurs.
          </p>
        </section>

        {/* Transparency */}
        <section className="glass rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-accent-secondary" /> Transparence
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            casinoenligne.guru peut recevoir une commission lorsque vous vous inscrivez via nos liens.
            Cela n&apos;affecte en aucun cas notre évaluation : nos notes sont basées uniquement sur nos critères objectifs.
            Les casinos ne peuvent pas payer pour améliorer leur note ou leur position dans nos classements.
          </p>
        </section>
      </div>
    </div>
  );
}
