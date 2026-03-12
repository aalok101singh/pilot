import {
  MetricsResponse,
  Agent,
  MarketplaceAgent,
  Escalation,
  DataSource,
  ActivityEvent,
  Settings
} from './types';

const json = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...init
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
};

export const api = {
  getMetrics: () => json<MetricsResponse>('/api/metrics'),
  getAgents: () => json<Agent[]>('/api/agents'),
  createAgent: (payload: Partial<Agent>) =>
    json<Agent>('/api/agents', { method: 'POST', body: JSON.stringify(payload) }),

  // This is where Pilot QA / AI calls will originate from the frontend.
  queryAI: (payload: { agentId: string; input: string; metadata?: unknown }) =>
    json<{ answer: string; confidence: number; escalated: boolean }>('/api/ai/query', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

  getMarketplace: () => json<MarketplaceAgent[]>('/api/marketplace'),
  installMarketplaceAgent: (id: string) =>
    json(`/api/marketplace/${id}/install`, { method: 'POST' }),

  getEscalations: () => json<Escalation[]>('/api/escalations'),
  assignEscalation: (id: string, assignee: string) =>
    json(`/api/escalations/${id}/assign`, {
      method: 'POST',
      body: JSON.stringify({ assignee })
    }),

  getDataSources: () => json<DataSource[]>('/api/database/sources'),
  createDataSource: (payload: Partial<DataSource>) =>
    json<DataSource>('/api/database/sources', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  syncDataSource: (id: string) =>
    json(`/api/database/sources/${id}/sync`, { method: 'POST' }),

  getActivity: () => json<ActivityEvent[]>('/api/activity'),

  getSettings: () => json<Settings>('/api/settings'),
  updateSettings: (settings: Settings) =>
    json<Settings>('/api/settings', {
      method: 'PUT',
      body: JSON.stringify(settings)
    })
};