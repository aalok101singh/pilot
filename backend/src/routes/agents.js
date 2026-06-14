import express from 'express';
import { agents } from '../data/mockData.js';

const router = express.Router();

// GET /api/agents
router.get('/', async (_req, res) => {
  // TODO: Fetch agents from Supabase "agents" table.
  res.json(agents);
});


// POST /api/agents/:id/test
router.post('/:id/test', async (req, res) => {
  const { id } = req.params;
  // TODO: Call Pilot QA runtime to test agent behavior.
  console.log('[AI AGENT TEST STUB]', id, req.body);
  res.json({ id, ok: true, message: 'Agent test stub invoked' });
});

export default router;
