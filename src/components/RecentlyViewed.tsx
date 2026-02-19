import { useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const RecentlyViewed = () => {
  const recentIds = useRecentlyViewed();
  const { ref, visible } = useScrollReveal<HTMLElement>();

  const recentProducts = useMemo(
    () => recentIds.map((id) => products.find((p) => p.id === id)).filter(Boolean).slice(0, 4),
    [recentIds]
  );

  if (recentProducts.length === 0) return null;

  return (
    <section
      ref={ref}
      className={`container mx-auto px-4 py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Continue Browsing</p>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Recently Viewed</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {recentProducts.map((product, i) => (
          <div
            key={product!.id}
            className="animate-stagger-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <ProductCard product={product!} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
