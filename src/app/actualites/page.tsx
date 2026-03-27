import { getArticlesByCategory } from "@/data/articles";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleList from "@/components/editorial/ArticleList";
import type { Metadata } from "next";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Actualités Casino en Ligne — News iGaming",
  description: "Suivez l'actualité des casinos en ligne : nouvelles régulations, lancements de jeux, innovations technologiques et tendances du marché.",
};

export default function ActualitesPage() {
  const news = getArticlesByCategory("actualites");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Actualités" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text-accent">Actualités</span> iGaming
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Les dernières nouvelles de l&apos;industrie du casino en ligne : régulations, lancements, innovations et tendances.
      </p>

      {news.length > 0 ? (
        <ArticleList articles={news} showCategory={false} />
      ) : (
        <div className="text-center py-16">
          <p className="text-foreground-muted text-lg">Aucune actualité pour le moment.</p>
          <p className="text-foreground-muted text-sm mt-2">Revenez bientôt pour les dernières nouvelles de l&apos;industrie.</p>
        </div>
      )}

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">L&apos;Actualité du Casino en Ligne et de l&apos;iGaming</h2>
        <p>
          L&apos;industrie du casino en ligne est l&apos;un des secteurs les plus dynamiques du divertissement numérique, avec
          des évolutions constantes en matière de technologie, de régulation et d&apos;offres. Notre rédaction suit
          quotidiennement l&apos;actualité iGaming pour vous apporter les informations les plus pertinentes et les plus récentes,
          qu&apos;il s&apos;agisse de nouveaux lancements de casinos, de changements réglementaires ou d&apos;innovations
          technologiques.
        </p>
        <p>
          Les régulations des jeux en ligne dans les marchés francophones évoluent régulièrement. L&apos;ANJ en France renforce
          ses mesures de protection des joueurs, la Belgique ajuste ses restrictions publicitaires, et la Suisse continue
          d&apos;étendre son marché régulé. Au niveau européen, des discussions sur une harmonisation des règles de jeu en ligne
          sont en cours, ce qui pourrait transformer le paysage réglementaire dans les années à venir.
        </p>
        <p>
          Du côté technologique, l&apos;intelligence artificielle et la réalité virtuelle commencent à transformer l&apos;expérience
          de jeu. Les casinos investissent dans la personnalisation des offres, la détection précoce des comportements à risque et
          des expériences immersives en VR. Les paiements en cryptomonnaie continuent leur progression, avec de plus en plus de
          casinos acceptant Bitcoin, Ethereum et les stablecoins comme moyen de paiement principal.
        </p>
        <p>
          Notre section actualités couvre également les fusions et acquisitions dans l&apos;industrie, les résultats financiers
          des principaux opérateurs, les nouvelles sorties de jeux par les fournisseurs de logiciels et les événements majeurs
          du secteur comme ICE London et SBC Summit. Restez informé pour prendre des décisions éclairées et profiter des
          meilleures opportunités du marché.
        </p>
      </SeoText>
    </div>
  );
}
