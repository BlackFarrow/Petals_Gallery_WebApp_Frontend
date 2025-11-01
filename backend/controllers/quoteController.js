import Quote from '../models/quoteModel.js';

// Get all quotes
export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    console.log("getQuotes quotes:", quotes);
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new quote
export const createQuote = async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    const newQuote = new Quote({
      name,
      email,
      phone,
      service,
      message,
    });

    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
