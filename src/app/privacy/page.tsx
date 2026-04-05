import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 mb-8 inline-block transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-400 text-sm">Last updated: April 2026</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Consent Management Platform (CMP)</h2>
          <p className="text-zinc-300 leading-relaxed">
            We use a Consent Management Platform (CMP) to comply with privacy regulations, 
            including the General Data Protection Regulation (GDPR), for visitors from the European 
            Economic Area (EEA), the UK, and Switzerland. You can manage your consent preferences 
            at any time through our privacy consent dialog.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Information We Collect</h2>
          <p className="text-zinc-300 leading-relaxed">
            This site uses Google Analytics to collect anonymous traffic data including pages visited, 
            time on site, and general geographic location. No personally identifiable information is collected 
            without your explicit consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Cookies</h2>
          <p className="text-zinc-300 leading-relaxed">
            This site uses cookies for analytics and, when enabled, advertising purposes through Google AdSense. 
            You can disable cookies in your browser settings or manage them via our CMP dialog if you are located 
            in a regulated region.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Third-Party Services</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            <li><strong>Google Analytics:</strong> Traffic analysis and visitor insights.</li>
            <li><strong>Google AdSense:</strong> Advertising (when enabled and consented).</li>
            <li><strong>GitHub Pages:</strong> Hosting and deployment services.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Contact</h2>
          <p className="text-zinc-300 leading-relaxed">
            For privacy-related questions, please use the contact information provided on the main page.
          </p>
        </section>
      </div>
    </main>
  );
}
