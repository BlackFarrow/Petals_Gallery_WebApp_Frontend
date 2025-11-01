import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ id, title, description, price, imageUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-56 object-contain object-center"
        src={imageUrl || 'https://via.placeholder.com/400x250'}
        alt={title}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">Rs {price}</span>
          <Link
            to={`/book?service=${encodeURIComponent(title)}`}
            className="bg-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
