
import ElectricPower from "@/components/ElectricPower";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Power",
  description: "",
  // other metadata
};

export default function ElectricPowerPage(){
    return(
        <ElectricPower/>
    );
}