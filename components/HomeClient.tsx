"use client";

import dynamic from "next/dynamic";

// Add loading placeholders
const HeroSlider = dynamic(() => import("./HeroSlider"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#cd091b] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  )
});

const PieWheel = dynamic(() => import("./PieWheel"), { 
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-slate-50"></div>
});

const Projects = dynamic(() => import("./Projects"), { 
  ssr: false,
  loading: () => <div className="w-full h-[800px] bg-white"></div>
});

const Blog = dynamic(() => import("./Blog"), { 
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-slate-50"></div>
});

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