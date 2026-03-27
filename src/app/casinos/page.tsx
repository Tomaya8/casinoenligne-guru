import { casinos } from "@/data/casinos";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CasinoFilters from "@/components/casino/CasinoFilters";
import SeoText from "@/components/ui/SeoText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casinos en Ligne — Annuaire Complet des Meilleurs Casinos",
  description:
    "Découvrez notre sélection des meilleurs casinos en ligne pour les joueurs francophones. Chaque casino est vérifié, testé et évalué par nos experts.",
  openGraph: {
    title: "Casinos en Ligne — Annuaire Complet",
    description:
      "Comparez les meilleurs casinos en ligne francophones. Filtrez par pays, licence et caractéristiques.",
  },
};

export default function CasinosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Casinos en ligne" }]} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Casinos en Ligne</span> — Annuaire Complet
        </h1>
        <p className="text-foreground-muted max-w-3xl">
          Découvrez notre sélection des meilleurs casinos en ligne pour les joueurs francophones.
          Chaque casino est vérifié, testé et évalué par notre équipe d&apos;experts.
        </p>
      </div>

      <CasinoFilters casinos={casinos} />

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Comment Choisir le Meilleur Casino en Ligne ?</h2>
        <p>
          Trouver un casino en ligne fiable et adapté à vos besoins peut sembler complexe face à la multitude d&apos;offres
          disponibles sur le marché francophone. Notre annuaire vous simplifie cette tâche en regroupant les casinos les plus
          sérieux, testés et approuvés par notre équipe d&apos;experts. Chaque casino listé sur casinoenligne.guru a été soumis
          à un processus d&apos;évaluation rigoureux couvrant la sécurité, la qualité des jeux, les bonus et les conditions de
          retrait.
        </p>
        <p>
          Le premier critère à vérifier est la licence. Un casino en ligne légal doit posséder une autorisation délivrée par un
          régulateur reconnu comme l&apos;ANJ en France, la Commission des Jeux de Hasard en Belgique ou la CFMJ en Suisse. Cette
          licence garantit que le casino respecte des normes strictes en matière de protection des joueurs, d&apos;équité des jeux
          et de gestion des fonds. Méfiez-vous des casinos qui opèrent sans licence ou avec des licences de juridictions peu
          réglementées.
        </p>
        <p>
          Les bonus de bienvenue sont un excellent moyen de démarrer avec un capital supplémentaire, mais il est essentiel de lire
          attentivement les conditions de mise (wagering). Un bonus de 100% jusqu&apos;à 500€ avec un wagering de x35 signifie que
          vous devrez miser 17 500€ avant de pouvoir retirer vos gains de bonus. Privilégiez les casinos offrant un wagering bas
          (x25 à x30) pour maximiser vos chances de conversion. Utilisez nos filtres pour affiner votre recherche par pays, type
          de licence ou caractéristiques spécifiques comme les paiements crypto ou les retraits rapides.
        </p>
        <p>
          Enfin, la qualité du support client est un indicateur fiable du sérieux d&apos;un casino. Un bon casino propose un chat
          en direct disponible 24/7, idéalement en français, ainsi que des délais de retrait raisonnables (24 à 48 heures pour les
          e-wallets, 1 à 5 jours pour les virements bancaires). Consultez nos fiches détaillées pour connaître tous les avantages
          et inconvénients de chaque casino.
        </p>
      </SeoText>
    </div>
  );
}
