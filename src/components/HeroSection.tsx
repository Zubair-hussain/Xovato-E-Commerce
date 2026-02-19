import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setOffset(window.scrollY * 0.35);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img
        src={heroBanner}
        alt="XOVATO streetwear collection"
        className="absolute inset-0 h-[120%] w-full object-cover animate-ken-burns will-change-transform"
        style={{ transform: `translateY(${offset * 0.5}px) scale(${1 + offset * 0.0002})` }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 text-center">
        <p
          className="text-xs font-medium uppercase tracking-[0.5em] text-accent animate-fade-in"
        >
          New Drop 2026
        </p>
        <h1
          className="mt-4 font-heading text-7xl tracking-wider uppercase text-white sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          Built For<br />The Streets
        </h1>
        <p
          className="mt-6 max-w-lg text-sm text-white/80 sm:text-base animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Streetwear that actually fits how you live. Premium pieces that work for everybody, made for people who give a damn about what they wear and the culture behind it.
        </p>
        <div
          className="mt-8 flex flex-wrap justify-center gap-3 px-4 animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          <Button
            asChild
            size="lg"
            className="btn-glow rounded-none px-8 sm:px-12 py-6 text-sm font-semibold tracking-[0.2em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-200 hover:scale-105"
          >
            <Link to="/shop">Shop Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none px-6 sm:px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase border-white/60 text-white bg-black/30 hover:bg-white/10 hover:border-white hover:text-white transition-transform duration-200 hover:scale-105"
          >
            <Link to="/shop">Explore Collection</Link>
          </Button>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
