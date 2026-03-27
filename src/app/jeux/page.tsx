import Link from "next/link";
import { gameCategories } from "@/data/games";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Dice1, Club, CircleDot, Spade, ArrowRight } from "lucide-react";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Jeux de Casino en Ligne — Guides, Règles et Stratégies",
  description: "Découvrez tous les jeux de casino en ligne : machines à sous, blackjack, roulette, poker. Règles, stratégies, RTP et conseils d'experts.",
  openGraph: {
    title: "Jeux de Casino en Ligne — Guides, Règles et Stratégies",
    description: "Machines à sous, blackjack, roulette, poker : règles, stratégies et RTP pour chaque jeu de casino.",
  },
};

const icons: Record<string, React.ReactNode> = {
  "slot-machine": <Dice1 className="w-10 h-10" />,
  cards: <Club className="w-10 h-10" />,
  roulette: <CircleDot className="w-10 h-10" />,
  "poker-chip": <Spade className="w-10 h-10" />,
};

export default function JeuxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Jeux de Casino" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text">Jeux de Casino</span> — Guide Complet
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Explorez notre guide complet des jeux de casino en ligne. Règles détaillées, stratégies éprouvées,
        variantes populaires et conseils d&apos;experts pour chaque type de jeu.
      </p>

      <div className="space-y-8">
        {gameCategories.map((game) => (
          <Link
            key={game.slug}
            href={`/jeux/${game.slug}`}
            className="group flex flex-col sm:flex-row items-start gap-6 p-6 bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shrink-0">
              {icons[game.icon]}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors mb-2">
                {game.name}
              </h2>
              <p className="text-foreground-muted mb-4">{game.shortDescription}</p>
              <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
                <span>RTP : {game.rtp.split("(")[0].trim()}</span>
                <span>{game.variants.length} variantes</span>
                <span>{game.popularGames.length} jeux populaires</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:text-accent-primary transition-colors shrink-0 mt-2" />
          </Link>
        ))}
      </div>

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Tout Savoir sur les Jeux de Casino en Ligne</h2>
        <p>
          Les jeux de casino en ligne offrent une diversité impressionnante qui va bien au-delà de ce que proposent les casinos
          physiques. Des machines à sous aux jeux de table classiques, en passant par les jeux avec croupiers en direct et les
          nouvelles catégories comme les crash games et les game shows, il existe un jeu pour chaque profil de joueur. Notre guide
          complet vous aide à comprendre les règles, maîtriser les stratégies et choisir les jeux les plus adaptés à votre style.
        </p>
        <p>
          Les machines à sous représentent la catégorie la plus vaste avec des milliers de titres disponibles, allant des slots
          classiques à 3 rouleaux aux vidéo slots ultra-modernes avec des mécaniques innovantes comme Megaways, clusters payants
          ou achats de bonus. Le RTP (Return to Player) est un indicateur clé : il représente le pourcentage théorique de
          redistribution aux joueurs sur le long terme. Un RTP de 96% signifie que pour 100€ misés, le jeu redistribue en moyenne
          96€. Nous vous recommandons de toujours vérifier le RTP avant de jouer.
        </p>
        <p>
          Les jeux de table comme le blackjack, la roulette et le poker offrent une dimension stratégique que les slots ne
          proposent pas. Le blackjack, avec une stratégie de base optimale, réduit l&apos;avantage de la maison à moins de 0,5%,
          ce qui en fait le jeu le plus favorable pour les joueurs avertis. La roulette européenne, avec son unique zéro, offre
          un avantage maison de 2,7% — bien meilleur que la roulette américaine à double zéro (5,26%). Le poker en ligne combine
          skill et chance, permettant aux joueurs talentueux de générer des gains réguliers sur le long terme.
        </p>
        <p>
          La révolution du live casino a transformé l&apos;expérience de jeu en ligne en rapprochant le virtuel du réel. Grâce
          à des fournisseurs comme Evolution Gaming, vous pouvez désormais jouer à la roulette, au blackjack ou à des jeux shows
          exclusifs comme Crazy Time et Monopoly Live, le tout animé par de vrais croupiers filmés en haute définition depuis des
          studios professionnels. Explorez nos guides détaillés pour chaque catégorie et améliorez votre jeu dès aujourd&apos;hui.
        </p>
      </SeoText>
    </div>
  );
}
