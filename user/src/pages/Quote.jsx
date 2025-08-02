// src/pages/Quote.jsx
import React from "react";
import QuoteForm from "../components/QuoteForm";

function Quote() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Get an Instant Quote
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Select your preferences below and we’ll give you an estimated price based on your needs.
      </p>

      <QuoteForm />
    </div>
  );
}

export default Quote;
