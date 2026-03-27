import { GuideArticle } from "./types";
import { liveCasinoArticles } from "./live-casino";
import { casinoMobileArticles } from "./casino-mobile";
import { cryptoCasinoArticles } from "./crypto-casino";
import { slotsAvanceArticles } from "./slots-avance";
import { securiteCasinoArticles } from "./securite-casino";

export const allGuideArticles: GuideArticle[] = [
  ...liveCasinoArticles,
  ...casinoMobileArticles,
  ...cryptoCasinoArticles,
  ...slotsAvanceArticles,
  ...securiteCasinoArticles,
];

export function getAllGuideArticles(): GuideArticle[] {
  return allGuideArticles;
}

export function getGuideArticleBySlug(slug: string): GuideArticle | undefined {
  return allGuideArticles.find((a) => a.slug === slug);
}

export function getGuideArticlesByTopic(topic: string): GuideArticle[] {
  return allGuideArticles.filter((a) => a.topic === topic);
}
