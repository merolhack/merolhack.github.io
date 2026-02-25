"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageSquare, Terminal, Award } from "lucide-react";
import { subjectData } from "@/data/subject";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient / Deep Dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950 -z-10" />
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 backdrop-blur-sm mb-4">
            <Terminal className="mr-2 h-4 w-4" />
            <span>Senior Software Architect</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-zinc-100 to-zinc-500">
            {subjectData.name}
          </h1>

          <p className="mx-auto max-w-[700px] text-lg text-zinc-400 md:text-xl font-light">
            {subjectData.titles.join(" • ")}
            <br />
            <span className="text-sm mt-2 block text-zinc-500">{subjectData.location}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href={subjectData.social.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-zinc-700 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 text-zinc-100">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
          <a href={subjectData.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-zinc-700 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 text-zinc-100">
              <Linkedin className="mr-2 h-5 w-5 text-blue-400" />
              LinkedIn
            </Button>
          </a>
          <a href={subjectData.social.stackoverflow} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-zinc-700 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 text-zinc-100">
              <MessageSquare className="mr-2 h-5 w-5 text-orange-500" />
              Stack Overflow
            </Button>
          </a>
          <a href={subjectData.social.credly} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-zinc-700 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 text-zinc-100">
              <Award className="mr-2 h-5 w-5 text-teal-500" />
              Credly
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
