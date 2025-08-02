// src/components/QuoteSummary.jsx
import React from "react";

function QuoteSummary({ total }) {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Estimated Quote</h2>
      <p className="text-yellow-700 text-4xl mt-2 font-bold">
        LKR {total.toLocaleString()}
      </p>
    </div>
  );
}

export default QuoteSummary;
