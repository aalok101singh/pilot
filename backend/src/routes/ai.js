import express from 'express';

const router = express.
  
// POST /api/ai/query
rout

// POST /api/ai/escalate
router.post('/escalate', async (req, res) => {
  const { agentId, ticketId, reason } = r
  // TODO: Create escalation in Supabase and notify human channel (Slack/Zendesk).
  console.log('[AI ESCALATE STUB]',
    status: 'open'
  });
});

export default router;
