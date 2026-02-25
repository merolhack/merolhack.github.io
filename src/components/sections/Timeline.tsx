"use client";

import { motion } from "framer-motion";
import { subjectData } from "@/data/subject";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Timeline() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100 mb-16 text-center">
          Career Architecture
        </h2>
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-zinc-800 top-24 -z-10" />

        <div className="space-y-12">
          {subjectData.experience.map((exp, index) => {
             const isEven = index % 2 === 0;

             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex items-center justify-between w-full relative ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 flex items-center justify-center backdrop-blur-md">
                  <Briefcase className="h-4 w-4 text-indigo-300" />
                </div>

                <div className="w-5/12" />
                
                <Card className={`w-5/12 border-zinc-800 bg-zinc-900/60 backdrop-blur-md hover:border-zinc-700 transition-colors ${
                  isEven ? "text-right" : "text-left"
                }`}>
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">{exp.role}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
