# LLM Wiki Chronological Event & Operation Log

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Schema**: [Schema & Operations](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/schema.md)

---

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
