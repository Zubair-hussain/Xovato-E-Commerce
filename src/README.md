# /src Directory – Love Xovato E-Commerce

This folder contains all the source code of the frontend application.

## Overview

Modern React + TypeScript + Vite + Tailwind + shadcn/ui e-commerce frontend with:

- Context-based cart & wishlist
- Framer Motion page transitions
- Lazy-loaded routes/pages
- TanStack Query data fetching
- Beautiful typography & gold-accent theme

## Folder Structure

```text
src/
├── components/             # Reusable UI pieces (ui/, layout/, product/, etc.)
│   ├── ui/                 # shadcn/ui components (button, card, dialog, toast...)
│   ├── CartDrawer.tsx
│   ├── PageTransition.tsx
│   ├── ScrollToTop.tsx
│   └── ...                 # headers, footers, product cards, banners...
├── contexts/               # Global state (no Redux / Zustand)
│   ├── CartContext.tsx
│   └── WishlistContext.tsx
├── hooks/                  # Custom hooks (useCart, useWishlist, useDebounce...)
├── lib/                    # Utilities
│   ├── utils.ts            # cn() helper (clsx + tailwind-merge)
│   └── ...                 # formatCurrency, validators, constants...
├── pages/                  # Route-level page components (lazy loaded)
│   ├── Index.tsx           # Homepage
│   ├── Shop.tsx
│   ├── ProductDetail.tsx
│   ├── Checkout.tsx
│   ├── OrderConfirmation.tsx
│   ├── Wishlist.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── ShippingReturns.tsx
│   └── NotFound.tsx
├── styles/                 # Global styles (optional – can be in root)
│   └── globals.css         # Tailwind imports + custom :root variables
├── App.tsx                 # Root component – providers + routing
├── main.tsx                # Entry point – ReactDOM.createRoot
└── vite-env.d.ts           # Vite + TypeScript env types
Most Important Files





































FilePurposeApp.tsxWraps app in providers (QueryClient, Cart, Wishlist, Tooltip…), defines routesstyles/globals.cssImports Google Fonts (Bebas Neue + Inter), defines CSS variables, base stylescontexts/CartContext.tsxManages cart items, add/remove/update, total calculation, localStorage synccontexts/WishlistContext.tsxSimilar to cart but for favorites/wishlistcomponents/PageTransition.tsxFramer Motion wrapper for smooth page enter/exit animationscomponents/CartDrawer.tsxSlide-in cart sidebar (used globally)lib/utils.tscn() helper – very commonly used with shadcn/ui + Tailwind
Theme & Styling Highlights
Defined in styles/globals.css (or root index.css):

Fonts: Bebas Neue (headings), Inter (body)
Primary gold accent: hsl(43 74% 49%)
Very clean light theme (almost white background)
Zero border radius (--radius: 0rem) → sharp, modern look
Custom glow effect: .btn-glow class (used on CTA buttons)

CSS--accent: 43 74% 49%;           /* gold */
--primary: 0 0% 9%;             /* almost black */
--ring: 43 74% 49%;             /* focus rings match gold */
How to Add a New Page

Create file in pages/, e.g. NewFeature.tsx
Export default React component
Add lazy import in App.tsx:

tsxconst NewFeature = lazy(() => import("./pages/NewFeature"));

Add route inside <AnimatedRoutes>:

tsx<Route path="/new-feature" element={<PageTransition><NewFeature /></PageTransition>} />
Tips for Development

Use cn() helper everywhere when combining Tailwind classes conditionally
Prefer shadcn/ui components → run npx shadcn-ui@latest add <component> to install more
Cart & Wishlist persist in localStorage (check context files)
All pages are wrapped in <PageTransition> → consistent animation
Toasts: <Toaster /> + <Sonner /> are already included globally

Related Documentation

Project root README.md → general project info, installation, scripts
public/README.md → static assets explanation

Happy coding! 🛍️✨
Love Xovato Team
textYou can place this content in `src/README.md`.

Let me know when you're ready for the `public/README.md` file — it will be shorter and focused on favicon, images, robots.txt, manifest etc.

Just reply with something like:  
"now public readme"  
or  
"proceed with public folder readme"

Good luck with your beautiful e-commerce project! 🖤