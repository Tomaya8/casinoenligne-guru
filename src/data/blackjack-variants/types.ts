export interface BlackjackVariant {
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  headerImage: string;
  headerImageAlt: string;
  rtp: string;
  decks: string;
  houseEdge: string;
  tableLimit: string;
  sections: { heading: string; content: string; image?: string; imageAlt?: string }[];
  rules: string[];
  keyDifferences: string[];
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
  bestFor: string;
}
