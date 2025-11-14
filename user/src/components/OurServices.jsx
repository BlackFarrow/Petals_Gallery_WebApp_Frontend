import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import heroImage from "../assets/hero1.jpg";

function OurServices() {
  const services = [
    {
      id: 1,
      name: "Wedding Photography",
      description: "Capture your special day with elegance.",
      imgSrc: heroImage,
    },
    {
      id: 2,
      name: "Portrait Sessions",
      description: "Timeless portraits for every occasion.",
      imgSrc: heroImage,
    },
    {
      id: 3,
      name: "Event Coverage",
      description: "Comprehensive coverage for your events.",
      imgSrc: heroImage,
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">Our Services</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          className="flex justify-center"
        >
          {services.map(({ id, name, description, imgSrc }) => (
            <SwiperSlide key={id} className="relative">
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-3xl font-bold mb-2">{name}</h3>
                <p className="text-lg">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurServices;
