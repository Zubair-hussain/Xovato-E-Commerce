import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-[0.2em] uppercase">XOVATO</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Streetwear that actually fits how you live. Premium pieces that work for everybody, made for people who give a damn about what they wear and the culture behind it.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Shop</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Hoodies", href: "/shop?category=hoodies" },
                { label: "Tees", href: "/shop?category=tees" },
                { label: "Pants", href: "/shop?category=pants" },
                { label: "Accessories", href: "/shop?category=accessories" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Company</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Shipping & Returns", href: "/shipping-returns" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Follow</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "TikTok", href: "https://tiktok.com" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2026 XOVATO STREETWEAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

