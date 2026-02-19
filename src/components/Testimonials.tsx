import { useRef, useState, useEffect } from "react";
import { testimonials } from "@/data/products";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const { ref: sectionRef, visible } = useScrollReveal<HTMLElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-secondary transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Reviews</p>
            <h2 className="mt-2 font-heading text-4xl tracking-wide sm:text-5xl">What People Say</h2>
            <p className="mt-3 text-sm text-muted-foreground">Real feedback from our community.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide sm:px-[max(1rem,calc((100vw-1400px)/2+2rem))]"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className="group flex-none w-[300px] sm:w-[360px] snap-start bg-background p-6 sm:p-8 flex flex-col justify-between border border-border hover:border-accent/40 transition-colors duration-300"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div>
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${j < t.rating ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
            </div>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-sm font-semibold">{t.name}</p>
              <div className="mt-1.5 flex flex-col gap-1">
                {t.product && (
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShoppingBag className="h-3 w-3" />
                    {t.product}
                  </span>
                )}
                {t.location && (
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {t.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 py-6 border-t border-border">
          <div className="text-center">
            <p className="font-heading text-3xl sm:text-4xl">4.8</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Avg Rating</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl sm:text-4xl">2,400+</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl sm:text-4xl">98%</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
