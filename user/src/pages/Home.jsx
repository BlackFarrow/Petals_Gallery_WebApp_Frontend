import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SectionImageLeft from "../components/SelectionImageLeft";
import SectionImageRight from "../components/SelectionImageRight"; // Importing the right section component
import OurServices from "../components/OurServices";
import AboutAndServices from "../components/AboutAndServices";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fdf6ee] to-[#f6e5c6] overflow-x-hidden">
      {/* Header/Nav */}

      {/* Main Content */}
      <main className="flex-grow">
        <section>
          <Hero />
        </section>

        {/* Future sections: Features, Testimonials, Packages, etc. */}
        {<OurServices />}
        {<SectionImageLeft />}
        {<SectionImageRight />}

        {<AboutAndServices />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
