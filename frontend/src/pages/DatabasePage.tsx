import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PageHeader from '../components/dashboard/PageHeader';
import { api } from '../lib/api';
import { DataSource } from '../lib/types';

const DatabasePage = () => {
  const [sources, setSources] = useState<DataSource[]>([]);

  useEffect(() => {
    api.getDataSources().then(setSources).catch(console.error);
  }, []);

  const handleSync = async (id: string) => {
    await api.syncDataSource(id);
  };

  const handleAddSource = async () => {
    await api.createDataSource({
      name: 'New Data Source',
      type: 'Manual',
      status: 'pending',
      lastSyncedAt: new Date().toISOString()
    });
  };

  return (
    <div>
      <PageHeader
        title="Data sources"
        subtitle="Control which systems Pilot QA can see."
        primaryActionLabel="Add source"
        onPrimaryAction={handleAddSource}
      />

      <Card
        title="Connected systems"
        subtitle="Every knowledge surface Pilot is allowed to read."
      >
        <Table>
          <thead>
            <tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Last sync</Table.Th>
              <Table.Th>Actions</Table.Th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s) => (
              <Table.Tr key={s.id}>
                <Table.Td>{s.name}</Table.Td>
                <Table.Td>{s.type}</Table.Td>
                <Table.Td>
                  <Badge
                    label={s.status}
                    tone={
                      s.status === 'synced'
                        ? 'success'
                        : s.status === 'error'
                        ? 'danger'
                        : 'warning'
                    }
                  />
                </Table.Td>
                <Table.Td>
                  {new Date(s.lastSyncedAt).toLocaleString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </Table.Td>
                <Table.Td>
                  <Button size="sm" variant="outline" onClick={() => handleSync(s.id)}>
                    Sync now
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default DatabasePage;