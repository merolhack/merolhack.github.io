import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lenin Meza | Senior Software Architect & Technical Author",
  description: "Enterprise portfolio of Lenin Meza, Senior Software Architect & Author of 'Playbook de Arquitectura MACH' (Amazon KDP). 17+ years specializing in BaaS, identity verification, TOGAF, BIAN, and GCP VoIP cloud systems.",
  metadataBase: new URL("https://merolhack.github.io"),
  openGraph: {
    title: "Lenin Meza | Senior Software Architect & Technical Author",
    description: "Enterprise portfolio of Lenin Meza, Author of 'Playbook de Arquitectura MACH'. 17+ years specializing in Bank-as-a-Service (BaaS), identity verification, TOGAF, BIAN, and VoIP cloud architecture.",
    url: "https://merolhack.github.io",
    siteName: "Lenin Meza Portfolio",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenin Meza | Senior Software Architect & Author",
    description: "17+ years enterprise web and cloud systems architecture experience. Author of 'Playbook de Arquitectura MACH'.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lenin Meza",
    "jobTitle": "Senior Software Architect & Technical Author",
    "url": "https://merolhack.github.io",
    "email": "merolhack@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "El Marqués",
      "addressRegion": "Querétaro",
      "addressCountry": "Mexico"
    },
    "sameAs": [
      "http://www.linkedin.com/in/leninmezazarco",
      "https://github.com/merolhack",
      "https://stackoverflow.com/users/1006079/lenin-meza",
      "https://dev.to/merolhack",
      "https://www.amazon.es/dp/B0HFYGC34D"
    ],
    "knowsAbout": [
      "MACH Architecture (Microservices, API-First, Cloud-Native, Headless)",
      "Bank as a Service (BaaS)",
      "Enterprise Architecture",
      "TOGAF",
      "BIAN Core Banking",
      "Incode Identity Verification",
      "Java Spring Boot Microservices",
      "OpenSIPS VoIP Telephony",
      "GCP Cloud Architecture",
      "AI Agents & Model Context Protocol (MCP)"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Playbook de Arquitectura MACH: Estrategias Prácticas para Sistemas Componibles, Microservicios y Headless en la Era Agente",
    "author": {
      "@type": "Person",
      "name": "Lenin Meza",
      "url": "https://merolhack.github.io"
    },
    "inLanguage": "es",
    "numberOfPages": 314,
    "bookFormat": "https://schema.org/EBook",
    "isbn": "B0HFYGC34D",
    "url": "https://www.amazon.es/dp/B0HFYGC34D",
    "image": "https://merolhack.github.io/images/books/mach-architecture-playbook-cover.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Amazon KDP"
    },
    "datePublished": "2026-08-21",
    "description": "La guía técnica definitiva para arquitectos de software, líderes de ingeniería y CTOs que necesitan diseñar, migrar y operar sistemas modernos de misión crítica basados en el paradigma MACH (Microservices, API-First, Cloud-Native, Headless) y agentes autónomos de IA."
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Sections",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Summary",
        "url": "https://merolhack.github.io/#summary"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Playbook de Arquitectura MACH",
        "url": "https://merolhack.github.io/#book"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Technical Competencies",
        "url": "https://merolhack.github.io/#skills"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Enterprise Architecture & Cloud Topology",
        "url": "https://merolhack.github.io/#architecture"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Career Architecture",
        "url": "https://merolhack.github.io/#timeline"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Personal Projects & Platforms",
        "url": "https://merolhack.github.io/#projects"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Architecture & Repositories",
        "url": "https://merolhack.github.io/#repositories"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "Contact",
        "url": "https://merolhack.github.io/#contact"
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8STYZ8GZRJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8STYZ8GZRJ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
