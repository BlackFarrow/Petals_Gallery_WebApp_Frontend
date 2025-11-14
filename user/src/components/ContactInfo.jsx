import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <FaMapMarkerAlt className="text-blue-500 text-2xl" />
        <div>
          <h4 className="text-lg font-semibold">Address</h4>
          <p className="text-gray-600">123 Main St, Colombo, Sri Lanka</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaPhone className="text-blue-500 text-2xl" />
        <div>
          <h4 className="text-lg font-semibold">Phone</h4>
          <p className="text-gray-600">+94 77 123 4567</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaEnvelope className="text-blue-500 text-2xl" />
        <div>
          <h4 className="text-lg font-semibold">Email</h4>
          <p className="text-gray-600">contact@petalsgallery.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
