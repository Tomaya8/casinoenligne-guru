export interface GameCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  shortDescription: string;
  rules: string;
  variants: string[];
  strategies: string[];
  rtp: string;
  tips: string[];
  popularGames: string[];
}

export const gameCategories: GameCategory[] = [
  {
    slug: "machines-a-sous",
    name: "Machines à Sous",
    icon: "slot-machine",
    description: "Les machines à sous en ligne sont les jeux de casino les plus populaires au monde. Des classiques à 3 rouleaux aux vidéo slots modernes avec des graphismes époustouflants, découvrez tout sur les slots en ligne.",
    shortDescription: "Le jeu de casino #1 avec des milliers de variantes",
    rules: "Les machines à sous fonctionnent avec un générateur de nombres aléatoires (RNG). Le joueur place sa mise, lance les rouleaux et espère obtenir des combinaisons gagnantes sur les lignes de paiement actives. Les gains dépendent des symboles alignés et de la table de paiement spécifique à chaque jeu.",
    variants: ["Slots classiques (3 rouleaux)", "Vidéo slots (5+ rouleaux)", "Megaways", "Jackpot progressif", "Slots à clusters", "Slots à cascade", "Buy Bonus slots"],
    strategies: ["Choisir des slots avec un RTP élevé (96%+)", "Gérer son bankroll avec des limites strictes", "Comprendre la volatilité avant de jouer", "Profiter des tours gratuits et bonus", "Jouer en mode démo avant de miser"],
    rtp: "92% - 98% (moyenne 96%)",
    tips: ["Vérifiez toujours le RTP avant de jouer", "Les jackpots progressifs ont un RTP plus bas", "La volatilité haute = gains rares mais élevés", "Fixez un budget et respectez-le"],
    popularGames: ["Starburst", "Book of Dead", "Gonzo's Quest", "Sweet Bonanza", "Gates of Olympus", "Big Bass Bonanza"],
  },
  {
    slug: "blackjack",
    name: "Blackjack",
    icon: "cards",
    description: "Le blackjack est le jeu de table le plus stratégique du casino. Avec une stratégie de base optimale, l'avantage de la maison peut descendre sous 0.5%, ce qui en fait le jeu le plus favorable pour les joueurs avertis.",
    shortDescription: "Le jeu de stratégie avec le meilleur avantage joueur",
    rules: "L'objectif est d'obtenir une main dont la valeur est la plus proche possible de 21 sans la dépasser. Les cartes numérotées valent leur valeur faciale, les figures valent 10, et l'As vaut 1 ou 11. Le joueur joue contre le croupier et peut tirer (hit), rester (stand), doubler (double) ou séparer (split).",
    variants: ["Blackjack Européen", "Blackjack Américain", "Blackjack Switch", "Spanish 21", "Pontoon", "Lightning Blackjack", "Infinite Blackjack", "Blackjack VIP", "Speed Blackjack", "Free Bet Blackjack"],
    strategies: ["Stratégie de base (tableau optimal)", "Comptage de cartes (casino physique)", "Gestion du bankroll", "Savoir quand doubler", "Ne jamais prendre l'assurance"],
    rtp: "99.0% - 99.7% (avec stratégie optimale)",
    tips: ["Apprenez la stratégie de base par coeur", "Évitez les paris secondaires (side bets)", "Cherchez les tables 3:2 plutôt que 6:5", "Ne prenez jamais l'assurance"],
    popularGames: ["Lightning Blackjack", "Infinite Blackjack", "Blackjack VIP", "Speed Blackjack", "Free Bet Blackjack"],
  },
  {
    slug: "roulette",
    name: "Roulette",
    icon: "roulette",
    description: "La roulette est l'un des jeux de casino les plus emblématiques. Simple à comprendre mais offrant de nombreuses options de paris, elle fascine les joueurs depuis des siècles. Découvrez les variantes et stratégies.",
    shortDescription: "Le jeu emblématique alliant chance et stratégie",
    rules: "Une bille est lancée sur une roue numérotée. Les joueurs placent des paris sur le numéro, la couleur ou le groupe de numéros où la bille va s'arrêter. Les paris incluent : numéro plein (35:1), rouge/noir (1:1), pair/impair (1:1), colonnes (2:1), et bien plus.",
    variants: ["Roulette Européenne (1 zéro)", "Roulette Française (La Partage)", "Roulette Américaine (2 zéros)", "Lightning Roulette", "Immersive Roulette", "Speed Roulette"],
    strategies: ["Système Martingale", "Système Paroli", "Système D'Alembert", "Méthode des colonnes", "Jouer uniquement la roulette européenne"],
    rtp: "94.7% (Américaine) - 98.7% (Française avec La Partage)",
    tips: ["Préférez la roulette européenne ou française", "Évitez la roulette américaine (double zéro)", "Les systèmes de mise ne changent pas l'avantage maison", "Jouez les mises extérieures pour plus de régularité"],
    popularGames: ["Lightning Roulette", "Immersive Roulette", "Auto Roulette", "XXXtreme Lightning Roulette", "Quantum Roulette"],
  },
  {
    slug: "poker",
    name: "Poker",
    icon: "poker-chip",
    description: "Le poker en ligne offre une expérience stratégique unique où le talent surpasse la chance sur le long terme. Des tournois massifs aux tables cash, explorez l'univers du poker en ligne francophone.",
    shortDescription: "Le jeu de stratégie ultime entre joueurs",
    rules: "Le poker se joue avec un jeu de 52 cartes. Les joueurs reçoivent des cartes et doivent former la meilleure combinaison possible. Le Texas Hold'em est la variante la plus populaire : chaque joueur reçoit 2 cartes privées et partage 5 cartes communes.",
    variants: ["Texas Hold'em Live", "Casino Hold'em", "Three Card Poker", "Caribbean Stud Poker", "Video Poker Jacks or Better", "Omaha", "Stud"],
    strategies: ["Position à la table", "Lecture des adversaires", "Gestion du pot", "Calcul des cotes", "Bluff et semi-bluff"],
    rtp: "95% - 99.5% (dépend de la variante et du skill)",
    tips: ["Commencez avec des petites limites", "Apprenez les cotes du pot", "La position est cruciale", "Gérez votre bankroll séparément"],
    popularGames: ["Texas Hold'em Live", "Casino Hold'em", "Three Card Poker", "Caribbean Stud Poker", "Video Poker Jacks or Better"],
  },
];

export function getGameBySlug(slug: string): GameCategory | undefined {
  return gameCategories.find((g) => g.slug === slug);
}
