import { GameReview, ProviderContent } from "./types";
import { netentReviews, netentContent } from "./netent";
import { evolutionReviews, evolutionContent } from "./evolution";
import { pragmaticReviews, pragmaticContent } from "./pragmatic";
import { microgamingReviews, microgamingContent } from "./microgaming";
import { playngoReviews, playngoContent } from "./playngo";

export const allGameReviews: GameReview[] = [
  ...netentReviews,
  ...evolutionReviews,
  ...pragmaticReviews,
  ...microgamingReviews,
  ...playngoReviews,
];

export const allProviderContents: ProviderContent[] = [
  netentContent,
  evolutionContent,
  pragmaticContent,
  microgamingContent,
  playngoContent,
];

export function getGameReview(providerSlug: string, gameSlug: string): GameReview | undefined {
  return allGameReviews.find((g) => g.providerSlug === providerSlug && g.slug === gameSlug);
}

export function getGameReviewsByProvider(providerSlug: string): GameReview[] {
  return allGameReviews.filter((g) => g.providerSlug === providerSlug);
}

export function getProviderContent(slug: string): ProviderContent | undefined {
  return allProviderContents.find((p) => p.slug === slug);
}
