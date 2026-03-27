import { getArticlesByCategory } from "@/data/articles";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleList from "@/components/editorial/ArticleList";
import type { Metadata } from "next";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Guides Casino en Ligne — Stratégies et Tutoriels",
  description: "Nos guides experts pour maîtriser les jeux de casino en ligne. Stratégies, tutoriels et conseils pour débutants et joueurs confirmés.",
};

export default function GuidesPage() {
  const guides = getArticlesByCategory("guides");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Guides" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text">Guides</span> Casino
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Nos guides experts vous accompagnent dans votre découverte des jeux de casino en ligne.
        Stratégies, tutoriels et conseils pour tous les niveaux.
      </p>

      <ArticleList articles={guides} showCategory={false} />

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Guides Casino : Apprenez, Maîtrisez, Gagnez</h2>
        <p>
          Nos guides casino sont conçus pour vous accompagner dans votre progression, du débutant complet au joueur confirmé.
          Rédigés par des experts de l&apos;industrie iGaming avec plus de 15 ans d&apos;expérience, chaque guide offre des
          informations pratiques, des stratégies éprouvées et des conseils concrets que vous pouvez appliquer immédiatement.
          Nous couvrons tous les aspects du jeu en ligne : choix du casino, compréhension des bonus, maîtrise des jeux et
          gestion de votre bankroll.
        </p>
        <p>
          Pour les débutants, nos guides d&apos;introduction expliquent les bases : comment fonctionne un casino en ligne,
          comment s&apos;inscrire et effectuer son premier dépôt, comment choisir un bonus adapté à son profil et comment
          commencer à jouer en limitant les risques. Nous détaillons également les erreurs les plus courantes des nouveaux
          joueurs et comment les éviter, comme négliger les conditions de mise des bonus ou jouer sans fixer de limites.
        </p>
        <p>
          Pour les joueurs expérimentés, nos guides avancés plongent dans les stratégies spécifiques à chaque jeu : la stratégie
          de base du blackjack avec ses tableaux de décision optimale, les systèmes de mise à la roulette (Martingale, Paroli,
          D&apos;Alembert), la gestion de position au poker ou encore les techniques de sélection de slots basées sur le RTP et
          la volatilité. Chaque stratégie est expliquée avec des exemples concrets et des données mathématiques pour que vous
          compreniez non seulement le &quot;comment&quot; mais aussi le &quot;pourquoi&quot;.
        </p>
        <p>
          Nous publions régulièrement de nouveaux guides pour couvrir les dernières innovations du marché : nouveaux types de jeux,
          évolutions réglementaires, nouvelles méthodes de paiement et tendances technologiques. Abonnez-vous pour ne rien manquer
          et consultez nos guides avant de tenter de nouvelles stratégies ou de vous inscrire sur un nouveau casino.
        </p>
      </SeoText>
    </div>
  );
}
