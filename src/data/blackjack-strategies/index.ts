import { BlackjackStrategy } from "./types";
import { allStrategies } from "./strategies";

export { allStrategies };
export type { BlackjackStrategy };

export function getStrategyBySlug(slug: string): BlackjackStrategy | undefined {
  return allStrategies.find((s) => s.slug === slug);
}
