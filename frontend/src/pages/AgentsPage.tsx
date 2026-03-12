import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PageHeader from '../components/dashboard/PageHeader';
import StatusDot from '../components/ui/StatusDot';
import { api } from '../lib/api';
import { Agent } from '../lib/types';

const AgentsPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    api.getAgents().then(setAgents).catch(console.error);
  }, []);

  const handleCreateAgent = async () => {
    // Placeholder: call stub backend API, but don't update list for now
    await api.createAgent({
      name: 'New Pilot QA Agent',
      role: 'Prototype',
      status: 'offline',
      confidenceThreshold: 0.8,
      coverage: ['Example'],
      lastActive: new Date().toISOString()
    });
  };

  return (
    <div>
      <PageHeader
        title="AI Engineer fleet"
        subtitle="Design, tune, and monitor every Pilot QA agent."
        primaryActionLabel="Create agent"
        onPrimaryAction={handleCreateAgent}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            title={agent.name}
            subtitle={agent.role}
            right={
              <Badge
                label={agent.status}
                tone={agent.status === 'online' ? 'success' : 'neutral'}
              />
            }
          >
            <div className="flex items-center justify-between text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-textMuted">
                  <StatusDot status={agent.status} />
                  <span>Conf. threshold</span>
                  <span className="text-textPrimary">{agent.confidenceThreshold}</span>
                </div>
                <div className="text-textMuted">
                  Coverage:{' '}
                  <span className="text-textPrimary">{agent.coverage.join(', ')}</span>
                </div>
                <div className="text-textMuted">
                  Last active:{' '}
                  {new Date(agent.lastActive).toLocaleString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button size="sm" variant="outline">
                  View playbook
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={async () => {
                    // Placeholder: call stub to "test" agent using Pilot QA
                    await fetch(`/api/agents/${agent.id}/test`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ mode: 'dry-run' })
                    });
                  }}
                >
                  Run test
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {!agents.length && (
        <div className="mt-6 text-xs text-textMuted">
          No agents yet – use the "Create agent" button to provision one (stubbed).
        </div>
      )}
    </div>
  );
};

export default AgentsPage;