import ResearchandInnovation from "@/components/ResearchandInnovation";
import FirstSection from "@/components/ResearchandInnovation/Firstsection";
import SecondSection from "@/components/ResearchandInnovation/Secondsection";
import ThirdSection from "@/components/ResearchandInnovation/Thirdsection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research and Innovation", 
    description: "",
    // other metadata
};
export default function ResearchandInnovationPage(){
    return(
        <>
        <ResearchandInnovation/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
         </>
    );
}   
