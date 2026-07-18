import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Download,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Focus Guard",
    type: "Chrome extension · Productivity",
    description:
      "A privacy-first focus timer that blocks user-selected distracting websites during active study sessions. Built for Chrome with no accounts, tracking or backend.",
    stack: ["Manifest V3", "JavaScript", "Chrome APIs", "Local storage"],
    repo: "https://github.com/tusarimrananik/focus-guard-extension",
    accent: "emerald",
  },
  {
    number: "02",
    title: "Prism Pick",
    type: "Chrome extension · Design utility",
    description:
      "A fast color-picker extension prepared as a complete, store-ready package with accessible UI, publishing assets and documentation.",
    stack: ["Manifest V3", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/tusarimrananik/prism-pick-chrome-extension",
    accent: "amber",
  },
  {
    number: "03",
    title: "HealthSentinel BD",
    type: "Public-health intelligence platform",
    description:
      "A local-first disease outbreak early-warning MVP for Bangladesh with district risk views, forecasts, hotspot maps, alerts and triage.",
    stack: ["Next.js", "TypeScript", "SQLite", "Data visualization"],
    repo: "https://github.com/tusarimrananik/health-sentinel",
    accent: "violet",
  },
  {
    number: "04",
    title: "Interval Timer",
    type: "Android productivity utility",
    description:
      "A dependable interval-reminder app with custom schedules, distinct alerts, exact alarms and automatic restoration after a device restart.",
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "AlarmManager"],
    repo: "https://github.com/tusarimrananik/interval-timer",
    accent: "emerald",
  },
  {
    number: "05",
    title: "YouTube Transcript Project",
    type: "AI-assisted content tool",
    description:
      "A focused project for working with YouTube transcripts and turning long-form video content into structured, reusable information.",
    stack: ["JavaScript", "Web APIs", "Content processing"],
    repo: "https://github.com/tusarimrananik/youtube-transcript-project",
    accent: "amber",
  },
  {
    number: "06",
    title: "Voice",
    type: "Speech and voice experiment",
    description:
      "An experimental voice application exploring practical speech workflows and lightweight user-facing audio tooling.",
    stack: ["JavaScript", "Audio", "Web application"],
    repo: "https://github.com/tusarimrananik/voice",
    accent: "violet",
  },
  {
    number: "07",
    title: "Video Generator",
    type: "AI media workflow",
    description:
      "A production-oriented workspace for generating and assembling video content with reusable automation and media-processing workflows.",
    stack: ["Python", "AI media", "Automation", "Video processing"],
    repo: "https://github.com/tusarimrananik/video-generator",
    accent: "emerald",
  },
  {
    number: "08",
    title: "Video Joiner",
    type: "Desktop media utility",
    description:
      "A small utility designed to combine video clips through a simple workflow, reducing repetitive editing work.",
    stack: ["Desktop app", "Video processing", "Automation"],
    repo: "https://github.com/tusarimrananik/video-joiner",
    accent: "amber",
  },
  {
    number: "09",
    title: "Auto Message Sender",
    type: "Workflow automation tool",
    description:
      "A messaging utility built to simplify repetitive communication tasks through a focused automation workflow.",
    stack: ["JavaScript", "Automation", "Web tooling"],
    repo: "https://github.com/tusarimrananik/auto-message-sender",
    accent: "violet",
  },
  {
    number: "10",
    title: "ChatGPT RAM Saver",
    type: "Browser performance utility",
    description:
      "A lightweight utility focused on making long ChatGPT sessions easier on system memory and everyday browser performance.",
    stack: ["JavaScript", "Browser APIs", "Performance"],
    repo: "https://github.com/tusarimrananik/chatgpt-ram-saver",
    accent: "emerald",
  },
  {
    number: "11",
    title: "Facebook Profile",
    type: "Interactive web experience",
    description:
      "A public frontend experiment that recreates a social-profile experience and is published through GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    repo: "https://github.com/tusarimrananik/facebook-profile",
    live: "https://tusarimrananik.github.io/facebook-profile/",
    accent: "amber",
  },
  {
    number: "12",
    title: "Blood Donor App",
    type: "Community web platform",
    description:
      "A practical platform concept designed to help connect blood donors with people who need urgent support.",
    stack: ["Web app", "JavaScript", "Community product"],
    repo: "https://github.com/tusarimrananik/blood-donor-app",
    accent: "violet",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Web & product",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["Kotlin", "Jetpack Compose", "Material 3", "Android APIs"],
  },
  {
    icon: BrainCircuit,
    title: "AI & data",
    skills: ["Python", "XTTS", "SQLite", "Data visualization"],
  },
  {
    icon: Terminal,
    title: "Foundations & tools",
    skills: ["Algorithms", "8086 Assembly", "Git & GitHub", "LaTeX"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tusar Imran — home">
          <span className="brand-mark">TI</span>
          <span className="brand-name">Tusar Imran</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-resume" href="/resume.pdf" download>
          Résumé <Download size={16} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="status-dot" /> CSE undergraduate · RUET
          </p>
          <h1>
            I build practical software with a focus on
            <span> useful, thoughtful experiences.</span>
          </h1>
          <p className="hero-intro">
            I’m <strong>MD. Tusar Imran</strong>, a Computer Science &amp;
            Engineering student in Rajshahi, Bangladesh—exploring full-stack
            products, Android development and AI-enabled tools.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/tusarimrananik"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-panel reveal reveal-delay" aria-label="Profile summary">
          <div className="panel-orbit orbit-one" aria-hidden="true" />
          <div className="panel-orbit orbit-two" aria-hidden="true" />
          <div className="monogram">TI</div>
          <div className="panel-meta">
            <span>Based in</span>
            <strong>Rajshahi, Bangladesh</strong>
          </div>
          <div className="panel-focus">
            <Sparkles size={17} aria-hidden="true" />
            <span>Software · Mobile · AI</span>
          </div>
        </div>

        <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
          <span>Selected work</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Projects built to solve real problems.</h2>
          </div>
          <p className="section-note">
            Recent work across product engineering, browser extensions, mobile,
            automation and applied AI.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-actions">
                  {project.live && (
                    <a
                      className="project-action"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    className="project-action"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={15} aria-hidden="true" /> Code
                  </a>
                </div>
              </div>
              <div className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <a
          className="text-link"
          href="https://github.com/tusarimrananik?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View all repositories <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy">
          <p className="section-kicker">About me</p>
          <h2>Curious by nature. Grounded in fundamentals.</h2>
          <p className="about-lead">
            My work sits where computer-science fundamentals meet useful product
            ideas. I enjoy turning a rough problem into a clear interface,
            learning the technology it needs, and making the result dependable.
          </p>
          <p>
            Alongside modern web and Android development, my coursework includes
            algorithms, data structures, numerical methods, microprocessors and
            microcontrollers. I’m currently deepening my skills in software
            engineering and AI product development.
          </p>
          <a className="text-link" href="/resume.pdf" download>
            Download my résumé <Download size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <div className="skill-card" key={title}>
              <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              <h3>{title}</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Education</p>
            <h2>Learning with purpose.</h2>
          </div>
        </div>

        <div className="timeline">
          <article className="timeline-item featured">
            <div className="timeline-icon">
              <GraduationCap size={24} aria-hidden="true" />
            </div>
            <div className="timeline-content">
              <div className="timeline-meta">
                <span>2023–Present</span>
                <span>Rajshahi, Bangladesh</span>
              </div>
              <h3>B.Sc. in Computer Science &amp; Engineering</h3>
              <p>Rajshahi University of Engineering &amp; Technology (RUET)</p>
              <span className="timeline-note">Session 2023–24 · Student ID 2303096</span>
            </div>
          </article>

          <div className="school-grid">
            <article className="school-card">
              <span>2023</span>
              <h3>Higher Secondary Certificate</h3>
              <p>Hat Kanpara Jobedda College · Science</p>
              <strong>GPA 5.00 / 5.00</strong>
            </article>
            <article className="school-card">
              <span>2021</span>
              <h3>Secondary School Certificate</h3>
              <p>Hat Kanpara High School · Science</p>
              <strong>GPA 5.00 / 5.00</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="section-kicker light">Let’s connect</p>
          <h2>Have a project, an idea, or simply want to talk technology?</h2>
          <p>
            I’m always glad to connect with people building useful things and
            to explore opportunities where I can learn and contribute.
          </p>
          <a className="button button-light" href="mailto:tusarimrananik@gmail.com">
            Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="contact-details">
          <a href="mailto:tusarimrananik@gmail.com">
            <Mail size={19} aria-hidden="true" />
            <span>
              <small>Email</small>
              tusarimrananik@gmail.com
            </span>
          </a>
          <a href="tel:+8801303655115">
            <Phone size={19} aria-hidden="true" />
            <span>
              <small>Phone</small>
              +880 1303-655115
            </span>
          </a>
          <div>
            <MapPin size={19} aria-hidden="true" />
            <span>
              <small>Location</small>
              Rajshahi, Bangladesh
            </span>
          </div>
          <a href="https://github.com/tusarimrananik" target="_blank" rel="noreferrer">
            <Github size={19} aria-hidden="true" />
            <span>
              <small>GitHub</small>
              @tusarimrananik
            </span>
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} MD. Tusar Imran</span>
        <span>Designed and built with care.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
