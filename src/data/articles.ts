export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "actualites" | "guides" | "analyses";
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "meilleurs-casinos-en-ligne-2025",
    title: "Les 10 Meilleurs Casinos en Ligne en 2025 : Notre Sélection",
    excerpt: "Découvrez notre classement des meilleurs casinos en ligne pour les joueurs francophones, basé sur des critères rigoureux de sécurité, de jeux et de bonus.",
    category: "guides",
    tags: ["casinos", "classement", "débutant"],
    author: "Marc Dubois",
    date: "2025-03-15",
    readTime: "12 min",
    image: "/images/articles/meilleurs-casinos.jpg",
    content: "Le marché des casinos en ligne ne cesse d'évoluer, avec de nouvelles plateformes qui apparaissent chaque mois. Pour vous aider à naviguer dans cet univers, notre équipe d'experts a passé des centaines d'heures à tester et évaluer les casinos disponibles pour les joueurs francophones...",
  },
  {
    slug: "bonus-sans-depot-guide-complet",
    title: "Bonus Sans Dépôt 2025 : Le Guide Complet pour en Profiter",
    excerpt: "Tout savoir sur les bonus sans dépôt : comment les trouver, les conditions à vérifier, et nos meilleures recommandations du moment.",
    category: "guides",
    tags: ["bonus", "sans-dépôt", "débutant"],
    author: "Sophie Laurent",
    date: "2025-03-10",
    readTime: "8 min",
    image: "/images/articles/bonus-sans-depot.jpg",
    content: "Les bonus sans dépôt sont le Saint Graal des joueurs de casino en ligne. Ils vous permettent de tester un casino et ses jeux sans risquer votre propre argent...",
  },
  {
    slug: "regulation-anj-changements-2025",
    title: "ANJ 2025 : Les Nouveaux Changements Réglementaires en France",
    excerpt: "L'Autorité Nationale des Jeux impose de nouvelles règles pour les casinos en ligne. Voici ce qui change et comment cela impacte les joueurs.",
    category: "actualites",
    tags: ["régulation", "france", "ANJ"],
    author: "Pierre Martin",
    date: "2025-03-20",
    readTime: "6 min",
    image: "/images/articles/anj-regulation.jpg",
    content: "L'Autorité Nationale des Jeux (ANJ) a annoncé une série de modifications réglementaires qui entreront en vigueur au second semestre 2025...",
  },
  {
    slug: "cryptomonnaies-casinos-revolution",
    title: "Crypto et Casinos : La Révolution des Paiements en 2025",
    excerpt: "Bitcoin, Ethereum, USDT — les cryptomonnaies transforment l'industrie du casino en ligne. Analyse des tendances et perspectives.",
    category: "analyses",
    tags: ["crypto", "paiements", "tendances"],
    author: "Alex Chen",
    date: "2025-03-18",
    readTime: "10 min",
    image: "/images/articles/crypto-casinos.jpg",
    content: "L'adoption des cryptomonnaies dans l'industrie du casino en ligne a connu une croissance exponentielle en 2024-2025. Les avantages sont clairs : transactions rapides, frais réduits, et anonymat renforcé...",
  },
  {
    slug: "strategie-blackjack-debutant",
    title: "Stratégie Blackjack : Le Guide du Débutant pour Gagner",
    excerpt: "Apprenez la stratégie de base du blackjack et réduisez l'avantage de la maison à moins de 1%. Guide complet avec tableaux et exemples.",
    category: "guides",
    tags: ["blackjack", "stratégie", "débutant"],
    author: "Marc Dubois",
    date: "2025-03-05",
    readTime: "15 min",
    image: "/images/articles/strategie-blackjack.jpg",
    content: "Le blackjack est unique parmi les jeux de casino car la stratégie du joueur a un impact direct sur l'avantage de la maison...",
  },
  {
    slug: "evolution-gaming-nouveaux-jeux-live",
    title: "Evolution Gaming : 5 Nouveaux Jeux Live qui Changent la Donne",
    excerpt: "Le leader du live casino dévoile ses dernières innovations. Tour d'horizon des nouveautés qui vont marquer 2025.",
    category: "actualites",
    tags: ["evolution-gaming", "live-casino", "nouveautés"],
    author: "Sophie Laurent",
    date: "2025-03-22",
    readTime: "7 min",
    image: "/images/articles/evolution-gaming.jpg",
    content: "Evolution Gaming continue d'innover avec une nouvelle série de jeux live qui repoussent les limites du divertissement en ligne...",
  },
  {
    slug: "marche-igaming-afrique-francophone",
    title: "iGaming en Afrique Francophone : Un Marché en Pleine Explosion",
    excerpt: "Analyse du marché des jeux en ligne en Afrique francophone : opportunités, défis réglementaires et perspectives de croissance.",
    category: "analyses",
    tags: ["afrique", "marché", "tendances"],
    author: "Pierre Martin",
    date: "2025-03-12",
    readTime: "11 min",
    image: "/images/articles/igaming-afrique.jpg",
    content: "L'Afrique francophone représente l'un des marchés les plus dynamiques de l'industrie iGaming mondiale...",
  },
  {
    slug: "jeu-responsable-guide-pratique",
    title: "Jeu Responsable : Comment Jouer Sans Risquer l'Addiction",
    excerpt: "Guide pratique pour maintenir une relation saine avec le jeu en ligne. Outils, conseils et ressources d'aide.",
    category: "guides",
    tags: ["jeu-responsable", "addiction", "prévention"],
    author: "Dr. Claire Moreau",
    date: "2025-03-08",
    readTime: "9 min",
    image: "/images/articles/jeu-responsable.jpg",
    content: "Le jeu en ligne doit rester un divertissement. Cet article vous donne les clés pour identifier les signes d'addiction et maintenir le contrôle...",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getLatestArticles(count: number = 5): Article[] {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
