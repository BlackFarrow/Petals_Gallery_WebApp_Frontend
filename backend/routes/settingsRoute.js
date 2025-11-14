import express from 'express';
import { fetchSettings, saveSettings } from '../controllers/settingsController.js';

const router = express.Router();

router.get('/', fetchSettings);   // Get settings
router.put('/', saveSettings);    // Update settings

export default router;
