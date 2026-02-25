import { subjectData } from "@/data/subject";
import { Card, CardContent } from "@/components/ui/card";

export function ExecutiveSummary() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <Card className="border-zinc-800 bg-zinc-900/40 backdrop-blur-lg">
          <CardContent className="p-8 md:p-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100 mb-6 border-l-4 border-indigo-500 pl-4">
              Executive Summary
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              {subjectData.summary}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
