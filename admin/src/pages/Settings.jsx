import React, { useState, useEffect } from "react";
import axios from "axios";

function Settings() {
  const [formData, setFormData] = useState({
    businessName: "",
    logoUrl: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/settings/");
        const latest = Array.isArray(res.data) && res.data.length > 0 ? res.data[res.data.length - 1] : res.data;
        if (latest) {
          setFormData(latest);
          setStatusMessage("Settings loaded successfully!");
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
        setStatusMessage("Failed to load settings.");
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:4000/api/settings/", formData);
      setStatusMessage("Settings saved successfully!");
    } catch (err) {
      console.error("Error saving settings:", err);
      setStatusMessage("Failed to save settings.");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-6">General Settings</h3>
          
          {statusMessage && (
            <p className={`mb-4 font-medium ${statusMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {statusMessage}
            </p>
          )}

          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Logo URL</label>
              <input
                type="text"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 bg-gray-50"
              />
            </div>
            <div className="text-right">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-6">Live Preview</h3>
          <div className="rounded-lg p-6 border-t-4">
            <div className="flex items-center space-x-4 mb-6">
              {formData.logoUrl && (
                <img src={formData.logoUrl} alt="Logo" className="h-16 w-16 object-contain" />
              )}
              <h2 className="text-2xl font-bold">
                {formData.businessName || "Business Name"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
