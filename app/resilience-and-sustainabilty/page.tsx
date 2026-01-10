
import Resilience from "@/components/Resilience";
import SustainabilityStats from '@/components/Resilience/SustainabilityStats';
import SustainabilityJourney from '@/components/Resilience/SustainabilityJourney';
import Socialimpact from '@/components/Resilience/Socialimpact';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resilience and Sustainability",
  description: "",
  // other metadata
};

export default function WhySanpecPage(){
    return(
      <>
        <Resilience/> 
         <SustainabilityStats />
      <SustainabilityJourney />
        <Socialimpact />
        </>
    );
}