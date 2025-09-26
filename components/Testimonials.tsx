"use client";

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager @ StartupX",
    feedback:
      "Anik was fantastic to work with — highly skilled, proactive, and always delivered on time. The web app he built helped us scale rapidly.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "David Kim",
    role: "CTO @ TechWave",
    feedback:
      "The level of craftsmanship in both frontend and backend was outstanding. He has an eye for detail and a passion for performance.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Emily Carter",
    role: "Founder @ BrightIdeas",
    feedback:
      "Anik brought our vision to life with elegance. His problem-solving skills and technical expertise exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-background text-foreground overflow-hidden"
    >
      {/* Grid Background (same as Hero) */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-testimonials"
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
          <rect width="100%" height="100%" fill="url(#grid-testimonials)" />
        </svg>
      </div>

      {/* Animated Gradient Beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 md:from-primary/5 md:via-accent/5 md:to-secondary/5 animate-[gradient-move_14s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-black text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Testimonials
        </h2>
        <p className="text-foreground/70 mt-4 text-center text-lg max-w-2xl mx-auto font-light">
          Words from people I’ve collaborated with and built solutions for.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-foreground/10 bg-background/70 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-foreground/10 shadow-sm"
                />
                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {t.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{t.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">
                “{t.feedback}”
              </p>
            </div>
          ))}
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
