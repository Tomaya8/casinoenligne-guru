export interface BlackjackStrategy {
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  headerImage: string;
  headerImageAlt: string;
  difficulty: string;
  effectiveness: string;
  legalStatus: string;
  sections: { heading: string; content: string; image?: string; imageAlt?: string }[];
  pros: string[];
  cons: string[];
  rules: string[];
  faqs: { question: string; answer: string }[];
  verdict: string;
}
