import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fdf6ee] to-[#f6e5c6] overflow-x-hidden">
      {/* Header/Nav */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-24 px-4 sm:px-6 text-center text-gray-800 w-full">
          <h1 className="text-5xl font-extrabold mb-6 text-amber-700 drop-shadow">
            About Us
          </h1>
          <p className="text-lg max-w-4xl mx-auto mb-8 text-gray-700">
            At{" "}
            <span className="font-semibold text-amber-800">
              [Your Studio Name]
            </span>
            , we specialize in capturing the beauty of life through the lens.
            With years of professional experience, a creative eye, and a passion
            for storytelling, our team transforms fleeting moments into lasting
            memories.
          </p>

          <div className="w-full max-w-5xl mx-auto text-left space-y-6 text-gray-700 px-4 sm:px-6">
            <p>
              Whether it's a wedding, corporate event, portrait session, or a
              personal milestone, we are dedicated to delivering high-quality
              images that reflect authenticity, emotion, and artistry.
            </p>
            <p>
              Our mission is to create a comfortable, collaborative experience
              for every client—one where your vision meets our creative
              direction to produce work you’ll treasure forever.
            </p>
            <p>
              From our curated equipment selection to our commitment to
              excellence in post-production, we ensure every detail is handled
              with care and professionalism.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
