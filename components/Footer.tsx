"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 bg-background text-foreground overflow-hidden border-t border-foreground/10">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-footer"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 animate-[gradient-move_25s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Anik. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-foreground/60 hover:text-accent transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-foreground/60 hover:text-primary transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
}
