"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "GraphQL", icon: <SiGraphql /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-background text-foreground overflow-hidden"
    >
      {/* Grid Background (same as Hero) */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-skills"
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
          <rect width="100%" height="100%" fill="url(#grid-skills)" />
        </svg>
      </div>

      {/* Animated Gradient Beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 md:from-primary/5 md:via-accent/5 md:to-secondary/5 animate-[gradient-move_12s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Skills & Tools
        </h2>
        <p className="text-foreground/70 mt-4 text-center text-lg max-w-2xl mx-auto font-light">
          Technologies I work with to bring ideas to life.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-foreground/10 bg-background/60 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/10 shadow-sm"
                  >
                    <span className="text-xl text-accent">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
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
