# LLM Wiki Schema & Operational Protocol

> **Reference**: [Karpathy LLM Wiki Architecture](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)  
> **Scope**: `merolhack/merolhack.github.io` (`lenin-meza-portfolio`)  
> **Maintainers**: Google Antigravity & Lenin Meza

---

## 1. Architectural Philosophy

The LLM Wiki is a persistent, modular, compounding knowledge base that sits between human developers/AI agents and the raw repository files. Unlike standard ephemeral RAG (which re-derives answers from scratch on every prompt), this wiki is compiled once and continuously maintained, cross-referenced, and kept in sync with the codebase.

```mermaid
flowchart TD
    subgraph Raw_Layer ["1. Raw Sources (Immutable)"]
        R1["AGENTS.md"]
        R2["package.json"]
        R3["next.config.ts"]
        R4["src/data/subject.ts"]
        R5[".github/workflows/deploy.yml"]
        R6["public/google*.html"]
    end

    subgraph Schema_Layer ["2. Schema & Protocol"]
        S1["wiki/schema.md"]
    end

    subgraph Wiki_Layer ["3. The Wiki (Modular Markdown)"]
        W0["wiki/index.md (Catalog)"]
        W1["wiki/overview.md"]
        W2["wiki/architecture.md"]
        W3["wiki/design-system.md"]
        W4["wiki/subject-profile.md"]
        W5["wiki/projects-and-repositories.md"]
        W6["wiki/telemetry-and-analytics.md"]
        W7["wiki/operational-playbooks.md"]
        W8["wiki/model-delegation.md"]
        W9["wiki/audit-history.md"]
        WL["wiki/log.md (Append-Only)"]
    end

    Raw_Layer -->|Ingest / Compile| Wiki_Layer
    Schema_Layer -.->|Governs| Wiki_Layer
```

---

## 2. The Three Layers

1. **Raw Sources (Immutable)**: The actual code, configuration, assets, and documentation files in the repository. The LLM reads from them but treats them as the ground truth.
2. **The Wiki (`wiki/`)**: Modular, interlinked Markdown files synthesizing the architecture, decisions, domain model, and operational procedures.
3. **The Schema (`wiki/schema.md`)**: This document, dictating formatting, conventions, and operational lifecycle for both AI agents and human engineers.

---

## 3. Operational Protocols

### A. Ingestion Protocol (`ingest`)
When a new feature, source file, library, or architectural rule is added:
1. **Read & Extract**: Inspect the new or modified raw source files.
2. **Modular Update**: Identify which modular wiki pages are affected. Update existing pages or create a new dedicated page if introducing a distinct domain.
3. **Cross-Reference**: Ensure bidirectional or associative links between pages.
4. **Catalog Sync**: Update [`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) with any new page titles, descriptions, and category placement.
5. **Log Entry**: Append an entry to [`wiki/log.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/log.md) using the canonical format:
   ```markdown
   ## [YYYY-MM-DD] ingest | Title of change
   - **Sources**: list of files touched
   - **Summary**: bulleted summary of key takeaways
   - **Wiki Pages Updated**: [page link](file:///...)
   ```

### B. Query Protocol (`query`)
When an AI agent or human needs context on the system:
1. **Index First**: Read [`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) to locate the exact topic page rather than reading the entire codebase.
2. **Targeted Read**: Read only the relevant modular wiki pages.
3. **Compound Findings**: If a deep query reveals a novel architectural synthesis or solves a complex issue, file that insight back into the wiki as a new section or page.

### C. Health Check & Lint Protocol (`lint`)
Periodically verify the integrity of the wiki:
- **Consistency**: Ensure dependency versions in [`wiki/architecture.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md) match [`package.json`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/package.json).
- **Broken Links**: Verify that all relative links and file links resolve correctly.
- **Orphan Check**: Ensure every modular page is linked from [`wiki/index.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md).
- **Log Formatting**: Confirm all entries in [`wiki/log.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/log.md) match the `## [YYYY-MM-DD] action | title` grep-friendly pattern.

---

## 4. Page Conventions & Standards
- **File Names**: Lowercase kebab-case (e.g. `subject-profile.md`, `model-delegation.md`).
- **Headers**: Start each file with a clear `# Title`, a short quote/callout block defining its purpose, and links back to the index.
- **Clickable File Links**: Adhere to markdown links with `file:///` URLs or clean relative paths.
- **Language**: Technical documentation in English and Spanish where domain-appropriate.
