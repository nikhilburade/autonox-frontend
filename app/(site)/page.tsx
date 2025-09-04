import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Finalcta from "@/components/finalecta";

export const metadata: Metadata = {
  title:  "Nexora - AI Personalized Growth & Automation",

  // other metadata
  description: "Nexora helps businesses grow faster with AI-powered personalization and automation."
};

export default function Home() {
  return (
    <main> 
      <Hero />
      <Feature />
      <CTA />
      <Pricing />
      <About />
      <FunFact />
      <Testimonial />
      <FAQ />
      <Finalcta />
    </main>
  );
}
