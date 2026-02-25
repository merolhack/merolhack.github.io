import { subjectData } from "@/data/subject";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, MessageSquare, TerminalSquare } from "lucide-react";

export function DigitalFootprint() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100 mb-12 text-center">
          Digital Footprint & Authority
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
            <CardHeader>
              <Github className="h-8 w-8 text-zinc-400 mb-4" />
              <CardTitle className="text-xl text-zinc-100">Open Source OS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {subjectData.highlights.github}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-zinc-800 bg-zinc-900/30 backdrop-blur-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <MessageSquare className="h-32 w-32" />
             </div>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl text-zinc-100">Deep Backend Triage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                {subjectData.highlights.stackoverflow}
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
            <CardHeader>
              <TerminalSquare className="h-8 w-8 text-blue-400 mb-4" />
              <CardTitle className="text-xl text-zinc-100">Ecosystem Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {subjectData.highlights.devto}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
