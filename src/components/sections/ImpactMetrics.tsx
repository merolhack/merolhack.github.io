"use client";

import { motion } from "framer-motion";
import { Clock, Activity, Code2, ShieldCheck, LucideIcon } from "lucide-react";
import { subjectData } from "@/data/subject";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Activity,
  Code2,
  ShieldCheck,
};

export function ImpactMetrics() {
  const { impactMetrics } = subjectData;
  if (!impactMetrics) return null;

  return (
    <section id="metrics" className="py-16 bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-mono font-medium text-teal-300 backdrop-blur-sm mb-3">
            <Activity className="mr-1.5 h-3.5 w-3.5 text-teal-400" />
            <span>Architecture Telemetry</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100">
            Enterprise Impact & Proven Metrics
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Activity;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="border-zinc-800/80 bg-zinc-900/40 backdrop-blur-lg hover:border-zinc-700 transition-all hover:-translate-y-1 duration-300 h-full group">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 group-hover:border-indigo-500/50 transition-colors">
                        <IconComponent className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                        VERIFIED
                      </span>
                    </div>

                    <div>
                      <div className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-indigo-200 to-indigo-400 mb-1">
                        {item.value}
                      </div>
                      <div className="text-sm font-semibold text-zinc-200 mb-1">
                        {item.label}
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
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
