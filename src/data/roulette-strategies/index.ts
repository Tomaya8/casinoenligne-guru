import { RouletteStrategy } from "./types";
import { allRouletteStrategies } from "./strategies";

export { allRouletteStrategies };
export type { RouletteStrategy };

export function getRouletteStrategyBySlug(slug: string): RouletteStrategy | undefined {
  return allRouletteStrategies.find((s) => s.slug === slug);
}
