import React, { useState } from "react";
import StatusBadge from "./StatusBadge";

function InquiryTable({ inquiries, onSelect }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? inquiries : inquiries.filter(i => i.status === filter);

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Inquiries</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      <table className="w-full table-auto text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">No inquiries found.</td>
            </tr>
          ) : (
            filtered.map((inquiry) => (
              <tr key={inquiry.id} className="border-t">
                <td className="p-2 border">{inquiry.name}</td>
                <td className="p-2 border">{inquiry.email}</td>
                <td className="p-2 border">{inquiry.subject}</td>
                <td className="p-2 border"><StatusBadge status={inquiry.status} /></td>
                <td className="p-2 border">
                  <button
                    onClick={() => onSelect(inquiry)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InquiryTable;
