export const subjectData = {
    name: "Lenin Meza",
    titles: ["Software Architect", "Technical Author", "Technical Lead"],
    location: "El Marques, Querétaro, Mexico",
    contact: {
        email: "merolhack@gmail.com",
    },
    social: {
        linkedin: "http://www.linkedin.com/in/leninmezazarco",
        github: "https://github.com/merolhack",
        stackoverflow: "https://stackoverflow.com/users/1006079/lenin-meza",
        devto: "https://dev.to/merolhack",
        credly: "https://www.credly.com/users/lenin-jose-meza-zarco/badges",
    },
    summary:
        "Over 17 years of progressive experience in Web and Enterprise technologies. Extensive, proven background in Bank as a Service (BaaS) infrastructure, complex identity verification platforms, and rigorous enterprise architecture (TOGAF, BIAN). Author of 'Playbook de Arquitectura MACH' (Amazon KDP 2026). Demonstrated track record in leading high-performance development teams and architecting secure, high-availability cloud systems.",
    competencies: {
        frontend: [
            "Angular (2+, 4, 7)",
            "React",
            "TypeScript",
            "ECMAScript",
            "Bootstrap 4+",
            "HTML5",
            "CSS3",
            "jQuery",
        ],
        backend: [
            "Java (1.8, 17, 21)",
            "Spring Boot (1.5, 2, 3)",
            "NodeJS (Express)",
            "Serverless architectures",
            "PHP (Laravel, Magento)",
        ],
        dataPersistence: [
            "MongoDB",
            "MySQL",
            "SQL Server",
            "Redis",
            "Memcached",
            "Oracle PL/SQL",
        ],
        cloudAndDevOps: [
            "AWS (EC2, S3, EMR)",
            "Google Cloud Platform (GCP)",
            "DigitalOcean",
            "Docker",
            "Kubernetes",
            "GitLab CI/CD",
            "Jenkins",
            "Control-M",
            "OBM (Microfocus)",
            "Dynatrace",
        ],
    },
    experience: [
        {
            role: "Full-Stack Developer VoIP/Gazeti",
            period: "Sep 2025 - Current",
            description: "VoIP architecture on GCP, OpenSIPS configuration, Yeti-switch implementation."
        },
        {
            role: "Software Architect / The Cocktail",
            period: "Sep 2022 - Current",
            description: "Incode Identity Verification implementation, Coppel group onboarding architecture, BIAN/TOGAF standards adherence."
        },
        {
            role: "Senior Consultant at Walmart / Indra",
            period: "Sep 2021 - Sep 2022",
            description: "OBM and Dynatrace monitoring integration, Service Now API scripting via Groovy, network node health scraping."
        },
        {
            role: "Senior Consultant at Sabadell / Indra",
            period: "Nov 2019 - Sep 2021",
            description: "Core Banking system enhancements (Bantotal, GeneXus), BaaS microservices implementation via Spring Boot and Docker/Kubernetes."
        },
        {
            role: "Full Stack Developer at Teamknowlogy",
            period: "Jun 2019 - Nov 2019",
            description: "AWS-based data extractors (Crawlers), Serverless Node.js, Spring Boot REST APIs."
        },
        {
            role: "Technical Lead at Santander",
            period: "Jan 2018 - Jun 2019",
            description: "Digital Factory Spotlight initiatives, BaaS API architecture mapping, Angular SPA frontend development."
        }
    ],
    highlights: {
        github: "Maintainer and contributor to 'mern-stack' repositories and open source architecture playbooks.",
        stackoverflow: "Extensive authority in deep backend troubleshooting: Redis daemon configurations, MariaDB GSSAPI plugin handling, AWS SMTP port management, and Android WebView Base64 processing.",
        devto: "Authorship and insights regarding MongoDB, Express.JS, React, and NodeJS ecosystem."
    },
    bookPublication: {
        title: "Playbook de Arquitectura MACH",
        subtitle: "Estrategias Prácticas para Sistemas Componibles, Microservicios y Headless en la Era Agente",
        asin: "B0HFYGC34D",
        amazonUrl: "https://www.amazon.es/dp/B0HFYGC34D",
        websiteUrl: "https://mach-playbook.github.io/",
        coverImage: "/images/books/mach-architecture-playbook-cover.jpg",
        edition: "Amazon KDP Edition 2026",
        language: "Español (México)",
        pages: 314,
        chapters: 30,
        diagrams: 36,
        parts: 8,
        description:
            "La guía técnica definitiva para arquitectos de software, líderes de ingeniería y CTOs que necesitan diseñar, migrar y operar sistemas modernos de misión crítica basados en el paradigma MACH (Microservices, API-First, Cloud-Native, Headless) y agentes autónomos de IA.",
        fullDescription:
            "A través de 30 capítulos y 8 partes estratégicas, este libro desmitifica la arquitectura componible con implementaciones de producción: límites de dominio con DDD, transacciones distribuidas con Saga Pattern, resiliencia con Circuit Breaker y CDC con Debezium/Kafka, seguridad Zero-Trust con mTLS/SPIRE, frontends headless con Next.js 15, VoIP cloud-native y automatización con agentes IA mediante Model Context Protocol (MCP).",
        pillars: [
            {
                title: "Microservicios & DDD",
                description: "Delimitación de dominios, Bounded Contexts, Database-per-Service y eliminación del monolito distribuido."
            },
            {
                title: "API-First & Resiliencia",
                description: "OpenAPI 3.1, Spectral, idempotencia bancaria SHA-256, Patrón Saga, Outbox y Change Data Capture (CDC)."
            },
            {
                title: "Cloud-Native & Zero-Trust",
                description: "Multi-Cloud GCP/AWS, identidades criptográficas SPIFFE/SPIRE, mTLS en Service Mesh (Istio) y políticas OPA."
            },
            {
                title: "Headless, Edge & AI Agents",
                description: "Next.js 15 App Router, CDN Edge Caching de 5 capas, VoIP Cloud y servidores Model Context Protocol (MCP)."
            }
        ],
        caseStudies: ["Nike (Flash sales & -62% infra)", "Sephora (Omnicanal en 34 países)", "Wegmans (Resiliencia ante tormenta Fern 2026)", "CarParts.com (Comercio con Agentes IA)"],
        highlights: [
            "314 Páginas físicas (Formato 6x9 in)",
            "36 Diagramas rasterizados de alta fidelidad",
            "Suite de Validación Editorial Pre-Flight 100% PASS",
            "Código y patrones listos para entornos de producción"
        ]
    },
    portfolioCreation: {
        title: "How this Portfolio was Created",
        description: "This portfolio is a showcase of Agentic Development. It was autonomously generated by the Google Antigravity Agent using a highly structured 'Master Prompt' dictating an Enterprise AI workflow. The agent was responsible for the full Software Development Lifecycle, including:",
        process: [
            "Bootstrapping Next.js 15+ (App Router) strictly for static export.",
            "Implementing a Vibe Coding design system leveraging Tailwind CSS v4 and Shadcn/ui for a premium 'Deep Dark Mode' enterprise aesthetic.",
            "Structuring an immutable data strategy to bind context programmatically and avoid AI hallucinations.",
            "Auditing layout constraints and scroll-linked Framer Motion micro-animations using a headless Browser Subagent.",
            "Configuring and deploying the final static build autonomously to GitHub Pages via a custom GitHub Actions pipeline."
        ]
    },
    latestRepositories: [
        {
            name: "pressvitals-site-auditor",
            description: "A headless-first WordPress diagnostic engine featuring 22+ proactive probes for performance, security, and DB health — extensible to 48+ via REST API and custom filters.",
            url: "https://github.com/merolhack/pressvitals-site-auditor",
            websiteUrl: "https://wordpress.org/plugins/pressvitals-site-auditor/",
            isPrivate: false
        },
        {
            name: "mach-playbook.github.io",
            description: "Learn MACH fundamentals through concrete service boundaries, clean APIs, and deployment examples, so architecture decisions feel tangible, not theoretical.",
            url: "https://github.com/mach-playbook/mach-playbook.github.io",
            websiteUrl: "https://mach-playbook.github.io/",
            isPrivate: false
        },
        {
            name: "gazeti-healthcheck-scripts",
            description: "Bash scripts for GCP VM and container health check",
            url: "https://github.com/merolhack/gazeti-healthcheck-scripts",
            isPrivate: true
        },
        {
            name: "sbc-derqui-opensips",
            description: "OpenSIPS configuration files for the installation on a Debian 13 On-Premises",
            url: "https://github.com/merolhack/sbc-derqui-opensips",
            isPrivate: true
        },
        {
            name: "oml-daemon-script",
            description: "OMniLeads auto-dialer python script",
            url: "https://github.com/merolhack/oml-daemon-script",
            isPrivate: true
        },
        {
            name: "cpi-visualization-app",
            description: "Next.JS application that connects to Supabase and uses D3.JS as chart library",
            url: "https://github.com/merolhack/cpi-visualization-app",
            isPrivate: false
        },
        {
            name: "oml-config-prod",
            description: "Gazeti OMniLeads Ansible configurations",
            url: "https://github.com/merolhack/oml-config-prod",
            isPrivate: true
        }
    ],
    featuredProject: {
        title: "MACH Playbook",
        subtitle: "A comprehensive guide to building modern, composable architectures.",
        description: "Learn MACH fundamentals through concrete service boundaries, clean APIs, and deployment examples, so architecture decisions feel tangible, not theoretical.",
        url: "https://mach-playbook.github.io/"
    },
    impactMetrics: [
        { label: "Years Enterprise Experience", value: "17+", detail: "BaaS, Cloud & Enterprise Architecture", iconName: "Clock" },
        { label: "Published KDP Book", value: "314 Págs", detail: "Playbook de Arquitectura MACH (2026)", iconName: "BookOpen" },
        { label: "Active Health & Audit Probes", value: "48+", detail: "PressVitals & GCP Diagnostic Suite", iconName: "Activity" },
        { label: "Enterprise Standards", value: "TOGAF & BIAN", detail: "Banking Microservices & Telephony", iconName: "ShieldCheck" }
    ],
    architectureNodes: [
        {
            id: "identity",
            title: "Incode Identity & Biometric Verification",
            category: "Security & Onboarding",
            description: "High-security biometric identity verification platform integrated into enterprise onboarding architecture (Coppel / The Cocktail) following BIAN standards.",
            tech: ["Incode SDK", "Groovy", "REST APIs", "OAuth2", "Spring Boot"],
            status: "Enterprise Production"
        },
        {
            id: "baas",
            title: "Core Banking & BaaS Microservices",
            category: "Fintech & BaaS",
            description: "Bank-as-a-Service Spring Boot microservices layer integrating Sabadell & Santander core banking systems (Bantotal, GeneXus) deployed on Kubernetes.",
            tech: ["Java 21", "Spring Boot 3", "Docker", "Kubernetes", "Redis", "Kafka"],
            status: "Enterprise Production"
        },
        {
            id: "voip",
            title: "OpenSIPS & GCP VoIP Telephony Cloud",
            category: "Telecom & Cloud Infrastructure",
            description: "Scalable VoIP telephony infrastructure deployed on Google Cloud Platform featuring OpenSIPS session border controllers and Yeti-switch trunk routing.",
            tech: ["OpenSIPS", "Yeti-switch", "GCP", "Debian 13", "Ansible", "Bash"],
            status: "Active Deployment"
        },
        {
            id: "diagnostics",
            title: "PressVitals & Diagnostic Engine",
            category: "Observability & Performance",
            description: "Headless WordPress site auditor engine featuring 22+ proactive probes for performance, security, and DB health — extensible to 48+ via REST API.",
            tech: ["PHP 8.3", "GCP Compute Engine", "Bash", "Dynatrace", "REST API"],
            status: "Published Open Source"
        }
    ]
};
