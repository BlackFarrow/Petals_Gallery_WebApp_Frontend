import React, { useState } from "react";

function InquiryDetailsModal({ inquiry, onClose, onUpdate }) {
  const [status, setStatus] = useState(inquiry.status);
  const [note, setNote] = useState(inquiry.note || "");

  const handleSave = () => {
    onUpdate({ ...inquiry, status, note });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start pt-20 z-50">
      <div className="bg-white p-6 rounded-lg shadow max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4">Inquiry Details</h3>

        <p><strong>Name:</strong> {inquiry.name}</p>
        <p><strong>Email:</strong> {inquiry.email}</p>
        <p><strong>Subject:</strong> {inquiry.subject}</p>
        <p className="mb-4"><strong>Message:</strong> {inquiry.message}</p>

        <div className="mb-4">
          <label className="block font-medium mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="new">New</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Notes</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="w-full border rounded px-3 py-2"
            placeholder="Optional internal note..."
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default InquiryDetailsModal;
