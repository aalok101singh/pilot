import express from 'express';
import { metrics } from '../data/mockData.js';

const router = express.Router();

// GET /api/metrics
router.get('/', async (_req, res) => {
  // TODO: Replace with aggregated metrics from Supabase.
  res.json(metrics);
});

export default router;