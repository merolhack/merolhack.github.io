"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Code2, Layers, Cpu, Clock, FolderGit2, BookMarked } from "lucide-react";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Summary", href: "#summary", icon: Terminal },
  { name: "Book", href: "#book", icon: BookMarked },
  { name: "Skills", href: "#skills", icon: Layers },
  { name: "Architecture", href: "#architecture", icon: Cpu },
  { name: "Timeline", href: "#timeline", icon: Clock },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Repos", href: "#repositories", icon: Code2 },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-4 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/90 shadow-2xl shadow-black/80"
              : "bg-zinc-900/60 backdrop-blur-md border border-zinc-800/60 shadow-lg"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 text-zinc-100 font-bold group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-xs text-white shadow-md shadow-indigo-900/40 group-hover:scale-105 transition-transform">
              LM
            </div>
            <span className="hidden sm:inline text-sm font-semibold tracking-tight group-hover:text-indigo-300 transition-colors">
              Lenin Meza
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all flex items-center space-x-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action: Quick Email & Mobile Toggle */}
          <div className="flex items-center space-x-2">
            <div className="hidden lg:block">
              <CopyEmailButton size="sm" variant="ghost" className="text-xs py-1 h-8" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-4 rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 shadow-2xl flex flex-col space-y-2"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 transition-colors text-left"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span>{item.name}</span>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-zinc-900 mt-2">
                <CopyEmailButton size="default" variant="outline" className="w-full justify-center text-xs" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
