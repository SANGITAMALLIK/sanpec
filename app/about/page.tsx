
import About from "@/components/About";
import AboutFirstTabs from "@/components/About/AboutFirstTabs";
import PresidentAndCeo from "@/components/About/PresidentAndCeo";
import OurCommitments from "@/components/About/OurCommitments";
import SanpecKeys from "@/components/About/SanpecKeys";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
   <>
    <About/>
    <AboutFirstTabs/>
    <PresidentAndCeo/>
    <OurCommitments/>
    <SanpecKeys/>
      </>
  );
};

export default AboutPage;
