import { getArticlesByCategory } from "@/data/articles";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleList from "@/components/editorial/ArticleList";
import type { Metadata } from "next";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Analyses iGaming — Tendances et Études du Marché",
  description: "Analyses approfondies du marché iGaming : tendances, études comparatives, données et perspectives de l'industrie du casino en ligne.",
};

export default function AnalysesPage() {
  const analyses = getArticlesByCategory("analyses");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Analyses" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text-gold">Analyses</span> & Tendances
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Analyses approfondies du marché iGaming : tendances, comparaisons et études pour comprendre l&apos;industrie.
      </p>

      {analyses.length > 0 ? (
        <ArticleList articles={analyses} showCategory={false} />
      ) : (
        <div className="text-center py-16">
          <p className="text-foreground-muted text-lg">Aucune analyse pour le moment.</p>
          <p className="text-foreground-muted text-sm mt-2">Nos experts préparent de nouvelles études du marché.</p>
        </div>
      )}

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Analyses du Marché iGaming : Données et Tendances</h2>
        <p>
          Le marché mondial des casinos en ligne pèse plus de 90 milliards de dollars et continue de croître à un rythme annuel
          de 10 à 12%. Nos analyses approfondies décryptent les tendances, les chiffres et les dynamiques qui façonnent cette
          industrie en constante évolution. Basées sur des données réelles et des sources vérifiées, elles offrent une vision
          claire et objective du marché pour les joueurs, les professionnels et les observateurs de l&apos;industrie.
        </p>
        <p>
          Les marchés francophones présentent des caractéristiques distinctes. La France, avec son cadre réglementaire strict limité
          au poker et aux paris sportifs en ligne, représente un potentiel inexploité estimé à plusieurs milliards d&apos;euros si
          le marché des casinos en ligne venait à s&apos;ouvrir. La Belgique et la Suisse offrent des marchés plus matures avec
          une offre complète de jeux en ligne. L&apos;Afrique francophone émerge comme le marché à plus forte croissance, porté
          par une population jeune, une pénétration croissante du mobile et une classe moyenne en expansion.
        </p>
        <p>
          Nos analyses comparent les performances des différents segments (slots, live casino, paris sportifs), étudient
          l&apos;impact des régulations sur les volumes de jeu, et évaluent les stratégies des principaux opérateurs. Nous
          analysons également les innovations technologiques qui redéfinissent l&apos;expérience joueur : gamification, réalité
          augmentée, intelligence artificielle pour la personnalisation et blockchain pour la transparence des jeux.
        </p>
        <p>
          Que vous soyez un joueur souhaitant comprendre les tendances du marché pour mieux choisir vos casinos, un investisseur
          intéressé par le secteur iGaming ou un professionnel de l&apos;industrie, nos analyses vous fournissent les clés de
          compréhension nécessaires. Chaque étude est accompagnée de données chiffrées, de graphiques et de conclusions
          actionables pour vous aider à naviguer dans cet écosystème complexe.
        </p>
      </SeoText>
    </div>
  );
}
