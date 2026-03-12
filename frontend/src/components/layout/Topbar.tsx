import Button from '../ui/Button';

const Topbar = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-borderSubtle bg-[#050816]/70 backdrop-blur-xl px-6 py-3">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-primarySoft">
          Command Center
        </div>
        <div className="text-sm text-textMuted">
          Monitor Pilot QA and orchestrate your agents.
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">
          View docs
        </Button>
        <Button size="sm">New escalation</Button>
        <div className="h-8 w-8 rounded-full bg-surfaceAlt border border-borderSubtle flex items-center justify-center text-xs">
          SL
        </div>
      </div>
    </header>
  );
};

export default Topbar;