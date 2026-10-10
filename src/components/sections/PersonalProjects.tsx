"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { subjectData } from "@/data/subject";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Globe, Layers, ArrowUpRight } from "lucide-react";

export function PersonalProjects() {
  const { personalProjects } = subjectData;
  if (!personalProjects || personalProjects.length === 0) return null;

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Personal Projects & Platforms</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">
            Proyectos Personales & Plataformas en Producción
          </h2>

          <p className="text-zinc-400 max-w-2xl text-base font-light leading-relaxed">
            Plataformas digitales diseñadas, desarrolladas y operadas de forma independiente, implementando arquitecturas resilientes, estándares de accesibilidad y optimización para Core Web Vitals.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {personalProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 hover:border-zinc-700/80 transition-all duration-300 shadow-2xl shadow-black/60"
              >
                <div className={`grid gap-8 lg:gap-12 lg:grid-cols-12 items-center ${isReversed ? "lg:grid-flow-dense" : ""}`}>
                  {/* Browser Mockup / Screenshot Column */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-6" : ""}`}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                    >
                      {/* Browser Window Header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800 text-xs text-zinc-400 font-mono">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="px-3 py-0.5 rounded-md bg-zinc-950/70 border border-zinc-800/60 text-zinc-400 text-[11px] truncate max-w-[200px] sm:max-w-[280px] flex items-center space-x-1">
                          <Globe className="w-3 h-3 text-zinc-500 shrink-0" />
                          <span className="truncate">{project.url.replace(/^https?:\/\//, "")}</span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                        <Image
                          src={project.image}
                          alt={`Captura de pantalla de la página principal de ${project.title}`}
                          width={1280}
                          height={800}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                      </div>
                    </a>
                  </div>

                  {/* Project Details Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${isReversed ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-4">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.badges?.map((badge, bIdx) => (
                          <Badge
                            key={bIdx}
                            variant="outline"
                            className="bg-indigo-950/30 border-indigo-800/50 text-indigo-300 text-xs font-mono"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight flex items-center group">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors inline-flex items-center gap-2"
                          >
                            {project.title}
                            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                          </a>
                        </h3>
                        <p className="text-sm text-zinc-400 font-medium mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-300 leading-relaxed font-light">
                        {project.description}
                      </p>

                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {project.detailedDescription}
                      </p>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="pt-2 space-y-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                            Puntos Destacados:
                          </span>
                          <ul className="space-y-1.5">
                            {project.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start text-xs text-zinc-300 font-light">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      {project.tech && (
                        <div className="pt-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                            Tecnologías:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto"
                      >
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-full px-6 py-5 text-sm h-auto shadow-lg shadow-indigo-950/40 hover:shadow-indigo-500/20 transition-all hover:scale-105">
                          <Globe className="mr-2 h-4 w-4" />
                          Visitar {project.title}
                          <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-80" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
