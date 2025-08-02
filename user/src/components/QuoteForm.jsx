// src/components/QuoteForm.jsx
import React, { useRef, useState } from "react";
import { quoteFields } from "../data/quoteOptions";
import QuoteField from "./QuoteField";
import QuoteSummary from "./QuoteSummary";
import NotesField from "./NotesField";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import emailjs from "emailjs-com";

function QuoteForm() {
  const [selections, setSelections] = useState({});
  const [notes, setNotes] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const formRef = useRef(null);
  const previewRef = useRef(null);

  const handleChange = (id, value) => {
    setSelections((prev) => ({ ...prev, [id]: value }));
  };

  const total = Object.values(selections).reduce(
    (sum, val) => sum + (val || 0),
    0
  );

  const generatePDF = async () => {
    try {
      if (!previewRef.current) {
        alert("Preview element not found!");
        return;
      }

      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgProps = {
        width: canvas.width,
        height: canvas.height,
      };

      const ratio = Math.min(
        pageWidth / imgProps.width,
        pageHeight / imgProps.height
      );

      const imgWidth = imgProps.width * ratio;
      const imgHeight = imgProps.height * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("photomatic-quote.pdf");

      setShowPreview(false);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. See console for details.");
    }
  };

  const handleSendEmail = () => {
    const templateParams = {
      selections: JSON.stringify(selections, null, 2),
      total: total,
      notes: notes,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with Template ID
        templateParams,
        "YOUR_USER_ID" // Replace with User/Public Key
      )
      .then(() => alert("Quote sent via email!"))
      .catch(() => alert("Failed to send email"));
  };

  return (
    <>
      {/* Main Form */}
      <form
        ref={formRef}
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow"
      >
        {quoteFields.map((field) => (
          <QuoteField
            key={field.id}
            id={field.id}
            label={field.label}
            options={field.options}
            value={selections[field.id]}
            onChange={handleChange}
          />
        ))}

        <NotesField value={notes} onChange={setNotes} />
        <QuoteSummary total={total} />
      </form>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center gap-6">
        <button
          onClick={() => setShowPreview(true)}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded"
        >
          📄 Preview & Download
        </button>

        <button
          onClick={handleSendEmail}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
        >
          ✉️ Send via Email
        </button>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Quote Preview
            </h2>

            {/* This is the printable/preview content */}
            <div
              ref={previewRef}
              className="space-y-2 p-4 rounded"
              style={{
                color: "#000",
                backgroundColor: "#fff",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {quoteFields.map((field) => {
                const value = selections[field.id];
                const option = field.options.find((opt) => opt.price === value);
                return (
                  <div
                    key={field.id}
                    className="flex justify-between border-b py-1"
                  >
                    <span>{field.label}:</span>
                    <span>
                      {option?.label || "Not selected"} (LKR{" "}
                      {option?.price?.toLocaleString() || 0})
                    </span>
                  </div>
                );
              })}

              <div className="flex justify-between font-bold text-lg mt-4 border-t pt-2">
                <span>Total:</span>
                <span>LKR {total.toLocaleString()}</span>
              </div>

              {notes && (
                <div className="mt-4">
                  <p className="font-semibold">Notes:</p>
                  <p className="text-gray-700 whitespace-pre-wrap">{notes}</p>
                </div>
              )}
            </div>

            {/* Modal Footer Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowPreview(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={generatePDF}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuoteForm;
