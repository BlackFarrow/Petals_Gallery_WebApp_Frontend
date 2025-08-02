import React from "react";
import heroImage from "../assets/hero1.jpg";

function OurServices() {
  const services = [
    { id: 1, name: "Wedding Photography", imgSrc: "../assets/hero1.jpg" },
    { id: 2, name: "Portrait Sessions", imgSrc: "../assets/hero1.jpg" },
    { id: 3, name: "Event Coverage", imgSrc: "../assets/hero1.jpg" },
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {services.map(({ id, name, imgSrc }) => (
            <div
              key={id}
              className="flex flex-col items-center max-w-xs mx-auto"
            >
              <img
                src={heroImage}
                alt={name}
                className="rounded-lg shadow-lg w-64 h-80 object-cover mb-4"
              />
              <p className="text-xl font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
