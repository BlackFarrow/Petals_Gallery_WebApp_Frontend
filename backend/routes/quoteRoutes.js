import express from 'express';
import {
  getQuotes,
  createQuote,
} from '../controllers/quoteController.js';

const router = express.Router();

router.route('/').get(getQuotes).post(createQuote);

export default router;
