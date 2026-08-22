"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BookMarked, 
  ExternalLink, 
  ShoppingCart, 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Network, 
  TrendingUp,
  FileCheck
} from "lucide-react";
import { subjectData } from "@/data/subject";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const pillarIcons = [Layers, Network, ShieldCheck, Cpu];

export function BookPublication() {
  const { bookPublication } = subjectData;
  if (!bookPublication) return null;

  return (
    <section id="book" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-mono font-medium text-amber-300 backdrop-blur-sm mb-4 shadow-sm"
          >
            <BookMarked className="mr-2 h-4 w-4 text-amber-400" />
            <span>Publicación Editorial Oficial en Amazon KDP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-zinc-100 max-w-3xl mx-auto"
          >
            {bookPublication.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 font-normal max-w-3xl mx-auto mt-4"
          >
            {bookPublication.subtitle}
          </motion.p>
        </div>

        {/* Main Content Grid: 3D Book Showcase + Overview */}
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-16">
          {/* Left Column: 3D Cover Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group perspective-1000">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 via-indigo-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Book Container with realistic edge & shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/90 border border-zinc-700/60 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <Image
                  src={bookPublication.coverImage}
                  alt={`Portada oficial del libro ${bookPublication.title}`}
                  width={420}
                  height={630}
                  className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5 pointer-events-none rounded-2xl" />
              </div>

              {/* Verified Quality Tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono px-3 py-1 rounded-full flex items-center space-x-1.5 shadow-lg whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Edición 2026 • 314 Páginas</span>
              </div>
            </div>

            {/* Quick Specs Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="bg-zinc-900/60 border-zinc-800 text-zinc-300 text-xs py-1 px-3">
                ASIN: <span className="text-amber-400 font-mono ml-1 font-semibold">{bookPublication.asin}</span>
              </Badge>
              <Badge variant="outline" className="bg-zinc-900/60 border-zinc-800 text-zinc-300 text-xs py-1 px-3">
                Idioma: <span className="text-zinc-200 ml-1">Español</span>
              </Badge>
              <Badge variant="outline" className="bg-zinc-900/60 border-zinc-800 text-zinc-300 text-xs py-1 px-3">
                30 Capítulos • 36 Diagramas
              </Badge>
            </div>
          </motion.div>

          {/* Right Column: Book Synopsis, Highlights & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center">
                <span className="border-l-4 border-amber-500 pl-3">Arquitectura Componible & Era Agente</span>
              </h3>
              
              <p className="text-zinc-300 text-base leading-relaxed font-light">
                {bookPublication.description}
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {bookPublication.fullDescription}
              </p>
            </div>

            {/* Editorial Highlights Checklist */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center">
                <FileCheck className="w-4 h-4 mr-2 text-indigo-400" />
                Estándares y Calidad de Publicación
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                {bookPublication.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start text-xs text-zinc-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/30 to-zinc-900/40 border border-indigo-900/40 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 flex items-center mr-2">
                <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
                Casos Reales:
              </span>
              {bookPublication.caseStudies.map((caseStudy, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md font-mono"
                >
                  {caseStudy}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons (CTAs) */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={bookPublication.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-bold rounded-full px-7 py-6 text-base h-auto shadow-lg shadow-amber-950/50 hover:shadow-amber-500/20 transition-all hover:scale-105">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar en Amazon KDP
                  <ExternalLink className="ml-2 h-4 w-4 opacity-75" />
                </Button>
              </a>

              <a
                href={bookPublication.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  className="border-zinc-700 bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800 text-zinc-200 rounded-full px-6 py-6 text-base h-auto transition-all hover:scale-105"
                >
                  <Globe className="mr-2 h-5 w-5 text-indigo-400" />
                  Explorar MACH Playbook Web
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Thematic Pillars Section */}
        <div className="mt-16 pt-12 border-t border-zinc-900">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
              Ejes Estratégicos del Manuscrito
            </h3>
            <p className="text-sm text-zinc-400 mt-2 font-light">
              De los fundamentos del desacoplamiento a la ejecución autónoma con agentes de IA
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bookPublication.pillars.map((pillar, idx) => {
              const IconComponent = pillarIcons[idx % pillarIcons.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="border-zinc-800/80 bg-zinc-900/30 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 h-full flex flex-col justify-between group">
                    <CardContent className="p-6">
                      <div className="p-3 bg-zinc-950 rounded-xl w-max border border-zinc-800 mb-4 group-hover:border-amber-500/40 transition-colors">
                        <IconComponent className="h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="text-base font-semibold text-zinc-100 mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
