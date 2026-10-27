import { subjectData } from "@/data/subject";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 py-16 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">Ready to Architect the Future?</h3>
        <p className="text-zinc-400 max-w-lg mb-4 font-light leading-relaxed">
          Available for enterprise-grade consulting, complex system architecture, and technical leadership roles.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <CopyEmailButton size="default" />
          <a href="/Lenin_Meza-Resume.pdf" download="Lenin_Meza-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              <Download className="mr-2 h-4 w-4 text-indigo-400" /> Download Resume
            </Button>
          </a>
        </div>

        {/* Internal Section Links / HTML Sitemap */}
        <nav aria-label="Footer Section Navigation" className="pt-6 border-t border-zinc-900/80 w-full">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
            <a href="#summary" className="hover:text-indigo-400 transition-colors">#summary</a>
            <a href="#book" className="hover:text-indigo-400 transition-colors">#book</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">#skills</a>
            <a href="#architecture" className="hover:text-indigo-400 transition-colors">#architecture</a>
            <a href="#timeline" className="hover:text-indigo-400 transition-colors">#timeline</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">#projects</a>
            <a href="#repositories" className="hover:text-indigo-400 transition-colors">#repositories</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">#contact</a>
          </div>
        </nav>
        
        <div className="pt-4 border-t border-zinc-900 w-full text-zinc-500 text-xs flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {subjectData.name}. All rights reserved. &bull; Deployed via GitHub Pages.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">sitemap.xml</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
