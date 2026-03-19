import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../compo


  return (
    <div className="flex h-screen bg-background text-textPrimary">
      <Sidebar currentPath={location.pathname} onNavigate={navigate} />
      <div className="flex flex-1 flex-
    </div>
  );
};

export default DashboardLayout;
