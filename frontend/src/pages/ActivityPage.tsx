import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import PageHeader from '../components/dashboard/PageHeader';
import { api } from '../lib/api';
import { ActivityEvent } from '../lib/types';

const labelForAction = (action: string) => {
  switch (action) {
    case 'answered_ticket':
      return { label: 'Answered ticket', tone: 'success' as const };
    case 'escalated_ticket':
      return { label: 'Escalated ticket', tone: 'warning' as const };
    case 'data_sync_completed':
      return { label: 'Data sync', tone: 'neutral' as const };
    default:
      return { label: action, tone: 'neutral' as const };
  }
};

const ActivityPage = () => {
  const [events, setEvents] = useState<ActivityEvent[]>([]);

  useEffect(() => {
    api.getActivity().then(setEvents).catch(console.error);
  }, []);

  return (
    <div>
      <PageHeader
        title="Activity log"
        subtitle="Audit of what Pilot QA has done across your workspace."
      />

      <Card
        title="Recent events"
        subtitle="Last 50 actions."
      >
        <Table>
          <thead>
            <tr>
              <Table.Th>Time</Table.Th>
              <Table.Th>Actor</Table.Th>
              <Table.Th>Action</Table.Th>
              <Table.Th>Target</Table.Th>
              <Table.Th>Details</Table.Th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => {
              const { label, tone } = labelForAction(e.action);
              return (
                <Table.Tr key={e.id}>
                  <Table.Td>
                    {new Date(e.timestamp).toLocaleTimeString(undefined, {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </Table.Td>
                  <Table.Td>{e.actor}</Table.Td>
                  <Table.Td>
                    <Badge label={label} tone={tone} />
                  </Table.Td>
                  <Table.Td>{e.target || '—'}</Table.Td>
                  <Table.Td>
                    <code className="rounded bg-surface px-2 py-0.5 text-[10px] text-textMuted">
                      {JSON.stringify(e.meta)}
                    </code>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ActivityPage;