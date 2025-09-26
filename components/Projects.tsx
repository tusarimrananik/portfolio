"use client";

import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and TailwindCSS, showcasing my projects and skills.",
    link: "#",
  },
  {
    title: "Open Source Library",
    description: "Created a reusable React component library for fast UI development.",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app with Node.js, GraphQL, and React.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="bg-background/80 border border-foreground/20 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col h-full"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/80 flex-grow">{project.description}</p>
              <span className="mt-4 text-primary font-mono">View Project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
