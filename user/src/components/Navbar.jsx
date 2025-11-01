import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState({
    businessName: "Photomatic",
    currency: "",
    logoUrl: "",
    primaryColor: "#000000",
  });

  // ✅ Fetch settings on mount
useEffect(() => {
  const fetchSettings = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/settings/");
      console.log("📥 Settings fetched for Navbar:", res.data);

      if (res.data && typeof res.data === "object") {
        setSettings({
          businessName: res.data.businessName || "",
          currency: res.data.currency || "",
          logoUrl: res.data.logoUrl || "",
          primaryColor: res.data.primaryColor || "#000000",
        });
      } else {
        console.warn("⚠️ No settings found for Navbar");
      }
    } catch (error) {
      console.error("Error fetching settings for Navbar:", error);
    }
  };

  fetchSettings();
}, [settings]);


  return (
    <nav
      className="w-full text-white shadow-md"
      style={{ backgroundColor: settings.primaryColor }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Business Name */}
        <div className="flex items-center space-x-2 font-semibold text-xl">
          {settings.logoUrl ? (
            <img
              src={settings.logoUrl}
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          ) : (
            <span role="img" aria-label="tree">
              🌲
            </span>
          )}
          <span className="font-bold tracking-wide">
            {settings.businessName}
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <li>
            <Link to="/" className="hover:opacity-75 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:opacity-75 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/quote" className="hover:opacity-75 transition">
              Quote
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:opacity-75 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className="ml-4 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
              style={{ backgroundColor: settings.primaryColor }}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 pb-4"
          style={{ backgroundColor: settings.primaryColor }}
        >
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li>
              <Link to="/" className="hover:opacity-75 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:opacity-75 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/quote" className="hover:opacity-75 transition">
                Quote
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:opacity-75 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="text-white px-4 py-2 rounded-full text-sm font-semibold transition text-center block"
                style={{ backgroundColor: settings.primaryColor }}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
