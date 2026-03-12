interface Props {
  label: string;
  value: string;
  chip?: string;
  delta?: string;
  tone?: 'neutral' | 'positive' | 'negative';
}

const MetricCard = ({ label, value, chip, delta, tone = 'neutral' }: Props) => {
  const deltaColor =
    tone === 'positive'
      ? 'text-accent'
      : tone === 'negative'
      ? 'text-danger'
      : 'text-textMuted';

  return (
    <div className="rounded-2xl border border-borderSubtle bg-surfaceAlt/80 px-4 py-3 shadow-card">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.16em] text-textMuted">{label}</div>
        {chip && (
          <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] text-textMuted">
            {chip}
          </span>
        )}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="text-xl font-semibold">{value}</div>
        {delta && <div className={`text-[11px] ${deltaColor}`}>{delta}</div>}
      </div>
    </div>
  );
};

export default MetricCard;