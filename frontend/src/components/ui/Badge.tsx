interface Props {
  label: string;
  tone?: 'success' | 'warning' | 'danger' | 'neutral';
}

const toneStyles: Record<NonNullable<Props['tone']>, string> = {
  success: 'bg-accent/15 text-accent border-accent/40',
  warning: 'bg-warning/15 text-warning border-warning/40',
  danger: 'bg-danger/15 text-danger border-danger/40',
  neutral: 'bg-surfaceAlt text-textMuted border-borderSubtle'
};

const Badge = ({ label, tone = 'neutral' }: Props) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
        toneStyles[tone]
      }`}
    >
      {label}
    </span>
  );
};

export default Badge;