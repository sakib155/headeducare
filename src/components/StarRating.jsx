import { Star } from "lucide-react";

// Dynamic 1-5 star rating. Filled stars amber; remainder dimmed.
// Renders nothing when rating is absent/0 (pre-migration data).
export default function StarRating({ rating, className = "w-4 h-4" }) {
  const score = Math.max(0, Math.min(5, Number(rating) || 0));
  if (score <= 0) return null;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${score} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${className} ${
            i <= score
              ? "fill-amber-400 text-amber-400"
              : "text-slate-300 dark:text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}
