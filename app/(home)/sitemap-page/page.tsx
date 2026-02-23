import {
  Home,
  LayoutGrid,
  FileText,
  Shield,
  Gavel,
  Users,
  Map,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse the complete sitemap of BrutalCN. Quickly find all pages, components, and resources available on our site.",
};

const components = [
  { name: "Accordion", slug: "Accordion" },
  { name: "Alert Dialog", slug: "alert-dialog" },
  { name: "Avatar", slug: "avatar" },
  { name: "Button", slug: "button" },
  { name: "Checkbox", slug: "checkbox" },
  { name: "Image Card", slug: "image-card" },
  { name: "Input", slug: "input" },
  { name: "Profile Selector", slug: "profile-selector" },
  { name: "Progress", slug: "progress" },
  { name: "Select", slug: "select" },
  { name: "Switch", slug: "switch" },
  { name: "Textarea", slug: "textarea" },
  { name: "Tooltip Card", slug: "tooltip-card" },
];

const mainPages = [
  { name: "Home", href: "/", icon: Home },
  { name: "Components", href: "/components/Accordion", icon: LayoutGrid },
  { name: "About Us", href: "/about", icon: Users },
];

const legalPages = [
  { name: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  { name: "Terms & Conditions", href: "/term-condition", icon: Gavel },
  { name: "Sitemap", href: "/sitemap-page", icon: Map },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-primary-bg font-grotesk pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-6 bg-[#80C551] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="absolute top-6 left-12 w-20 h-20 bg-hero rotate-6 border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute bottom-6 right-10 w-16 h-16 bg-[#FFC900] rounded-full border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute top-1/3 right-[12%] w-14 h-14 bg-[#FF7051] rotate-45 border-3 border-foreground shadow-neo-sm hidden lg:block"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-card-surface border-2 border-foreground px-4 py-1.5 shadow-neo-4 transform rotate-1 mb-8">
            <Map className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wider uppercase">
              All Pages
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-foreground mb-6 leading-none">
            Site{" "}
            <span className="bg-foreground text-background px-3 inline-block -rotate-1">
              Map
            </span>
          </h1>

          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            A complete overview of every page on BrutalCN. Find exactly what
            you&apos;re looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="w-full py-16 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          {/* Main Pages */}
          <div className="bg-[#FFC900] border-3 border-foreground p-6 md:p-8 shadow-neo-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                <Home className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Main Pages
              </h2>
            </div>
            <nav className="space-y-3">
              {mainPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="flex items-center gap-3 bg-card-surface border-2 border-foreground p-3 md:p-4 shadow-neo-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 group"
                >
                  <page.icon className="w-5 h-5 stroke-[2.5] flex-shrink-0" />
                  <span className="text-base md:text-lg font-bold uppercase tracking-wide">
                    {page.name}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Components */}
          <div className="bg-hero border-3 border-foreground p-6 md:p-8 shadow-neo-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                <LayoutGrid className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Components
              </h2>
            </div>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {components.map((component) => (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="flex items-center gap-3 bg-card-surface border-2 border-foreground p-3 md:p-4 shadow-neo-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 group"
                >
                  <span className="w-3 h-3 bg-foreground rounded-full border border-foreground flex-shrink-0"></span>
                  <span className="text-base md:text-lg font-bold uppercase tracking-wide">
                    {component.name}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Pages */}
          <div className="bg-card-surface border-3 border-foreground p-6 md:p-8 shadow-neo-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                <FileText className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Legal & Info
              </h2>
            </div>
            <nav className="space-y-3">
              {legalPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="flex items-center gap-3 bg-background border-2 border-foreground p-3 md:p-4 shadow-neo-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 group"
                >
                  <page.icon className="w-5 h-5 stroke-[2.5] flex-shrink-0" />
                  <span className="text-base md:text-lg font-bold uppercase tracking-wide">
                    {page.name}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
