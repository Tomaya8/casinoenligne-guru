export interface RouletteVariant {
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  headerImage: string;
  headerImageAlt: string;
  rtp: string;
  houseEdge: string;
  numbers: string;
  tableLimit: string;
  sections: { heading: string; content: string; image?: string; imageAlt?: string }[];
  rules: string[];
  keyDifferences: string[];
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
  comparison: { title: string; headers: string[]; rows: string[][] };
  bestFor: string;
}
