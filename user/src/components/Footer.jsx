import React from "react";

function Footer() {
  return (
    <footer className="bg-[#4A2E0F] text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Photomatic. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
