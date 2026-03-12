import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import AgentsPage from './pages/AgentsPage';
import MarketplacePage from './pages/MarketplacePage';
import EscalationsPage from './pages/EscalationsPage';
import DatabasePage from './pages/DatabasePage';
import ActivityPage from './pages/ActivityPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/escalations" element={<EscalationsPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;