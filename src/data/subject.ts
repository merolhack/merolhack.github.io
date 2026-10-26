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
            name: "cadensa-web",
            description: "Plataforma clínica de entrenamiento rítmico del habla (Syllable-Timed Speech) con Web Audio API, detección de voz, Zero-Trust RLS en Supabase y CI/CD en Cloudflare Pages.",
            url: "https://github.com/merolhack/cadensa-web",
            websiteUrl: "https://cadensa-web.pages.dev/",
            isPrivate: false
        },
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
    personalProjects: [
        {
            id: "cadensa",
            title: "Cadensa",
            tagline: "Encuentra el ritmo de tu voz — Entrenamiento de Habla Rítmica y Fluidez Vocal",
            description: "Plataforma clínica diaria de entrenamiento rítmico del habla diseñada para superar bloqueos y reducir la tartamudez mediante técnicas comprobadas como Syllable-Timed Speech (STS), respiración guiada y retroalimentación auditiva en tiempo real.",
            detailedDescription: "Arquitectura Jamstack desacoplada desarrollada con Next.js 16 (App Router), TypeScript y Tailwind CSS v4, desplegada globalmente en Cloudflare Pages. Incorpora motor de metrónomo con Web Audio API de baja latencia, detección de voz en navegador, base de datos Supabase PostgreSQL con seguridad Zero-Trust RLS, gamificación con rachas diarias y reportes clínicos.",
            url: "https://cadensa-web.pages.dev/",
            image: "/images/projects/cadensa.png",
            badges: ["Salud Vocal & Fluidez", "Syllable-Timed Speech", "Cloudflare & Supabase"],
            highlights: [
                "Motor de metrónomo interactivo y feedback visual con Web Audio API de baja latencia",
                "Entrenamiento clínico basado en Syllable-Timed Speech (STS), Box Breathing y técnicas de modificación",
                "Detección y segmentación silábica de voz en navegador para evaluación de sincronía rítmica",
                "Despliegue estático global en Cloudflare Pages con backend Zero-Trust RLS en Supabase"
            ],
            tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Web Audio API", "Supabase", "Cloudflare Pages", "Vitest & Cucumber"]
        },
        {
            id: "dqro",
            title: "DQRO.mx",
            tagline: "Directorio Empresarial y Comercial de Querétaro",
            description: "Directorio empresarial y comercial en Querétaro con verificación e.firma, mapas interactivos, geolocalización y auxilio vial inmediato en los 18 municipios del estado.",
            detailedDescription: "Plataforma web de alta velocidad desarrollada sobre WordPress Full Site Editing (FSE) con motor nativo a medida (dqro-core-engine), arquitectura PHP 8.3 + MariaDB, despliegue atómico CI/CD vía SFTP y optimización estricta para Core Web Vitals (PageSpeed 95+ en móviles).",
            url: "https://dqro.mx/",
            image: "/images/projects/dqro.png",
            badges: ["Directorio Empresarial", "e.firma & Geo", "Querétaro"],
            highlights: [
                "Buscador geolocalizado en los 18 municipios de Querétaro",
                "Módulo de Auxilio Vial Inmediato (< 15 km)",
                "Verificación comercial con e.firma y contacto directo",
                "Cumplimiento de accesibilidad WCAG 2.1 AA y Mobile PageSpeed 95+"
            ],
            tech: ["WordPress FSE", "PHP 8.3", "dqro-core-engine", "MariaDB", "SFTP CI/CD", "SEO & Schema.org"]
        },
        {
            id: "freelancemexico",
            title: "Freelance México",
            tagline: "Plataforma y Comunidad para Freelancers en México",
            description: "Ecosistema digital y herramientas especializadas para trabajadores independientes en México: calculadoras de tarifas por hora, simuladores fiscales RESICO, contratos civiles blindados y guías tributarias del SAT.",
            detailedDescription: "Plataforma comunitaria y de recursos para independientes desarrollada en WordPress y HivePress con suite de herramientas interactivas personalizadas (fm-core-engine). Facilita la transición profesional y el cumplimiento tributario ante el SAT de forma transparente y gratuita.",
            url: "https://freelancemexico.com.mx/",
            badges: ["Plataforma Comunitaria", "Herramientas Fiscales", "México"],
            image: "/images/projects/freelancemexico.png",
            highlights: [
                "Simulador fiscal RESICO y cálculo de retenciones ISR / IVA",
                "Calculadora de tarifa por hora y costos fijos",
                "Generador de contratos civiles de prestación de servicios",
                "Directorio de recursos y empleo remoto para independientes"
            ],
            tech: ["WordPress", "HivePress", "fm-core-engine", "PHP 8.3", "Tailwind CSS", "Fiscal Tooling"]
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
