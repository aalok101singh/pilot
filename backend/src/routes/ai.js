import express from 'express';

const router = express.Router();

// POST /api/ai/query
router.post('/query', async (req, res) => {
  const { agentId, input, metadata } = req.body;

  // TODO: Call Pilot QA / LLM runtime here.
  // This is where you'd send the request to your AI provider
  // (e.g. internal Pilot QA API, OpenAI, Anthropic, etc.)
  console.log('[AI QUERY STUB]', { agentId, input, metadata });

  res.json({
    agentId,
    answer: 'This is a placeholder response from Pilot QA.',
    confidence: 0.73,
    escalated: false
  });
});

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