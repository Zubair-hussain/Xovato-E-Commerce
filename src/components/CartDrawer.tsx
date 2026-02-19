import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/format";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md p-0">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="font-heading text-lg font-bold tracking-wide uppercase">
            Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">Your cart is empty</p>
            <Button
              asChild
              variant="outline"
              className="rounded-none tracking-wider uppercase text-xs"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-secondary">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-0.5">
                    <div>
                      <h4 className="text-sm font-medium leading-tight">{item.product.name}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">Size: {item.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center hover:bg-secondary transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="flex h-8 w-10 items-center justify-center text-xs font-medium border-x border-border">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center hover:bg-secondary transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping calculated at checkout</p>
              <Button
                asChild
                className="w-full rounded-none h-12 text-sm font-semibold tracking-[0.2em] uppercase"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/checkout">Checkout</Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full text-xs tracking-wider uppercase"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
