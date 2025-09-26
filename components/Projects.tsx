"use client";

import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  github?: string;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    github: "https://github.com/anik/portfolio",
    live: "https://anik.dev",
    image: "https://picsum.photos/seed/1/800/560",
  },
  {
    title: "Chat App",
    description: "Real-time chat app using WebSockets and Node.js.",
    github: "https://github.com/anik/chatapp",
    live: "https://anik.dev/chat",
    image: "https://picsum.photos/seed/2/800/560",
  },
  {
    title: "Weather Dashboard",
    description: "Check real-time weather data with a sleek UI.",
    github: "https://github.com/anik/weather",
    image: "https://picsum.photos/seed/3/800/560",
  },
  {
    title: "Task Manager",
    description: "Manage your tasks and productivity effectively.",
    github: "https://github.com/anik/taskmanager",
    live: "https://anik.dev/tasks",
    image: "https://picsum.photos/seed/4/800/560",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack store with Stripe integration.",
    github: "https://github.com/anik/ecommerce",
    live: "https://anik.dev/shop",
    image: "https://picsum.photos/seed/5/800/560",
  },
  {
    title: "Blog Platform",
    description: "Markdown-based blogging platform with comments.",
    github: "https://github.com/anik/blog",
    live: "https://anik.dev/blog",
    image: "https://picsum.photos/seed/6/800/560",
  },
];

// duplicate for infinite marquee
const doubled = [...projects, ...projects];

export default function CreativeProjects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-background text-foreground py-24 overflow-hidden mt-0 pt-0"
    >
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

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 md:from-primary/5 md:via-accent/5 md:to-secondary/5 animate-[gradient-move_15s_linear_infinite]" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
          <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">
            Crafted with Code
          </span>
        </h2>
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          A showcase of projects — blending creativity with clean engineering.
        </p>

        <div className="mt-6 h-1 w-28 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
      </div>

      {/* Row A */}
      <MarqueeRow items={doubled} speed={60} reverse={false} gap={6} rowKey="A" />

      {/* Row B */}
      <MarqueeRow items={doubled} speed={48} reverse={true} gap={6} rowKey="B" />

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

/* Marquee Row */
function MarqueeRow({
  items,
  speed = 60,
  reverse = false,
  gap = 8,
  rowKey,
}: {
  items: Project[];
  speed?: number;
  reverse?: boolean;
  gap?: number;
  rowKey: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const translateRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animRef = useRef<number | null>(null);
  const halfWidthRef = useRef<number>(0);

  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);

  useEffect(() => {
    const update = () => {
      if (trackRef.current) {
        halfWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };
    update();
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    if (ro && trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", update);
    return () => {
      if (ro && trackRef.current) ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const step = (t: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = t;
      }
      const dt = (t - lastTimeRef.current) / 1000;
      lastTimeRef.current = t;

      if (!draggingRef.current) {
        const dir = reverse ? 1 : -1;
        translateRef.current += dir * speed * dt;

        const half = halfWidthRef.current;
        if (half > 0) {
          if (translateRef.current <= -half) translateRef.current += half;
          if (translateRef.current >= 0) translateRef.current -= half;
        }
        setTranslateX(translateRef.current);
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
      lastTimeRef.current = null;
    };
  }, [speed, reverse]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    containerRef.current?.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startTranslateRef.current = translateRef.current;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    translateRef.current = startTranslateRef.current + dx;

    const half = halfWidthRef.current;
    if (half > 0) {
      if (translateRef.current <= -half) translateRef.current += half;
      if (translateRef.current >= 0) translateRef.current -= half;
    }

    setTranslateX(translateRef.current);
  };

  const endDrag = (e?: React.PointerEvent) => {
    if (!draggingRef.current) return;
    if (e && containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {}
    }
    draggingRef.current = false;
    setIsDragging(false);
    lastTimeRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 overflow-hidden py-4 select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      style={{ touchAction: "pan-y" }}
      aria-label={`Marquee row ${rowKey}`}
    >
      <div className="inline-block">
        <div
          ref={trackRef}
          className="flex items-stretch"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${translateX}px)`,
            transition: draggingRef.current ? "none" : undefined,
            WebkitUserSelect: "none",
            userSelect: "none",
            pointerEvents: "auto",
          }}
        >
          {items.map((proj, i) => (
            <ProjectCard
              key={`${rowKey}-${i}`}
              project={proj}
              isDragging={isDragging}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* Project Card */
function ProjectCard({
  project,
  isDragging = false,
}: {
  project: Project;
  isDragging?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>("");

  const handleMove = (e: React.MouseEvent) => {
    if (isDragging) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 16;
    const rotateX = (0.5 - y) * 12;
    setTransformStyle(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  };

  const handleLeave = () => {
    if (isDragging) return;
    setTransformStyle("");
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative w-72 sm:w-80 rounded-xl bg-background/70 border border-foreground/10 shadow-lg hover:shadow-2xl p-4 transition-transform flex flex-col ${
        isDragging ? "cursor-grabbing" : "cursor-auto"
      }`}
      style={{
        transform: transformStyle || undefined,
        transition: transformStyle
          ? "transform 60ms linear"
          : "transform 350ms ease",
        pointerEvents: isDragging ? "none" : "auto",
      }}
    >
      {/* Image */}
      <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title + description */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
        <p className="text-sm text-foreground/70 mt-1">{project.description}</p>
      </div>

      {/* Buttons */}
      <div className="mt-3 flex gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-xs rounded-md bg-background border border-foreground/10 hover:bg-foreground/10 transition"
          >
            <Github size={14} /> Code
          </a>
        )}
        <a
          href={project.live || "#"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 px-3 py-1 text-xs rounded-md bg-primary text-background hover:bg-primary/90 transition"
        >
          <ExternalLink size={14} /> View
        </a>
      </div>
    </article>
  );
}
