import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Wishlist = () => {
  const { ids } = useWishlist();
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Saved</p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">Wishlist</h1>
          <p className="mt-2 text-sm text-muted-foreground">{saved.length} item{saved.length !== 1 ? "s" : ""}</p>
        </div>

        {saved.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {saved.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Heart className="mx-auto mb-4 h-12 w-12 text-muted-foreground/40" />
            <p className="text-muted-foreground">Your wishlist is empty.</p>
            <Button asChild variant="outline" className="mt-4 rounded-none">
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
