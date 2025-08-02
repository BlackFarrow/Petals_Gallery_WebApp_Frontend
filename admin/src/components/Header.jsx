import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { name: "Overview", path: "/admin" },
    { name: "Services", path: "/admin/services" },
    { name: "Quotations", path: "/admin/quotations" },
    { name: "Inquiries", path: "/admin/inquiries" },
    { name: "Users", path: "/admin/users" },
    { name: "Settings", path: "/admin/settings" }, // ✅ Added this
  ];

  return (
    <header className="w-full bg-[#3b240c] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2 font-semibold text-xl">
          <span role="img" aria-label="gear">
            ⚙️
          </span>
          <span className="font-bold tracking-wide">Admin Panel</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
