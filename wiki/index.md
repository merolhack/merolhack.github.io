# LLM Wiki Catalog & Index

> **Architecture Reference**: [Karpathy LLM Wiki Pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)  
> **Schema & Guidelines**: [`wiki/schema.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/schema.md)  
> **Activity Log**: [`wiki/log.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/log.md)

---

## 📚 Categorized Knowledge Pages

### 1. System Foundations & Architecture
| Page | Summary | Key Topics |
| :--- | :--- | :--- |
| [`overview.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/overview.md) | High-level system purpose, decoupling strategy, and zero-server infrastructure. | Portfolio Goals, Static Architecture, Single Source of Truth |
| [`architecture.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md) | Technical constraints, Next.js static export mandates, and dependency tree. | `output: 'export'`, React 19, Tailwind v4, Directory Layout |
| [`design-system.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/design-system.md) | Vibe Coding standards, Deep Dark Mode, glassmorphism, and Framer Motion. | Design Tokens, Scroll Fades, Hero Indicator, Navbar Thresholds |

### 2. Subject & Domain Model
| Page | Summary | Key Topics |
| :--- | :--- | :--- |
| [`subject-profile.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/subject-profile.md) | Biographical profile, 17+ years enterprise career timeline, and skills matrix. | Lenin Meza, BaaS, Incode Biometrics, VoIP GCP, Togaf/Bian |
| [`projects-and-repositories.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/projects-and-repositories.md) | Production platforms (Cadensa, DQRO.mx, Freelance México), KDP book, and git repos. | Personal Platforms, MACH Playbook (314p), PressVitals, OMniLeads |

### 3. Operations, Telemetry & AI Workflows
| Page | Summary | Key Topics |
| :--- | :--- | :--- |
| [`telemetry-and-analytics.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/telemetry-and-analytics.md) | GA4 tracking stream, Google Search Console HTML verification, and JSON-LD. | GA4 `G-8STYZ8GZRJ`, Search Console Token, Schema.org Person |
| [`operational-playbooks.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/operational-playbooks.md) | CI/CD GitHub Pages deployment, UI component creation, and gotchas. | `.github/workflows/deploy.yml`, Actions Overrides, Hydration |
| [`model-delegation.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/model-delegation.md) | Secondary model delegation protocol for Ollama (`gemma4:cloud` / `qwen3:8b-8k`). | Multi-Tier Cascade, Quota Check, `consultar_modelo_local` |
| [`audit-history.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/audit-history.md) | Complete version changelog and architectural decision milestone records. | Releases v1.0.0 through v1.0.7 |

---

## 📁 Source Documents (Raw Layer)

| Source File | Description | Mapped Wiki Target |
| :--- | :--- | :--- |
| [`src/data/subject.ts`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/data/subject.ts) | Master biographical data & repo lists | [`subject-profile.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/subject-profile.md) & [`projects-and-repositories.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/projects-and-repositories.md) |
| [`next.config.ts`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/next.config.ts) | Static export and unoptimized images | [`architecture.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md) |
| [`package.json`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/package.json) | NPM dependencies & runtime versions | [`architecture.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md) |
| [`.github/workflows/deploy.yml`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/.github/workflows/deploy.yml) | GitHub Actions CI/CD deployment workflow | [`operational-playbooks.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/operational-playbooks.md) |
| [`public/google7d4ec8c5344a17de.html`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/public/google7d4ec8c5344a17de.html) | Search Console verification token | [`telemetry-and-analytics.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/telemetry-and-analytics.md) |
| [`AGENTS.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/AGENTS.md) | Agent operational rules & model delegation | [`schema.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/schema.md) & [`model-delegation.md`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/model-delegation.md) |
