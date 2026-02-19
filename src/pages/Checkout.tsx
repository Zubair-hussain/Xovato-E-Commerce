import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formatPrice } from "@/lib/format";

const checkoutSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Valid phone number required").max(20),
  address: z.string().trim().min(1, "Address is required").max(200),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
  zip: z.string().trim().min(3, "ZIP code is required").max(20),
  country: z.string().trim().min(1, "Country is required").max(100),
});

type FormData = z.infer<typeof checkoutSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const emptyForm: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", state: "", zip: "", country: "",
};

const Checkout = () => {
  const { items, subtotal, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: emptyForm,
  });

  const shipping = subtotal >= 100 ? 0 : 8;
  const total = subtotal + shipping;

  const onSubmit = async (data: FormData) => {
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1200));
    clearCart();
    navigate("/order-confirmation");
  };

  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-12 text-center">
          <h1 className="font-heading text-2xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-sm text-muted-foreground">Add some items before checking out.</p>
          <Button asChild variant="outline" className="mt-6 rounded-none">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-10">Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
            {/* Left — Form */}
            <div className="space-y-10">
              {/* Customer Info */}
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6">Customer Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First Name" error={errors.firstName?.message} {...register("firstName")} />
                  <Field label="Last Name" error={errors.lastName?.message} {...register("lastName")} />
                  <Field label="Email" type="email" error={errors.email?.message} {...register("email")} className="sm:col-span-2" />
                  <Field label="Phone" type="tel" error={errors.phone?.message} {...register("phone")} className="sm:col-span-2" />
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6">Shipping Address</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Address" error={errors.address?.message} {...register("address")} className="sm:col-span-2" />
                  <Field label="City" error={errors.city?.message} {...register("city")} />
                  <Field label="State / Province" error={errors.state?.message} {...register("state")} />
                  <Field label="ZIP / Postal Code" error={errors.zip?.message} {...register("zip")} />
                  <Field label="Country" error={errors.country?.message} {...register("country")} />
                </div>
              </section>

              {/* Payment placeholder */}
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4">Payment</h2>
                <div className="border border-dashed border-border p-6 text-center">
                  <p className="text-sm text-muted-foreground">Payment integration coming soon.</p>
                  <p className="mt-1 text-xs text-muted-foreground">Orders are placed as demos for now.</p>
                </div>
              </section>
            </div>

            {/* Right — Order Summary */}
            <div className="lg:sticky lg:top-24 h-fit order-first lg:order-last">
              <div className="border border-border p-6 space-y-5">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">Order Summary</h2>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                      <div className="h-16 w-14 flex-shrink-0 overflow-hidden bg-secondary">
                        <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Size: {item.size} · Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold whitespace-nowrap">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-base font-semibold pt-2 border-t border-border">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-none text-sm font-semibold tracking-[0.2em] uppercase"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

/* Reusable field component */
function Field({
  label, error, className = "", ...props
}: {
  label: string; error?: string; className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label className="text-xs font-medium">{label}</Label>
      <Input
        className={`mt-1.5 rounded-none ${error ? "border-destructive" : ""}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export default Checkout;
