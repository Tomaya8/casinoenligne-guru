import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3 && rating - fullStars < 0.8;
  const roundedUp = rating - fullStars >= 0.8;

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Note : ${rating.toFixed(1)} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= fullStars || (roundedUp && star <= fullStars + 1);
        const half = !filled && hasHalf && star === fullStars + 1;

        if (half) {
          return (
            <span key={star} className="relative" style={{ width: size, height: size }}>
              <Star className="absolute inset-0 text-border-light" size={size} />
              <StarHalf className="absolute inset-0 text-accent-gold fill-accent-gold" size={size} />
            </span>
          );
        }

        return (
          <Star
            key={star}
            className={filled ? "text-accent-gold fill-accent-gold" : "text-border-light"}
            size={size}
          />
        );
      })}
      <span className="ml-1.5 text-sm font-semibold text-accent-gold">{rating.toFixed(1)}</span>
    </div>
  );
}
