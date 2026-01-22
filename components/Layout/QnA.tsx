"use client"

import { useState } from "react";

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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <section className="w-full py-20 bg-background font-grotesk">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-extrabold mb-10 text-[#1ac90a]  border-foreground inline-block">
                        Frequently asked questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-background border-4 border-foreground shadow-[5px_5px_0px_1px_#000]"
                            >

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-6 flex justify-between items-center font-bold text-lg text-foreground"
                                >
                                    {faq.question}
                                    <span className="text-2xl">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>


                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 p-6 pt-0" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-start text-foreground text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='z-50 h-1 w-full bg-foreground'>

            </div>
        </>
    )
}

export default QnA