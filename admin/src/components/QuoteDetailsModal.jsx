import React, { useState } from "react";

function QuoteDetailsModal({ quote, onClose, onUpdate }) {
  const [status, setStatus] = useState(quote.status);
  const [notes, setNotes] = useState(quote.notes || "");

  const handleSave = () => {
    onUpdate({ ...quote, status, notes });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4">Quote Details</h3>
        <p>
          <strong>Client:</strong> {quote.clientName}
        </p>
        <p>
          <strong>Email:</strong> {quote.clientEmail}
        </p>
        <p>
          <strong>Service:</strong> {quote.service}
        </p>
        <p>
          <strong>Date:</strong> {new Date(quote.date).toLocaleDateString()}
        </p>

        <div className="mt-4">
          <label className="block font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          >
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-medium">Admin Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Add internal notes here..."
          />
        </div>

        <div className="flex justify-end space-x-3 mt-6">
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

export default QuoteDetailsModal;
