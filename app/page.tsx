
import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import Features from "@/components/Layout/Features";
import * as React from "react";
import Show from "@/components/Layout/Show";
import QnA from "@/components/Layout/QnA";
import Contact from "@/components/Layout/Contact";

export default function Home() {
  return (
    <>
     <Hero />
     <Features />
     <Show />
     <QnA />
     <Contact />
    </> 
  );
}
