import express from 'express';
import { marketplaceAgents } from '../data/mockData.js';

const router = express.Router();

// GET /api/marketplace
router.get('/', async (_req, res) => {
  // TODO: Fetch marketplace agents from Supabase or external catalog.
  res.json(marketplaceAgents);
});

// POST /api/marketplace/:id/install
router.post('/:id/install', async (req, res) => {
  const { id } = req.params;
  // TODO: Provision selected marketplace agent into workspace (Pilot QA).
  console.log('[MARKETPLACE INSTALL STUB]', id, req.body);
  res.json({ id, status: 'installing' });
});

export default router;