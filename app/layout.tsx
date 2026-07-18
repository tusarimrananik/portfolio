import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MD. Tusar Imran — Software & AI Product Builder",
    template: "%s · MD. Tusar Imran",
  },
  description:
    "Portfolio of MD. Tusar Imran, a RUET CSE undergraduate building web apps, Chrome extensions, Android utilities, automation tools and AI-enabled products.",
  keywords: [
    "MD. Tusar Imran",
    "Tusar Imran Anik",
    "RUET",
    "Computer Science",
    "Software Developer",
    "Bangladesh",
  ],
  authors: [{ name: "MD. Tusar Imran" }],
  openGraph: {
    title: "MD. Tusar Imran — Software & AI Product Builder",
    description:
      "Web apps, Chrome extensions, Android utilities, automation and AI-enabled products by a RUET CSE undergraduate.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "MD. Tusar Imran — Software & AI Product Builder",
    description:
      "Web apps, Chrome extensions, Android utilities, automation and AI-enabled products by a RUET CSE undergraduate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
