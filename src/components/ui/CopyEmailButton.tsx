"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export function CopyEmailButton({
  email = "merolhack@gmail.com",
  className = "",
  variant = "outline",
  size = "lg",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="relative inline-block">
      <Button
        variant={variant}
        size={size}
        onClick={handleCopy}
        className={`border-zinc-700 bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800 text-zinc-100 transition-all ${className}`}
      >
        <Mail className="mr-2 h-5 w-5 text-indigo-400" />
        <span>{email}</span>
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="ml-2 inline-flex items-center text-teal-400 font-medium"
            >
              <Check className="h-4 w-4 mr-1" />
              Copied!
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="ml-2 hover:opacity-100 transition-opacity"
            >
              <Copy className="h-4 w-4 text-zinc-400" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      {/* Visual Toast Popup */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 px-3 py-1.5 rounded-full bg-teal-950/90 border border-teal-500/40 text-teal-300 text-xs font-medium shadow-lg shadow-teal-950/50 backdrop-blur-md pointer-events-none whitespace-nowrap flex items-center z-50"
          >
            <Check className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
