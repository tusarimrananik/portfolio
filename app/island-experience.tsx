"use client";

import { Component, ReactNode, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Download,
  Layers,
  X,
} from "lucide-react";
const IslandScene = dynamic(() => import("./island-scene"), {
  ssr: false,
  loading: () => <div className="scene-loading">Gathering a little world…</div>,
});
export type Destination = "home" | "work" | "about" | "education" | "contact";
const destinations = [
  { id: "work", name: "Work", place: "The workshop", number: "01" },
  { id: "about", name: "About", place: "The observatory", number: "02" },
  { id: "education", name: "Education", place: "The campus", number: "03" },
  { id: "contact", name: "Contact", place: "The mailbox", number: "04" },
] as const;
class SceneBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export default function IslandExperience({
  children,
  portrait,
}: {
  children: ReactNode;
  portrait: ReactNode;
}) {
  const [simple, setSimple] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState<Destination>("home");
  const panel = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    setSimple(new URLSearchParams(location.search).get("view") === "simple");
    setReady(true);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (active !== "home" && !simple) panel.current?.focus();
  }, [active, simple]);
  useEffect(() => {
    if (simple || active === "home") return;
    const nodes = document.querySelectorAll<HTMLElement>(
      ".site-header, .island-hero, .destination-dock",
    );
    nodes.forEach((node) => {
      node.inert = true;
    });
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      nodes.forEach((node) => {
        node.inert = false;
      });
      document.body.style.overflow = previous;
    };
  }, [active, simple]);
  function visit(id: Destination) {
    previousFocus.current = document.activeElement as HTMLElement;
    setActive(id);
    if (simple)
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
  }
  function close() {
    setActive("home");
    requestAnimationFrame(() => previousFocus.current?.focus());
  }
  function fallback() {
    setFailed(true);
    setSimple(true);
  }
  return (
    <div className={`experience ${simple ? "simple-mode" : ""}`}>
      <a
        className="skip-link"
        href="#portfolio-content"
        onClick={() => setSimple(true)}
      >
        Skip to content
      </a>
      <header className="site-header">
        <button
          className="brand"
          onClick={() => {
            close();
            window.scrollTo(0, 0);
          }}
          aria-label="Tusar Imran — home"
        >
          ti<span>◦</span>
          <small>
            THE PERSONAL WORLD OF
            <br />
            <b>TUSAR IMRAN</b>
          </small>
        </button>
        <nav aria-label="Main navigation">
          {destinations.map((d) => (
            <button
              key={d.id}
              onClick={() => visit(d.id)}
              aria-current={active === d.id ? "page" : undefined}
            >
              {d.name}
            </button>
          ))}
        </nav>
        <a className="header-resume" href="/resume.pdf" download>
          Résumé <Download size={14} />
        </a>
      </header>
      <main id="main">
        <section className="island-hero" aria-labelledby="hero-title">
          <div className="sky-orbit" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> SOFTWARE & AI PRODUCT BUILDER
            </p>
            <h1 id="hero-title">
              A little world.
              <br />
              <em>A lot of ideas.</em>
            </h1>
            <p className="hero-description">
              I’m <strong>MD. Tusar Imran.</strong> A RUET CSE undergraduate
              turning everyday problems into web, mobile and AI-enabled tools.
            </p>
            <button className="button primary" onClick={() => visit("work")}>
              Step inside my workshop <ArrowUpRight size={17} />
            </button>
            <p className="hero-note">
              Built with curiosity. Based in Bangladesh.
            </p>
          </div>
          {!simple && ready && (
            <div className="scene-wrap">
              <SceneBoundary onError={fallback}>
                <IslandScene
                  active={active}
                  reduced={reduced}
                  onVisit={visit}
                  onError={fallback}
                />
              </SceneBoundary>
            </div>
          )}
          {simple && (
            <div className="simple-intro">
              {portrait}
              <span>THE PERSON BEHIND THE CODE</span>
              <h2>
                Useful ideas.
                <br />
                Thoughtful software.
              </h2>
              <p>Web · Mobile · Automation · Applied AI</p>
            </div>
          )}
          {!simple && (
            <div className="scene-caption">
              <span className="coordinate">RAJSHAHI / BANGLADESH</span>
              <p>A small island for big possibilities.</p>
              <span>SELECT A LANDMARK TO EXPLORE</span>
            </div>
          )}
          <div className="hero-bottom">
            <span>
              <i /> CURIOUS BY DEFAULT
            </span>
            <button
              className="view-toggle"
              onClick={() => {
                setSimple(!simple);
                setActive("home");
              }}
            >
              <Layers size={15} />
              {simple ? "Explore in 3D" : "Simple view"}
            </button>
          </div>
        </section>
        {failed && (
          <p className="fallback-notice" role="status">
            The 3D view isn’t available on this device. All portfolio content is
            available below.
          </p>
        )}
        {!simple && (
          <div className="destination-dock" aria-label="Island destinations">
            <div className="dock-intro">
              <Compass size={22} />
              <span>
                CHOOSE YOUR
                <br />
                <b>NEXT STOP</b>
              </span>
            </div>
            {destinations.map((d) => (
              <button key={d.id} onClick={() => visit(d.id)}>
                <span className="dock-number">{d.number}</span>
                <span>
                  <strong>{d.place}</strong>
                  <small>
                    {d.name === "Work"
                      ? "Projects & experiments"
                      : d.name === "About"
                        ? "A little about me"
                        : d.name === "Education"
                          ? "Where I’m learning"
                          : "Start a conversation"}
                  </small>
                </span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        )}
        <div
          id="portfolio-content"
          className={`portfolio-content ${simple ? "all-content" : active !== "home" ? "panel-open" : ""}`}
          data-active={active}
          ref={panel}
          tabIndex={-1}
          role={!simple && active !== "home" ? "dialog" : undefined}
          aria-modal={!simple && active !== "home" ? true : undefined}
          aria-label={
            !simple ? `${active} portfolio details` : "Portfolio content"
          }
          onKeyDown={(e) => {
            if (simple || active === "home") return;
            if (e.key === "Escape") close();
            if (e.key === "Tab") {
              const items = Array.from(
                panel.current?.querySelectorAll<HTMLElement>(
                  'button, a[href], [tabindex="0"]',
                ) || [],
              ).filter((el) => el.getClientRects().length);
              const first = items[0],
                last = items.at(-1);
              if (
                e.shiftKey &&
                (document.activeElement === first ||
                  document.activeElement === panel.current)
              ) {
                e.preventDefault();
                last?.focus();
              } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first?.focus();
              }
            }
          }}
        >
          {!simple && (
            <div className="panel-bar">
              <span>{destinations.find((d) => d.id === active)?.place}</span>
              <button onClick={close} aria-label="Return to island">
                Return to island <X size={17} />
              </button>
            </div>
          )}
          {children}
          {simple && (
            <footer>
              <span>© {new Date().getFullYear()} MD. Tusar Imran</span>
              <a href="#main">
                Back to top <ArrowDown size={14} />
              </a>
            </footer>
          )}
        </div>
        {!simple && active !== "home" && (
          <button
            className="panel-backdrop"
            aria-label="Close details"
            tabIndex={-1}
            onClick={close}
          />
        )}
      </main>
    </div>
  );
}
