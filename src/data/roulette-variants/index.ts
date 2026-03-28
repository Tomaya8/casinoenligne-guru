import { RouletteVariant } from "./types";
import { allRouletteVariants } from "./variants";

export { allRouletteVariants };
export type { RouletteVariant };

export function getRouletteVariantBySlug(slug: string): RouletteVariant | undefined {
  return allRouletteVariants.find((v) => v.slug === slug);
}
