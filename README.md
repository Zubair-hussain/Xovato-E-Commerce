# Love Xovato E-Commerce

Modern, elegant and fully responsive e-commerce website built with React, TypeScript, Tailwind CSS, Framer Motion, TanStack Query (React Query), and Shadcn/ui components.

Created with ❤️ by **Love Xovato Team**

Live Demo: [Xovato-Template ][](https://xovato-e-commerce.vercel.app/)


## ✨ Features

- 🛍️ Full-featured online shop with product listing & filtering
- 🔍 Detailed product pages with images, variants & zoom
- 🛒 Persistent shopping cart (context + localStorage)
- ❤️ Wishlist functionality
- 🖼️ Smooth page transitions & animations (Framer Motion)
- 📱 Fully responsive & mobile-first design
- 🌙 Dark mode support
- 🎨 Beautiful UI built with Shadcn/ui + Tailwind CSS
- ⚡ Fast performance with lazy loading & code splitting
- ✅ Type-safe codebase with TypeScript
- 🔄 Scroll restoration & scroll-to-top behavior
- 📦 Modern tooling: Vite + React Router v6 + TanStack Query

## 🖥️ Tech Stack

| Category             | Technology                          |
|----------------------|-------------------------------------|
| Framework            | React 18 + TypeScript               |
| Build Tool           | Vite                                |
| Routing              | React Router v6                     |
| Styling              | Tailwind CSS + shadcn/ui            |
| State Management     | React Context (Cart & Wishlist)     |
| Data Fetching        | TanStack Query (React Query)        |
| Animations           | Framer Motion                       |
| UI Components        | shadcn/ui, Sonner (toasts), Lucide icons |
| Other                | clsx, tailwind-merge, zod (likely)  |

## Project Structure

```text
├── public/                 → static assets (images, favicon, etc.)
├── src/
│   ├── components/         → reusable UI components
│   ├── contexts/           → CartContext, WishlistContext
│   ├── pages/              → page components (Index, Shop, ProductDetail…)
│   ├── lib/                → utilities, cn helper, etc.
│   ├── hooks/              → custom hooks
│   ├── App.tsx             → main app with providers & routing
│   └── main.tsx            → entry point
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts

└── README.md


