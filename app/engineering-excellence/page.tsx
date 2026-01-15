
import EngineeringExcellenceSection from "@/components/EngineeringExcellence";
import FistSection from "@/components/EngineeringExcellence/FirstSection";
import SecondSection from "@/components/EngineeringExcellence/SecondSection";
import ForthSection from "@/components/EngineeringExcellence/ForthSection";
import ThirdSection from "@/components/EngineeringExcellence/ThirdSection";
import FifthSection from "@/components/EngineeringExcellence/FifthSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Excellence ",
  description: "",
  // other metadata
};

const EngineeringNew = () => {
  return (
    <>
      <EngineeringExcellenceSection/>
      <FistSection/>
      <SecondSection/>
         <ForthSection/>
      <ThirdSection/>
      <FifthSection/>
    </>
  );
};
export default EngineeringNew;
