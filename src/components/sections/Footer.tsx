import { subjectData } from "@/data/subject";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        <h3 className="text-2xl font-bold text-zinc-100">Ready to Architect the Future?</h3>
        <p className="text-zinc-400 max-w-lg mb-4">
          Available for enterprise-grade consulting, complex system architecture, and technical leadership roles.
        </p>
        
        <div className="flex gap-4">
          <a href={`mailto:${subjectData.contact.email}`}>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </a>
          {/* Note: In Next.js with output: 'export', static files located in public directory are referenced directly */}
          <a href="/Lenin_Meza-Resume.pdf" download="Lenin_Meza-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-900 w-full text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {subjectData.name}. All rights reserved. &bull; Deployed via GitHub Pages.
        </div>
      </div>
    </footer>
  );
}
