
import WhySanpec from "@/components/WhySanpec";
import SanpecApproach from "@/components/WhySanpec/SanpecApproach";
import DriversOfChange from "@/components/WhySanpec/DriversOfChange";
import SanpecVerticalTabs from "@/components/WhySanpec/SanpecVerticalTabs";
import Collobration from "@/components/WhySanpec/Collobration";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why SANPEC",
  description: "",
  // other metadata
};

export default function WhySanpecPage(){
    return(
        <>
        <WhySanpec/>
        <SanpecApproach/>
        <DriversOfChange/>
        <SanpecVerticalTabs/>
        <Collobration/>
        </>
        
    );
}