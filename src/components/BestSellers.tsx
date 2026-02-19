import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { formatPrice } from "@/lib/format";

// Top sellers = first product from each category + featured
const bestSellers = products.filter((p) => p.featured).slice(0, 6);

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section ref={ref} className={`py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Popular</p>
            <h2 className="mt-2 font-heading text-4xl tracking-wide sm:text-5xl">Best Sellers</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide sm:px-[max(1rem,calc((100vw-1400px)/2+2rem))]"
        style={{ scrollbarWidth: "none" }}
      >
        {bestSellers.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group flex-none w-[260px] sm:w-[300px] snap-start"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wider text-white">Shop Now</span>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
