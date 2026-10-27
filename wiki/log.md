# LLM Wiki Chronological Event & Operation Log

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Schema**: [Schema & Operations](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/schema.md)

---

## [2026-10-26] feat | Section Anchor Links, Sitemap.xml & Robots.txt Integration
- **Operation**: Implemented shareable section anchors, semantic navigation, individual project deep links, sitemap.xml, and robots.txt.
- **Key Enhancements**:
  - `Navbar.tsx`: Migrated from `<button>` to semantic `<a>` links with `href` and `history.pushState` URL synchronization.
  - `SectionAnchor.tsx`: Created interactive `#` permalink copy button with visual feedback across all main section headings.
  - `PersonalProjects.tsx`: Added direct anchors for `#projects` as well as individual projects (`#cadensa`, `#dqro`, `#freelancemexico`).
  - `globals.css`: Added global `scroll-behavior: smooth` and `scroll-padding-top: 5.5rem` to avoid header overlap on direct hash access.
  - `Footer.tsx`: Added on-page HTML sitemap navigation of internal sections and link to `/sitemap.xml`.
  - `sitemap.ts` & `robots.ts`: Static generation of `out/sitemap.xml` and `out/robots.txt` compatible with Next.js static export.
  - `layout.tsx`: Added Google `SiteNavigationElement` ItemList JSON-LD schema for sitelinks and deep search indexing.
- **Files Synchronized**: `src/components/Navbar.tsx`, `src/components/ui/SectionAnchor.tsx`, `src/components/sections/*`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/globals.css`, `src/app/layout.tsx`, `wiki/log.md`.

## [2026-10-26] ingest | Mandatory Post-Task Commit, Push & GitHub Actions Validation Rule
- **Operation**: Enforced strict operational mandate requiring agents to commit, push to remote (`origin/main`), and validate the resulting GitHub Actions deployment status upon finishing any locally-validated activity.
- **Mandates Enforced**:
  - Run `npm run lint` and `npm run build` locally before completing.
  - Execute `git add`, `git commit` (Conventional Commits), and `git push origin main`.
  - Validate GitHub Actions workflow execution via `gh run list --limit 1` or `gh run watch` ensuring `status: completed` and `conclusion: success`.
- **Files Synchronized**: `AGENTS.md`, `LLM_WIKI.md`, `wiki/operational-playbooks.md`, `wiki/schema.md`, `wiki/log.md`.

## [2026-10-26] ingest | Cadensa Web Production Platform Integration
- **Operation**: Ingested and integrated the new production project Cadensa (`https://cadensa-web.pages.dev/`) into personal projects showcase and repository catalog.
- **Sources Ingested**:
  - `home-merolhack-fl-cadensa-web` (`/home/merolhack/fl/cadensa-web`) via `codebase-memory`.
  - `https://cadensa-web.pages.dev/`: Live platform inspection and browser subagent screenshot.
  - `https://github.com/merolhack/cadensa-web`: Public repository metadata.
- **Screenshot Generated**: `public/images/projects/cadensa.png` (1280x800 optimized PNG).
- **Data Updated**: `src/data/subject.ts` (`personalProjects` and `latestRepositories` arrays).
- **Documentation Updated**: `wiki/projects-and-repositories.md`, `wiki/index.md`, `wiki/design-system.md`, `LLM_WIKI.md`.

## [2026-10-09] ingest | Mandatory Agent Operational Directives
- **Operation**: Ingested and codified mandatory operational requirements across `AGENTS.md` and the modular LLM Wiki.
- **Mandates Enforced**:
  1. Always consult LLM Wiki first ([`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md)) and perform modular sync at task end.
  2. Always use `codebase-memory` MCP graph for project `home-merolhack-fl-merolhack.github.io` (`/home/merolhack/fl/merolhack.github.io`).
  3. Always delegate routine, low-risk, mechanical tasks to `ollama-local` models (`gemma4:cloud` &rarr; `qwen3:8b-8k`) to conserve tokens.
- **Files Synchronized**: `AGENTS.md`, `LLM_WIKI.md`, `wiki/schema.md`, `wiki/operational-playbooks.md`, `wiki/log.md`.

## [2026-10-09] ingest | Karpathy Modular LLM Wiki Migration
- **Operation**: Transformed monolithic `LLM_WIKI.md` into modular Karpathy architecture.
- **Created**:
  - `wiki/schema.md`: Definition of three layers (Raw, Schema, Wiki) and Ingest/Query/Lint lifecycle.
  - `wiki/index.md`: Catalog of all wiki knowledge units.
  - `wiki/log.md`: Chronological append-only event log.
  - Modular topic pages: `overview.md`, `architecture.md`, `design-system.md`, `subject-profile.md`, `projects-and-repositories.md`, `telemetry-and-analytics.md`, `operational-playbooks.md`, `model-delegation.md`, `audit-history.md`.
- **Sources Ingested**: `LLM_WIKI.md`, `AGENTS.md`, `package.json`, `next.config.ts`, `.github/workflows/deploy.yml`.

## [2026-10-09] ingest | Google Search Console Verification & Personal Projects Showcase
- **Operation**: Ingested Search Console HTML file and added personal production projects.
- **Sources Ingested**:
  - `public/google7d4ec8c5344a17de.html`: Google Search Console verification token.
  - `https://dqro.mx/`: Directorio Empresarial y Comercial de Querétaro (FSE, PHP 8.3, PageSpeed 95+).
  - `https://freelancemexico.com.mx/`: Plataforma y Comunidad para Freelancers en México (HivePress, Herramientas Fiscales).
- **Screenshots Captured**: `public/images/projects/dqro.png` and `public/images/projects/freelancemexico.png`.
- **Components Built**: `src/components/sections/PersonalProjects.tsx`.
- **Data Updated**: `src/data/subject.ts` (`personalProjects` array).
- **Deployment**: Verified static export and deployed to GitHub Pages via run `38018585761`.

## [2026-09-28] ingest | Google Analytics GA4 Telemetry Integration
- **Operation**: Integrated GA4 measurement ID `G-8STYZ8GZRJ` (stream `15862982513`, property `531281877`).
- **Sources Ingested**: `src/app/layout.tsx` (injected `next/script` gtag tracking tag).

## [2026-09-23] ingest | Multi-Tier Secondary Model Delegation Protocol
- **Operation**: Enforced multi-tier cascade for mechanical tasks via Ollama (`gemma4:cloud` prioritary, `qwen3:8b-8k` local fallback).
- **Sources Ingested**: `AGENTS.md`, `GEMINI.md`.

## [2026-02-25] ingest | Next.js 16 Portfolio Scaffolding & Agentic Setup
- **Operation**: Initial repository bootstrap, Vibe Coding design system implementation, static export configuration, and master data bridge.
- **Sources Ingested**: `README.md`, `HISTORY.txt`, `WALKTHROUGH.md`, `src/data/subject.ts`.
