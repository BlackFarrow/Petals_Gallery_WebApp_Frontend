import React from "react";

function ServiceCategorySelector({ selectedCategory, onCategoryChange }) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => onCategoryChange("photography")}
        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
          selectedCategory === "photography"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Photography
      </button>
      <button
        onClick={() => onCategoryChange("videography")}
        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
          selectedCategory === "videography"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Videography
      </button>
    </div>
  );
}

export default ServiceCategorySelector;
