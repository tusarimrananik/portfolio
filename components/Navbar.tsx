"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Services", "Blog", "Contact"];

  return (
    <nav
      className="
        fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50
        w-[calc(100vw-1rem)] sm:w-full max-w-7xl
        bg-background/30 backdrop-blur-xl
        border border-foreground/10
        rounded-xl sm:rounded-2xl shadow-lg
        transition-all duration-300
      "
    >
      <div className="px-3 sm:px-4 lg:px-8 flex justify-between items-center h-12 sm:h-14 lg:h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Anik
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-foreground font-medium text-sm lg:text-base">
          {navItems.map((item) => (
            <li key={item}>
                <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative px-1 transition-colors duration-300
                  hover:text-primary text-foreground
                "
                >
                {item}
                </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 w-5 sm:w-6 h-5 sm:h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-full bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-full bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul
          className="
            flex flex-col gap-1 px-3 sm:px-4 pb-3 sm:pb-4 text-foreground font-medium text-center
            bg-background/40 backdrop-blur-xl
            border-t border-foreground/10 rounded-b-xl sm:rounded-b-2xl shadow-md
          "
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2.5 sm:py-3 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}