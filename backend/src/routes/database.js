import express from 'express';
import { dataSources } from '../data/mockData.js';
//second try to edit code for QA Agent
const router = express.Router();

// GET /api/database/sources
router.get('/sources', async (_req, res) => {
  // TODO: Fetch data sources from Supabase "data_sources" table.
  res.json(dataSources);
});

// POST /api/database/sources
router.post('/sources', async (req, res) => {
  const payload = req.body;
  // TODO: Insert new data source and trigger ingestion in Pilot QA.
  console.log('[DATA SOURCE CREATE STUB]', payload);
  res.status(201).json({
    ...payload,
    id: `ds-${Date.now()}`,
    status: 'pending'
  });
});

// POST /api/database/sources/:id/sync
router.post('/sources/:id/sync', async (req, res) => {
  const { id } = req.params;
  // TODO: Trigger re-sync job for given data source.
  console.log('[DATA SOURCE SYNC STUB]', id);
  res.json({ id, status: 'syncing' });
});

export default router;
