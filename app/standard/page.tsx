import StandardIndex from "@/components/Standard";
import StandardLayout from "@/components/Standard/StandardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standard",
  description: "",
};

export default function StandardPage() {
  return (
    <main>
      <StandardIndex />
      <StandardLayout />
    </main>
  );
}
