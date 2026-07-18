import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MD. Tusar Imran — CSE Student & Developer",
    template: "%s · MD. Tusar Imran",
  },
  description:
    "Portfolio of MD. Tusar Imran, a Computer Science & Engineering undergraduate at RUET building web, Android and AI-enabled products.",
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
    title: "MD. Tusar Imran — CSE Student & Developer",
    description:
      "Web, Android and AI-enabled projects by a CSE undergraduate at RUET.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "MD. Tusar Imran — CSE Student & Developer",
    description:
      "Web, Android and AI-enabled projects by a CSE undergraduate at RUET.",
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
