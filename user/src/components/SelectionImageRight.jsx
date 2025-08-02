import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import heroImage from "../assets/hero1.jpg";

function SectionImageRight() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text left */}
        <div className="md:w-1/2 space-y-6 order-2 md:order-1">
          <h2 className="text-3xl font-extrabold">
            Ready to Start Your Photography Journey?
          </h2>
          <p className="text-lg max-w-xl">
            Let us guide you through a seamless, creative process designed to
            capture the essence of your moments. Let’s get started today!
          </p>
          <Link
            to="/book"
            className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 font-semibold transition"
          >
            Let’s Get Started
          </Link>
        </div>

        {/* Image right */}
        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src={heroImage}
            alt="Get Started"
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionImageRight;
