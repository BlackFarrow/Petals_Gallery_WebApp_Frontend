// src/components/NotesField.jsx
import React from "react";

function NotesField({ value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2 text-gray-800">Additional Notes</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add any specific requirements or questions..."
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
}

export default NotesField;
