import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    businessName: { type: String, default: "Photomatic Studio" },
    currency: { type: String, default: "LKR" },
    logoUrl: { type: String, default: "" },
    primaryColor: { type: String, default: "#f97316" },
  },
  { timestamps: true }
);

export default mongoose.model('Settings', settingsSchema);
