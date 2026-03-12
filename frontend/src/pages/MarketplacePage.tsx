import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PageHeader from '../components/dashboard/PageHeader';
import { api } from '../lib/api';
import { MarketplaceAgent } from '../lib/types';

const MarketplacePage = () => {
  const [items, setItems] = useState<MarketplaceAgent[]>([]);

  useEffect(() => {
    api.getMarketplace().then(setItems).catch(console.error);
  }, []);

  const handleInstall = async (id: string) => {
    await api.installMarketplaceAgent(id);
  };

  return (
    <div>
      <PageHeader
        title="Agent marketplace"
        subtitle="Drop-in Copilots you can add to Pilot in minutes."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            subtitle={item.category}
            right={
              <Badge
                label={item.status}
                tone={item.status === 'available' ? 'success' : 'warning'}
              />
            }
          >
            <p className="text-xs text-textMuted mb-3">{item.description}</p>
            <Button size="sm" onClick={() => handleInstall(item.id)}>
              Install to workspace
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;