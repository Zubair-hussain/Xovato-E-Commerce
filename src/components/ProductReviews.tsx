import { useMemo } from "react";
import StarRating from "@/components/StarRating";
import { getReviewsForProduct, getAverageRating } from "@/data/reviews";
import { Badge } from "@/components/ui/badge";

const ProductReviews = ({ productId }: { productId: string }) => {
  const reviews = useMemo(() => getReviewsForProduct(productId), [productId]);
  const avg = getAverageRating(reviews);

  return (
    <section className="mt-20 border-t border-border pt-16">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">Customer Reviews</h2>
          <div className="mt-2 flex items-center gap-3">
            <StarRating rating={Math.round(avg)} />
            <span className="text-sm text-muted-foreground">
              {avg.toFixed(1)} out of 5 · {reviews.length} review{reviews.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Review list */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <article key={review.id} className="border-b border-border/50 pb-8 last:border-0">
            <div className="flex items-center gap-3">
              <StarRating rating={review.rating} size={14} />
              {review.verified && (
                <Badge variant="secondary" className="rounded-none text-[10px] uppercase tracking-wider">
                  Verified
                </Badge>
              )}
            </div>
            <h3 className="mt-2 text-sm font-semibold">{review.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{review.body}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              {review.author} · {new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;
