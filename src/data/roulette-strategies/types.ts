export interface RouletteStrategy {
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  headerImage: string;
  headerImageAlt: string;
  difficulty: string;
  riskLevel: string;
  effectiveness: string;
  sections: { heading: string; content: string; image?: string; imageAlt?: string }[];
  pros: string[];
  cons: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
  comparison: { title: string; headers: string[]; rows: string[][] };
  verdict: string;
}
