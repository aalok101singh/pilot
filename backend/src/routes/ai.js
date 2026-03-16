import express from 'express';

const router = express.Router();

// POST /api/ai/query
rout

// POST /api/ai/escalate
router.post('/escalate', async (req, res) => {
  const { agentId, ticketId, reason } = req.body;

  // TODO: Create escalation in Supabase and notify human channel (Slack/Zendesk).
  console.log('[AI ESCALATE STUB]', { agentId, ticketId, reason });

  res.status(201).json({
    id: `esc-${Date.now()}`,
    agentId,
    ticketId,
    reason,
    status: 'open'
  });
});

export default router;
