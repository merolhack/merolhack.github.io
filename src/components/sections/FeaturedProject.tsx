import { subjectData } from "@/data/subject";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

export function FeaturedProject() {
  const { featuredProject } = subjectData;
  if (!featuredProject) return null;

  return (
    <section id="projects" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-2">
            <BookOpen className="h-10 w-10 text-indigo-400" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100">
            Featured Project: {featuredProject.title}
          </h2>
          
          <p className="text-xl text-zinc-300 font-medium max-w-2xl">
            {featuredProject.subtitle}
          </p>
          
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            {featuredProject.description}
          </p>

          <div className="pt-6">
            <a href={featuredProject.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg h-auto shadow-lg shadow-indigo-900/20 transition-all hover:scale-105">
                Read the Playbook
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
