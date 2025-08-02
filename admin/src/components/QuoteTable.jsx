import React, { useState } from "react";
import StatusBadge from "./StatusBadge";

function QuoteTable({ quotes, onSelect }) {
  const [filter, setFilter] = useState("all");

  const filteredQuotes =
    filter === "all" ? quotes : quotes.filter((q) => q.status === filter);

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">All Quotations</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2 border">Client</th>
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuotes.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No quotes found
              </td>
            </tr>
          ) : (
            filteredQuotes.map((quote) => (
              <tr key={quote.id} className="border-t">
                <td className="p-2 border">{quote.clientName}</td>
                <td className="p-2 border">{quote.service}</td>
                <td className="p-2 border">
                  {new Date(quote.date).toLocaleDateString()}
                </td>
                <td className="p-2 border">
                  <StatusBadge status={quote.status} />
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => onSelect(quote)}
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

export default QuoteTable;
