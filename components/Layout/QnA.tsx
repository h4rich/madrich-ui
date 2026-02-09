"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york/ui/accordion";

const faqs = [
  {
    question: "What is Neo-Brutalism UI?",
    answer:
      "Neo-Brutalism UI is a bold design style that focuses on solid colors, thick borders, sharp shadows, and raw layouts for strong visual impact.",
  },
  {
    question: "Why use Tailwind CSS for this library?",
    answer:
      "Tailwind CSS makes it easy to create Neo-Brutalist designs using utility classes without writing custom CSS.",
  },
  {
    question: "Is this library responsive?",
    answer:
      "Yes, all components are built with responsive Tailwind utilities to work perfectly on all screen sizes.",
  },
  {
    question: "Can I customize colors and styles?",
    answer:
      "Absolutely. You can easily customize colors, borders, shadows, and typography via Tailwind configuration.",
  },
  {
    question: "Is this library production-ready?",
    answer:
      "Yes, it is lightweight, fast, and designed for modern production-level web applications.",
  },
];

function QnA() {
  return (
    <section className="w-full py-32 bg-[#E7E5E4] font-grotesk relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-foreground mb-6">
            Got{" "}
            <span className="text-white bg-foreground px-2 -rotate-1 inline-block">
              Questions?
            </span>
          </h2>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Everything you need to know about building bold interfaces.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <AccordionItem
                value={`item-${index}`}
                className="bg-white border-3 border-foreground shadow-[6px_6px_0px_0px_#000] data-[state=open]:shadow-[2px_2px_0px_0px_#000] data-[state=open]:translate-x-[4px] data-[state=open]:translate-y-[4px] transition-all duration-200"
              >
                <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:bg-[#FFC900] hover:text-foreground transition-colors data-[state=open]:bg-[#FFC900] border-b-3 border-transparent data-[state=open]:border-foreground [&>svg]:size-6 [&>svg]:stroke-[3px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-medium px-6 py-5 bg-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>

      {/* Decorative background elements */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      <div className="absolute top-20 left-[-20px] w-32 h-32 bg-[#80C551] rounded-full border-3 border-foreground shadow-[4px_4px_0px_0px_#000] z-0 hidden md:block"></div>
      <div className="absolute bottom-20 right-[-20px] w-40 h-40 bg-[#E9DCFE] rotate-12 border-3 border-foreground shadow-[-4px_4px_0px_0px_#000] z-0 hidden md:block"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-[#FF7051] rotate-45 border-3 border-foreground shadow-[4px_4px_0px_0px_#000] z-0 hidden md:block"></div>
    </section>
  );
}

export default QnA;
