import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import MetricCard from '../components/dashboard/MetricCard';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import StatusDot from '../components/ui/StatusDot';
import PageHeader from '../components/dashboard/PageHeader';
import { api } from '../lib/api';
import { Metr

const DashboardPage = () => {
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [escalations, setEscalations] = useState<Escalation[]>([]);

  useEffect(() => {
    api.getMetrics().then(setMetrics).catch(console.error);
    api.getAgents().then(setAgents).catch(console.error);
    api.getEscalations().then(setEscalations).catch(console.error);
  }, []);

  return (
    <div>
      <PageHeader
        title="Pilot Overview"
        subtitle="Real-time view into AI throughput, escalations, and agent health."
        primaryActionLabel="Create agent"
        onPrimaryAction={() => {
          // placeholder; real navigation handled via sidebar route
          console.log('Create agent clicked');
        }}
      />

      {/* Metric grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <MetricCard
          label="Total tickets (last 7 days)"
          value={metrics ? metrics.totalTickets.toLocaleString() : '—'}
          chip={
            metrics
              ? `${Math.round(metrics.resolutionRate * 100)}% resolved by AI`
              : 'AI coverage'
          }
          delta="+12% vs last week"
          tone="positive"
        />
        <MetricCard
          label="Avg. AI response time"
          value={metrics ? `${metrics.avgResponseTimeSeconds}s` : '—'}
          chip="P95 under 60s"
          delta="-4s vs last week"
          tone="positive"
        />
        <MetricCard
          label="Open escalations"
          value={metrics ? `${metrics.escalationsToday}` : '—'}
          chip="Today"
          delta="+2 vs yesterday"
          tone="negative"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card
          title="Agent fleet"
          subtitle="Pilot QA engineers and their confidence thresholds."
          right={<span className="text-[11px] text-textMuted">Live from mock API</span>}
        >
          <ul className="space-y-3">
            {agents.map((agent) => (
              <li key={agent.id} className="flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <StatusDot status={agent.status} />
                    <span className="font-medium">{agent.name}</span>
                  </div>
                  <div className="mt-1 text-[11px] text-textMuted">
                    {agent.role} • {agent.coverage.join(', ')}
                  </div>
                </div>
                <div className="text-right text-[11px] text-textMuted">
                  <div>
                    Threshold: <span className="text-textPrimary">{agent.confidenceThreshold}</span>
                  </div>
                  <div>
                    Last active:{' '}
                    {new Date(agent.lastActive).toLocaleTimeString(undefined, {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </li>
            ))}
            {!agents.length && (
              <div className="text-xs text-textMuted">No agents loaded (check backend).</div>
            )}
          </ul>
        </Card>

        <Card
          title="Today’s escalations"
          subtitle="Low-confidence handoffs routed to humans."
          right={<Badge label="Live" tone="warning" />}
        >
          <Table>
            <thead>
              <tr>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Topic</Table.Th>
                <Table.Th>Conf.</Table.Th>
                <Table.Th>Status</Table.Th>
              </tr>
            </thead>
            <tbody>
              {escalations.map((e) => (
                <Table.Tr key={e.id}>
                  <Table.Td>{e.customer}</Table.Td>
                  <Table.Td>{e.topic}</Table.Td>
                  <Table.Td>{e.confidence.toFixed(2)}</Table.Td>
                  <Table.Td>
                    <Badge
                      label={e.status}
                      tone={
                        e.status === 'open'
                          ? 'warning'
                          : e.status === 'investigating'
                          ? 'neutral'
                          : 'success'
                      }
                    />
                  </Table.Td>
                </Table.Tr>
              ))}
            </tbody>
          </Table>
        </Card>

        <Card
          title="Routing policy"
          subtitle="How Pilot QA decides when to escalate."
        >
          <ul className="space-y-2 text-xs text-textMuted">
            <li>
              • If model confidence {'<'} <span className="text-textPrimary">0.45</span>, always
              escalate.
            </li>
            <li>
              • Between <span className="text-textPrimary">0.45–0.65</span>, escalate if customer is
              high value or topic is sensitive.
            </li>
            <li>
              • Above <span className="text-textPrimary">0.65</span>, auto-resolve with AI answer.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
