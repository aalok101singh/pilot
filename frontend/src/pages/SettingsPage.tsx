import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import PageHeader from '../components/dashboard/PageHeader';
import { api } from '../lib/api';
import { Settings } from '../lib/types';

const SettingsPage = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    api.getSettings().then(setSettings).catch(console.error);
  }, []);

  if (!settings) {
    return <div className="text-xs text-textMuted">Loading settings…</div>;
  }

  const handleSave = async () => {
    await api.updateSettings(settings);
  };

  return (
    <div className="space-y-4">
      <PageHeader
        title="Workspace settings"
        subtitle="Tune Pilot QA for your company."
        primaryActionLabel="Save changes"
        onPrimaryAction={handleSave}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Workspace */}
        <Card title="Workspace" subtitle="Name, timezone, and reporting.">
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-textMuted mb-1">Workspace name</label>
              <input
                className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                value={settings.workspace.workspaceName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    workspace: { ...settings.workspace, workspaceName: e.target.value }
                  })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-textMuted mb-1">Timezone</label>
                <input
                  className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                  value={settings.workspace.timezone}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      workspace: { ...settings.workspace, timezone: e.target.value }
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-textMuted mb-1">Default channel</label>
                <input
                  className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                  value={settings.workspace.defaultChannel}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      workspace: { ...settings.workspace, defaultChannel: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <label className="mt-2 flex items-center gap-2 text-textMuted">
              <input
                type="checkbox"
                checked={settings.workspace.weeklySummary}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    workspace: { ...settings.workspace, weeklySummary: e.target.checked }
                  })
                }
              />
              Send weekly AI performance summary
            </label>
          </div>
        </Card>

        {/* Integrations */}
        <Card title="Integrations" subtitle="Where Pilot sends alerts & reads tickets.">
          <div className="space-y-3 text-xs text-textMuted">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-textPrimary">Slack</div>
                <div className="text-[11px]">
                  {settings.integrations.slack.connected
                    ? `Connected to ${settings.integrations.slack.channel}`
                    : 'Connect to route escalations and alerts.'}
                </div>
              </div>
              <Button size="sm" variant="outline">
                {settings.integrations.slack.connected ? 'Manage' : 'Connect'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-textPrimary">Zendesk</div>
                <div className="text-[11px]">
                  {settings.integrations.zendesk.connected
                    ? `Subdomain: ${settings.integrations.zendesk.subdomain}`
                    : 'Sync tickets and let Pilot respond from Zendesk.'}
                </div>
              </div>
              <Button size="sm" variant="outline">
                {settings.integrations.zendesk.connected ? 'Manage' : 'Connect'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-textPrimary">HubSpot</div>
                <div className="text-[11px]">
                  {settings.integrations.hubspot.connected
                    ? 'Connected'
                    : 'Optional: let Pilot see account health.'}
                </div>
              </div>
              <Button size="sm" variant="outline">
                {settings.integrations.hubspot.connected ? 'Manage' : 'Connect'}
              </Button>
            </div>
          </div>
        </Card>

        {/* AI behavior */}
        <Card title="AI behavior" subtitle="How Pilot QA should sound and behave.">
          <div className="space-y-3 text-xs text-textMuted">
            <div>
              <label className="block mb-1">Tone</label>
              <select
                className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                value={settings.aiBehavior.tone}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    aiBehavior: { ...settings.aiBehavior, tone: e.target.value }
                  })
                }
              >
                <option value="friendly">Friendly</option>
                <option value="formal">Formal</option>
                <option value="concise">Concise</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1">Max escalation rate</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                  value={settings.aiBehavior.maxEscalationRate}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      aiBehavior: {
                        ...settings.aiBehavior,
                        maxEscalationRate: parseFloat(e.target.value)
                      }
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1">Default confidence threshold</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                  value={settings.aiBehavior.defaultConfidenceThreshold}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      aiBehavior: {
                        ...settings.aiBehavior,
                        defaultConfidenceThreshold: parseFloat(e.target.value)
                      }
                    })
                  }
                />
              </div>
            </div>
            <label className="mt-2 flex items-center gap-2 text-textMuted">
              <input
                type="checkbox"
                checked={settings.aiBehavior.allowProactiveOutreach}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    aiBehavior: {
                      ...settings.aiBehavior,
                      allowProactiveOutreach: e.target.checked
                    }
                  })
                }
              />
              Allow proactive check-ins from Pilot
            </label>
          </div>
        </Card>

        {/* Security */}
        <Card title="Security & privacy" subtitle="Guardrails for data access and logs.">
          <div className="space-y-3 text-xs text-textMuted">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.security.piiRedaction}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    security: { ...settings.security, piiRedaction: e.target.checked }
                  })
                }
              />
              Enable PII redaction in model prompts
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.security.ssoEnforced}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    security: { ...settings.security, ssoEnforced: e.target.checked }
                  })
                }
              />
              Enforce SSO for all users
            </label>
            <div>
              <label className="block mb-1">Audit log retention (days)</label>
              <input
                type="number"
                className="w-full rounded-lg border border-borderSubtle bg-surface px-3 py-1.5 text-xs"
                value={settings.security.auditLogRetentionDays}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    security: {
                      ...settings.security,
                      auditLogRetentionDays: parseInt(e.target.value, 10)
                    }
                  })
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;