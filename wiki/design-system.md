# Design System & Vibe Coding Aesthetics

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Architecture**: [Technical Architecture](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md)

---

## 1. Design Persona & Guiding Principles

The portfolio design encapsulates the persona of a **Senior Software Architect & Technical Author**:
- **Zero Generic Styling**: Rejects default white/gray web layouts in favor of a curated, bespoke "Deep Dark Mode" system.
- **Glassmorphism**: High-contrast, translucent elements layered over subtle deep-purple and radial gradients (`zinc-900/40 backdrop-blur-md` with `border-zinc-800`).
- **Restraint & Polish**: Micro-animations emphasize information flow rather than decorative noise.

---

## 2. Color Palette & Theming Tokens

| Role | Tailwind Token / Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `bg-zinc-950` (`#09090b`) | Primary page body background |
| **Surface Card** | `bg-zinc-900/40` or `bg-zinc-900/30` | Translucent frosted glass containers |
| **High-Contrast Border** | `border-zinc-800` / `border-zinc-800/80` | Card borders, separators, subtle dividers |
| **Primary Typography** | `text-zinc-50` / `text-zinc-100` | Main headers and primary labels |
| **Secondary Typography** | `text-zinc-400` / `text-zinc-500` | Subtitles, helper text, and technical details |
| **Accent Glow (Indigo)** | `from-indigo-600 to-indigo-400` | Brand badges, active buttons, CTAs |
| **Accent Alert (Amber)** | `text-amber-400 border-amber-500/40` | Amazon KDP book highlights & badges |
| **Accent Success (Teal)** | `text-teal-400 border-teal-900/50` | Public repository indicators, verification ticks |

---

## 3. Micro-Animations & Scroll Mechanics

### A. Dynamic Hero Scroll Indicator (`Hero.tsx`)
- Uses Framer Motion's `useScroll` and `useTransform` hooks.
- As the user scrolls past the top of the page, the indicator fades from opacity `1.0` down to `0.0` across the first `80px` of vertical movement.
- Eliminates screen clutter while guiding first-time visitors downwards.

### B. Viewport-Triggered Entrances (`whileInView`)
- Major sections employ non-blocking viewport triggers:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
  ```
- Guaranteed to run only once per page visit (`viewport={{ once: true }}`), ensuring optimal rendering performance and zero layout stuttering.

---

## 4. Navigation Architecture (`Navbar.tsx`)

A floating pill header fixed at `top-4` with an adaptive scroll threshold:
- **Resting state**: `bg-zinc-900/60 backdrop-blur-md border border-zinc-800/60`.
- **Scrolled state (`> 40px`)**: `bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/90 shadow-2xl shadow-black/80`.
- **Navigation Targets**:
  - `#summary` &rarr; Hero / Executive Summary
  - `#book` &rarr; MACH Playbook Publication Showcase
  - `#skills` &rarr; Technical Skills Matrix
  - `#architecture` &rarr; Enterprise System Topology Diagram
  - `#timeline` &rarr; Career Progression Timeline
  - `#projects` &rarr; Personal Projects Showcase (DQRO.mx & Freelance México)
  - `#repositories` &rarr; Repositories & Agentic SDLC Process
