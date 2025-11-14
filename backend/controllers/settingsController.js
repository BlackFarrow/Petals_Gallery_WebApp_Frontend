import Settings from '../models/settingsModel.js';

// Fetch current settings (singleton)
export const fetchSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }
    res.json(settings);
  } catch (err) {
    console.error("Error fetching settings:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Save/update settings (singleton)
export const saveSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      // Create new if none exist
      settings = await Settings.create(req.body);
    } else {
      // Update allowed fields only
      const { businessName, currency, logoUrl, primaryColor } = req.body;
      settings.businessName = businessName;
      settings.currency = currency;
      settings.logoUrl = logoUrl;
      settings.primaryColor = primaryColor;
      await settings.save();
    }
    res.json({ message: 'Settings updated successfully', settings });
  } catch (err) {
    console.error("Error saving settings:", err.message); // <-- check server console
    res.status(400).json({ message: err.message });
  }
};

