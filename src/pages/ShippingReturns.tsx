import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, RefreshCw, Clock, Globe, Shield, Package } from "lucide-react";

const policies = [
    {
        icon: Truck,
        title: "Standard Shipping",
        details: [
            "3–5 business days within the US",
            "Free on orders over $100",
            "$8 flat rate on orders under $100",
            "Tracking number provided via email",
        ],
    },
    {
        icon: Globe,
        title: "International Shipping",
        details: [
            "7–14 business days worldwide",
            "Rates calculated at checkout",
            "Customs duties may apply at destination",
            "Full tracking included on all orders",
        ],
    },
    {
        icon: Clock,
        title: "Processing Time",
        details: [
            "Orders placed before 2PM EST ship same day",
            "Weekend orders ship Monday",
            "High-demand drops may take 1–2 extra days",
            "You'll receive a confirmation email immediately",
        ],
    },
];

const returnSteps = [
    {
        step: 1,
        title: "Initiate Return",
        desc: "Email hello@xovato.com with your order number and reason for return.",
    },
    {
        step: 2,
        title: "Ship It Back",
        desc: "We'll send a prepaid return label within 24 hours. Pack items securely.",
    },
    {
        step: 3,
        title: "Get Refunded",
        desc: "Refund processed within 3–5 business days of receiving your return.",
    },
];

const ShippingReturns = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-12">
                <div className="mb-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                        Policies
                    </p>
                    <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Shipping & Returns
                    </h1>
                </div>

                {/* Shipping Section */}
                <section className="mb-16">
                    <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Shipping
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {policies.map((policy) => (
                            <div
                                key={policy.title}
                                className="border border-border p-6 space-y-4"
                            >
                                <policy.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                                <h3 className="font-heading text-lg font-bold">{policy.title}</h3>
                                <ul className="space-y-2">
                                    {policy.details.map((d, i) => (
                                        <li
                                            key={i}
                                            className="text-sm text-muted-foreground flex items-start gap-2"
                                        >
                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Returns Section */}
                <section className="mb-16">
                    <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Returns & Exchanges
                    </h2>

                    <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="border border-border p-6 flex items-start gap-4">
                            <RefreshCw className="h-5 w-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <div>
                                <h3 className="text-sm font-semibold">30-Day Returns</h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Return unworn items within 30 days with original tags.
                                </p>
                            </div>
                        </div>
                        <div className="border border-border p-6 flex items-start gap-4">
                            <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <div>
                                <h3 className="text-sm font-semibold">Quality Guarantee</h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Received a defective item? We'll replace it immediately, no questions asked.
                                </p>
                            </div>
                        </div>
                        <div className="border border-border p-6 flex items-start gap-4">
                            <Package className="h-5 w-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <div>
                                <h3 className="text-sm font-semibold">Free Exchanges</h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Wrong size? Exchange for free within 30 days, subject to availability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Return Process Steps */}
                    <h3 className="mb-6 text-sm font-semibold">How Returns Work</h3>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {returnSteps.map((s) => (
                            <div key={s.step} className="flex gap-4">
                                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-foreground text-background text-sm font-bold">
                                    {s.step}
                                </span>
                                <div>
                                    <h4 className="text-sm font-semibold">{s.title}</h4>
                                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Return Policy Details */}
                <section className="mb-16 mx-auto max-w-3xl">
                    <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Policy Details
                    </h2>
                    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                        <p>
                            <strong className="text-foreground">Eligible Items:</strong> All
                            full-price items are eligible for return or exchange within 30 days
                            of delivery. Items must be unworn, unwashed, and in original
                            condition with tags attached.
                        </p>
                        <p>
                            <strong className="text-foreground">Final Sale Items:</strong>{" "}
                            Items marked as "final sale" or purchased at a discount cannot be
                            returned or exchanged.
                        </p>
                        <p>
                            <strong className="text-foreground">Damaged or Defective:</strong>{" "}
                            If you receive a damaged or defective item, please contact us
                            within 48 hours of delivery with photos. We'll arrange a free
                            return and send a replacement immediately.
                        </p>
                        <p>
                            <strong className="text-foreground">Refund Method:</strong> Refunds
                            are issued to the original payment method. Please allow 3–5
                            business days for processing after we receive the return.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-border pt-10 text-center">
                    <h2 className="font-heading text-2xl font-bold tracking-tight">
                        Need Help?
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Our team is ready to assist with any shipping or return questions.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild className="rounded-none tracking-wider uppercase text-xs">
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-none tracking-wider uppercase text-xs">
                            <Link to="/faq">View FAQ</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ShippingReturns;
