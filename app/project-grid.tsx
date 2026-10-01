"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./projects";

const categories = ["All projects", "Web apps", "Extensions", "Mobile", "AI & media", "Automation"];

function ProjectArt({ number }: { number: string }) {
  if (number === "01") return <div className="project-art focus-art" aria-hidden="true"><span className="art-label">LESS DISTRACTION. MORE INTENTION.</span><div className="focus-rings"><span /><span /><span /><div className="focus-symbol">↗</div></div><span className="art-bottom">FOCUS GUARD <span>STAY IN YOUR FLOW</span></span></div>;
  if (number === "02") return <div className="project-art prism-art" aria-hidden="true"><span className="art-label">A LITTLE TOOL. A WORLD OF COLOR.</span><div className="prism-swatches"><i /><i /><i /><i /><i /></div><span className="art-bottom">PRISM PICK <span>PICK YOUR PERSPECTIVE</span></span></div>;
  return <div className="project-art health-art" aria-hidden="true"><span className="art-label">SIGNALS INTO UNDERSTANDING.</span><svg viewBox="0 0 600 240" fill="none"><path d="M30 150H105L130 115L165 185L215 55L260 150H335L365 115L395 160L425 100L460 150H570" stroke="currentColor" strokeWidth="3"/><circle cx="215" cy="55" r="12" fill="currentColor"/><circle cx="215" cy="55" r="32" stroke="currentColor" opacity=".3"/><path d="M0 60H600M0 120H600M0 180H600M100 0V240M200 0V240M300 0V240M400 0V240M500 0V240" stroke="currentColor" opacity=".08"/></svg><span className="art-bottom">HEALTHSENTINEL BD <span>PUBLIC HEALTH / BANGLADESH</span></span></div>;
}

export default function ProjectGrid() {
  const [category, setCategory] = useState("All projects");
  const visible = projects.filter(project => category === "All projects" || project.category === category);
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects by category">
      {categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="project-grid" onClick={() => setCategory(item)}>{item}<sup>{item === "All projects" ? projects.length : projects.filter(p => p.category === item).length}</sup></button>)}
    </div>
    <p className="sr-only" role="status">Showing {visible.length} projects: {category}</p>
    <div className="project-grid" id="project-grid">
      {visible.map(project => <article data-project={project.number} className={`project ${Number(project.number) <= 3 ? `featured feature-${project.number}` : 'compact-project'}`} key={project.number}>
        {Number(project.number) <= 3 && <ProjectArt number={project.number} />}
        <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.type.split(" · ").at(-1)}</span></div>
        <h3><a href={project.repo} target="_blank" rel="noreferrer">{project.title}<ArrowUpRight aria-hidden="true" /></a></h3>
        <p>{project.description}</p>
        <div className="project-bottom"><ul aria-label={`${project.title} technologies`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul>{project.live && <a className="live-link" href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={14} aria-hidden="true" /></a>}</div></div>
      </article>)}
    </div>
  </>;
}
