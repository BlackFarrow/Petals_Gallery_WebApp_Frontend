import React from "react";
import { FaCameraRetro, FaVideo, FaUsers } from "react-icons/fa";

function AboutAndServices() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a range of photography and videography services to capture your most precious moments.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out p-8 flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <FaCameraRetro size={24} />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Photography</h3>
                <p className="mt-2 text-base text-gray-500">
                  We offer a wide range of photography services, including weddings, portraits, and events. We are dedicated to capturing your story with authenticity and artistry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out p-8 flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <FaVideo size={24} />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Videography</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our videography services are perfect for capturing the emotion and excitement of your special day. We create beautiful, cinematic films that you will treasure for a lifetime.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out p-8 flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <FaUsers size={24} />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Team</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our team of experienced photographers and videographers are passionate about their work and dedicated to providing you with the best possible service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAndServices;
