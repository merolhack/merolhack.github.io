# Operational Playbooks, CI/CD & Troubleshooting

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Architecture**: [Technical Architecture](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md)

---

## 1. CI/CD Deployment Pipeline (`.github/workflows/deploy.yml`)

The repository deploys autonomously to GitHub Pages upon pushing to the `main` branch.

```mermaid
sequenceDiagram
    participant Dev as Engineer / Agent
    participant Git as GitHub (origin/main)
    participant Build as Runner: build
    participant Deploy as Runner: deploy (Pages)
    participant Web as Live Site (merolhack.github.io)

    Dev->>Git: git push origin main
    Git->>Build: Trigger workflow
    Build->>Build: actions/checkout@v4
    Build->>Build: actions/setup-node@v4 (Node 20, cache: npm)
    Build->>Build: actions/configure-pages@v4
    Build->>Build: npm ci (clean install)
    Build->>Build: npm run build (next build -> /out)
    Build->>Build: actions/upload-pages-artifact@v3 (path: ./out)
    Build->>Deploy: Artifact Hand-off
    Deploy->>Deploy: actions/deploy-pages@v4
    Deploy->>Web: Published to GitHub Pages CDN
```

### Critical Action Hook Rule
> [!WARNING]
> **Do not inject `static_site_generator: next`** into `actions/configure-pages`.  
> Doing so forces GitHub's default Next.js action overrides, which rewrite local `next.config.ts` static export directives and result in `404 Not Found` asset loading errors. The configuration must remain unopinionated so that local `npm run build` dictates the `/out` directory.

---

## 2. UI & Component Development Protocol

When developing or modifying UI components:
1. **Adding Shadcn Primitives**:
   ```bash
   npx shadcn@latest add [component-name]
   ```
2. **Component File Placement**:
   - Page sections: `src/components/sections/`
   - Reusable atom/molecule primitives: `src/components/ui/`
3. **Data Binding**:
   - Always read profile, metrics, links, and content from [`src/data/subject.ts`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/data/subject.ts).
4. **Local Build & Test Verification**:
   ```bash
   # Typecheck and static export verification
   npm run build

   # Code linting
   npm run lint

   # Local server execution
   npm run dev
   ```

---

## 3. Troubleshooting & Gotchas

### Issue 1: Hydration Mismatch with Browser APIs
- **Symptom**: `ReferenceError: window is not defined` or hydration mismatch warnings.
- **Cause**: Using browser APIs (`window`, `document`, `navigator`, `localStorage`) inside components rendered during server prerendering.
- **Solution**: Mark components with `"use client"` and either access APIs inside `useEffect()`, or dynamically import with `ssr: false`:
  ```typescript
  import dynamic from 'next/dynamic';

  const DynamicWidget = dynamic(
    () => import('@/components/Widget'),
    { ssr: false }
  );
  ```

### Issue 2: Image Optimization Failure
- **Symptom**: Export fails or images render broken with `/_next/image?url=...` 404s.
- **Cause**: `images: { unoptimized: true }` missing from `next.config.ts`.
- **Solution**: Verify `unoptimized: true` is set in `next.config.ts`.

### Issue 3: Windows NTFS Zone Identifiers
- **Symptom**: Files downloaded through Windows onto WSL filesystem create companion `:Zone.Identifier` stream files.
- **Solution**: Remove the stream file before `git add`:
  ```bash
  rm -f 'public/filename:Zone.Identifier'
  ```

---

## 4. Autonomous Agent Operational Protocol [MANDATORY]

All autonomous agents working on this repository MUST strictly execute according to the following 4 rules:

1. **LLM Wiki Knowledge & End-of-Task Modular Sync**:
   - Always consult [`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) first to extract architectural patterns, constraints, and data mappings.
   - At the completion of every task, update the LLM Wiki modularly (update the corresponding `wiki/*.md` file, update `wiki/index.md` if new pages were added, and append to `wiki/log.md`).
2. **Codebase Memory Graph Navigation**:
   - Query `codebase-memory` MCP tools using project `home-merolhack-fl-merolhack.github.io` (`/home/merolhack/fl/merolhack.github.io`).
   - Prioritize `search_graph`, `trace_path`, `query_graph`, and `get_code_snippet` over raw text grepping.
3. **Ollama Secondary Model Delegation to Save Tokens**:
   - Delegate mechanical, repetitive, and low-risk tasks (boilerplate, comments, simple formatting) to `consultar_modelo_local` (`ollama-local`: `gemma4:cloud` priority, `qwen3:8b-8k` local fallback).
   - Reserve primary agent tokens for multi-file architecture, design decisions, and Git/CI operations.
4. **Mandatory Commit, Push & GitHub Actions Pipeline Check**:
   - Before ending a task, rigorously validate locally using `npm run lint` and `npm run build` (confirming 0 errors and zero export breakage).
   - Stage all modified files, commit using Conventional Commits (`feat:`, `fix:`, `docs:`, etc.), and execute `git push origin main`.
   - Monitor the GitHub Actions deployment workflow via `gh run list --limit 1` or `gh run watch` to confirm the status is `completed` with conclusion `success`. Any failure must be investigated and resolved immediately.
