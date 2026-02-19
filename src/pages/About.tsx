import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={heroBanner}
            alt="XOVATO brand story"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="font-heading text-4xl font-bold tracking-[0.15em] uppercase text-white sm:text-5xl md:text-6xl animate-fade-in">
              Our Story
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Founded 2024</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Built for the Culture</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              XOVATO STREETWEAR was born from a simple idea: streetwear should feel as good as it looks. We were tired of choosing between quality and style, between comfort and design. So we stopped choosing.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Every piece is crafted with heavyweight fabrics, intentional cuts, and a no-logo philosophy. We believe the garment should speak for itself — no loud branding, no fast-fashion shortcuts, no compromises.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Our collections are designed in small batches to reduce waste and keep things exclusive. When a drop sells out, it's gone. This isn't scarcity marketing — it's how we make sure every piece gets the attention it deserves.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-center mb-14">What We Stand For</h2>
            <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                { title: "Quality First", desc: "400gsm cotton, reinforced stitching, and fabrics that get better with every wash." },
                { title: "Unisex Always", desc: "Our silhouettes are designed for every body. No gendered sections, no limitations." },
                { title: "Less is More", desc: "Minimal branding, maximum impact. We let the design and craft do the talking." },
              ].map((v, i) => (
                <div key={v.title} className="text-center space-y-3 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                  <h3 className="font-heading text-lg font-bold">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-4">Ready to Redefine Your Style?</h2>
          <p className="text-muted-foreground mb-8 text-sm">Explore the latest collection.</p>
          <a
            href="/shop"
            className="inline-flex h-12 items-center justify-center bg-foreground px-12 text-sm font-semibold tracking-[0.2em] uppercase text-background transition-opacity hover:opacity-90"
          >
            Shop Now
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
