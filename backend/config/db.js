// server/config/db.js
import mongoose from 'mongoose';
// Connect to MongoDB
// Ensure you have the correct MongoDB URI in your .env file
import dotenv from 'dotenv';
dotenv.config();



export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/petals", {
      // Optional: add options here if needed
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1); // Stop the app if DB fails
  }
};
