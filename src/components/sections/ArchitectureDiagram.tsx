"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, Server, PhoneCall, Stethoscope, ChevronRight, CheckCircle2 } from "lucide-react";
import { subjectData } from "@/data/subject";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const nodeIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  identity: ShieldCheck,
  baas: Server,
  voip: PhoneCall,
  diagnostics: Stethoscope,
};

export function ArchitectureDiagram() {
  const { architectureNodes } = subjectData;
  const [selectedNodeId, setSelectedNodeId] = useState<string>(architectureNodes?.[0]?.id || "identity");

  if (!architectureNodes || architectureNodes.length === 0) return null;

  const selectedNode = architectureNodes.find((n) => n.id === selectedNodeId) || architectureNodes[0];

  return (
    <section id="architecture" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono font-medium text-indigo-300 backdrop-blur-sm mb-3">
            <Cpu className="mr-1.5 h-3.5 w-3.5 text-indigo-400" />
            <span>Interactive System Topology</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100 mb-3">
            Enterprise Architecture & Cloud Topology
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light">
            Interactive breakdown of production systems engineered across Bank-as-a-Service, Identity Verification, and VoIP Cloud switch environments.
          </p>
        </div>

        {/* Main Grid: Interactive Nodes + Architectural Inspector */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Node Selector Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {architectureNodes.map((node) => {
              const IconComp = nodeIconMap[node.id] || Cpu;
              const isSelected = node.id === selectedNodeId;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? "bg-zinc-900 border-indigo-500/80 shadow-lg shadow-indigo-950/40"
                      : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/50"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-teal-400"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2.5 rounded-lg border transition-colors ${
                          isSelected
                            ? "bg-indigo-950/60 border-indigo-500/50 text-indigo-300"
                            : "bg-zinc-950 border-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                        }`}
                      >
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                          {node.category}
                        </div>
                        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                          {node.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-indigo-400 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Inspection Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-zinc-800 bg-zinc-900/40 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                  {/* Visual Background Pulse Lines */}
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-indigo-950/40 border-indigo-800/50 text-indigo-300 text-xs">
                        {selectedNode.category}
                      </Badge>
                      <Badge variant="outline" className="bg-teal-950/30 border-teal-800/50 text-teal-400 text-xs">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {selectedNode.status}
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl text-zinc-100 font-bold">
                      {selectedNode.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-zinc-300 text-sm leading-relaxed font-light">
                      {selectedNode.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                        TECHNOLOGY STACK & DEPENDENCIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedNode.tech.map((techItem, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-700 transition-colors"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Animated Data Topology Line */}
                    <div className="pt-4 border-t border-zinc-800/80">
                      <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-2">
                        <span>DATA PIPELINE FLOW</span>
                        <span className="text-indigo-400">HIGH AVAILABILITY</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800 relative">
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-1/3 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
