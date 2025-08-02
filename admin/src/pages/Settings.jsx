import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    businessName: "Photomatic Studio",
    currency: "LKR",
    taxRate: 8,
    quotePrefix: "QUOTE-",
    expiryDays: 7,
    logoUrl: "",
    primaryColor: "#f97316",
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving settings:", settings);
    // Replace with API call later
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Settings</h2>

        <div className="bg-white p-6 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold">General</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={settings.businessName}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />

            <input
              type="text"
              name="currency"
              placeholder="Currency (e.g., USD, LKR)"
              value={settings.currency}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />

            <input
              type="number"
              name="taxRate"
              placeholder="Tax Rate (%)"
              value={settings.taxRate}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />

            <input
              type="text"
              name="quotePrefix"
              placeholder="Quote Prefix"
              value={settings.quotePrefix}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />

            <input
              type="number"
              name="expiryDays"
              placeholder="Quote Expiry (days)"
              value={settings.expiryDays}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <h3 className="text-lg font-semibold mt-6">Branding</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Primary Color
              </label>
              <input
                type="color"
                name="primaryColor"
                value={settings.primaryColor}
                onChange={handleChange}
                className="w-16 h-10 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Logo (URL)
              </label>
              <input
                type="text"
                name="logoUrl"
                placeholder="https://..."
                value={settings.logoUrl}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Save Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
