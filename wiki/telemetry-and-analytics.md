# Telemetry, Analytics & Search Engine Verification

> **Index**: [Catalog](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/index.md) | **Architecture**: [Technical Architecture](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/wiki/architecture.md)

---

## 1. Google Analytics 4 (GA4) Telemetry

The portfolio incorporates GA4 under the unified GitHub Pages account hierarchy for continuous traffic observation, visitor demographics, and reader engagement analysis.

### Account & Property Specifications
- **GA Account Name**: `Github Pages`
- **GA Account ID**: `389930119`
- **GA4 Property Name**: `merolhack.github.io`
- **GA4 Property ID**: `531281877`
- **Web Data Stream Name**: `merolhack.github.io`
- **Web Data Stream URL**: `https://merolhack.github.io`
- **Web Data Stream ID**: `15862982513`
- **Measurement ID**: `G-8STYZ8GZRJ`

### Implementation in Next.js App Router
Scripts are injected into `<head>` inside [`src/app/layout.tsx`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/app/layout.tsx) using the `afterInteractive` strategy:

```tsx
import Script from "next/script";

// RootLayout <head>:
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
```

- **Zero Performance Impact**: Defers script loading until after the main thread is idle, maintaining 95+ mobile PageSpeed scores.
- **Static Export Compatible**: Does not require SSR cookies or backend route handlers.

---

## 2. Google Search Console Verification

To claim and manage property ownership for `https://merolhack.github.io/` in Google Search Console:

- **Method**: HTML Verification File
- **Source File**: [`public/google7d4ec8c5344a17de.html`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/public/google7d4ec8c5344a17de.html)
- **Token String**: `google-site-verification: google7d4ec8c5344a17de.html`
- **Static Export Target**: Compiled directly by Next.js into `/out/google7d4ec8c5344a17de.html`.
- **Live Endpoint**: [`https://merolhack.github.io/google7d4ec8c5344a17de.html`](https://merolhack.github.io/google7d4ec8c5344a17de.html) (HTTP 200).

---

## 3. Structured Data (JSON-LD) for Search & AI Agents

To optimize discovery and indexing by AI crawler agents (Gemini, ChatGPT, Claude, Perplexity) as well as traditional search engines, [`src/app/layout.tsx`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/app/layout.tsx) embeds schema markup:

- **Schemas**: `schema.org/Person`, `schema.org/Book`, and `schema.org/ItemList` with `SiteNavigationElement`
- **Entities Declared**:
  - Full Name: `Lenin Meza`
  - Job Titles: `Software Architect`, `Technical Author`, `Technical Lead`
  - Books Authored: `Playbook de Arquitectura MACH`
  - Canonical Profiles: LinkedIn, GitHub, StackOverflow, Dev.to, Credly
  - Sitelinks / Section Navigation: Direct anchors for `#summary`, `#book`, `#skills`, `#architecture`, `#timeline`, `#projects`, `#repositories`, `#contact`.

---

## 4. Search Engine Indexing: Sitemap & Robots.txt

To ensure optimal indexing by search engine crawlers and robots:

- **Sitemap Generator**: [`src/app/sitemap.ts`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/app/sitemap.ts)
  - Exports statically to `/out/sitemap.xml` with `export const dynamic = "force-static"`.
  - Canonical live URL: [`https://merolhack.github.io/sitemap.xml`](https://merolhack.github.io/sitemap.xml).
- **Robots Policy**: [`src/app/robots.ts`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/app/robots.ts)
  - Exports statically to `/out/robots.txt` declaring open crawling (`User-Agent: *`, `Allow: /`) and referencing the canonical sitemap.
- **On-Page HTML Sitemap**:
  - Built into [`src/components/sections/Footer.tsx`](file:///Ubuntu-20.04/home/merolhack/fl/merolhack.github.io/src/components/sections/Footer.tsx) providing direct anchor navigation across all sections.
