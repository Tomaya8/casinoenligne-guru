export interface GameProvider {
  slug: string;
  name: string;
  logo: string;
  description: string;
  founded: number;
  headquarters: string;
  popularGames: string[];
  gameCount: string;
  speciality: string;
  rating: number;
}

export const providers: GameProvider[] = [
  {
    slug: "netent",
    name: "NetEnt",
    logo: "/logos/netent.svg",
    description: "NetEnt (Net Entertainment) est l'un des fournisseurs de jeux de casino les plus respectés au monde. Fondé en Suède, il est connu pour ses slots innovantes avec des graphismes exceptionnels.",
    founded: 1996,
    headquarters: "Stockholm, Suède",
    popularGames: ["Starburst", "Gonzo's Quest", "Dead or Alive 2", "Divine Fortune", "Narcos"],
    gameCount: "200+",
    speciality: "Machines à sous premium",
    rating: 4.9,
  },
  {
    slug: "evolution-gaming",
    name: "Evolution Gaming",
    logo: "/logos/evolution.svg",
    description: "Evolution Gaming est le leader incontesté du live casino. Leurs studios de diffusion en direct offrent une expérience immersive avec des croupiers professionnels multilingues.",
    founded: 2006,
    headquarters: "Riga, Lettonie",
    popularGames: ["Lightning Roulette", "Crazy Time", "Mega Ball", "Dream Catcher", "Monopoly Live"],
    gameCount: "100+",
    speciality: "Jeux avec croupiers en direct",
    rating: 4.9,
  },
  {
    slug: "pragmatic-play",
    name: "Pragmatic Play",
    logo: "/logos/pragmatic.svg",
    description: "Pragmatic Play est devenu l'un des fournisseurs les plus prolifiques de l'industrie, avec un catalogue varié de slots, jeux de table et jeux live casino.",
    founded: 2015,
    headquarters: "Sliema, Malte",
    popularGames: ["Sweet Bonanza", "Gates of Olympus", "The Dog House", "Big Bass Bonanza", "Sugar Rush"],
    gameCount: "300+",
    speciality: "Slots à haute volatilité",
    rating: 4.7,
  },
  {
    slug: "microgaming",
    name: "Microgaming",
    logo: "/logos/microgaming.svg",
    description: "Microgaming est un pionnier de l'industrie iGaming, ayant lancé le premier casino en ligne au monde en 1994. Ils sont célèbres pour leurs jackpots progressifs record.",
    founded: 1994,
    headquarters: "Douglas, Île de Man",
    popularGames: ["Mega Moolah", "Thunderstruck II", "Immortal Romance", "Avalon II", "Break da Bank"],
    gameCount: "800+",
    speciality: "Jackpots progressifs",
    rating: 4.6,
  },
  {
    slug: "playngo",
    name: "Play'n GO",
    logo: "/logos/playngo.svg",
    description: "Play'n GO est un développeur suédois reconnu pour ses machines à sous innovantes et ses séries populaires comme Book of Dead et Rich Wilde.",
    founded: 2005,
    headquarters: "Växjö, Suède",
    popularGames: ["Book of Dead", "Reactoonz", "Moon Princess", "Legacy of Dead", "Rise of Olympus"],
    gameCount: "250+",
    speciality: "Slots d'aventure",
    rating: 4.7,
  },
];

export function getProviderBySlug(slug: string): GameProvider | undefined {
  return providers.find((p) => p.slug === slug);
}
