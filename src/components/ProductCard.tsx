import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";

const ProductCard = ({ product }: { product: Product }) => {
  const { toggle, has } = useWishlist();
  const { addItem } = useCart();
  const liked = has(product.id);

  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -6, boxShadow: "0 12px 32px -8px hsl(0 0% 0% / 0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="text-sm font-medium tracking-wide transition-colors duration-200 group-hover:text-accent">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <div className="absolute right-2 top-2 z-10 flex flex-col gap-2 transition-opacity group-hover:opacity-100 sm:opacity-0">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(product.id);
            toast.success(liked ? "Removed from wishlist" : "Added to wishlist");
          }}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              liked ? "fill-destructive text-destructive" : "text-foreground"
            )}
          />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            // Default to first size for quick add
            addItem(product, product.sizes[0]);
            toast.success("Added to cart");
          }}
          aria-label="Quick add to cart"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <ShoppingBag className="h-4 w-4 text-foreground" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

