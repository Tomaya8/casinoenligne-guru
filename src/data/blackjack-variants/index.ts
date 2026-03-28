import { BlackjackVariant } from "./types";
import { variantsGroup1 } from "./variants-group1";
import { variantsGroup2 } from "./variants-group2";
import { variantsGroup3 } from "./variants-group3";

export const allBlackjackVariants: BlackjackVariant[] = [
  ...variantsGroup1,
  ...variantsGroup2,
  ...variantsGroup3,
];

export function getBlackjackVariantBySlug(slug: string): BlackjackVariant | undefined {
  return allBlackjackVariants.find((v) => v.slug === slug);
}
