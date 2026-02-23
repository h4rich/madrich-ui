import {
  Heart,
  Code2,
  Sparkles,
  Users,
  Github,
  Mail,
  Palette,
  Zap,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BrutalCN — the neo-brutalist UI library for developers who build bold. Our mission, values, and what makes us different.",
};

const values = [
  {
    icon: Palette,
    title: "Bold By Design",
    color: "bg-[#FFC900]",
    description:
      "We believe great interfaces don't have to be boring. Neo-brutalism brings raw energy, unapologetic boldness, and a refreshing honesty to modern web design.",
  },
  {
    icon: Code2,
    title: "Developer First",
    color: "bg-[#80C551]",
    description:
      "Every component is built with developer experience in mind — clean APIs, TypeScript support, and seamless integration with Next.js and Tailwind CSS.",
  },
  {
    icon: BookOpen,
    title: "Open Source",
    color: "bg-[#E9DCFE] dark:bg-card-surface",
    description:
      "BrutalCN is free and open source. We believe the best tools are built in the open, by the community, for the community. Fork it, extend it, make it yours.",
  },
  {
    icon: Zap,
    title: "Performance Matters",
    color: "bg-[#FF7051]",
    description:
      "Lightweight, accessible, and blazing fast. Our components are optimized for production use — no unnecessary bloat, no heavy dependencies.",
  },
];

const stats = [
  { label: "Components", value: "13+" },
  { label: "GitHub Stars", value: "Growing" },
  { label: "Open Source", value: "100%" },
  { label: "Bundle Size", value: "Tiny" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-bg font-grotesk pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-6 bg-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="absolute top-8 right-12 w-20 h-20 bg-[#FFC900] rotate-12 border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute bottom-8 left-10 w-16 h-16 bg-[#80C551] rounded-full border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute top-1/2 left-[10%] w-12 h-12 bg-[#FF7051] rotate-45 border-3 border-foreground shadow-neo-sm hidden lg:block"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-card-surface border-2 border-foreground px-4 py-1.5 shadow-neo-4 transform -rotate-2 mb-8">
            <Heart className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wider uppercase">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-foreground mb-6 leading-none">
            About{" "}
            <span className="bg-foreground text-background px-3 inline-block rotate-1">
              BrutalCN
            </span>
          </h1>

          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            We&apos;re building the most unapologetically bold UI library for
            developers who refuse to settle for bland interfaces.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Mission Statement */}
          <div className="bg-card-surface border-3 border-foreground p-8 md:p-12 shadow-neo-md mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-hero w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                <Sparkles className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Our Mission
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed mb-4">
              BrutalCN was born out of a simple frustration — every UI library
              looked the same. Rounded corners, soft shadows, pastel colors. We
              wanted something different. Something that makes people stop
              scrolling.
            </p>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              Built on top of{" "}
              <span className="font-black bg-[#FFC900] px-1.5 border border-foreground">
                shadcn/ui
              </span>{" "}
              and{" "}
              <span className="font-black bg-hero px-1.5 border border-foreground">
                Tailwind CSS
              </span>
              , BrutalCN transforms familiar components into neo-brutalist
              masterpieces — thick borders, bold shadows, raw energy. All while
              keeping the accessibility and developer experience you love.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-foreground text-background border-3 border-foreground p-4 text-center shadow-[4px_4px_0px_0px_#ae7aff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#ae7aff] transition-all duration-200"
              >
                <p className="text-2xl md:text-3xl font-black">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-wide opacity-80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-8">
              What We{" "}
              <span className="bg-[#FFC900] px-2 border-2 border-foreground inline-block -rotate-1 shadow-neo-sm">
                Believe
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`${value.color} border-3 border-foreground p-6 md:p-8 shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                      <value.icon className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Creator Section */}
          <div className="mt-12 bg-[#FFC900] border-3 border-foreground p-6 md:p-8 shadow-neo-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                <Users className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                The Creator
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed mb-4">
              BrutalCN is built and maintained by{" "}
              <a href={"https://github.com/h4rich"} className="font-black">
                h4rich
              </a>{" "}
              &{" "}
              <a href={"https://github.com/m4dd0c"} className="font-black">
                m4dd0c
              </a>{" "}
              — a developer passionate about pushing the boundaries of web
              design. What started as a personal experiment in neo-brutalist
              aesthetics has grown into a full-featured component library loved
              by developers worldwide.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="https://github.com/h4rich"
                target="_blank"
                className="inline-flex items-center gap-2 bg-foreground text-background font-black px-4 py-2 border-2 border-foreground shadow-[3px_3px_0px_0px_#ae7aff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 uppercase text-sm tracking-wide"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Github--Streamline-Simple-Icons"
                  height="18"
                  width="18"
                >
                  <title>GitHub</title>
                  <path
                    className="fill-background"
                    d="M12 0.297c-6.63 0 -12 5.373 -12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82 -0.258 0.82 -0.577 0 -0.285 -0.01 -1.04 -0.015 -2.04 -3.338 0.724 -4.042 -1.61 -4.042 -1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087 -0.744 0.084 -0.729 0.084 -0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108 -0.776 0.417 -1.305 0.76 -1.605 -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 0 -1.31 0.465 -2.38 1.235 -3.22 -0.135 -0.303 -0.54 -1.523 0.105 -3.176 0 0 1.005 -0.322 3.3 1.23 0.96 -0.267 1.98 -0.399 3 -0.405 1.02 0.006 2.04 0.138 3 0.405 2.28 -1.552 3.285 -1.23 3.285 -1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61 -2.805 5.625 -5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606 -0.015 2.896 -0.015 3.286 0 0.315 0.21 0.69 0.825 0.57C20.565 22.092 24 17.592 24 12.297c0 -6.627 -5.373 -12 -12 -12"
                    strokeWidth="1"
                  ></path>
                </svg>
                GitHub
              </Link>
              <Link
                href="https://x.com/h4rich_"
                target="_blank"
                className="inline-flex items-center gap-2 bg-foreground text-background font-black px-4 py-2 border-2 border-foreground shadow-[3px_3px_0px_0px_#ae7aff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 uppercase text-sm tracking-wide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-twitter-x fill-background"
                  viewBox="0 0 16 16"
                  id="Twitter-X--Streamline-Bootstrap"
                  height="18"
                  width="18"
                >
                  <path
                    d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                    strokeWidth="1"
                  ></path>
                </svg>
                Twitter
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 bg-foreground text-background border-3 border-foreground p-6 md:p-8 shadow-[6px_6px_0px_0px_#ae7aff]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-hero w-12 h-12 border-2 border-background flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                <Mail className="h-6 w-6 stroke-[2.5] text-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Get in Touch
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              Have questions, feedback, or just want to say hi? We&apos;d love
              to hear from you. Reach out at{" "}
              <a
                href="mailto:harishsuthar739@gmail.com"
                className="underline text-hero font-bold hover:text-[#FFC900] transition-colors"
              >
                harishsuthar739@gmail.com
              </a>
              . Let&apos;s build something bold together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
