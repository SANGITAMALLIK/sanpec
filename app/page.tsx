// homepage component 
import HeroSlider from "@/components/HeroSlider";
import PieWheel from "@/components/PieWheel";
import Projects from "@/components/Projects";
import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";

// import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
// import Features from "@/components/Features";
// import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import Brands from "@/components/Brands";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SANPEC-EXCELLENCE",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
     <HeroSlider/>
     <PieWheel/>
     <Projects/>
      {/* <ScrollUp /> */}
      {/* <Hero /> */}
      {/* <Features /> */}
      {/* <Video /> */}
      
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Brands />
      {/* <Contact /> */}
    </>
  );
}
