import React from "react";
import heroImage from "../assets/hero1.jpg"; // Rename file without spaces for safety

function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Photographer with camera"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay (optional, for better text contrast) */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-70"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 h-full flex flex-col justify-center md:w-1/2 text-white">
        <p className="text-sm mb-3 uppercase tracking-wider font-medium drop-shadow-lg">
          Our Photography Journey
        </p>
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg leading-tight">
          Capturing Moments, Preserving Memories
        </h1>
        <p className="text-lg mb-8 text-white/90 drop-shadow-lg">
          Discover the art of timeless photographic experiences tailored just
          for you.
        </p>
        <div className="flex space-x-4">
          <a
            href="/quote"
            className="bg-white text-yellow-700 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-100 font-semibold transition"
          >
            Get a Quote
          </a>
          <a
            href="/booking"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
