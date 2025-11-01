import React from "react";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-end items-center sticky top-0 z-40">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
      </div>
    </header>
  );
}

export default Header;
