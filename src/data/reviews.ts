export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
};

// Seeded reviews keyed by product id
const reviewPool: Review[] = [
  { id: "r1", author: "Alex M.", rating: 5, date: "2025-12-10", title: "Insane quality", body: "The weight and feel of this piece is next level. Worth every penny.", verified: true },
  { id: "r2", author: "Jordan K.", rating: 4, date: "2025-11-28", title: "Great fit", body: "Fits exactly as described — oversized without being sloppy. Colour is slightly darker than photos.", verified: true },
  { id: "r3", author: "Sam R.", rating: 5, date: "2025-11-15", title: "My new favourite", body: "Already ordered a second one. The construction is solid and it washes well.", verified: true },
  { id: "r4", author: "Taylor P.", rating: 4, date: "2025-10-30", title: "Solid pickup", body: "Clean design, comfortable fabric. Shipping was fast too.", verified: false },
  { id: "r5", author: "Riley N.", rating: 5, date: "2025-10-18", title: "Exceeded expectations", body: "Photos don't do it justice. The material feels premium and the cut is perfect.", verified: true },
  { id: "r6", author: "Casey W.", rating: 3, date: "2025-09-22", title: "Good but runs big", body: "Quality is great but I should have sized down. The oversized fit is really oversized.", verified: true },
  { id: "r7", author: "Morgan D.", rating: 5, date: "2025-09-05", title: "Compliments every time", body: "Every time I wear this I get asked where it's from. Clean and minimal.", verified: true },
  { id: "r8", author: "Jamie L.", rating: 4, date: "2025-08-20", title: "Streetwear done right", body: "No loud branding, just quality materials and a great silhouette.", verified: false },
];

// Deterministic assignment: hash product id to pick 3-5 reviews
function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function getReviewsForProduct(productId: string): Review[] {
  const h = hashCode(productId);
  const count = 3 + (h % 3); // 3-5 reviews
  const start = h % reviewPool.length;
  const result: Review[] = [];
  for (let i = 0; i < count; i++) {
    result.push(reviewPool[(start + i) % reviewPool.length]);
  }
  return result;
}

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}
