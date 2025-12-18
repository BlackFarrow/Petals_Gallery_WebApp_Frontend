import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState({
    businessName: "Petals Gallery",
    logoUrl: "",
  });
  const location = useLocation();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/settings/");
        if (res.data && typeof res.data === "object") {
          setSettings({
            businessName: res.data.businessName || "Petals Gallery",
            logoUrl: res.data.logoUrl || "",
          });
        }
      } catch (error) {
        console.error("Error fetching settings for Navbar:", error);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    const changeColor = () => {
      const isServicesOrQuote =
        location.pathname === "/services" || location.pathname === "/quote";
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else if (isServicesOrQuote) {
        setColor("transparent");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    changeColor();
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [location.pathname]);

  const handleNav = () => setNav(!nav);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link to="/">
          {settings.logoUrl ? (
            <img src={settings.logoUrl} alt={settings.businessName} className="h-10" />
          ) : (
            <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
              {settings.businessName}
            </h1>
          )}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/services">Services</Link>
          </li>
          <li className="p-4">
            <Link to="/quote">Quote</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <FaTimes size={20} style={{ color: `${textColor}` }} />
          ) : (
            <FaBars size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link to="/services">Services</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link to="/quote">Quote</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
