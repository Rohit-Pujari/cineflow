"use client";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PhilosophySlide from "@/components/PhilosophySlide";
import PurposeSlide from "@/components/PurposeSlide";
import WorkSlide from "@/components/WorkSlide";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const workRef = useRef(null);
  const purposeRef = useRef(null);

  return (
    <>
      <Nav scrollTo={{ heroRef, philosophyRef, workRef, purposeRef }} />
      <main className="flex flex-col mt-26 px-8">
        {/* First Slide */}
        <section ref={heroRef}>
          <Hero />
        </section>
        {/* second slide */}
        <section ref={philosophyRef}>
          <PhilosophySlide />
        </section>
        {/* third slide */}
        <section ref={workRef}>
          <WorkSlide />
        </section>
        {/* fourth slide */}
        <section ref={purposeRef}>
          <PurposeSlide />
        </section>
      </main>
    </>
  );
}
