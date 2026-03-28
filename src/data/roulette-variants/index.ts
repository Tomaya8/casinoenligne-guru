import { RouletteVariant } from "./types";
import { allRouletteVariants as baseVariants } from "./variants";
import { extraRouletteVariants } from "./variants-extra";

export const allRouletteVariants: RouletteVariant[] = [...baseVariants, ...extraRouletteVariants];
export type { RouletteVariant };

export function getRouletteVariantBySlug(slug: string): RouletteVariant | undefined {
  return allRouletteVariants.find((v) => v.slug === slug);
}
