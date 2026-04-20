export interface Casino {
  slug: string;
  name: string;
  logo: string;
  affiliateUrl: string;
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
    slug: "casinostars",
    name: "CasinoStars",
    logo: "/logos/casinostars.svg",
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3-YnVqGHN08XWNd7ZgqdRLk/1/",
    rating: 4.7,
    description: "CasinoStars s'impose comme une référence auprès des joueurs francophones grâce à sa ludothèque riche de plusieurs milliers de titres, ses paiements rapides et son support client réactif en français. L'opérateur combine machines à sous modernes, jeux de table et un live casino complet animé par les principaux studios du marché, le tout accessible depuis ordinateur comme mobile.",
    shortDescription: "Plateforme moderne avec des milliers de jeux et des paiements rapides",
    bonusTitle: "Bonus de bienvenue",
    bonusAmount: "100% jusqu'à 500€ + 200 tours gratuits",
    bonusWagering: "x40",
    established: 2022,
    licence: ["Curaçao"],
    countries: ["France", "Belgique", "Suisse", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "Virement bancaire"],
    gameProviders: ["NetEnt", "Pragmatic Play", "Evolution Gaming", "Play'n GO", "Hacksaw Gaming", "Nolimit City"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Poker", "Live Casino", "Jeux télévisés"],
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    pros: [
      "Ludothèque de plus de 5000 jeux",
      "Support client 24/7 en français",
      "Retraits crypto en quelques heures",
      "Programme VIP progressif",
    ],
    cons: [
      "Wagering x40 sur le bonus de bienvenue",
      "Pas de licence européenne (ANJ/MGA)",
    ],
    isFeatured: true,
    tags: ["crypto", "live-casino", "mobile", "vip"],
  },
  {
    slug: "casino-orca",
    name: "Casino Orca",
    logo: "/logos/casino-orca.svg",
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3_eD2ODgvck4mNd7ZgqdRLk/1/",
    rating: 4.6,
    description: "Casino Orca séduit par son identité maritime soignée et une expérience utilisateur fluide, pensée pour les joueurs francophones exigeants. Le casino met l'accent sur la vitesse : inscription rapide, dépôts instantanés et retraits traités sous 24 heures. Sa sélection couvre les grands classiques et les nouveautés des studios les plus populaires.",
    shortDescription: "Interface épurée, retraits rapides et large catalogue de jeux",
    bonusTitle: "Pack de bienvenue",
    bonusAmount: "100% jusqu'à 500€ + 100 tours gratuits",
    bonusWagering: "x35",
    established: 2022,
    licence: ["Curaçao"],
    countries: ["France", "Belgique", "Suisse", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "Litecoin", "USDT"],
    gameProviders: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Yggdrasil", "Relax Gaming", "Push Gaming"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Baccarat", "Live Casino", "Crash Games"],
    minDeposit: "20€",
    withdrawalTime: "24h",
    pros: [
      "Retraits traités en 24h",
      "Interface moderne et intuitive",
      "Catalogue crypto complet",
      "Tournois et promotions hebdomadaires",
    ],
    cons: [
      "Bonus limité aux nouveaux inscrits",
      "Absence de licence ANJ ou MGA",
    ],
    isFeatured: true,
    tags: ["rapide", "crypto", "mobile", "live-casino"],
  },
  {
    slug: "art-casino",
    name: "Art Casino",
    logo: "/logos/art-casino.svg",
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF38eR0indqtVW2Nd7ZgqdRLk/1/",
    rating: 4.5,
    description: "Art Casino revisite l'univers du casino en ligne avec une direction artistique soignée, inspirée des grandes galeries d'art. Au-delà du visuel, la plateforme propose un catalogue premium couvrant les machines à sous les plus récentes, les tables en direct et une section exclusive pour les joueurs VIP francophones.",
    shortDescription: "Casino haut de gamme à l'identité visuelle unique",
    bonusTitle: "Bonus Collection",
    bonusAmount: "100% jusqu'à 1500€ + 150 tours gratuits",
    bonusWagering: "x40",
    established: 2023,
    licence: ["Curaçao"],
    countries: ["France", "Belgique", "Suisse", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "MiFinity"],
    gameProviders: ["NetEnt", "Pragmatic Play", "Play'n GO", "Evolution Gaming", "BGaming", "Nolimit City"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Poker", "Live Casino", "Game Shows"],
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    pros: [
      "Bonus de bienvenue jusqu'à 1500€",
      "Section VIP premium",
      "Design élégant et ergonomique",
      "Tournois hebdomadaires à gros lots",
    ],
    cons: [
      "Wagering x40 relativement élevé",
      "Pas disponible sur tous les marchés",
    ],
    isFeatured: true,
    tags: ["vip", "premium", "crypto", "luxe"],
  },
  {
    slug: "betroom24",
    name: "Betroom24",
    logo: "/logos/betroom24.svg",
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF39ZSuvhn4yj1mNd7ZgqdRLk/1/",
    rating: 4.4,
    description: "Betroom24 met en avant un concept simple : une salle de jeux ouverte 24 heures sur 24, accessible sans compromis sur la variété des titres. Machines à sous, blackjack, roulette et live casino s'y côtoient avec des promotions quotidiennes qui récompensent la fidélité des joueurs francophones.",
    shortDescription: "Casino ouvert 24/7 avec promotions quotidiennes",
    bonusTitle: "Bonus Welcome Room",
    bonusAmount: "100% jusqu'à 500€ + 100 tours gratuits",
    bonusWagering: "x35",
    established: 2022,
    licence: ["Curaçao"],
    countries: ["France", "Belgique", "Suisse", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "Trustly"],
    gameProviders: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Play'n GO", "Hacksaw Gaming", "Red Tiger"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Live Casino", "Jackpots", "Crash Games"],
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    pros: [
      "Promotions et cashback quotidiens",
      "Support client disponible 24/7",
      "Catalogue crypto et fiat",
      "Interface mobile optimisée",
    ],
    cons: [
      "Pas de programme VIP dédié",
      "Catalogue live moins étoffé que la concurrence",
    ],
    isFeatured: true,
    tags: ["quotidien", "crypto", "mobile", "cashback"],
  },
  {
    slug: "thor-casino",
    name: "Thor Casino",
    logo: "/logos/thor-casino.svg",
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3_6PBA04iUMN2Nd7ZgqdRLk/1/",
    rating: 4.6,
    description: "Thor Casino plonge le joueur dans l'univers de la mythologie nordique avec un design immersif et une ludothèque taillée pour les amateurs de sensations fortes. L'opérateur met en avant des machines à sous à forte volatilité, une section live casino complète et un programme de récompenses inspiré des runes.",
    shortDescription: "Casino à thème nordique avec ludothèque premium",
    bonusTitle: "Bonus d'Asgard",
    bonusAmount: "100% jusqu'à 1000€ + 100 tours gratuits",
    bonusWagering: "x40",
    established: 2022,
    licence: ["Curaçao"],
    countries: ["France", "Belgique", "Suisse", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "Litecoin", "USDT"],
    gameProviders: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Nolimit City", "Push Gaming", "ELK Studios"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Live Casino", "Megaways", "Crash Games"],
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    pros: [
      "Thème nordique immersif",
      "Slots à haute volatilité nombreux",
      "Programme de fidélité par paliers",
      "Retraits crypto rapides",
    ],
    cons: [
      "Wagering x40 sur le bonus",
      "Dépôt minimum de 20€",
    ],
    isFeatured: true,
    tags: ["crypto", "megaways", "vip", "mobile"],
  },
  {
    slug: "mond-casino",
    name: "Mond Casino",
    logo: "/logos/mond-casino.svg",
    affiliateUrl: "https://record.mematoaffiliates.com/_sfCEU0EZF3-YkdHVp7xCcmNd7ZgqdRLk/1/",
    rating: 4.5,
    description: "Mond Casino (« Mond » signifie lune en allemand) propose une expérience de jeu nocturne élégante et raffinée. La plateforme met à disposition plusieurs milliers de jeux, un live casino haut de gamme et des promotions lunaires récurrentes, le tout dans une interface entièrement traduite en français.",
    shortDescription: "Expérience de jeu nocturne avec catalogue complet",
    bonusTitle: "Bonus Lune",
    bonusAmount: "100% jusqu'à 500€ + 200 tours gratuits",
    bonusWagering: "x35",
    established: 2023,
    licence: ["Curaçao"],
    countries: ["France", "Belgique", "Suisse", "Québec", "Afrique francophone"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "Ethereum", "USDT", "MiFinity"],
    gameProviders: ["NetEnt", "Pragmatic Play", "Evolution Gaming", "Play'n GO", "Yggdrasil", "BGaming"],
    gameTypes: ["Machines à sous", "Blackjack", "Roulette", "Live Casino", "Game Shows", "Crash Games"],
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    pros: [
      "Wagering x35 compétitif",
      "200 tours gratuits à l'inscription",
      "Live casino animé par Evolution",
      "Plateforme 100% traduite en français",
    ],
    cons: [
      "Pas de licence européenne",
      "Programme VIP sur invitation uniquement",
    ],
    isFeatured: true,
    tags: ["crypto", "live-casino", "mobile", "bonus"],
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
