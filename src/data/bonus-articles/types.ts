export interface BonusArticle {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  headerImage: string;
  headerImageAlt: string;
  sections: { heading: string; content: string; image?: string; imageAlt?: string }[];
  examples: { casino: string; offer: string; wagering: string; verdict: string }[];
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
  tips: string[];
}
