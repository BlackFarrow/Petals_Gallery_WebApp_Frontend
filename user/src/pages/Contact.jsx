import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We'd love to hear from you!</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <ContactInfo />
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.90231077526!2d79.8614777147722!3d6.902210995012383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259630deadd21%3A0x527a4cb9607c8615!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1620208430243!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
