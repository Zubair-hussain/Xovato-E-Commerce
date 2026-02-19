import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={`container mx-auto px-4 py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Stay Connected</p>
        <h2 className="mt-2 mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Join the Culture</h2>
        <p className="mb-8 text-sm text-muted-foreground">
          Early access to drops, exclusive pieces, and no spam. Ever.
        </p>
        {submitted ? (
          <p className="text-sm font-medium">You're in. Welcome to XOVATO STREETWEAR.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-none flex-1"
            />
            <Button type="submit" className="rounded-none px-8 text-sm tracking-wider uppercase">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
