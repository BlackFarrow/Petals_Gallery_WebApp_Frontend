import React from "react";
import AboutAndServices from "../components/AboutAndServices";

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A small team of creative photographers.
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We are passionate about capturing beautiful moments and turning them into lasting memories.
            </p>
          </div>
        </div>
      </div>
      <AboutAndServices />
    </div>
  );
}

export default About;
