import Image from "next/image";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ArrowUpRight, Download } from "lucide-react";
import ProjectGrid from "./project-grid";
import IslandExperience from "./island-experience";
const portraitSource = `data:image/jpeg;base64,${readFileSync(join(process.cwd(), "public/profile.jfif")).toString("base64")}`;
const skills = [
  {
    title: "Web & product",
    items: "Next.js / React / TypeScript / Tailwind CSS",
  },
  {
    title: "Mobile",
    items: "Kotlin / Jetpack Compose / Material 3 / Android APIs",
  },
  { title: "AI & data", items: "Python / XTTS / SQLite / Data visualization" },
  {
    title: "Foundations",
    items: "Algorithms / 8086 Assembly / Git & GitHub / LaTeX",
  },
];

export default function Home() {
  return (
    <IslandExperience
      portrait={
        <Image
          unoptimized
          src={portraitSource}
          alt="Portrait of MD. Tusar Imran"
          width={96}
          height={96}
        />
      }
    >
      <section
        className="work-section wrap section"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-label">
          <span>01 / SELECTED WORK</span>
          <span>IDEAS, MADE REAL.</span>
        </div>
        <div className="section-heading">
          <h2 id="work-title">
            Built with
            <br />
            <span>purpose.</span>
          </h2>
          <p>
            A collection of practical tools, experiments and platforms.
            Different problems. The same curiosity.
          </p>
        </div>
        <ProjectGrid />
        <a
          className="text-link repository-link"
          href="https://github.com/tusarimrananik?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          More in the repositories <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
      <section
        className="about-section section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="wrap">
          <div className="section-label">
            <span>02 / A LITTLE ABOUT ME</span>
            <span>CURIOUS BY DEFAULT.</span>
          </div>
          <div className="about-grid">
            <div>
              <h2 id="about-title">
                Learn deeply.
                <br />
                Build <span>simply.</span>
              </h2>
              <span className="about-asterisk" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I like the space between a rough idea and something people can
                actually use.
              </p>
              <p>
                My work connects computer-science fundamentals with practical
                product ideas—from browser extensions to Android utilities and
                AI-enabled tools. I enjoy finding the right technology for a
                problem, then making the experience clear.
              </p>
              <p>
                At RUET, I study algorithms, data structures, numerical methods,
                microprocessors and microcontrollers alongside my software
                projects.
              </p>
              <a className="text-link" href="/resume.pdf" download>
                Download my résumé <Download size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="skills-list">
            {skills.map((skill, i) => (
              <div className="skill" key={skill.title}>
                <span className="skill-number">0{i + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="education-section wrap section"
        id="education"
        aria-labelledby="education-title"
      >
        <div className="section-label">
          <span>03 / EDUCATION</span>
          <span>THE FOUNDATION.</span>
        </div>
        <div className="education-grid">
          <h2 id="education-title">
            Always
            <br />
            <span>learning.</span>
          </h2>
          <div className="education-list">
            <article>
              <div className="education-date">
                2023 — PRESENT <span>UNDERGRADUATE</span>
              </div>
              <h3>B.Sc. in Computer Science & Engineering</h3>
              <p>Rajshahi University of Engineering & Technology (RUET)</p>
              <small>
                Rajshahi, Bangladesh · Session 2023–24 · Student ID 2303096
              </small>
            </article>
            <article>
              <div className="education-date">2023</div>
              <h3>Higher Secondary Certificate</h3>
              <p>Hat Kanpara Jobedda College · Science</p>
              <small>GPA 5.00 / 5.00</small>
            </article>
            <article>
              <div className="education-date">2021</div>
              <h3>Secondary School Certificate</h3>
              <p>Hat Kanpara High School · Science</p>
              <small>GPA 5.00 / 5.00</small>
            </article>
          </div>
        </div>
      </section>
      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="wrap">
          <div className="section-label">
            <span>04 / GET IN TOUCH</span>
            <span>GOOD THINGS START WITH A CONVERSATION.</span>
          </div>
          <a className="contact-heading" href="mailto:tusarimrananik@gmail.com">
            <h2 id="contact-title">Let’s talk.</h2>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-bottom">
            <a className="email-link" href="mailto:tusarimrananik@gmail.com">
              tusarimrananik@gmail.com
            </a>
            <p>
              A project idea, a question, or a hello.
              <br />
              I’d love to hear what you’re thinking.
            </p>
            <a
              href="https://github.com/tusarimrananik"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <noscript>
        <style>{`.portfolio-content:not(.all-content){display:block}.portfolio-content:not(.all-content)>section{display:block}.destination-dock,.scene-caption,.view-toggle,.hero-copy button{display:none}.island-hero{min-height:500px;height:auto}.hero-copy{width:100%}`}</style>
        <p>JavaScript is off. The complete portfolio is available below.</p>
      </noscript>
    </IslandExperience>
  );
}
