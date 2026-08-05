"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, MessageSquare, Terminal, Award, ChevronDown } from "lucide-react";
import { subjectData } from "@/data/subject";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const indicatorY = useTransform(scrollY, [0, 80], [0, 15]);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pb-16">
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

      {/* Non-intrusive Glassmorphic Scroll Down Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity, y: indicatorY }}
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 md:bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group select-none"
        aria-label="Scroll down to explore content"
      >
        <span className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2 group-hover:text-indigo-400 transition-colors">
          Scroll
        </span>
        
        {/* Animated Mouse Capsule */}
        <div className="w-5 h-9 md:w-6 md:h-10 rounded-full border border-zinc-700/80 group-hover:border-indigo-500/80 bg-zinc-900/60 backdrop-blur-md flex justify-center p-1.5 shadow-lg shadow-black/40 transition-colors">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-2 md:w-1.5 md:h-2.5 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          />
        </div>

        {/* Pulsing Sub-Chevron */}
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1"
        >
          <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
