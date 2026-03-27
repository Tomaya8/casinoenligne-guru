export interface GuideSection {
  heading: string;
  content: string; // paragraphs separated by \n\n
  image?: string;
  imageAlt?: string;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideComparison {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface GuideArticle {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  headerImage: string;
  headerImageAlt: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
  comparison?: GuideComparison;
  pros?: string[];
  cons?: string[];
}

export interface GuideTopic {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const guideTopics: GuideTopic[] = [
  {
    slug: "live-casino",
    name: "Casino en Direct",
    description: "Tout savoir sur les jeux avec croupiers en direct : stratégies, fournisseurs et tables populaires",
    icon: "video",
    color: "from-red-500 to-pink-600",
  },
  {
    slug: "casino-mobile",
    name: "Casino Mobile",
    description: "Guide complet du jeu sur mobile : applications, optimisation et sécurité",
    icon: "smartphone",
    color: "from-blue-500 to-cyan-600",
  },
  {
    slug: "crypto-casino",
    name: "Cryptomonnaies & Casino",
    description: "Bitcoin, Ethereum et altcoins : le guide du casino crypto francophone",
    icon: "bitcoin",
    color: "from-amber-500 to-orange-600",
  },
  {
    slug: "slots-avance",
    name: "Machines à Sous Avancé",
    description: "RTP, volatilité, Megaways et jackpots progressifs : maîtrisez les slots",
    icon: "dice",
    color: "from-purple-500 to-indigo-600",
  },
  {
    slug: "securite-casino",
    name: "Sécurité au Casino",
    description: "Protégez vos données, reconnaissez les fraudes et comprenez les licences",
    icon: "shield",
    color: "from-emerald-500 to-teal-600",
  },
];
