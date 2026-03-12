export interface MetricsResponse {
  totalTickets: number;
  resolvedByAI: number;
  resolutionRate: number;
  avgResponseTimeSeconds: number;
  escalationsToday: number;
  activeAgents: number;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'idle' | 'offline';
  confidenceThreshold: number;
  coverage: string[];
  lastActive: string;
}

export interface MarketplaceAgent {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
}

export interface Escalation {
  id: string;
  createdAt: string;
  customer: string;
  channel: string;
  topic: string;
  confidence: number;
  status: string;
  assignedTo: string;
}

export interface DataSource {
  id: string;
  name: string;
  type: string;
  status: string;
  lastSyncedAt: string;
}

export interface ActivityEvent {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string | null;
  meta: Record<string, unknown>;
}

export interface Settings {
  workspace: {
    workspaceName: string;
    timezone: string;
    defaultChannel: string;
    weeklySummary: boolean;
  };
  integrations: {
    slack: { connected: boolean; channel?: string };
    zendesk: { connected: boolean; subdomain?: string };
    hubspot: { connected: boolean };
  };
  aiBehavior: {
    tone: string;
    maxEscalationRate: number;
    defaultConfidenceThreshold: number;
    allowProactiveOutreach: boolean;
  };
  security: {
    piiRedaction: boolean;
    auditLogRetentionDays: number;
    ssoEnforced: boolean;
  };
}