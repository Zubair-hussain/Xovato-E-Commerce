import imgH1 from "@/assets/products/h1.jpg";
import imgH2 from "@/assets/products/h2.jpg";
import imgH3 from "@/assets/products/h3.jpg";
import imgH4 from "@/assets/products/h4.jpg";
import imgH5 from "@/assets/products/h5.jpg";
import imgT1 from "@/assets/products/t1.jpg";
import imgT2 from "@/assets/products/t2.jpg";
import imgT3 from "@/assets/products/t3.jpg";
import imgT4 from "@/assets/products/t4.jpg";
import imgT5 from "@/assets/products/t5.jpg";
import imgP1 from "@/assets/products/p1.jpg";
import imgP2 from "@/assets/products/p2.jpg";
import imgP3 from "@/assets/products/p3.jpg";
import imgP4 from "@/assets/products/p4.jpg";
import imgP5 from "@/assets/products/p5.jpg";
import imgA1 from "@/assets/products/a1.jpg";
import imgA2 from "@/assets/products/a2.jpg";
import imgA3 from "@/assets/products/a3.jpg";
import imgA4 from "@/assets/products/a4.jpg";
import imgA5 from "@/assets/products/a5.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "hoodies" | "tees" | "pants" | "accessories";
  sizes: string[];
  image: string;
  featured: boolean;
  createdAt: string;
};

