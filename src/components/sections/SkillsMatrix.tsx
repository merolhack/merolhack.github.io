"use client";

import { motion } from "framer-motion";
import { subjectData } from "@/data/subject";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Database, Cloud, Network } from "lucide-react";

const categories = [
  {
    title: "Backend & API Architecture",
    icon: <Database className="h-6 w-6 text-indigo-400" />,
    skills: subjectData.competencies.backend,
  },
  {
    title: "Cloud, DevOps & Monitoring",
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    skills: subjectData.competencies.cloudAndDevOps,
  },
  {
    title: "Frontend Engineering",
    icon: <Layers className="h-6 w-6 text-fuchsia-400" />,
    skills: subjectData.competencies.frontend,
  },
  {
    title: "Data Persistence",
    icon: <Network className="h-6 w-6 text-emerald-400" />,
    skills: subjectData.competencies.dataPersistence,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsMatrix() {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10" />
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100 mb-12 text-center">
          Technical Competencies
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-zinc-800 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-zinc-100">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge 
                        key={skillIdx} 
                        variant="secondary" 
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 pointer-events-none"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
