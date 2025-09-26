"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const roles: string[] = [
    "Software Engineer",
    "Full-Stack Developer",
    "Open Source Enthusiast",
    "Performance & Systems",
  ];

  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const current = roles[wordIndex];

    if (!deleting) {
      if (charIndex <= current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, charIndex));
          setCharIndex((c) => c + 1);
        }, 70);
      } else {
        timer = setTimeout(() => setDeleting(true), 1200);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roles, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground font-sans overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
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
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated gradient beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 md:from-primary/5 md:via-accent/5 md:to-secondary/5 animate-[gradient-move_10s_linear_infinite]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">
          {/* Left Column - Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left relative z-10 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-mono bg-primary/10 text-primary border border-primary/20">
                  &lt;Hello World /&gt;
                </span>
                <span className="text-sm font-mono sm:text-base lg:text-lg text-muted font-light">
                  Crafting digital experiences since 2020
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="block text-primary">Hi, I&apos;m Anik!</span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80 mt-2 sm:mt-4">
                    Building the future, one line at a time
                  </span>
                </h1>

                {/* Typing Animation */}
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-mono text-primary">
                  <span className="text-foreground/60">{">"}</span>
                  <span className="min-h-[1.5em] flex items-center">{text}</span>
                  <span className="w-1.5 sm:w-2 h-5 sm:h-6 bg-primary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto lg:mx-0 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed font-light">
                Passionate about creating elegant solutions to complex problems.
                I specialize in building scalable systems and intuitive
                interfaces that deliver exceptional user experiences.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {["TypeScript", "React", "Node.js", "GraphQL", "PostgreSQL", "AWS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-mono bg-background border border-foreground/10 shadow-sm hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <a
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold bg-primary text-background shadow-md hover:shadow-lg  transition-all text-sm sm:text-base"
              >
               Explore My Work
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold border border-foreground/20 text-foreground bg-background hover:bg-foreground/5 shadow-md hover:shadow-lg  transition-all text-sm sm:text-base"
              >
                Get In Touch
              </a>

              <a
                href="#"
                rel="noopener noreferrer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold bg-accent text-background shadow-md hover:shadow-lg  transition-all text-sm sm:text-base"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Column - Photo with Tech Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 order-1 lg:order-2">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-8 sm:mx-12 lg:mx-16 my-8 sm:my-12 lg:my-16">
              {/* Hexagonal Frame with Neon Glow */}
              <div className="absolute inset-0 transform scale-105 sm:scale-110">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-primary opacity-60 sm:opacity-80 animate-[pulse_3s_ease-in-out_infinite]"
                >
                  <polygon
                    points="50,5 95,25 95,75 50,95 5,75 5,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  />
                </svg>
              </div>

              {/* Animated Circuit Patterns */}
              <div className="absolute inset-0 opacity-20 sm:opacity-30 pointer-events-none">
                <svg
                  className="w-full h-full animate-[circuit_8s_linear_infinite]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="circuit"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M0 10 H10 M10 0 V10 M10 10 H20 M10 10 V20"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        className="text-accent"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              {/* Floating Geometric Shapes - Responsive positioning */}
              <div className="absolute -top-8 sm:-top-12 lg:-top-16 -left-8 sm:-left-12 lg:-left-16 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border border-primary/40 rotate-45 animate-[spin_20s_linear_infinite] z-10" />
              
              <div className="absolute -top-6 sm:-top-8 lg:-top-12 -right-8 sm:-right-12 lg:-right-16 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-[float_4s_ease-in-out_infinite] z-10" />
              
              <div className="absolute top-4 sm:top-6 lg:top-8 -left-10 sm:-left-14 lg:-left-20 w-3 sm:w-4 lg:w-6 h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-secondary/40 to-transparent transform rotate-12 animate-[float_6s_ease-in-out_infinite_reverse] z-10" />
              
              <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-14 -right-10 sm:-right-14 lg:-right-18 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 border border-accent/40 transform rotate-12 animate-[spin_15s_linear_infinite_reverse] z-10" />
              
              <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 -left-10 sm:-left-14 lg:-left-18 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-primary/50 rounded-full animate-[pulse_3s_ease-in-out_infinite] z-10" />
              
              <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-4 sm:left-6 lg:left-8 w-8 sm:w-10 lg:w-14 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-12 animate-[float_5s_ease-in-out_infinite] z-10" />
              
              <div className="absolute top-0 -right-10 sm:-right-14 lg:-right-20 z-10">
                <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent/40 animate-[spin_25s_linear_infinite]">
                  <polygon points="8,2 14,14 2,14" className="sm:hidden" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <polygon points="12,2 22,20 2,20" className="hidden sm:block lg:hidden" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="12,2 22,20 2,20" className="hidden lg:block" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <div className="absolute -top-10 sm:-top-14 lg:-top-20 left-6 sm:left-8 lg:left-12 w-2 sm:w-2.5 lg:w-3 h-6 sm:h-8 lg:h-12 bg-gradient-to-b from-primary/40 to-accent/40 transform rotate-45 animate-[float_7s_ease-in-out_infinite] z-10" />
              
              <div className="absolute bottom-0 -right-12 sm:-right-16 lg:-right-22 z-10">
                <svg width="12" height="12" className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-secondary/40 animate-[spin_30s_linear_infinite_reverse]">
                  <rect x="1" y="1" width="10" height="10" className="sm:hidden" fill="none" stroke="currentColor" strokeWidth="1" rx="1"/>
                  <rect x="2" y="2" width="12" height="12" className="hidden sm:block lg:hidden" fill="none" stroke="currentColor" strokeWidth="1" rx="2"/>
                  <rect x="2" y="2" width="16" height="16" className="hidden lg:block" fill="none" stroke="currentColor" strokeWidth="2" rx="2"/>
                </svg>
              </div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/profile.jfif"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 sm:from-background/60 to-transparent" />
                
                {/* Digital Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 sm:from-primary/10 via-transparent to-accent/5 sm:to-accent/10 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes circuit {
          0% { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }
        
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;