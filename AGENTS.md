# Next.js Enterprise Portfolio Agentic System Profile

This document outlines the operational patterns, constraints, and architecture of the `lenin-meza-portfolio` repository to assist autonomous coding agents (like Google Antigravity) in future iterations. 

Before modifying the codebase, ingest this document to maintain architectural purity and avoid breaking GitHub Pages compatibility.

---

## 1. Architectural Mandates

### 1.1 Strict Static Export (GitHub Pages)
This repository relies entirely on the GitHub Pages ecosystem. Because GitHub Pages does **not** execute server-side Node.js code at runtime, everything must compile as a static asset.
- **Rule:** Never introduce APIs, server actions, dynamic server rendering (`getServerSideProps`), or non-static dependencies.
- **Enforcement:** `next.config.ts` forces `output: 'export'`. Do not change this unless the hosting infrastructure migrates off GitHub Pages.
- **Image Optimization:** Next.js default `next/image` requires a server. `next.config.ts` enables `{ unoptimized: true }` specifically to prevent build failures. Maintain this configuration.

### 1.2 Technology Stack
- **Framework:** Next.js 15+ (App Router).
- **Styling:** Tailwind CSS v4.
- **Components:** Shadcn/ui (Tailwind-based primitives).
- **Interactions:** Framer Motion (Scroll animations).
- **Icons:** `lucide-react`.

---

## 2. Design System & Aesthetics ("Vibe Coding")
The portfolio is designed for a **Senior Software Architect / Technical Lead**. 
- **Palette:** "Deep Dark Mode" (`zinc-950`).
- **Styling Directives:** Utilize glassmorphism (`backdrop-blur-md bg-white/5` or `bg-zinc-900/40`), glowing accents on critical path UI elements (nodes, specific text), and high-contrast typography. 
- **Rule:** Do not generate light mode. Do not inject brutalist, plain aesthetic blocks. Ensure any new element feels premium and cohesive with the Vibe Coding directives.

---

## 3. Deployment Constraints

### GitHub Actions Pipeline
The deployment relies on `.github/workflows/deploy.yml`. 
- **Critical History Context:** The standard GitHub Action setup (`actions/configure-pages`) occasionally injects configurations that conflict with Next.js 15+ static exports. The workflow was deliberately modified to run the pure `npm run build` command without `next` overriding hooks. 
- **Rule:** If the pipeline breaks, ensure you modify `deploy.yml` and not just local configurations.

---

## 4. Source of Truth Data Mapping

The user's professional profile is decoupled from the UI components to maintain strict, hallucination-free output.
- **Location:** `src/data/subject.ts`.
- **Rule:** If you are instructed to add a new job, skill, or certification, update `subject.ts` directly. The UI components map this data dynamically. Do not hardcode biographical data directly into `src/components/sections/`.

---

## 5. Development Workflow for Agents

### Adding a New Component
1. Run `npx shadcn@latest add [component]` if a primitive is needed.
2. Build the specific UI section within `src/components/sections/`.
3. Utilize `framer-motion` for entrance animations (`initial`, `whileInView`, `viewport={{ once: true }}`).
4. Add the component to `src/app/page.tsx`.
5. Run `npm run dev` and spawn a browser subagent (`localhost:3000`) to visually confirm responsive alignment against the existing matrix.

### Troubleshooting Suspense / Hydration Errors
If incorporating dynamic third-party libraries (e.g., specific heavy graph renderers or Lottie files) that conflict with Server Components or hydration in an `output: 'export'` environment, utilize Next.js dynamic imports with `ssr: false`:
```typescript
import dynamic from 'next/dynamic';
const MyHeavyComponent = dynamic(() => import('@/components/Heavy'), { ssr: false });
```
