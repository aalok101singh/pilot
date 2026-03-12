import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PageHeader from '../components/dashboard/PageHeader';
import { api } from '../lib/api';
import { Escalation } from '../lib/types';

const EscalationsPage = () => {
  const [rows, setRows] = useState<Escalation[]>([]);

  useEffect(() => {
    api.getEscalations().then(setRows).catch(console.error);
  }, []);

  const handleAssign = async (id: string) => {
    await api.assignEscalation(id, 'Sarah Lee');
  };

  return (
    <div>
      <PageHeader
        title="Escalations"
        subtitle="Every low-confidence or sensitive conversation AI hands back to humans."
      />

      <Card
        title="Escalation queue"
        subtitle="Sorted by time created."
      >
        <Table>
          <thead>
            <tr>
              <Table.Th>Created</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Topic</Table.Th>
              <Table.Th>Channel</Table.Th>
              <Table.Th>Confidence</Table.Th>
              <Table.Th>Owner</Table.Th>
              <Table.Th>Actions</Table.Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <Table.Tr key={r.id}>
                <Table.Td>
                  {new Date(r.createdAt).toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </Table.Td>
                <Table.Td>{r.customer}</Table.Td>
                <Table.Td>{r.topic}</Table.Td>
                <Table.Td>{r.channel}</Table.Td>
                <Table.Td>{r.confidence.toFixed(2)}</Table.Td>
                <Table.Td>
                  {r.assignedTo}{' '}
                  <Badge
                    label={r.status}
                    tone={r.status === 'open' ? 'warning' : 'neutral'}
                  />
                </Table.Td>
                <Table.Td>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleAssign(r.id)}>
                      Assign to me
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={async () => {
                        await fetch(`/api/escalations/${r.id}/resolve`, {
                          method: 'POST'
                        });
                      }}
                    >
                      Mark resolved
                    </Button>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default EscalationsPage;