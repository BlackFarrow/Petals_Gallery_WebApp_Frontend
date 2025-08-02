import React, { useState } from "react";

function UserDetailsModal({ user, onClose, onUpdate }) {
  const [role, setRole] = useState(user.role);
  const [active, setActive] = useState(user.active);

  const handleSave = () => {
    onUpdate({ ...user, role, active });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start pt-20 z-50">
      <div className="bg-white p-6 rounded-lg shadow max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">User Management</h3>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <div className="mt-4">
          <label className="block font-medium mb-1">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="client">Client</option>
          </select>
        </div>

        <div className="mt-4 flex items-center space-x-2">
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
            className="w-4 h-4"
          />
          <label className="text-sm font-medium">Active account</label>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;
