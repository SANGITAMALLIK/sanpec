import { Metadata } from "next";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "SANPEC-EXCELLENCE",
  description: "This is Home for Startup Nextjs Template",
};

export default function Home() {
  return (
    <>
      <HomeClient />
      <AboutSectionOne />
      <Brands />
    </>
  );
}
