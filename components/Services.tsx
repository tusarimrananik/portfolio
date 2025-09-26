"use client";

import { Code2, Layout, Server, Zap } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Building scalable and performant web applications from frontend to backend — tailored for growth.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    title: "UI/UX & Frontend",
    description:
      "Crafting intuitive, pixel-perfect interfaces with React, Next.js, and Tailwind CSS — user-first designs.",
    icon: <Layout className="w-8 h-8 text-accent" />,
    gradient: "from-accent/20 via-accent/10 to-transparent",
  },
  {
    title: "APIs & Systems",
    description:
      "Designing and implementing REST/GraphQL APIs, databases, and services — secure and optimized.",
    icon: <Server className="w-8 h-8 text-secondary" />,
    gradient: "from-secondary/20 via-secondary/10 to-transparent",
  },
  {
    title: "Performance & Optimization",
    description:
      "Making apps blazing fast — from Lighthouse scores to backend query tuning and scalable architectures.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    gradient: "from-yellow-500/20 via-yellow-500/10 to-transparent",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-background text-foreground overflow-hidden"
    >
      {/* Subtle grid background (same as Hero) */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-services"
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
          <rect width="100%" height="100%" fill="url(#grid-services)" />
        </svg>
      </div>

      {/* Animated gradient beam (same as Hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 md:from-primary/5 md:via-accent/5 md:to-secondary/5 animate-[gradient-move_10s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Services
        </h2>
        <p className="text-foreground/70 mt-4 text-center text-lg max-w-2xl mx-auto font-light">
          Here’s how I can help bring your ideas to life.
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative group p-6 rounded-2xl bg-background/80 border border-foreground/10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition duration-500`}
              />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-background shadow-md">{s.icon}</div>
                <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
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
    </section>
  );
}
