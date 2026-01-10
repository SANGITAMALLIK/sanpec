"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"), { ssr: false });
const PieWheel = dynamic(() => import("./PieWheel"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Blog = dynamic(() => import("./Blog"), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <HeroSlider />
      <PieWheel />
      <Projects />
      <Blog />
    </>
  );
}
