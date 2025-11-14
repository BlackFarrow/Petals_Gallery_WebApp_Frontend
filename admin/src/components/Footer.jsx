import React from "react";

function Footer() {
  return (
    <footer className="bg-white shadow-sm p-4 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Petals Gallery Admin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
