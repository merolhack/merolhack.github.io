import { subjectData } from "@/data/subject";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code2, Lock, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PortfolioDetails() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100 mb-12 text-center">
          Architecture & Repositories
        </h2>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Agentic Creation Section */}
          <Card className="border-zinc-800 bg-zinc-900/40 backdrop-blur-lg relative overflow-hidden h-full">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Bot className="h-40 w-40" />
             </div>
             <CardHeader>
                <div className="p-3 bg-zinc-950 rounded-lg w-max border border-zinc-800 mb-4">
                  <Bot className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl text-zinc-100">{subjectData.portfolioCreation.title}</CardTitle>
             </CardHeader>
             <CardContent className="relative z-10">
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  {subjectData.portfolioCreation.description}
                </p>
                <ul className="space-y-4">
                  {subjectData.portfolioCreation.process.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-indigo-500 mt-1">•</span>
                      <span className="text-zinc-400 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
             </CardContent>
          </Card>

          {/* Latest Repositories Section */}
          <Card className="border-zinc-800 bg-zinc-900/40 backdrop-blur-lg h-full">
             <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                    <Code2 className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-zinc-100 mt-4">Latest Repositories</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                {subjectData.latestRepositories.map((repo, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-200 font-medium group-hover:text-teal-400 transition-colors truncate pr-4"
                      >
                        {repo.name}
                      </a>
                      <div className="flex items-center space-x-2 shrink-0">
                        {repo.websiteUrl && (
                          <a
                            href={repo.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-indigo-400 hover:text-indigo-300 font-medium px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-800/50 transition-colors"
                          >
                            <Globe className="w-3 h-3 mr-1" /> Plugin / Site
                          </a>
                        )}
                        <Badge variant="outline" className={`${repo.isPrivate ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-teal-950/20 border-teal-900/50 text-teal-400'}`}>
                          {repo.isPrivate ? <Lock className="w-3 h-3 mr-1" /> : <Globe className="w-3 h-3 mr-1" />}
                          {repo.isPrivate ? "Private" : "Public"}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 font-light line-clamp-2">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                ))}
             </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
