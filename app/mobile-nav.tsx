"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onOutside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 700) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return <div ref={container} className="mobile-navigation" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
  }}>
    <button ref={toggle} type="button" className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {["Work", "About", "Education", "Contact"].map(label => <a href={`#${label.toLowerCase()}`} key={label} onClick={() => {
        setOpen(false);
        const section = document.getElementById(label.toLowerCase());
        section?.setAttribute("tabindex", "-1");
        section?.focus({ preventScroll: true });
      }}>{label}<ArrowUpRight size={20} aria-hidden="true" /></a>)}
    </nav>
  </div>;
}
