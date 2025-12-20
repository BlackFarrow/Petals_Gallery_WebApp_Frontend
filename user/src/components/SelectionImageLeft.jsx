import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/1.jpg";

function SectionImageLeft() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-200 to-yellow-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image left */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Session"
            className="rounded-lg shadow-lg object-cover w-full h-[350px]"
          />
        </div>

        {/* Text right */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold">
            Capture Your Moment Like Never Before
          </h2>
          <p className="text-lg max-w-xl">
            Experience personalized sessions tailored to showcase your unique
            story. Book your session today and create memories that last a
            lifetime.
          </p>
          <Link
            to="/services"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 font-semibold transition"
          >
            Book Your Session
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionImageLeft;
