import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        category: "Orders & Shipping",
        questions: [
            {
                q: "How long does shipping take?",
                a: "Standard shipping takes 3–5 business days within the US. International orders typically arrive in 7–14 business days depending on your location. You'll receive a tracking number via email once your order ships.",
            },
            {
                q: "Do you ship internationally?",
                a: "Yes! We ship worldwide. International shipping rates and delivery times vary by destination. Customs duties and taxes may apply and are the responsibility of the buyer.",
            },
            {
                q: "Is shipping free?",
                a: "We offer free standard shipping on all orders over $100. Orders under $100 have a flat shipping rate of $8.",
            },
            {
                q: "Can I track my order?",
                a: "Absolutely. Once your order is shipped, you'll receive an email with your tracking number and a link to track your package in real-time.",
            },
        ],
    },
    {
        category: "Sizing & Fit",
        questions: [
            {
                q: "How do your sizes run?",
                a: "All our garments are designed with an oversized, relaxed fit. If you prefer a more fitted look, we recommend sizing down. Check the size guide on each product page for specific measurements.",
            },
            {
                q: "Do you have a size guide?",
                a: "Yes, each product page has a detailed size guide with exact measurements for chest, length, sleeve, and more. Click the 'Size Guide' button next to the size selector.",
            },
            {
                q: "Are your clothes unisex?",
                a: "Yes! Every piece in our collection is designed to be unisex. Our relaxed silhouettes work for all body types.",
            },
        ],
    },
    {
        category: "Returns & Exchanges",
        questions: [
            {
                q: "What is your return policy?",
                a: "We accept returns within 30 days of delivery for unworn, unwashed items with original tags attached. Items must be in their original condition. Sale items are final sale.",
            },
            {
                q: "How do I start a return?",
                a: "Email us at hello@xovato.com with your order number and reason for return. We'll send you a prepaid return label and instructions within 24 hours.",
            },
            {
                q: "Can I exchange for a different size?",
                a: "Yes! Contact us within 30 days of delivery and we'll arrange an exchange, subject to availability. If your desired size is out of stock, we'll issue a full refund.",
            },
            {
                q: "How long do refunds take?",
                a: "Once we receive your returned item, refunds are processed within 3–5 business days. The refund will appear on your original payment method.",
            },
        ],
    },
    {
        category: "Products & Care",
        questions: [
            {
                q: "What materials do you use?",
                a: "We use premium heavyweight fabrics — our hoodies are crafted from 400gsm cotton fleece, our tees from 220gsm organic cotton. Every piece is built to last.",
            },
            {
                q: "How should I care for my XOVATO pieces?",
                a: "Machine wash cold with like colors. Tumble dry low or hang to dry for best results. Our heavyweight fabrics are designed to get softer and better with every wash. Avoid bleach and ironing directly on prints.",
            },
            {
                q: "Do you restock sold-out items?",
                a: "Our collections are produced in small batches. Once a piece sells out, it's typically gone for good. Follow us on social media or subscribe to our newsletter to be first to know about new drops.",
            },
        ],
    },
];

const FAQ = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-12">
                <div className="mb-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                        Help
                    </p>
                    <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Everything you need to know about XOVATO STREETWEAR.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-10">
                    {faqs.map((section) => (
                        <div key={section.category}>
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {section.category}
                            </h2>
                            <Accordion type="single" collapsible className="border border-border">
                                {section.questions.map((faq, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`${section.category}-${i}`}
                                        className="border-border px-5"
                                    >
                                        <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}

                    {/* Still have questions? */}
                    <div className="border-t border-border pt-10 text-center">
                        <h2 className="font-heading text-2xl font-bold tracking-tight">
                            Still Have Questions?
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            We're here to help. Reach out and we'll get back to you within 24
                            hours.
                        </p>
                        <Button asChild className="mt-6 rounded-none tracking-wider uppercase text-xs">
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQ;
