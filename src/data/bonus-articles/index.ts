import { BonusArticle } from "./types";
import { bonusBienvenue } from "./bonus-bienvenue";
import { bonusSansDepot } from "./bonus-sans-depot";
import { cashbackCasino } from "./cashback-casino";
import { toursGratuits } from "./tours-gratuits";

export const allBonusArticles: BonusArticle[] = [
  bonusBienvenue,
  bonusSansDepot,
  cashbackCasino,
  toursGratuits,
];

export function getBonusArticleBySlug(slug: string): BonusArticle | undefined {
  return allBonusArticles.find((a) => a.slug === slug);
}
