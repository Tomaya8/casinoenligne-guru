import { PokerVariant } from "./types";
import { allPokerVariants } from "./variants";

export { allPokerVariants };
export type { PokerVariant };

export function getPokerVariantBySlug(slug: string): PokerVariant | undefined {
  return allPokerVariants.find((v) => v.slug === slug);
}
