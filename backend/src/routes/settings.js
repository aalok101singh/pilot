import express from 'express';
import {
  workspaceSettings,
  integrations,
  aiBehavior,
  securitySettings
} from '../data/mockData.js';

const router = express.Router();

// GET /api/settings
router.get('/', async (_req, res) => {
  // TODO: Fetch settings from Supabase.
  res.json({
    workspace: workspaceSettings,
    integrations,
    aiBehavior,
    security: securitySettings
  });
});

// PUT /api/settings
router.put('/', async (req, res) => {
  const updated = req.body;
  // TODO: Persist settings to Supabase.
  console.log('[SETTINGS UPDATE STUB]', updated);
  res.json(updated);
});

export default router;