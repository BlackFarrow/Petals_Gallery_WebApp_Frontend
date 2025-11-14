
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaConciergeBell, FaCog, FaSignOutAlt, FaUsers } from 'react-icons/fa';

const Sidebar = ({ onLogout }) => {
  const navItems = [
    { name: 'Overview', path: '/admin', icon: <FaTachometerAlt />, end: true },
    { name: 'Services', path: '/admin/services', icon: <FaConciergeBell /> },
    { name: 'Staff', path: '/admin/staff', icon: <FaUsers /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 flex flex-col">
      <div className="p-4 font-bold text-xl border-b border-gray-700">Admin</div>
      <nav className="flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 transition-colors duration-200 ${
                isActive
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button onClick={onLogout} className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white w-full rounded-lg">
          <span className="mr-3"><FaSignOutAlt /></span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
