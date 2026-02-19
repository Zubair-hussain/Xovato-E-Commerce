import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FeaturedProducts = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={`container mx-auto px-4 py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Curated</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Featured Picks</h2>
        </div>
        <Button asChild variant="ghost" className="hidden sm:inline-flex text-sm tracking-wide">
          <Link to="/shop">View All →</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.slice(0, 8).map((product, i) => (
          <div
            key={product.id}
            className={`${visible ? "animate-stagger-in" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mt-10 text-center sm:hidden">
        <Button asChild variant="outline" className="rounded-none tracking-wide">
          <Link to="/shop">View All Products</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
