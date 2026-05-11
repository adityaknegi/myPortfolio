"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/common/header";
import Hero from "@/components/HomePage/home";
import About from "@/components/HomePage/AboutMe";
import Work from "@/components/HomePage/Journey";
import Contact from "@/components/HomePage/Contact";
import Footer from "@/components/Footer/Footer";

export default function IndexPage() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const hash = window?.location?.hash;
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header sectionRefs={sectionRefs} />
      <main>
        <Hero sectionRef={sectionRefs.home} />
        <About sectionRef={sectionRefs.about} />
        <Work sectionRef={sectionRefs.work} />
        <Contact sectionRef={sectionRefs.contact} />
      </main>
      <Footer />
    </div>
  );
}
