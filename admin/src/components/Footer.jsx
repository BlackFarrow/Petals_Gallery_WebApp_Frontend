import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} FocusQuote Admin Panel. All rights
          reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/" className="hover:underline">
            Main Website
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
