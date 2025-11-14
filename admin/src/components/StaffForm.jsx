import React, { useState, useEffect } from "react";

function StaffForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setContactNumber(initialData.contactNumber || "");
      setEmail(initialData.email || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, contactNumber, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-semibold">{initialData ? "Edit Staff" : "Add New Staff"}</h3>

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="Staff name"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="Staff email"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Contact Number</label>
        <input
          required
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder="Staff contact number"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-gray-50"
          placeholder={initialData ? "Leave blank to keep current password" : "Password"}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {initialData ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default StaffForm;
