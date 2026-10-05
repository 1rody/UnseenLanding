'use client'

import Navigation from "@/src/components/layout/Navigation";
import Hero from "@/src/components/landing/Hero";
import About from "@/src/components/landing/About";
import Transition from "@/src/components/landing/Transition";
import Download from "@/src/components/landing/Download";


export default function Home() {
  return (
    <>
      <Navigation/>
      <main>
        <Hero/>
        <About/>
        <Transition/>
        <Download/>
      </main>
    </>
  );
}
