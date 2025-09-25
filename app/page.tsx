// app/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (theme) {
        html.className = theme; // apply theme class to <html>
      } else {
        html.removeAttribute("class");
      }
    }
  }, [theme]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center gap-8 p-8">
      <section>
        <h1>Welcome to My Themed Site</h1>
        <p className="max-w-xl mt-4">
          This homepage uses <span className="font-bold">theme tokens</span> you
          defined in your global CSS. Try switching between different looks
          below to see the magic ✨
        </p>
      </section>

      <section className="flex gap-4 flex-wrap justify-center">
        <button onClick={() => setTheme("")}>Default Theme</button>
        <button onClick={() => setTheme("forest")}>Forest 🍄</button>
        <button onClick={() => setTheme("cyberpunk")}>Cyberpunk ⚡</button>
        <button onClick={() => setTheme("terminal")}>Terminal 💾</button>
      </section>

      <section className="max-w-2xl mt-12 space-y-6">
        <h2>Features</h2>
        <p>
          🎨 Color tokens like <code>bg-primary</code>,{" "}
          <code>text-foreground</code>, and <code>shadow-lg</code> make it easy
          to swap entire themes.
        </p>
        <h3>Reusable Styles</h3>
        <p>
          Headings, buttons, and text all automatically adapt based on the
          active theme.
        </p>
      </section>
    </main>
  );
}
