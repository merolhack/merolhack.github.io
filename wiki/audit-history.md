# Project Version History & Audit Log

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Changelog Log**: [`wiki/log.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/log.md)

---

## Release Milestones & Architectural History

### `[v1.0.8]` - 2026-10-09
- **Ingested**: Formalized 3 mandatory operational directives across `AGENTS.md` and the modular LLM Wiki:
  1. Mandatory LLM Wiki first consultation and modular end-of-task sync (`wiki/` directory).
  2. Mandatory Codebase Memory knowledge graph utilization targeting project `home-merolhack-fl-merolhack.github.io` (`/home/merolhack/fl/merolhack.github.io`).
  3. Mandatory delegation of routine and mechanical tasks to `ollama-local` models (`gemma4:cloud` &rarr; `qwen3:8b-8k`) to save tokens.
- **Synchronized**: Updated `AGENTS.md`, `LLM_WIKI.md`, `wiki/schema.md`, `wiki/operational-playbooks.md`, `wiki/log.md`, and `wiki/audit-history.md`.

### `[v1.0.7]` - 2026-10-09
- **Added**: Google Search Console site verification HTML file (`public/google7d4ec8c5344a17de.html`) enabling search indexing verification on `https://merolhack.github.io/`.
- **Added**: Personal Projects section (`src/components/sections/PersonalProjects.tsx`) featuring:
  - **DQRO.mx**: Directorio Empresarial y Comercial de Querétaro (FSE + custom engine, PHP 8.3, PageSpeed 95+).
  - **Freelance México**: Plataforma y comunidad para independientes (HivePress + custom engine, simuladores fiscales RESICO/SAT).
- **Added**: Full-resolution browser mockup screenshots captured in `/public/images/projects/` (`dqro.png` and `freelancemexico.png`).
- **Refactored**: Transformed monolithic `LLM_WIKI.md` into the **Modular Karpathy LLM Wiki Architecture** with a dedicated `wiki/` directory containing `schema.md`, `index.md`, `log.md`, and categorized topic pages.
- **Verified**: Static build validated (`output: 'export'`) and deployed to GitHub Pages via GitHub Actions (Run `38018585761`).

### `[v1.0.6]` - 2026-09-28
- **Added**: Google Analytics 4 (GA4) integration under account `389930119`, property `531281877`, stream `15862982513`, measurement ID `G-8STYZ8GZRJ`.
- **Updated**: Injected Next.js `next/script` gtag telemetry scripts in `src/app/layout.tsx` with `afterInteractive` strategy.
- **Verified**: Production build (`npm run build`) validated with static export (`output: 'export'`).

### `[v1.0.5]` - 2026-09-23
- **Updated**: Formalized Secondary Model Delegation Protocol for Ollama: Multi-tier cascade prioritizing `gemma4:cloud` whenever weekly usage quota is available (< 90%), falling back automatically to local `qwen3:8b-8k`.
- **Mandate**: Synchronized `AGENTS.md`, `LLM_WIKI.md`, and global Antigravity instructions (`GEMINI.md`) to guarantee zero primary agent token waste on mechanical tasks.
- **Verified**: Verified fallback execution and status via `call_mcp_tool` &rarr; `ollama-local` &rarr; `consultar_modelo_local`.

### `[v1.0.4]` - 2026-09-18
- **Added**: Formalized Local Model Delegation Protocol for Ollama (`qwen3:8b` / `qwen3:8b-8k`) and the `ollama-local` MCP server.
- **Mandate**: Enforced mandatory ("MUST") delegation matrix for routine, mechanical, low-risk tasks to conserve cloud API tokens and minimize latency.
- **Verified**: Active connection and sub-second inference test via `call_mcp_tool` &rarr; `ollama-local` &rarr; `consultar_modelo_local`.

### `[v1.0.3]` - 2026-02-25
- **Added**: `PortfolioDetails.tsx` component showcasing autonomous agentic portfolio engineering.
- **Added**: Injected 5 active repositories (`gazeti-healthcheck-scripts`, `sbc-derqui-opensips`, `oml-daemon-script`, `cpi-visualization-app`, `oml-config-prod`) into `src/data/subject.ts`.
- **Verified**: Autonomous deployment to GitHub Pages via CD pipeline.

### `[v1.0.2]` - 2026-02-25
- **Added**: Codified `AGENTS.md` specifying static export mandates, Vibe Coding directives, and single source of truth rules.

### `[v1.0.1]` - 2026-02-25
- **Fixed**: Solved Next.js 15+ GitHub Pages build conflict by stripping `static_site_generator: next` wrapper from `.github/workflows/deploy.yml`.

### `[v1.0.0]` - 2026-02-25
- **Initialized**: Scaffolded Next.js 16/15 App Router portfolio with Tailwind CSS v4, `shadcn/ui`, Framer Motion, and `output: 'export'`.
- **Initialized**: Created `src/data/subject.ts` master data bridge.
- **Initialized**: Built core sections (`Hero`, `ExecutiveSummary`, `SkillsMatrix`, `Timeline`, `DigitalFootprint`, `Footer`).
