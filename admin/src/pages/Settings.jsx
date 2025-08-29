import React, { useState, useEffect } from "react";
import axios from "axios";

function Settings() {
  const [formData, setFormData] = useState({
    businessName: "",
    currency: "",
    logoUrl: "",
    primaryColor: "#000000",
  });
  const [statusMessage, setStatusMessage] = useState("");

  // Load existing settings from DB on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/settings/");
        console.log("📥 Settings fetched:", res.data);

        let latest = null;

        if (Array.isArray(res.data) && res.data.length > 0) {
          // case: API returns an array
          latest = res.data[res.data.length - 1];
        } else if (res.data && typeof res.data === "object") {
          // case: API returns a single object
          latest = res.data;
        }

        if (latest) {
          setFormData({
            businessName: latest.businessName || "",
            currency: latest.currency || "",
            logoUrl: latest.logoUrl || "",
            primaryColor: latest.primaryColor || "#000000",
          });
          setStatusMessage("✅ Settings loaded successfully!");
        } else {
          setStatusMessage("⚠️ No settings found in database.");
        }
      } catch (err) {
        console.error("❌ Error fetching settings:", err);
        setStatusMessage("❌ Failed to load settings from server.");
      }
    };
    fetchSettings();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save settings
  // Save settings
  const handleSave = async () => {
    try {
      await axios.put("http://localhost:4000/api/settings/", formData);
      console.log("✅ Settings saved successfully!");
      setStatusMessage("✅ Settings saved successfully!");
    } catch (err) {
      console.error("❌ Error saving settings:", err);
      setStatusMessage("❌ Failed to save settings.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Settings Form */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Admin Settings</h1>

        {statusMessage && (
          <p
            className={`mb-4 font-medium ${
              statusMessage.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <label className="block mb-2">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block mb-2">Currency</label>
        <input
          type="text"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block mb-2">Logo URL</label>
        <input
          type="text"
          name="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block mb-2">Primary Color</label>
        <input
          type="color"
          name="primaryColor"
          value={formData.primaryColor}
          onChange={handleChange}
          className="w-16 h-10 p-1 mb-4"
        />

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>

      {/* Live Preview */}
      <div
        className="rounded-lg shadow-lg p-6"
        style={{ borderTop: `4px solid ${formData.primaryColor}` }}
      >
        <div className="flex items-center space-x-3 mb-4">
          {formData.logoUrl && (
            <img
              src={formData.logoUrl}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          )}
          <h2
            className="text-xl font-bold"
            style={{ color: formData.primaryColor }}
          >
            {formData.businessName || "Business Name"}
          </h2>
        </div>
        <p>
          <strong>Currency:</strong> {formData.currency || "N/A"}
        </p>
        <div className="mt-4">
          <button
            className="px-4 py-2 rounded text-white"
            style={{ backgroundColor: formData.primaryColor }}
          >
            Sample Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
