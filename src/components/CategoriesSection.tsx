import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import categoryHoodies from "@/assets/category-hoodies.jpg";
import categoryTees from "@/assets/category-tees.jpg";
import categoryPants from "@/assets/category-pants.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categoryImages: Record<string, string> = {
  hoodies: categoryHoodies,
  tees: categoryTees,
  pants: categoryPants,
  accessories: categoryAccessories,
};

const cats = [
  { name: "Hoodies", slug: "hoodies" },
  { name: "Tees", slug: "tees" },
  { name: "Pants", slug: "pants" },
  { name: "Accessories", slug: "accessories" },
];

const CategoriesSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={`container mx-auto px-4 py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Browse</p>
      <h2 className="mt-2 mb-12 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Categories</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {cats.map((cat, i) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className={`group relative aspect-[3/4] overflow-hidden bg-secondary transition-transform duration-300 hover:-translate-y-1 ${visible ? "animate-stagger-in" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img
              src={categoryImages[cat.slug]}
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="font-heading text-lg font-bold tracking-wide text-white uppercase">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
