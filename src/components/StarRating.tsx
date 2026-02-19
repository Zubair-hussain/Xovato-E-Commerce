import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={cn(
          "transition-colors",
          i <= rating ? "fill-foreground text-foreground" : "text-border"
        )}
        style={{ width: size, height: size }}
      />
    ))}
  </div>
);

export default StarRating;
