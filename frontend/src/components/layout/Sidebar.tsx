import { MouseEvent } from 'react';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Agents', path: '/agents' },
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Escalations', path: '/escalations' },
  { label: 'Database', path: '/database' },
  { label: 'Activity', path: '/activity' },
  { label: 'Settings', path: '/settings' }
];

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar = ({ currentPath, onNavigate }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-borderSubtle bg-[#050816]/80 backdrop-blur-xl">
      <div className="flex items-center px-6 py-5 border-b border-borderSubtle">
        <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-sm font-semibold">
          P
        </div>
        <div className="ml-2">
          <div className="text-sm font-semibold tracking-wide">Pilot</div>
          <div className="text-xs text-textMuted">AI Support Studio</div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = currentPath.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={(e) => handleClick(e, item.path)}
              className={`w-full flex items-center rounded-lg px-3 py-2 text-sm font-medium transition
                ${
                  active
                    ? 'bg-primary/10 text-primary border border-primary/40'
                    : 'text-textMuted hover:bg-surfaceAlt hover:text-textPrimary'
                }`}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="px-4 pb-4 pt-2 border-t border-borderSubtle text-xs text-textMuted">
        Workspace: <span className="text-textPrimary">Pilot Demo</span>
      </div>
    </aside>
  );
};

export default Sidebar;