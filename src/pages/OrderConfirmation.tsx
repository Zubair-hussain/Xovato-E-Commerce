import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  const orderNumber = `XOVATO-${Date.now().toString(36).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-lg text-center space-y-6">
          <CheckCircle className="mx-auto h-16 w-16 text-foreground" strokeWidth={1.2} />
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Order Confirmed</h1>
          <p className="text-sm text-muted-foreground">
            Thank you for your order. We'll send a confirmation email with tracking details shortly.
          </p>
          <div className="border border-border p-6 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order Number</span>
              <span className="font-mono font-semibold">{orderNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Estimated Delivery</span>
              <span>3–5 business days</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild className="rounded-none tracking-wider uppercase text-xs">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none tracking-wider uppercase text-xs">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
