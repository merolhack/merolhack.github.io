import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Lenin Meza | Senior Software Architect & Technical Lead",
  description: "Enterprise portfolio of Lenin Meza, Senior Software Architect & Technical Lead. 17+ years specializing in BaaS, identity verification, TOGAF, BIAN, and GCP VoIP cloud systems.",
  metadataBase: new URL("https://merolhack.github.io"),
  openGraph: {
    title: "Lenin Meza | Senior Software Architect & Technical Lead",
    description: "Enterprise portfolio of Lenin Meza. 17+ years specializing in Bank-as-a-Service (BaaS), identity verification, TOGAF, BIAN, and VoIP cloud architecture.",
    url: "https://merolhack.github.io",
    siteName: "Lenin Meza Portfolio",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenin Meza | Senior Software Architect",
    description: "17+ years enterprise web and cloud systems architecture experience.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lenin Meza",
  "jobTitle": "Senior Software Architect & Technical Lead",
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
    "https://dev.to/merolhack"
  ],
  "knowsAbout": [
    "Bank as a Service (BaaS)",
    "Enterprise Architecture",
    "TOGAF",
    "BIAN Core Banking",
    "Incode Identity Verification",
    "Java Spring Boot Microservices",
    "OpenSIPS VoIP Telephony",
    "GCP Cloud Architecture"
  ]
};

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
