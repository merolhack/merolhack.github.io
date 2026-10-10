# Projects, Publications & Enterprise Repositories

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Subject**: [Lenin Meza Profile](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/subject-profile.md)

---

## 1. Personal Projects in Active Production

These live production platforms were architected and launched independently by Lenin Meza, demonstrating full-stack engineering, performance optimization, and domain-specific utility.

### A. DQRO.mx — Directorio Empresarial y Comercial de Querétaro
- **Live URL**: [`https://dqro.mx/`](https://dqro.mx/)
- **Screenshot Asset**: [`/images/projects/dqro.png`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/public/images/projects/dqro.png)
- **Tagline**: Directorio empresarial y comercial en Querétaro con verificación e.firma y contacto directo.
- **Architectural Overview**:
  - Engineered on **WordPress Full Site Editing (FSE)** powered by a dedicated custom engine (`dqro-core-engine`) to eliminate heavyweight page builder overhead.
  - Runtime: **PHP 8.3** + **MariaDB** deployed on scalable cloud infrastructure via an atomic SFTP CI/CD pipeline.
  - Rigorous performance and accessibility engineering achieving **PageSpeed 95+ Mobile** and WCAG 2.1 AA compliance.
- **Core Platform Features**:
  - Multi-municipality indexing covering all 18 municipalities of Querétaro.
  - Real-time GPS-assisted **Auxilio Vial Inmediato** module (< 15 km) for tow trucks (grúas), mechanics, and tire repair services.
  - Official business verification with SAT e.firma compliance.

### B. Freelance México — Plataforma & Comunidad para Independientes
- **Live URL**: [`https://freelancemexico.com.mx/`](https://freelancemexico.com.mx/)
- **Screenshot Asset**: [`/images/projects/freelancemexico.png`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/public/images/projects/freelancemexico.png)
- **Tagline**: La Plataforma y Comunidad para Freelancers en México.
- **Architectural Overview**:
  - Marketplace and resource ecosystem developed with WordPress and HivePress, extended via a custom business logic layer (`fm-core-engine`).
  - Runtime: **PHP 8.3** with tailored responsive UI tokens and search engine optimization.
- **Core Platform Features**:
  - Interactive **Simulador Fiscal RESICO** with automatic calculation of ISR and IVA retentions.
  - Hourly rate calculator and fixed overhead break-even analysis tool.
  - Blinded civil service contracts generator (Contrato Civil de Prestación de Servicios).
  - Curated remote job board and 100% free downloadable fiscal guides.

---

## 2. Technical Book Publication: Playbook de Arquitectura MACH

- **Book Title**: *Playbook de Arquitectura MACH: Sistemas Empresariales en la Era de los Agentes Autónomos*
- **Publisher**: Amazon KDP (1st Edition, 2026)
- **ASIN**: [`B0HFYGC34D`](https://www.amazon.es/dp/B0HFYGC34D)
- **Specifications**: 314 physical pages (6x9 in format), 30 chapters, 36 high-fidelity architecture diagrams, 8 strategic parts.
- **Scope & Pillars**:
  1. **Microservicios & DDD**: Bounded contexts, Database-per-Service, eliminating distributed monoliths.
  2. **API-First & Resiliencia**: OpenAPI 3.1, SHA-256 banking idempotency, Saga Pattern, Outbox & CDC (Debezium/Kafka).
  3. **Cloud-Native & Zero-Trust**: Multi-Cloud GCP/AWS, SPIFFE/SPIRE cryptographic identity, Istio mTLS, OPA policies.
  4. **Headless, Edge & AI Agents**: Next.js 15 App Router, 5-layer CDN caching, VoIP cloud, Model Context Protocol (MCP) agents.

---

## 3. Active Enterprise Repositories

| Repository | Visibility | Tech Stack | Description |
| :--- | :---: | :--- | :--- |
| [`pressvitals-site-auditor`](https://github.com/merolhack/pressvitals-site-auditor) | Public | PHP 8.3, REST API | Headless-first WordPress diagnostic engine with 22+ proactive probes for database, performance, and security health ([WordPress Plugin Directory](https://wordpress.org/plugins/pressvitals-site-auditor/)). |
| [`mach-playbook.github.io`](https://github.com/mach-playbook/mach-playbook.github.io) | Public | Markdown, Static Web | Interactive web companion for the MACH Playbook ([mach-playbook.github.io](https://mach-playbook.github.io/)). |
| [`cpi-visualization-app`](https://github.com/merolhack/cpi-visualization-app) | Public | Next.js, Supabase, D3.js | Interactive web analytics dashboard visualizing consumer price indices with dynamic D3 charts. |
| `gazeti-healthcheck-scripts` | Private | Bash, GCP API | Proactive health check automation for GCP Compute Engine VMs and container runtimes. |
| `sbc-derqui-opensips` | Private | OpenSIPS, Debian 13 | Production Session Border Controller (SBC) routing configurations for high-volume enterprise SIP traffic. |
| `oml-daemon-script` | Private | Python 3, Systemd | High-throughput auto-dialer daemon integrating OMniLeads VoIP telephony pipelines. |
| `oml-config-prod` | Private | Ansible, YAML | Automated deployment playbooks for Gazeti OMniLeads VoIP switch infrastructure. |
