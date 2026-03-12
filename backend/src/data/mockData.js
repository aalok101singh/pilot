export const metrics = {
  totalTickets: 1240,
  resolvedByAI: 980,
  resolutionRate: 0.79,
  avgResponseTimeSeconds: 18,
  escalationsToday: 7,
  activeAgents: 5
};

export const agents = [
  {
    id: 'agent-1',
    name: 'Pilot QA - Core',
    role: 'Level 1 Support',
    status: 'online',
    confidenceThreshold: 0.82,
    coverage: ['Billing', 'Account Access'],
    lastActive: '2026-03-12T10:24:00Z'
  },
  {
    id: 'agent-2',
    name: 'Pilot QA - Technical',
    role: 'API & Integrations',
    status: 'online',
    confidenceThreshold: 0.88,
    coverage: ['API Keys', 'Webhooks', 'SDK'],
    lastActive: '2026-03-12T10:21:00Z'
  },
  {
    id: 'agent-3',
    name: 'Pilot QA - Premium',
    role: 'High-value Customers',
    status: 'idle',
    confidenceThreshold: 0.9,
    coverage: ['SLA', 'Custom Integrations'],
    lastActive: '2026-03-12T09:55:00Z'
  }
];

export const marketplaceAgents = [
  {
    id: 'mp-1',
    name: 'Sales Enablement Copilot',
    description: 'Answers product and pricing questions from your CRM and docs.',
    category: 'Sales',
    status: 'available'
  },
  {
    id: 'mp-2',
    name: 'Security & Compliance Copilot',
    description: 'Handles security questionnaires and compliance-related requests.',
    category: 'Security',
    status: 'available'
  },
  {
    id: 'mp-3',
    name: 'Onboarding Guide',
    description: 'Walks new users through key workflows based on your docs.',
    category: 'Onboarding',
    status: 'beta'
  }
];

export const escalations = [
  {
    id: 'esc-1',
    createdAt: '2026-03-12T09:20:00Z',
    customer: 'Acme Corp',
    channel: 'Email',
    topic: 'Custom invoice terms',
    confidence: 0.41,
    status: 'open',
    assignedTo: 'Sarah Lee'
  },
  {
    id: 'esc-2',
    createdAt: '2026-03-12T08:55:00Z',
    customer: 'Globex',
    channel: 'Chat',
    topic: 'API rate limits',
    confidence: 0.56,
    status: 'investigating',
    assignedTo: 'Unassigned'
  }
];

export const dataSources = [
  {
    id: 'ds-1',
    name: 'Help Center',
    type: 'Notion',
    status: 'synced',
    lastSyncedAt: '2026-03-12T07:10:00Z'
  },
  {
    id: 'ds-2',
    name: 'Product Specs',
    type: 'Google Drive',
    status: 'syncing',
    lastSyncedAt: '2026-03-12T10:00:00Z'
  },
  {
    id: 'ds-3',
    name: 'CRM Notes',
    type: 'HubSpot',
    status: 'error',
    lastSyncedAt: '2026-03-11T22:35:00Z'
  }
];

export const activityLog = [
  {
    id: 'act-1',
    timestamp: '2026-03-12T10:22:00Z',
    actor: 'Pilot QA - Core',
    action: 'answered_ticket',
    target: 'Ticket #4921',
    meta: { channel: 'Chat', confidence: 0.86, resolutionTimeSeconds: 14 }
  },
  {
    id: 'act-2',
    timestamp: '2026-03-12T10:18:00Z',
    actor: 'Pilot QA - Technical',
    action: 'escalated_ticket',
    target: 'Ticket #4912',
    meta: { channel: 'Email', confidence: 0.43 }
  },
  {
    id: 'act-3',
    timestamp: '2026-03-12T10:10:00Z',
    actor: 'System',
    action: 'data_sync_completed',
    target: 'Help Center',
    meta: { documents: 128 }
  }
];

export const workspaceSettings = {
  workspaceName: 'Pilot Demo Workspace',
  timezone: 'UTC',
  defaultChannel: 'Email',
  weeklySummary: true
};

export const integrations = {
  slack: { connected: true, channel: '#pilot-alerts' },
  zendesk: { connected: true, subdomain: 'pilot-demo' },
  hubspot: { connected: false }
};

export const aiBehavior = {
  tone: 'friendly',
  maxEscalationRate: 0.25,
  defaultConfidenceThreshold: 0.8,
  allowProactiveOutreach: false
};

export const securitySettings = {
  piiRedaction: true,
  auditLogRetentionDays: 90,
  ssoEnforced: false
};