export const products: Product[] = [
  // Hoodies
  { id: "h1", name: "Phantom Oversized Hoodie", description: "Heavyweight 400gsm cotton fleece, dropped shoulders, kangaroo pocket.", price: 128, category: "hoodies", sizes: ["S", "M", "L", "XL"], image: imgH1, featured: true, createdAt: "2024-02-10T10:00:00Z" },
  { id: "h2", name: "Concrete Pullover", description: "Washed-out concrete grey pullover with embossed logo.", price: 115, category: "hoodies", sizes: ["S", "M", "L", "XL"], image: imgH2, featured: true, createdAt: "2024-02-12T14:30:00Z" },
  { id: "h3", name: "Midnight Zip-Up", description: "Full-zip heavyweight hoodie in pitch black.", price: 135, category: "hoodies", sizes: ["S", "M", "L", "XL"], image: imgH3, featured: false, createdAt: "2024-01-25T09:15:00Z" },
  { id: "h4", name: "Sandstorm Hoodie", description: "Sand-washed oversized hoodie with raw hem details.", price: 122, category: "hoodies", sizes: ["S", "M", "L", "XL"], image: imgH4, featured: false, createdAt: "2024-01-20T16:45:00Z" },
  { id: "h5", name: "Fog Layer Hoodie", description: "Double-layered hoodie with contrast inner lining.", price: 142, category: "hoodies", sizes: ["M", "L", "XL"], image: imgH5, featured: true, createdAt: "2024-02-15T11:20:00Z" },

  // Tees
  { id: "t1", name: "Essential Box Tee", description: "220gsm organic cotton, relaxed fit, minimal logo.", price: 48, category: "tees", sizes: ["S", "M", "L", "XL"], image: imgT1, featured: true, createdAt: "2024-03-01T08:00:00Z" },
  { id: "t2", name: "Graphic Wave Tee", description: "Oversized tee with abstract wave print on back.", price: 58, category: "tees", sizes: ["S", "M", "L", "XL"], image: imgT2, featured: true, createdAt: "2024-03-05T13:10:00Z" },
  { id: "t3", name: "Washed Pocket Tee", description: "Vintage wash tee with chest pocket detail.", price: 52, category: "tees", sizes: ["S", "M", "L", "XL"], image: imgT3, featured: false, createdAt: "2024-02-28T15:40:00Z" },
  { id: "t4", name: "Longline Tee", description: "Extended length tee with curved hem.", price: 55, category: "tees", sizes: ["S", "M", "L", "XL"], image: imgT4, featured: false, createdAt: "2024-01-15T10:30:00Z" },
  { id: "t5", name: "Thermal Knit Tee", description: "Textured thermal knit in heavyweight cotton.", price: 62, category: "tees", sizes: ["M", "L", "XL"], image: imgT5, featured: true, createdAt: "2024-03-10T12:00:00Z" },

  // Pants
  { id: "p1", name: "Tactical Cargo Pants", description: "Ripstop cotton with multi-pocket utility design.", price: 138, category: "pants", sizes: ["S", "M", "L", "XL"], image: imgP1, featured: true, createdAt: "2024-02-05T14:00:00Z" },
  { id: "p2", name: "Relaxed Track Pants", description: "Heavyweight French terry with elastic cuffs.", price: 98, category: "pants", sizes: ["S", "M", "L", "XL"], image: imgP2, featured: true, createdAt: "2024-01-30T09:45:00Z" },
  { id: "p3", name: "Wide Leg Trousers", description: "Structured wide-leg silhouette in washed black.", price: 125, category: "pants", sizes: ["S", "M", "L", "XL"], image: imgP3, featured: false, createdAt: "2024-02-18T11:30:00Z" },
  { id: "p4", name: "Parachute Pants", description: "Nylon parachute pants with drawcord waist and ankles.", price: 118, category: "pants", sizes: ["S", "M", "L", "XL"], image: imgP4, featured: false, createdAt: "2024-02-22T16:15:00Z" },
  { id: "p5", name: "Carpenter Jeans", description: "Relaxed carpenter jeans with hammer loop.", price: 132, category: "pants", sizes: ["M", "L", "XL"], image: imgP5, featured: false, createdAt: "2024-01-10T13:20:00Z" },

  // Accessories
  { id: "a1", name: "Logo Cap", description: "Unstructured six-panel cap with embroidered logo.", price: 38, category: "accessories", sizes: ["One Size"], image: imgA1, featured: true, createdAt: "2024-03-08T10:00:00Z" },
  { id: "a2", name: "Crossbody Bag", description: "Ballistic nylon crossbody with zip compartments.", price: 68, category: "accessories", sizes: ["One Size"], image: imgA2, featured: false, createdAt: "2024-01-05T15:00:00Z" },
  { id: "a3", name: "Knit Beanie", description: "Ribbed merino wool beanie, slouch fit.", price: 35, category: "accessories", sizes: ["One Size"], image: imgA3, featured: true, createdAt: "2024-02-25T09:00:00Z" },
  { id: "a4", name: "Canvas Tote", description: "Heavy canvas tote with internal pockets.", price: 45, category: "accessories", sizes: ["One Size"], image: imgA4, featured: false, createdAt: "2024-01-12T14:00:00Z" },
  { id: "a5", name: "Woven Belt", description: "Adjustable woven nylon belt with metal buckle.", price: 32, category: "accessories", sizes: ["One Size"], image: imgA5, featured: false, createdAt: "2024-02-08T11:00:00Z" },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories = [
  { name: "Hoodies", slug: "hoodies", count: products.filter(p => p.category === "hoodies").length },
  { name: "Tees", slug: "tees", count: products.filter(p => p.category === "tees").length },
  { name: "Pants", slug: "pants", count: products.filter(p => p.category === "pants").length },
  { name: "Accessories", slug: "accessories", count: products.filter(p => p.category === "accessories").length },
] as const;

export const testimonials = [
  { id: 1, name: "Alex M.", text: "Best quality streetwear I've found. The hoodie weight is insane.", rating: 5, product: "Phantom Oversized Hoodie", location: "Los Angeles, CA" },
  { id: 2, name: "Jordan K.", text: "Clean designs, no unnecessary branding. Exactly what I was looking for.", rating: 5, product: "Essential Box Tee", location: "Brooklyn, NY" },
  { id: 3, name: "Sam R.", text: "The cargo pants are a staple now. Comfortable and look great with everything.", rating: 5, product: "Tactical Cargo Pants", location: "Toronto, CA" },
  { id: 4, name: "Taylor P.", text: "Sizing is perfect. Oversized without being sloppy. Will buy again.", rating: 4, product: "Concrete Pullover", location: "London, UK" },
  { id: 5, name: "Riley N.", text: "Ordered two hoodies and a tee. Every piece feels premium. This is my go-to brand now.", rating: 5, product: "Fog Layer Hoodie", location: "Melbourne, AU" },
  { id: 6, name: "Casey W.", text: "Finally a brand that gets minimalism right. No loud logos, just quality craftsmanship.", rating: 5, product: "Washed Pocket Tee", location: "Berlin, DE" },
  { id: 7, name: "Morgan D.", text: "Get compliments every single time I wear the hoodie. The fabric is buttery soft.", rating: 5, product: "Sandstorm Hoodie", location: "Chicago, IL" },
  { id: 8, name: "Jamie L.", text: "The crossbody bag is incredibly well-made. Carries everything I need.", rating: 4, product: "Crossbody Bag", location: "Paris, FR" },
];
