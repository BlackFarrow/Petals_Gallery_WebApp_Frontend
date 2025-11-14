import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    // TODO: integrate with backend/email service
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
