import React from "react";

function AboutAndServices() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-200 to-yellow-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="mb-6">
            We are passionate photographers dedicated to capturing your story
            with authenticity and artistry.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Our History</li>
            <li>Our Vision</li>
            <li>Meet the Team</li>
          </ul>
        </div>

        {/* Our Story */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="mb-6">
            Founded in 2010, we have grown into a team of artists who believe in
            the power of moments.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Milestones</li>
            <li>Community Work</li>
            <li>Client Testimonials</li>
          </ul>
        </div>

        {/* Services & Packages */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Services & Packages</h3>
          <p className="mb-6">
            Tailored packages to suit your needs, whether for weddings,
            portraits, or events.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Wedding Packages</li>
            <li>Portrait Sessions</li>
            <li>Event Coverage</li>
            <li>Custom Requests</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutAndServices;
