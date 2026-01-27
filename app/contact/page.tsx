import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import ContactContent from "@/components/Contact/ContactContent";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
      <ContactContent/>
    </>
  );
};

export default ContactPage;
