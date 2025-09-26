"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-background text-foreground overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-contact-footer"
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
          <rect width="100%" height="100%" fill="url(#grid-contact-footer)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 animate-[gradient-move_20s_linear_infinite]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Section title */}
        <h2 className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-foreground/70 mt-4 text-center text-lg max-w-2xl mx-auto font-light">
          Have a project in mind, want to collaborate, or just say hello? Reach out via any of the channels below.
        </p>

        {/* Contact Info */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center gap-3">
            <Mail className="text-primary" size={28} />
            <a
              href="mailto:yourname@email.com"
              className="text-sm font-medium hover:text-primary transition"
            >
              yourname@email.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-accent" size={28} />
            <a
              href="tel:+1234567890"
              className="text-sm font-medium hover:text-accent transition"
            >
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-secondary" size={28} />
            <p className="text-sm font-medium">San Francisco, CA</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-foreground/60 hover:text-accent transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-foreground/60 hover:text-primary transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="text-foreground/60 hover:text-secondary transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            className="text-foreground/60 hover:text-pink-500 transition"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8">
          <div className="border-t border-foreground/10 max-w-5xl mx-auto" />
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} Anik. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#skills" className="hover:text-foreground transition">Skills</a>
              <a href="#testimonials" className="hover:text-foreground transition">Testimonials</a>
              <a href="#roadmap" className="hover:text-foreground transition">Roadmap</a>
            </div>
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
