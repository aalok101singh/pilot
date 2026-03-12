import { ReactNode } from 'react';
import Button from '../ui/Button';

interface Props {
  title: string;
  subtitle?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondary?: ReactNode;
}

const PageHeader = ({ title, subtitle, primaryActionLabel, onPrimaryAction, secondary }: Props) => {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        {subtitle && <p className="mt-1 text-xs text-textMuted">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {secondary}
        {primaryActionLabel && (
          <Button size="sm" onClick={onPrimaryAction}>
            {primaryActionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;