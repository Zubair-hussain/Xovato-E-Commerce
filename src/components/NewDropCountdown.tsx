import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const target = new Date("2026-03-15T00:00:00");

function getTimeLeft() {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: diff === 0,
  };
}

const NewDropCountdown = () => {
  const [time, setTime] = useState(getTimeLeft);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  useEffect(() => {
    if (time.expired) return;
    const id = setInterval(() => setTime(getTimeLeft), 1000);
    return () => clearInterval(id);
  }, [time.expired]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section ref={ref} className={`bg-foreground text-background py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container mx-auto px-4 text-center">
        {time.expired ? (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-accent">Now Available</p>
            <h2 className="mt-3 font-heading text-5xl tracking-wide sm:text-6xl">DROP IS LIVE</h2>
            <p className="mt-6 text-sm text-background/60">
              SS26 Collection — Limited quantities. Don't sleep on it.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-none px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/shop?sort=newest">Shop the Drop</Link>
            </Button>
          </>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-accent">Upcoming</p>
            <h2 className="mt-3 font-heading text-5xl tracking-wide sm:text-6xl">NEW DROP IN</h2>
            <div className="mt-10 flex justify-center gap-4 sm:gap-8">
              {units.map((u) => (
                <div key={u.label} className="flex flex-col items-center">
                  <span className="font-heading text-5xl sm:text-7xl leading-none">
                    {String(u.value).padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-background/50">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-background/60">
              SS26 Collection — Limited quantities. No restocks.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default NewDropCountdown;

