"use client";

import dynamic from "next/dynamic";
import HeroSlider from "./HeroSlider"; // Direct import - No loading delay

// Other components can be lazy loaded
const PieWheel = dynamic(() => import("./PieWheel"));
const Projects = dynamic(() => import("./Projects"));
const Blog = dynamic(() => import("./Blog"));

import AboutSectionOne from "./About/AboutSectionOne";
import Brands from "./Brands";

export default function HomeClient() {
  return (
    <>
      <HeroSlider />
      <PieWheel />
      <Projects />
      <AboutSectionOne />
      <Blog />
      <Brands />
    </>
  );
}