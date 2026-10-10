# Next.js Enterprise Portfolio Agentic System Profile

This document outlines the operational patterns, constraints, and architecture of the `lenin-meza-portfolio` repository to assist autonomous coding agents (like Google Antigravity) in future iterations. 

Before modifying the codebase, ingest this document to maintain architectural purity and avoid breaking GitHub Pages compatibility.

---

## ⚡ MANDATORY OPERATIONAL RULES FOR ALL AGENTS [REQUIRED]

All autonomous agents (including Google Antigravity) interacting with this repository **MUST** adhere to these 3 core mandates on every prompt and task:

1. **FIRST USE LLM WIKI & UPDATE MODULARLY AT THE END [MANDATORY]**:
   - **Knowledge First**: Before inspecting or modifying code, always consult the **LLM Wiki** ([`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md)) to understand the system architecture, domain data, and operational constraints without re-reading the entire codebase.
   - **Modular End-of-Task Sync**: At the conclusion of **every** coding or configuration task, the agent **MUST** update the LLM Wiki in a modular fashion: update the relevant topic page in `wiki/`, refresh [`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) if new concepts arose, and append an entry to [`wiki/log.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/log.md).

2. **CODEBASE MEMORY KNOWLEDGE GRAPH [MANDATORY]**:
   - **Target Project**: `home-merolhack-fl-merolhack.github.io` (`/home/merolhack/fl/merolhack.github.io`).
   - **Tool Priority**: ALWAYS query `codebase-memory` MCP tools (`search_graph`, `query_graph`, `trace_path`, `get_code_snippet`, `detect_changes`) for code discovery, symbols, callers, and route references BEFORE falling back to broad text search or grep.
   - **Sync**: Verify index freshness with `index_status(project="home-merolhack-fl-merolhack.github.io")` and run `detect_changes` after modifications.

3. **OLLAMA-LOCAL MODELS TO SAVE TOKENS [MANDATORY]**:
   - Whenever a task is mechanical, repetitive, or low-risk (docstrings, boilerplate, repetitive markup, JSON formatting, simple regex, single-file translations), agents **MUST** delegate execution via the `consultar_modelo_local` tool (`ollama-local` server).
   - **Model Cascade**: Priority 1 `gemma4:cloud` (when weekly quota < 90%), falling back automatically to local `qwen3:8b-8k`.
   - Never waste primary agent tokens on routine formatting or boilerplate.

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

---

## 6. Codebase Context & Tool Usage Rules

1. **Prioritize Knowledge Graph (`codebase-memory`):** 
   - **Target Project:** `home-merolhack-fl-merolhack.github.io` (Root: `/home/merolhack/fl/merolhack.github.io`).
   - ALWAYS query `codebase-memory` MCP tools (`search_graph`, `query_graph`, `trace_path`, `get_code_snippet`, `get_architecture`) BEFORE reading large source files or performing global ripgrep.
   - Use `index_status(project="home-merolhack-fl-merolhack.github.io")` and `detect_changes` to verify project graph freshness before starting structural tasks.

2. **First Use LLM Wiki & End-of-Task Modular Update:**
   - Always consult the **LLM Wiki** ([`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md)) first for system understanding and architectural patterns.
   - At the completion of every task, update the wiki in a modular way (update topic pages in `wiki/`, index in `wiki/index.md`, and log in `wiki/log.md`).

3. **Post-Task Sync:**
   - After completing edits, run `detect_changes` on project `home-merolhack-fl-merolhack.github.io` to ensure the knowledge graph tracks all newly created or modified functions/routes.

---

## 7. Secondary Model Delegation Protocol (Ollama: Gemma4 Cloud / Qwen3 Local) [MUST / MANDATORY]

### 7.1 Operational Mandate & Model Hierarchy
Whenever a task is mechanical, repetitive, or low-risk, agents **MUST** delegate execution to the secondary models via the MCP tool `consultar_modelo_local` (`ollama-local` server) rather than resolving it directly with the primary agent model. This minimizes consumption of primary tokens and latency for routine operations.

The delegation strictly adheres to the following cascade:
1. **FIRST — `gemma4:cloud`**: Primary choice whenever sufficient weekly usage quota is available (< 90%). Provides higher reasoning capability, 31B scale, and precision for structured tasks.
2. **SUBSEQUENTLY — `qwen3:8b-8k`**: Mandatory local fallback when weekly cloud quota is exhausted (>= 90%) or if cloud connectivity fails. Runs 100% locally on-device.

> **Execution Note:** The MCP tool `consultar_modelo_local` automatically manages this quota check and fallback natively. Direct API/CLI interactions with Ollama must honor the exact same order.

### 7.2 Technical Specifications of Delegated Models
- **Cloud Model (Priority 1)**: `gemma4:cloud`
  - **Developer**: Google DeepMind (Gemma 4 family).
  - **Architecture**: 31B parameters via Ollama Cloud API endpoint.
  - **Condition**: Dispatched when weekly usage quota is below the 90% threshold.
- **Local Model (Fallback 2)**: `qwen3:8b-8k`
  - **Developer**: Alibaba Cloud (Qwen Team).
  - **Architecture**: Dense decoder-only Transformer (8.2B parameters).
  - **Quantization**: `Q4_K_M` GGUF (~5.22 GB memory/VRAM footprint).
  - **Context Window**: Native up to 40,960 tokens (optimized active window of 8,192 tokens for rapid inference).
  - **Condition**: Active fallback whenever quota is unavailable or cloud calls fail.
- **MCP Bridge**: `ollama-local` &rarr; `consultar_modelo_local` (`C:\Users\lenin\Documents\AIDevelopment\ollama\ollama_mcp_server.py` connecting to `http://localhost:11434/v1/chat/completions`).

### 7.3 Mandatory Delegation Matrix

| Tipo de Tarea | Acción | Herramienta Ejecutora |
| :--- | :---: | :--- |
| **Docstrings, comentarios y anotaciones de tipo** | **MUST DELEGATE** | `ollama-local` &rarr; `consultar_modelo_local` (`gemma4:cloud` &rarr; `qwen3:8b-8k`) |
| **Boilerplate repetitivo y formateo de estructuras** | **MUST DELEGATE** | `ollama-local` &rarr; `consultar_modelo_local` (`gemma4:cloud` &rarr; `qwen3:8b-8k`) |
| **Limpieza de Markdown, regex y parseo básico** | **MUST DELEGATE** | `ollama-local` &rarr; `consultar_modelo_local` (`gemma4:cloud` &rarr; `qwen3:8b-8k`) |
| **Traducciones y resúmenes mecánicos aislados** | **MUST DELEGATE** | `ollama-local` &rarr; `consultar_modelo_local` (`gemma4:cloud` &rarr; `qwen3:8b-8k`) |
| **Consultas puntuales sin contexto multi-archivo** | **MUST DELEGATE** | `ollama-local` &rarr; `consultar_modelo_local` (`gemma4:cloud` &rarr; `qwen3:8b-8k`) |
| **Decisiones de arquitectura y diseño de sistemas** | **DO NOT DELEGATE** | Agente Principal (Antigravity) |
| **Refactorizaciones que tocan múltiples archivos** | **DO NOT DELEGATE** | Agente Principal (Antigravity) |
| **Operaciones de Git, CI/CD y despliegues** | **DO NOT DELEGATE** | Agente Principal (Antigravity) |
| **Políticas de AdSense, seguridad y auditorías** | **DO NOT DELEGATE** | Agente Principal (Antigravity) |


