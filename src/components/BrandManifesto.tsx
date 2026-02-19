import { useScrollReveal } from "@/hooks/useScrollReveal";

const BrandManifesto = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary opacity-50" />
      <div
        className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-6xl tracking-wide sm:text-8xl lg:text-9xl">
          NOT FOR EVERYONE.
        </h2>
        <div className="mx-auto mt-8 max-w-md space-y-2">
          <p className="text-sm tracking-wide text-muted-foreground">Built for creators.</p>
          <p className="text-sm tracking-wide text-muted-foreground">Built for rebels.</p>
          <p className="text-sm tracking-wide text-muted-foreground">Built for the streets.</p>
        </div>
        <div className="mx-auto mt-12 h-px w-16 bg-accent" />
      </div>
    </section>
  );
};

export default BrandManifesto;
