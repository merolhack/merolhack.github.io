"use client";

import { useState } from "react";
import { Hash, Check } from "lucide-react";

interface SectionAnchorProps {
  id: string;
  title?: string;
  className?: string;
}

export function SectionAnchor({ id, title, className = "" }: SectionAnchorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(url);
    }
    window.history.pushState(null, "", `#${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleCopy}
      title={copied ? "¡Enlace copiado al portapapeles!" : `Copiar enlace directo a #${id}`}
      aria-label={`Copiar enlace directo a #${id}`}
      className={`inline-flex items-center justify-center p-1.5 text-zinc-500 hover:text-indigo-400 transition-all rounded-md hover:bg-zinc-800/60 group/anchor focus:outline-none focus:ring-1 focus:ring-indigo-500/50 ${className}`}
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400 transition-transform scale-110" />
      ) : (
        <Hash className="w-4 h-4 opacity-50 group-hover/anchor:opacity-100 transition-opacity" />
      )}
      <span className="sr-only">Copiar enlace a {title || id}</span>
    </a>
  );
}
