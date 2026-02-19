import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

type SortOption = "newest" | "price-asc" | "price-desc" | "name";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [sort, setSort] = useState<SortOption>((searchParams.get("sort") as SortOption) || "newest");

  // Sync sort state to URL, or just let state handle it? 
  // Standard pattern: if URL changes -> state changes? 
  // Or if state changes -> URL changes?
  // For simplicity, just reading initial value is enough for the link to work.

  const filtered = useMemo(() => {
    let list = activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

    switch (sort) {
      case "newest":
        list = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [activeCategory, sort]);

  const setCategory = (slug: string) => {
    if (slug === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Collection</p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {activeCategory === "all" ? "All Products" : categories.find(c => c.slug === activeCategory)?.name || "Shop"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{filtered.length} products</p>
        </div>

        {/* Filters & Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="sm"
              className="rounded-none text-xs tracking-wider uppercase"
              onClick={() => setCategory("all")}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.slug}
                variant={activeCategory === cat.slug ? "default" : "outline"}
                size="sm"
                className="rounded-none text-xs tracking-wider uppercase"
                onClick={() => setCategory(cat.slug)}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger className="w-[160px] rounded-none text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low → High</SelectItem>
                <SelectItem value="price-desc">Price: High → Low</SelectItem>
                <SelectItem value="name">Name: A → Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="animate-stagger-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No products found in this category.</p>
            <Button asChild variant="outline" className="mt-4 rounded-none">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
