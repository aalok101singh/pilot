import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  right?: ReactNode;
}

const Card = ({ children, title, subtitle, right }: Props) => {
  return (
    <section className="rounded-2xl border border-borderSubtle bg-surface/80 backdrop-blur-xl shadow-card">
      {(title || right) && (
        <header className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-borderSubtle/80">
          <div>
            {title && <h2 className="text-sm font-semibold">{title}</h2>}
            {subtitle && <p className="text-xs text-textMuted">{subtitle}</p>}
          </div>
          {right && <div className="flex items-center gap-2 text-xs">{right}</div>}
        </header>
      )}
      <div className="px-5 pb-4 pt-3">{children}</div>
    </section>
  );
};

export default Card;