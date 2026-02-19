import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success("Message sent! We'll get back to you soon.");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-12">
                <div className="mb-10">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                        Get In Touch
                    </p>
                    <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Contact Us
                    </h1>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
                    {/* Contact Form */}
                    <div>
                        {submitted ? (
                            <div className="py-20 text-center">
                                <Send className="mx-auto mb-4 h-12 w-12 text-accent" />
                                <h2 className="font-heading text-2xl font-bold">
                                    Message Received
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    We'll get back to you within 24 hours.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-6 rounded-none"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <Label className="text-xs font-medium">Name</Label>
                                        <Input
                                            className="mt-1.5 rounded-none"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-xs font-medium">Email</Label>
                                        <Input
                                            type="email"
                                            className="mt-1.5 rounded-none"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label className="text-xs font-medium">Subject</Label>
                                    <Input
                                        className="mt-1.5 rounded-none"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label className="text-xs font-medium">Message</Label>
                                    <textarea
                                        className="mt-1.5 w-full min-h-[160px] rounded-none border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
                                        placeholder="Tell us what's on your mind..."
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="h-12 rounded-none px-10 text-sm font-semibold tracking-[0.2em] uppercase"
                                >
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-8 lg:sticky lg:top-24 h-fit">
                        <div className="border border-border p-6 space-y-6">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">
                                Contact Info
                            </h2>
                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Email</p>
                                        <a
                                            href="mailto:hello@xovato.com"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            hello@xovato.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Phone / WhatsApp</p>
                                        <a
                                            href="tel:+1234567890"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Location</p>
                                        <p className="text-sm text-muted-foreground">
                                            Based worldwide. Ships globally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-border p-6 space-y-4">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">
                                Response Time
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We typically respond within 24 hours on business days. For
                                urgent order inquiries, reach out via WhatsApp for faster
                                support.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
