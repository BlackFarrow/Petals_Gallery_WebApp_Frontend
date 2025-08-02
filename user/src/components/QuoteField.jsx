// src/components/QuoteField.jsx
import React from "react";

function QuoteField({ label, id, options, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2 text-gray-800">{label}</label>
      <select
        value={value || ""}
        onChange={(e) => onChange(id, Number(e.target.value))}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
      >
        <option value="">-- Select --</option>
        {options.map((option, index) => (
          <option key={index} value={option.price}>
            {option.label} (+LKR {option.price.toLocaleString()})
          </option>
        ))}
      </select>
    </div>
  );
}

export default QuoteField;
