export interface GameReview {
  slug: string;
  providerSlug: string;
  name: string;
  title: string;
  excerpt: string;
  headerImage: string;
  headerImageAlt: string;
  rtp: string;
  volatility: string;
  minBet: string;
  maxBet: string;
  maxWin: string;
  reels: string;
  paylines: string;
  releaseDate: string;
  theme: string;
  features: string[];
  sections: { heading: string; content: string; image?: string; imageAlt?: string }[];
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
  rating: number;
  verdict: string;
}

export interface ProviderContent {
  slug: string;
  introContent: string; // First paragraph (shown before "read more")
  fullContent: string; // Remaining paragraphs separated by \n\n
}
