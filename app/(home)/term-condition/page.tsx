import { FileText, Scale, AlertTriangle, Users, Ban, RefreshCw, Gavel, Mail } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    color: "bg-[#80C551]",
    content: [
      "By accessing and using the Madrich UI website and component library, you accept and agree to be bound by these Terms and Conditions.",
      "If you do not agree to these terms, you should discontinue use of our services immediately.",
      "We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of any changes.",
    ],
  },
  {
    icon: Scale,
    title: "Use License",
    color: "bg-[#FFC900]",
    content: [
      "Madrich UI components are provided for both personal and commercial use in your projects.",
      "You may use, modify, and distribute the components in your own applications without restriction.",
      "You may not redistribute the component library itself as a competing product or template.",
      "Attribution is appreciated but not required when using individual components.",
    ],
  },
  {
    icon: Users,
    title: "User Responsibilities",
    color: "bg-card-surface",
    content: [
      "You agree to use the website and its components in a lawful manner and in compliance with all applicable regulations.",
      "You are responsible for ensuring that your use of our components does not infringe on any third-party intellectual property rights.",
      "You agree not to attempt to disrupt, hack, or compromise the security of our website or services.",
      "Any content you submit through our contact form must not contain malicious, defamatory, or illegal material.",
    ],
  },
  {
    icon: Ban,
    title: "Prohibited Activities",
    color: "bg-[#FF7051]",
    content: [
      "Scraping, crawling, or using automated tools to extract content from the website for competitive purposes.",
      "Impersonating Madrich UI or its creators in any capacity.",
      "Using our services to distribute malware, spam, or any harmful content.",
      "Attempting to reverse engineer, decompile, or extract the source code of proprietary parts of the platform.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer of Warranties",
    color: "bg-[#E9DCFE] dark:bg-card-surface",
    content: [
      "Madrich UI components are provided \"as is\" without any warranties, express or implied.",
      "We do not guarantee that the components will be error-free, uninterrupted, or compatible with all environments.",
      "You assume all responsibility and risk for the use of our components in your applications.",
      "We are not liable for any damages arising from the use or inability to use our components.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Modifications & Updates",
    color: "bg-[#80C551]",
    content: [
      "We may update, modify, or discontinue any part of the Madrich UI library at any time without prior notice.",
      "Component APIs and styling may change between versions. We recommend pinning specific versions in production.",
      "These Terms and Conditions may be revised periodically. The latest version will always be available on this page.",
    ],
  },
  {
    icon: Gavel,
    title: "Governing Law",
    color: "bg-card-surface",
    content: [
      "These terms shall be governed by and construed in accordance with applicable laws.",
      "Any disputes arising from these terms shall be resolved through good-faith negotiation before pursuing formal legal action.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full effect.",
    ],
  },
];

export default function TermConditionPage() {
  return (
    <div className="min-h-screen bg-primary-bg font-grotesk pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-6 bg-[#FFC900] overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Decorative shapes */}
        <div className="absolute top-8 left-10 w-16 h-16 bg-[#FF7051] rotate-45 border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute bottom-8 right-12 w-20 h-20 bg-hero rounded-full border-3 border-foreground shadow-neo-4 hidden md:block"></div>
        <div className="absolute top-1/2 right-[15%] w-12 h-12 bg-[#80C551] border-3 border-foreground shadow-neo-sm hidden lg:block"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-card-surface border-2 border-foreground px-4 py-1.5 shadow-neo-4 transform rotate-1 mb-8">
            <Gavel className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wider uppercase">
              Legal Stuff
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-foreground mb-6 leading-none">
            Terms &{" "}
            <span className="bg-foreground text-background px-3 inline-block rotate-1">
              Conditions
            </span>
          </h1>

          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            The rules of engagement for using Madrich UI. Straightforward, no
            legal jargon — just the essentials.
          </p>

          <div className="mt-6 inline-block bg-card-surface/80 border-2 border-foreground px-4 py-2 shadow-neo-sm">
            <p className="text-sm font-bold text-foreground/70">
              Last Updated: February 13, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-16 md:py-24 px-6 relative overflow-hidden">
        {/* Background dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        {/* Decorative floating shapes */}
        <div className="absolute top-40 left-[-20px] w-24 h-24 bg-[#E9DCFE] rounded-full border-3 border-foreground shadow-neo-4 hidden lg:block"></div>
        <div className="absolute bottom-40 right-[-15px] w-20 h-20 bg-[#FFC900] rotate-12 border-3 border-foreground shadow-neo-4 hidden lg:block"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Numbered sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`${section.color} border-3 border-foreground p-6 md:p-8 shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-4 transition-all duration-200 relative`}
              >
                {/* Section number badge */}
                <div className="absolute -top-4 -left-3 w-10 h-10 bg-foreground text-background border-2 border-foreground rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#ae7aff]">
                  <span className="font-black text-sm">{index + 1}</span>
                </div>

                <div className="flex items-center gap-3 mb-5 pt-1">
                  <div className="bg-card-surface w-12 h-12 border-2 border-foreground flex items-center justify-center shadow-neo-sm">
                    <section.icon className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base md:text-lg font-medium leading-relaxed"
                    >
                      <span className="mt-1.5 w-3 h-3 bg-foreground rounded-full border border-foreground flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-foreground text-background border-3 border-foreground p-6 md:p-8 shadow-[6px_6px_0px_0px_#FFC900]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFC900] w-12 h-12 border-2 border-background flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                <Mail className="h-6 w-6 stroke-[2.5] text-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Get in Touch
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:harishsuthar739@gmail.com"
                className="underline text-[#FFC900] font-bold hover:text-hero transition-colors"
              >
                harishsuthar739@gmail.com
              </a>
              . We&apos;re happy to clarify anything and ensure a smooth
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
