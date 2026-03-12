import express from 'express';
import { agents } from '../data/mockData.js';

const router = express.Router();

// GET /api/agents
router.get('/', async (_req, res) => {
  // TODO: Fetch agents from Supabase "agents" table.
  res.json(agents);
});

// POST /api/agents
router.post('/', async (req, res) => {
  const payload = req.body;
  // TODO: Insert agent into Supabase and trigger initial indexing job.
  console.log('[AI AGENT CREATE STUB]', payload);
  res.status(201).json({
    ...payload,
    id: `agent-${Date.now()}`,
    status: 'provisioning'
  });
});

// POST /api/agents/:id/test
router.post('/:id/test', async (req, res) => {
  const { id } = req.params;
  // TODO: Call Pilot QA runtime to test agent behavior.
  console.log('[AI AGENT TEST STUB]', id, req.body);
  res.json({ id, ok: true, message: 'Agent test stub invoked' });
});

export default router;