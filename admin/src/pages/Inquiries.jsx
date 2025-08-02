import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InquiryTable from "../components/InquiryTable";
import InquiryDetailsModal from "../components/InquiryDetailsModal";

function Inquiries() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Wedding Inquiry",
      message: "Hi, I'm interested in wedding photography on Aug 20.",
      status: "new",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      subject: "Event coverage",
      message: "Do you provide videography for conferences?",
      status: "in progress",
      note: "Followed up via email",
    },
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleUpdate = (updated) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === updated.id ? updated : inq))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Manage Inquiries</h2>
        <InquiryTable inquiries={inquiries} onSelect={setSelectedInquiry} />
        {selectedInquiry && (
          <InquiryDetailsModal
            inquiry={selectedInquiry}
            onClose={() => setSelectedInquiry(null)}
            onUpdate={handleUpdate}
          />
        )}
      </main>

    </div>
  );
}

export default Inquiries;
