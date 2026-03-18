import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../compo


  return (
    <div className="flex h-screen bg-background text-textPrimary">
      <Sidebar currentPath={location.pathname} onNavigate={navigate} />
      <div className="flex flex-1 flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto px-8 py-6 bg-gradient-to-b from-background to-[#050b1a]">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
