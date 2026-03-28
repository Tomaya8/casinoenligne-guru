import { PokerStrategy } from "./types";
import { allPokerStrategies } from "./strategies";

export { allPokerStrategies };
export type { PokerStrategy };

export function getPokerStrategyBySlug(slug: string): PokerStrategy | undefined {
  return allPokerStrategies.find((s) => s.slug === slug);
}
