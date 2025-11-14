import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { quoteFields } from "../data/quoteOptions";
import QuoteField from "./QuoteField";
import QuoteSummary from "./QuoteSummary";
import NotesField from "./NotesField";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import emailjs from "emailjs-com";

// --- Helper function to process selections into line items ---
const getQuoteData = (selections, quoteFields) => {
  const lineItems = [];
  let subtotal = 0;

  quoteFields.forEach((field) => {
    const price = selections[field.id] || 0;
    if (price > 0) {
      const option = field.options.find((opt) => opt.price === price);
      if (option) {
        lineItems.push({
          description: `${field.label}: ${option.label}`,
          unitPrice: price,
          amount: price, // Qty is 1.00 for services
        });
        subtotal += price;
      }
    }
  });

  const SALES_TAX_RATE = 0.05; // 5%
  const salesTax = subtotal * SALES_TAX_RATE;
  const total = subtotal + salesTax;

  return { lineItems, subtotal, salesTax, total };
};
// -----------------------------------------------------------

// --- Quote Preview Component (The styled template from the previous step) ---
// Note: The CSS needs to be applied to the elements inside this component.
// For simplicity, I've added basic inline styles where necessary, but the
// full styles from the previous response should be copied into your
// main CSS file or a <style> tag within the preview element.
const QuoteDocument = ({ lineItems, subtotal, salesTax, total, notes, settings }) => {
  const primaryGreen = "#4f8a81";
  const lightGreen = "#e9f0ee";
  const borderColor = "#ddd";

  // Currency formatting helper
  const formatLKR = (amount) => `LKR ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    // The container for the PDF content, replace with the complete CSS structure
    // from the previous response.
    <div
      style={{
        maxWidth: "800px",
        padding: "40px",
        backgroundColor: "#fff",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
        // Using a class for the quote-container is better for external CSS
      }}
      className="quote-container" // Assuming you add the previous CSS to this class
    >
      {/* Header Section (1 & 2) */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
        {settings.logoUrl ? (
          <img src={settings.logoUrl} alt={settings.businessName} style={{ height: "50px" }} />
        ) : (
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{settings.businessName}</h1>
        )}
      </header>

      {/* Quote/Date Details (4) */}


      {/* Customer/Recipient Section (3) */}


      {/* Items Table (5) */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "30px" }}>
        <thead>
          <tr>
            <th style={{ width: "10%", padding: "12px", textAlign: "left", backgroundColor: primaryGreen, color: "white", textTransform: "uppercase", fontSize: "14px" }}>#</th>
            <th style={{ width: "50%", padding: "12px", textAlign: "left", backgroundColor: primaryGreen, color: "white", textTransform: "uppercase", fontSize: "14px" }}>Description</th>
            <th style={{ width: "20%", padding: "12px", textAlign: "right", backgroundColor: primaryGreen, color: "white", textTransform: "uppercase", fontSize: "14px" }}>Unit Price (LKR)</th>
            <th style={{ width: "20%", padding: "12px", textAlign: "right", backgroundColor: primaryGreen, color: "white", textTransform: "uppercase", fontSize: "14px" }}>Amount (LKR)</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", borderBottom: `1px solid ${borderColor}` }}>1.00</td>
              <td style={{ padding: "12px", borderBottom: `1px solid ${borderColor}` }}>{item.description}</td>
              <td style={{ padding: "12px", borderBottom: `1px solid ${borderColor}`, textAlign: "right" }}>{item.unitPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              <td style={{ padding: "12px", borderBottom: `1px solid ${borderColor}`, textAlign: "right" }}>{item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals Section (6) */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: "300px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: "16px" }}>
            <div className="label">Subtotal</div>
            <div className="value">{formatLKR(subtotal)}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: "16px" }}>
            <div className="label">Sales Tax (5%)</div>
            <div className="value">{formatLKR(salesTax)}</div>
          </div>
          <div style={{ 
            display: "flex", justifyContent: "space-between", padding: "12px 0", fontSize: "18px",
            fontWeight: "bold", backgroundColor: lightGreen, borderTop: `2px solid ${primaryGreen}`, borderBottom: `2px solid ${primaryGreen}`
          }}>
            <div className="label">Total (LKR)</div>
            <div className="value">{formatLKR(total)}</div>
          </div>
        </div>
      </div>

      {/* Footer Section (7) */}
      <div style={{ marginTop: "50px" }}>
        <div style={{ color: primaryGreen, marginBottom: "20px", fontSize: "15px" }}>
          <p style={{ fontWeight: "bold", margin: "0 0 5px 0" }}>Terms and Conditions</p>
          <p style={{ margin: 0 }}>Payment is due in 14 days</p>
          <p style={{ margin: 0 }}>Please make checks payable to: ........................</p>
        </div>

        {notes && (
            <div style={{ marginTop: "20px", fontSize: "15px", lineHeight: 1.4 }}>
                <p style={{ fontWeight: "bold", margin: "0 0 5px 0" }}>Additional Notes:</p>
                <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{notes}</p>
            </div>
        )}

        <div style={{ borderBottom: `1px solid ${borderColor}`, marginTop: "80px", paddingBottom: "5px", textAlign: "center", fontSize: "14px", color: "#666", width: "40%", marginLeft: "auto" }}>
            customer signature
        </div>
      </div>
    </div>
  );
};
// -----------------------------------------------------------


function QuoteForm() {
  const [selections, setSelections] = useState({});
  const [notes, setNotes] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [settings, setSettings] = useState({ businessName: "", logoUrl: "" });

  const formRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/settings/");
        if (res.data) {
          setSettings(res.data);
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (id, value) => {
    // Convert string value to a number for calculation
    const numericValue = value ? parseFloat(value) : 0;
    setSelections((prev) => ({ ...prev, [id]: numericValue }));
  };

  const { lineItems, subtotal, salesTax, total } = getQuoteData(selections, quoteFields);

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

      // Calculate aspect ratio to fit content to page width
      const ratio = pageWidth / imgProps.width;

      const imgWidth = imgProps.width * ratio;
      const imgHeight = imgProps.height * ratio;
      
      // Calculate centered position (optional, currently top-left)
      // const x = (pageWidth - imgWidth) / 2;
      // const y = (pageHeight - imgHeight) / 2;


      // If content is taller than one page, use multiple pages (simplified for a single large image)
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Simple multi-page handling (for very tall content)
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("photomatic-quote.pdf");

      setShowPreview(false);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. See console for details.");
    }
  };

  const handleSendEmail = () => {
    const templateParams = {
      // Pass processed data for a better email template
      line_items: lineItems.map(item => `${item.description} - ${formatLKR(item.amount)}`).join('\n'),
      subtotal: formatLKR(subtotal),
      sales_tax: formatLKR(salesTax),
      total: formatLKR(total),
      notes: notes,
      // You should also include customer email/name fields in your form
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

  const formatLKR = (amount) => `LKR ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;


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
            // Ensure you pass the price as a string value to the Select element
            value={selections[field.id]?.toString()} 
            onChange={handleChange}
          />
        ))}

        <NotesField value={notes} onChange={setNotes} />
        <QuoteSummary total={total} currency="LKR" />
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Quote Preview
            </h2>

            {/* This is the printable/preview content */}
            <div ref={previewRef} className="preview-document-container">
              <QuoteDocument
                lineItems={lineItems}
                subtotal={subtotal}
                salesTax={salesTax}
                total={total}
                notes={notes}
                settings={settings}
              />
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