"use client";

import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className=" overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
        </div>
      </div>
    </div>
  );
}
