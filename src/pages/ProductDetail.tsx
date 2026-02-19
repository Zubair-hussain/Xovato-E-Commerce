import { useState, useMemo } from "react";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SizeGuideModal from "@/components/SizeGuideModal";
import ProductReviews from "@/components/ProductReviews";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/format";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const recentIds = useRecentlyViewed(product?.id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const recentProducts = useMemo(
    () => recentIds.map((rid) => products.find((p) => p.id === rid)).filter(Boolean).slice(0, 4),
    [recentIds]
  );

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-12 text-center">
          <h1 className="font-heading text-2xl font-bold">Product not found</h1>
          <Button asChild variant="outline" className="mt-6 rounded-none">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, quantity);
    toast.success(`${product.name} added to cart`);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">

          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden bg-secondary">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`aspect-square cursor-pointer overflow-hidden bg-secondary ${activeImageIndex === i ? "ring-2 ring-foreground" : "opacity-60 hover:opacity-100"
                    } transition-opacity`}
                >
                  <img src={product.image} alt={`${product.name} view ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{product.category}</p>
            <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-2xl font-semibold">{formatPrice(product.price)}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            {/* Size Selector */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">Size</p>
                <SizeGuideModal category={product.category} />
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-11 min-w-[48px] items-center justify-center border px-4 text-sm font-medium transition-colors ${selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-11 w-11 items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-11 w-14 items-center justify-center text-sm font-medium border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-11 w-11 items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              className="mt-8 h-13 rounded-none text-sm font-semibold tracking-[0.2em] uppercase"
              disabled={!selectedSize}
              onClick={handleAddToCart}
            >
              {selectedSize ? "Add to Cart" : "Select a Size"}
            </Button>

            {/* Details */}
            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">Details</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Premium quality materials</li>
                  <li>Unisex relaxed fit</li>
                  <li>Machine washable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">Shipping</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Free shipping on orders over $100. Standard delivery 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ProductReviews productId={product.id} />

        {related.length > 0 && (
          <section className="mt-20 border-t border-border pt-16">
            <h2 className="mb-8 font-heading text-2xl font-bold tracking-tight">You Might Also Like</h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {related.map((p, i) => (
                <div key={p.id} className="animate-stagger-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        )}

        {recentProducts.length > 0 && (
          <section className="mt-20 border-t border-border pt-16">
            <h2 className="mb-8 font-heading text-2xl font-bold tracking-tight">Recently Viewed</h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {recentProducts.map((p, i) => (
                <div key={p!.id} className="animate-stagger-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ProductCard product={p!} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
