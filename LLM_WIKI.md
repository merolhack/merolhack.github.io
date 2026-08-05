# LLM Wiki: Lenin Meza Enterprise Portfolio (`merolhack.github.io`)

> **LLM Wiki Pattern Notice**: This document serves as a persistent, self-contained knowledge compilation for AI agents (and human engineers) interacting with the `lenin-meza-portfolio` repository. Following the **Karpathy LLM Wiki** architectural model, this wiki synthesizes raw project files, architectural mandates, enterprise domain context, deployment workflows, and historical decisions into an interlinked, compound knowledge base.

---

## 📌 Wiki Metadata & Ingestion Manifest

- **Repository**: `merolhack/merolhack.github.io`
- **Project Name**: `lenin-meza-portfolio`
- **Wiki Version**: `1.0.0`
- **Last Ingest Date**: 2026-08-04
- **Maintained By**: Google Antigravity & Senior Architect (Lenin Meza)

### Ingestion Source Index

| Raw Source File | Document Purpose | Synthesized Wiki Section |
| :--- | :--- | :--- |
| [`AGENTS.md`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/AGENTS.md) | Agent operational constraints, design rules, static export mandates | [Section 2: Architectural Mandates](#2-architectural-mandates--tech-stack) |
| [`README.md`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/README.md) | Project bootstrap, setup, and deployment summary | [Section 4: Operational Playbooks](#4-operational-playbooks--deployment) |
| [`WALKTHROUGH.md`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/WALKTHROUGH.md) | SDLC step-by-step verification, subagent UI audits | [Section 4.2: UI & Browser Verification Protocol](#42-ui--browser-verification-protocol) |
| [`HISTORY.txt`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/HISTORY.txt) | Release history & architectural decision audit log | [Section 5: Project Version History & Audit Log](#5-project-version-history--audit-log) |
| [`src/data/subject.ts`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/data/subject.ts) | Immutable master data context for Lenin Meza profile | [Section 3: Subject & Enterprise Domain Model](#3-subject--enterprise-domain-model) |
| [`.github/workflows/deploy.yml`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/.github/workflows/deploy.yml) | GitHub Actions CI/CD deployment configuration | [Section 4.1: CI/CD Pipeline Protocol](#41-cicd-pipeline-protocol) |
| [`package.json`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/package.json) | Dependency tree, framework versions, scripts | [Section 2.2: Technology Stack & Dependencies](#22-technology-stack--dependencies) |
| [`next.config.ts`](file:///wsl.localhost/Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/next.config.ts) | Static export & asset optimization configuration | [Section 2.1: Next.js Static Export Mandate](#21-nextjs-static-export-mandate) |

---

## 🗂️ Table of Contents

1. [Overview & System Purpose](#1-overview--system-purpose)
2. [Architectural Mandates & Tech Stack](#2-architectural-mandates--tech-stack)
   - 2.1 [Next.js Static Export Mandate](#21-nextjs-static-export-mandate)
   - 2.2 [Technology Stack & Dependencies](#22-technology-stack--dependencies)
   - 2.3 [Design System & Vibe Coding Aesthetics](#23-design-system--vibe-coding-aesthetics)
3. [Subject & Enterprise Domain Model](#3-subject--enterprise-domain-model)
   - 3.1 [Lenin Meza Professional Background](#31-lenin-meza-professional-background)
   - 3.2 [Core Technical Competencies](#32-core-technical-competencies)
   - 3.3 [Active Enterprise Repositories & Integrations](#33-active-enterprise-repositories--integrations)
4. [Operational Playbooks & Deployment](#4-operational-playbooks--deployment)
   - 4.1 [CI/CD Pipeline Protocol](#41-cicd-pipeline-protocol)
   - 4.2 [UI & Browser Verification Protocol](#42-ui--browser-verification-protocol)
   - 4.3 [Troubleshooting & Gotchas](#43-troubleshooting--gotchas)
5. [Project Version History & Audit Log](#5-project-version-history--audit-log)
6. [LLM Wiki Maintenance Protocol](#6-llm-wiki-maintenance-protocol)

---

## 1. Overview & System Purpose

The `lenin-meza-portfolio` application is a high-performance, statically exported web application serving as the official enterprise portfolio for **Lenin Meza** (Senior Software Architect & Technical Lead). 

### Key Project Goals
1. **Purity of Information**: Decouple biographical data from UI layout using an immutable data layer (`src/data/subject.ts`) to eliminate AI hallucinations.
2. **Zero-Server Infrastructure**: Statically compile 100% of the site for hosting on **GitHub Pages**, eliminating server runtime costs and potential Node.js execution security risks.
3. **Vibe Coding Excellence**: Present a visually striking "Deep Dark Mode" interface designed to showcase 17+ years of Bank-as-a-Service (BaaS), identity verification, and VoIP cloud architecture experience.

---

## 2. Architectural Mandates & Tech Stack

### 2.1 Next.js Static Export Mandate

GitHub Pages runs purely static web servers. Therefore:
- **`output: 'export'`**: Defined in `next.config.ts`. All routes compile to plain HTML/CSS/JS in `/out`.
- **No Dynamic Server Runtime**: Never introduce API routes (`/src/app/api/...`), `getServerSideProps`, `headers()`, `cookies()`, or server actions.
- **Unoptimized Images**: `images: { unoptimized: true }` MUST remain active in `next.config.ts`. Standard Next.js server-side image resizing will fail on GitHub Pages.

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

### 2.2 Technology Stack & Dependencies

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Runtime**: React 19.2.3 / React DOM 19.2.3
- **Styling Engine**: Tailwind CSS v4 (`@tailwindcss/postcss` v4)
- **UI Components**: Shadcn/ui (`shadcn` v3.8.5) & Radix UI primitives (`radix-ui` v1.4.3)
- **Animations**: Framer Motion (`framer-motion` v12.34.3)
- **Icons**: `lucide-react` (v0.575.0)
- **Utilities**: `clsx` (v2.1.1), `tailwind-merge` (v3.5.0), `class-variance-authority` (v0.7.1)

### 2.3 Design System & Vibe Coding Aesthetics

The UI design guidelines reflect a **Senior Software Architect** persona:
- **Color Palette**: Deep Dark Mode exclusively (`zinc-950` background, `zinc-900/40` component cards). Light mode is strictly disallowed.
- **Glassmorphism**: Backdrop blur effects (`backdrop-blur-lg bg-white/5` or `backdrop-blur-md bg-zinc-900/40`) paired with subtle high-contrast border colors (`border-zinc-800`).
- **Accent Lighting**: Strategic glowing accents on key path UI elements, node connections, and call-to-actions.
- **Typography**: High-contrast, clean sans-serif typography.

---

## 3. Subject & Enterprise Domain Model

### 3.1 Lenin Meza Professional Background

- **Role**: Senior Software Architect / Technical Lead / Full Stack Developer
- **Location**: El Marqués, Querétaro, Mexico
- **Experience**: 17+ years in Web & Enterprise architecture, specializing in Bank-as-a-Service (BaaS) platforms, identity verification frameworks (Incode), and enterprise standards (TOGAF, BIAN).

#### Key Career History Highlights
- **Full-Stack Developer VoIP / Gazeti** (*Sep 2025 – Present*): GCP VoIP architecture, OpenSIPS configuration, Yeti-switch trunking.
- **Software Architect / The Cocktail** (*Sep 2022 – Present*): Incode Identity Verification integration, Coppel onboarding architecture, BIAN/TOGAF compliance.
- **Senior Consultant / Walmart (Indra)** (*Sep 2021 – Sep 2022*): Dynatrace/OBM monitoring, ServiceNow API automation via Groovy.
- **Senior Consultant / Sabadell (Indra)** (*Nov 2019 – Sep 2021*): Core Banking enhancements (Bantotal, GeneXus), BaaS microservices using Spring Boot & Docker/K8s.
- **Technical Lead / Santander** (*Jan 2018 – Jun 2019*): Digital Factory Spotlight, BaaS API mapping, Angular SPA applications.

### 3.2 Core Technical Competencies

- **Frontend**: React, TypeScript, Angular (2-7), Bootstrap 4+, HTML5/CSS3, ECMAScript.
- **Backend**: Java (1.8, 17, 21), Spring Boot (1.5, 2, 3), Node.js (Express), PHP (Laravel, Magento), Serverless.
- **Data Persistence**: MongoDB, MySQL, SQL Server, Redis, Memcached, Oracle PL/SQL.
- **Cloud & DevOps**: AWS (EC2, S3, EMR), GCP, Docker, Kubernetes, GitLab CI/CD, Jenkins, Control-M, Dynatrace.

### 3.3 Active Enterprise Repositories & Integrations

Dynamic repository telemetry is fed into `src/data/subject.ts` via GitHub GraphQL API integration:
1. `pressvitals-site-auditor`: Headless-first WordPress diagnostic engine (Repository: `https://github.com/merolhack/pressvitals-site-auditor` \| Plugin Directory: `https://wordpress.org/plugins/pressvitals-site-auditor/`).
2. `mach-playbook.github.io`: MACH architecture guide (Repository: `https://github.com/mach-playbook/mach-playbook.github.io` \| Live Blog: `https://mach-playbook.github.io/`).
3. `gazeti-healthcheck-scripts`: Bash scripts for GCP VM and container health checks (Private).
4. `sbc-derqui-opensips`: OpenSIPS configuration files for Debian 13 On-Premises SBC (Private).
5. `oml-daemon-script`: OMniLeads auto-dialer Python daemon (Private).
6. `cpi-visualization-app`: Next.js application connected to Supabase using D3.js charts (Public).
7. `oml-config-prod`: Gazeti OMniLeads Ansible production provisioning (Private).




---

## 4. Operational Playbooks & Deployment

### 4.1 CI/CD Pipeline Protocol

GitHub Pages deployment is driven by `.github/workflows/deploy.yml`.

#### Key Actions Workflow Structure:
1. **Checkout & Node 20 Setup**: Standard checkout with `actions/setup-node@v4` caching npm packages.
2. **Dependency Installation**: `npm ci` ensures exact version lockfile adherence.
3. **Build Execution**: Runs pure `npm run build` (`next build`) generating `/out`.
4. **Artifact Upload**: `actions/upload-pages-artifact@v3` target `./out`.
5. **Deployment**: `actions/deploy-pages@v4` deploys to the `github-pages` environment.

> [!WARNING]
> **Action Hook Overrides**: Never re-inject `static_site_generator: next` into `actions/configure-pages`. It injects conflicting Next.js wrappers that overwrite local `next.config.ts` static export directives and cause `404 Not Found` deployment failures.

### 4.2 UI & Browser Verification Protocol

When creating or modifying components:
1. **Add UI Primitives**: Use `npx shadcn@latest add [component]` if a new primitive is required.
2. **Component Location**: Place new visual sections in `src/components/sections/`.
3. **Animations**: Use `framer-motion` entrance animations (`initial`, `whileInView`, `viewport={{ once: true }}`).
4. **Data Binding**: Bind component props exclusively to `src/data/subject.ts`.
5. **Verification**:
   - Execute static compilation: `npm run build`
   - Test development server: `npm run dev`
   - Run browser subagent inspection at `http://localhost:3000` to verify responsiveness and animation triggering.

### 4.3 Troubleshooting & Gotchas

#### Hydration & SSR Conflicts with Static Export
If incorporating dynamic third-party libraries (e.g., canvas renderers, graph packages, Lottie) that reference `window` or `document`, use Next.js dynamic imports with `ssr: false`:

```typescript
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(
  () => import('@/components/sections/DynamicChart'),
  { ssr: false }
);
```

---

## 5. Project Version History & Audit Log

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

---

## 6. LLM Wiki Maintenance Protocol

To maintain the integrity and compounding value of this LLM Wiki:

1. **Ingest Phase**: Whenever new source files, architectural rules, or deployment workflows are added to the workspace, an AI agent must read the new sources and update `LLM_WIKI.md`.
2. **Synthesis & Deduplication**: Do not append duplicate notes. Merge new insights into the relevant modules (e.g., update [Section 3](#3-subject--enterprise-domain-model) for background changes, [Section 4](#4-operational-playbooks--deployment) for pipeline changes).
3. **Cross-Link Integrity**: Maintain relative file links (e.g., `file:///...`) and internal section anchors (`#section-id`).
4. **Wiki Health Check / Linting**:
   - Check that all listed dependencies in Section 2 match `package.json`.
   - Verify that all active components in `src/components/sections/` are indexed.
   - Confirm that deployment pipeline steps in Section 4 reflect `.github/workflows/deploy.yml`.
