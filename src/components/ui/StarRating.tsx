import { Star } from "lucide-react";

export default function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={star <= Math.round(rating) ? "text-accent-gold fill-accent-gold" : "text-border-light"}
          size={size}
        />
      ))}
      <span className="ml-1.5 text-sm font-semibold text-accent-gold">{rating.toFixed(1)}</span>
    </div>
  );
}
