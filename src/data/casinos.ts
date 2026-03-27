export interface Casino {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  shortDescription: string;
  bonusTitle: string;
  bonusAmount: string;
  bonusWagering: string;
  established: number;
  licence: string[];
  countries: string[];
  paymentMethods: string[];
  gameProviders: string[];
  gameTypes: string[];
  minDeposit: string;
  withdrawalTime: string;
  pros: string[];
  cons: string[];
  isFeatured: boolean;
  tags: string[];
}

export const casinos: Casino[] = [
  {
    slug: "jackpot-royale",
    name: "Jackpot Royale Casino",
    logo: "/logos/jackpot-royale.svg",
    rating: 4.8,
    description: "Jackpot Royale Casino est l'un des casinos en ligne les plus populaires en France, offrant une vaste sélection de jeux et des bonus généreux. Licencié par l'ANJ, il garantit une expérience de jeu sécurisée et équitable pour tous les joueurs francophones.",
    shortDescription: "Casino premium avec plus de 2000 jeux et des retraits rapides",
    bonusTitle: "Bonus de bienvenue",
    bonusAmount: "100% jusqu'à 500€ + 200 tours gratuits",
    bonusWagering: "x35",
    established: 2019,
    licence: ["ANJ (France)", "MGA"],
    countries: ["France", "Belgique", "Suisse"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Virement bancaire"],
    gameProviders: ["NetEnt", "Evolution Gaming", "Pragmatic Play", "Microgaming"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Poker", "Live Casino"],
    minDeposit: "10€",
    withdrawalTime: "24-48h",
    pros: ["Large choix de jeux (2000+)", "Retraits rapides", "Support 24/7 en français", "Application mobile native"],
    cons: ["Wagering x35 sur le bonus", "Pas disponible au Québec"],
    isFeatured: true,
    tags: ["rapide", "mobile", "live-casino", "crypto"],
  },
  {
    slug: "vegas-fortune",
    name: "Vegas Fortune",
    logo: "/logos/vegas-fortune.svg",
    rating: 4.6,
    description: "Vegas Fortune combine l'excitation de Las Vegas avec la commodité du jeu en ligne. Avec une interface élégante et plus de 1500 jeux, ce casino offre une expérience immersive aux joueurs francophones.",
    shortDescription: "L'expérience Vegas depuis chez vous avec 1500+ jeux",
    bonusTitle: "Pack de bienvenue",
    bonusAmount: "150% jusqu'à 750€",
    bonusWagering: "x30",
    established: 2020,
    licence: ["MGA", "Curaçao"],
    countries: ["France", "Belgique", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "ecoPayz", "MuchBetter", "Bitcoin", "Ethereum"],
    gameProviders: ["Play'n GO", "Yggdrasil", "Red Tiger", "Evolution Gaming"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Baccarat", "Game Shows"],
    minDeposit: "15€",
    withdrawalTime: "12-24h",
    pros: ["Retraits en 12h", "Bonus généreux", "Crypto accepté", "VIP exclusif"],
    cons: ["Pas de licence ANJ", "Support limité le week-end"],
    isFeatured: true,
    tags: ["crypto", "rapide", "vip", "débutant"],
  },
  {
    slug: "monte-carlo-digital",
    name: "Monte Carlo Digital",
    logo: "/logos/monte-carlo.svg",
    rating: 4.7,
    description: "Inspiré par le glamour de Monte Carlo, ce casino en ligne propose une expérience luxueuse avec des tables de live casino animées par des croupiers professionnels et une sélection VIP de jeux exclusifs.",
    shortDescription: "Le luxe de Monte Carlo en version digitale",
    bonusTitle: "Bonus VIP",
    bonusAmount: "200% jusqu'à 1000€ + 100 tours",
    bonusWagering: "x40",
    established: 2018,
    licence: ["ANJ (France)", "MGA", "UKGC"],
    countries: ["France", "Belgique", "Suisse"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay", "Virement bancaire"],
    gameProviders: ["Evolution Gaming", "NetEnt", "Playtech", "Microgaming", "Pragmatic Play"],
    gameTypes: ["Live Casino", "Machines à sous", "Roulette", "Blackjack", "Poker", "Baccarat"],
    minDeposit: "20€",
    withdrawalTime: "24-72h",
    pros: ["Live casino exceptionnel", "Triple licence", "Programme VIP élaboré", "Jeux exclusifs"],
    cons: ["Dépôt minimum élevé", "Wagering x40"],
    isFeatured: true,
    tags: ["live-casino", "vip", "luxe", "sécurisé"],
  },
  {
    slug: "spin-francais",
    name: "Spin Français",
    logo: "/logos/spin-francais.svg",
    rating: 4.5,
    description: "Spin Français est un casino 100% dédié au marché francophone avec un support client entièrement en français et des promotions adaptées aux joueurs de la France, Belgique et Suisse.",
    shortDescription: "Le casino 100% francophone avec support dédié",
    bonusTitle: "Offre de bienvenue",
    bonusAmount: "100% jusqu'à 300€ + 50 tours gratuits",
    bonusWagering: "x25",
    established: 2021,
    licence: ["ANJ (France)"],
    countries: ["France"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Skrill", "Paysafecard"],
    gameProviders: ["NetEnt", "Pragmatic Play", "Play'n GO", "Thunderkick"],
    gameTypes: ["Machines à sous", "Roulette", "Blackjack", "Vidéo Poker"],
    minDeposit: "10€",
    withdrawalTime: "48-72h",
    pros: ["Wagering bas (x25)", "100% en français", "Licence ANJ", "Dépôt min 10€"],
    cons: ["Choix de jeux limité", "Retraits plus lents", "Pas de crypto"],
    isFeatured: false,
    tags: ["débutant", "français", "sécurisé"],
  },
  {
    slug: "crypto-casino-fr",
    name: "CryptoCasino.fr",
    logo: "/logos/crypto-casino.svg",
    rating: 4.4,
    description: "CryptoCasino.fr est le premier casino en ligne francophone entièrement dédié aux paiements en cryptomonnaie. Bitcoin, Ethereum, Litecoin — jouez avec vos cryptos préférées en toute sécurité.",
    shortDescription: "Le casino crypto #1 pour les joueurs francophones",
    bonusTitle: "Crypto Bonus",
    bonusAmount: "300% jusqu'à 1 BTC + 150 tours",
    bonusWagering: "x35",
    established: 2022,
    licence: ["Curaçao"],
    countries: ["Belgique", "Québec", "Afrique francophone"],
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "USDT", "Dogecoin"],
    gameProviders: ["BGaming", "Endorphina", "Hacksaw Gaming", "Pragmatic Play"],
    gameTypes: ["Machines à sous", "Crash Games", "Dice", "Blackjack", "Roulette"],
    minDeposit: "0.0001 BTC",
    withdrawalTime: "Instant - 1h",
    pros: ["Retraits instantanés", "Anonymat", "Bonus crypto massif", "Jeux provably fair"],
    cons: ["Pas de licence ANJ", "Pas de monnaie fiat", "Volatilité crypto"],
    isFeatured: true,
    tags: ["crypto", "rapide", "anonyme", "innovant"],
  },
  {
    slug: "lucky-helvetia",
    name: "Lucky Helvetia",
    logo: "/logos/lucky-helvetia.svg",
    rating: 4.3,
    description: "Lucky Helvetia est un casino en ligne spécialement conçu pour le marché suisse, avec des paiements en CHF et une conformité totale avec la législation suisse sur les jeux d'argent.",
    shortDescription: "Le casino suisse par excellence, 100% légal",
    bonusTitle: "Swiss Welcome",
    bonusAmount: "100% jusqu'à 500 CHF",
    bonusWagering: "x30",
    established: 2020,
    licence: ["CFMJ (Suisse)"],
    countries: ["Suisse"],
    paymentMethods: ["Visa", "Mastercard", "PostFinance", "TWINT", "Virement bancaire"],
    gameProviders: ["NetEnt", "Evolution Gaming", "Pragmatic Play", "ELK Studios"],
    gameTypes: ["Machines à sous", "Roulette", "Blackjack", "Live Casino"],
    minDeposit: "10 CHF",
    withdrawalTime: "24-48h",
    pros: ["100% légal en Suisse", "Paiements en CHF", "TWINT accepté", "Support suisse"],
    cons: ["Uniquement pour la Suisse", "Catalogue limité"],
    isFeatured: false,
    tags: ["suisse", "légal", "sécurisé", "débutant"],
  },
];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}

export function getFeaturedCasinos(): Casino[] {
  return casinos.filter((c) => c.isFeatured);
}

export function getCasinosByCountry(country: string): Casino[] {
  return casinos.filter((c) => c.countries.includes(country));
}

export function getCasinosByTag(tag: string): Casino[] {
  return casinos.filter((c) => c.tags.includes(tag));
}
