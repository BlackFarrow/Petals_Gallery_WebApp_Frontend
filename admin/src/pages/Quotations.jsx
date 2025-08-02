import React, { useState } from "react";
import QuoteTable from "../components/QuoteTable";
import QuoteDetailsModal from "../components/QuoteDetailsModal";

function Quotations() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      clientName: "Jane Doe",
      clientEmail: "jane@example.com",
      service: "Wedding Photography",
      date: "2025-07-14",
      status: "pending",
      notes: "",
    },
    {
      id: 2,
      clientName: "John Smith",
      clientEmail: "john@example.com",
      service: "Event Videography",
      date: "2025-07-13",
      status: "accepted",
      notes: "Confirmed for August 15",
    },
  ]);

  const [selectedQuote, setSelectedQuote] = useState(null);

  const handleUpdate = (updatedQuote) => {
    setQuotes((prev) =>
      prev.map((q) => (q.id === updatedQuote.id ? updatedQuote : q))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Manage Quotations
        </h2>

        <QuoteTable quotes={quotes} onSelect={setSelectedQuote} />

        {selectedQuote && (
          <QuoteDetailsModal
            quote={selectedQuote}
            onClose={() => setSelectedQuote(null)}
            onUpdate={handleUpdate}
          />
        )}
      </main>
    </div>
  );
}

export default Quotations;
