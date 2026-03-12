import express from 'express';
import { activityLog } from '../data/mockData.js';

const router = express.Router();

// GET /api/activity
router.get('/', async (_req, res) => {
  // TODO: Fetch activity events from Supabase "activity_log" table.
  res.json(activityLog);
});

export default router;