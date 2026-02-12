import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SANPEC EXCELLENCE",
  description: "",
};


export default function Home() {
  return <HomeClient />;
}
