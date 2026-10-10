# Architecture & Technical Specifications

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Overview**: [System Overview](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/overview.md)

---

## 1. Next.js Static Export Mandate

Because GitHub Pages operates exclusively as a static file web host, the project strictly mandates:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### Critical Constraints
1. **`output: "export"`**: Forces `next build` to compile all pages into static HTML/CSS/JS artifacts in the `/out` directory.
2. **Zero Server-Side Runtimes**: Never introduce:
   - Dynamic API route handlers (`src/app/api/...`)
   - Server Actions (`"use server"`)
   - Dynamic runtime server methods (`cookies()`, `headers()`, `getServerSideProps`)
3. **`images: { unoptimized: true }`**: GitHub Pages lacks a Node.js image optimization server (sharp/libvips). Next.js `<Image />` tags must output static `<img>` markup without on-demand resizing query parameters.

---

## 2. Technology Stack & Dependencies

| Layer | Package / Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | `next` | `16.1.6` | App Router, Static HTML Compilation |
| **Runtime** | `react` / `react-dom` | `19.2.3` | UI Component rendering engine |
| **CSS Engine** | `tailwindcss` | `^4.0.0` | High-performance CSS compiler with `@tailwindcss/postcss` |
| **Component Kit**| `shadcn` / `radix-ui` | `^3.8.5` / `^1.4.3` | Accessible UI component primitives |
| **Animations** | `framer-motion` | `^12.34.3` | Scroll-linked transforms and entrance micro-animations |
| **Icons** | `lucide-react` | `^0.575.0` | Comprehensive SVG icon set |
| **Utility** | `clsx` / `tailwind-merge`| `^2.1.1` / `^3.5.0`| Conditional class management & tw-merge |
| **Type System**| `typescript` | `^5.0.0` | Strict type checking & TSConfig compliance |
| **Linter** | `eslint` / `eslint-config-next` | `^9.0.0` / `16.1.6` | Static code analysis |

---

## 3. Directory Structure

```text
merolhack.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   ├── images/
│   │   ├── books/              # MACH Playbook cover art
│   │   └── projects/           # Screenshots (dqro.png, freelancemexico.png)
│   ├── google7d4ec8c5344a17de.html # Google Search Console verification token
│   └── Lenin_Meza-Resume.pdf   # Direct CV download
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 import & custom styles
│   │   ├── layout.tsx          # Root HTML, SEO meta, JSON-LD, GA4 scripts
│   │   ├── page.tsx            # Main single-page portfolio layout
│   │   └── privacy/page.tsx    # Privacy policy compliance page
│   ├── components/
│   │   ├── Navbar.tsx          # Floating glassmorphic navigation
│   │   ├── sections/           # Modular section components
│   │   └── ui/                 # Shadcn & Radix primitive components
│   ├── data/
│   │   └── subject.ts          # Immutable master data context
│   └── lib/
│       └── utils.ts            # Class name merger helper (cn)
├── wiki/                       # Karpathy Modular LLM Wiki knowledge base
├── next.config.ts              # Static export configuration
├── package.json                # Project manifest & dependency lock
└── tsconfig.json               # TypeScript configuration
```
