import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ id, title, description, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-yellow-700 font-semibold">{price}</span>
      </div>
      <Link
        to={`/book?service=${encodeURIComponent(title)}`}
        className="mt-6 inline-block bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-700 transition text-center"
      >
        Book Now
      </Link>
    </div>
  );
}

export default ServiceCard;
