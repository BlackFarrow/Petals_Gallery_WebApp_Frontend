import React from "react";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";


function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <ContactForm />
        <ContactInfo />

      </div>
    </div>
  );
}

export default Contact;
