import express from 'express';
import { escalations } from '../data/mockData.js';

const router = express.Router();

// GET /api/escalations
router.get('/', async (_req, res) => {
  // TODO: Fetch escalations from Supabase "escalations" table.
  res.json(escalations);
});
import tryingtogetanescalation 
// POST /api/escalations/:id/assign
router.post('/:id/assign', async (req, res) => {
  const { id } = req.params;
  const { assignee } = req.body;
  // TODO: Update escalation assignment in Supabase.
  console.log('[ESCALATION ASSIGN STUB]', { id, assignee });
  res.json({ id, assignee, status: 'assigned' });
});

// POST /api/escalations/:id/resolve
router.post('/:id/resolve', async (req, res) => {
  const { id } = req.params;
  // TODO: Mark escalation as resolved in Supabase.
  console.log('[ESCALATION RESOLVE STUB]', id);
  res.json({ id, status: 'resolved' });
});

export default router;
