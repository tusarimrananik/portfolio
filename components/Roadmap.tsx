"use client";

import { SiReact, SiNodedotjs, SiGithub, SiNextdotjs } from "react-icons/si";

const roadmap = [
  {
    year: "2020",
    title: "Started Coding Journey",
    description:
      "Began exploring programming fundamentals, algorithms, and building small projects.",
    icon: <SiGithub />,
  },
  {
    year: "2021",
    title: "Frontend Foundations",
    description:
      "Dove into React, JavaScript, and UI/UX design to craft interactive experiences.",
    icon: <SiReact />,
  },
  {
    year: "2022",
    title: "Full-Stack Development",
    description:
      "Learned Node.js, databases, and backend APIs — building complete end-to-end apps.",
    icon: <SiNodedotjs />,
  },
  {
    year: "2023",
    title: "Next.js & Modern Frameworks",
    description:
      "Adopted Next.js and advanced tooling, focusing on scalability and performance.",
    icon: <SiNextdotjs />,
  },
  {
    year: "2024",
    title: "Open Source & Real-World Projects",
    description:
      "Contributing to open source, collaborating with teams, and shipping production apps.",
    icon: <SiGithub />,
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-24 bg-background text-foreground overflow-hidden"
    >
      {/* Grid Background (same as Hero) */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-roadmap"
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
          <rect width="100%" height="100%" fill="url(#grid-roadmap)" />
        </svg>
      </div>

      {/* Animated Gradient Beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 md:from-primary/5 md:via-accent/5 md:to-secondary/5 animate-[gradient-move_18s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-foreground/70 mt-4 text-center text-lg max-w-2xl mx-auto font-light">
          A roadmap of milestones that shaped my growth as a developer.
        </p>

        <div className="mt-16 relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {roadmap.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border border-foreground/20 shadow-md flex items-center justify-center text-primary text-2xl z-10">
                  {step.icon}
                </div>

                {/* Card */}
                <div
                  className={`sm:w-5/12 bg-background/70 border border-foreground/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition ${
                    i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <span className="text-sm font-mono text-accent">
                    {step.year}
                  </span>
                  <h3 className="text-xl font-bold text-primary mt-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
