import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => (
  <div className="overflow-hidden rounded-xl border border-borderSubtle bg-surfaceAlt/80">
    <table className="min-w-full divide-y divide-borderSubtle text-sm">{children}</table>
  </div>
);

const Th = ({ children }: TableProps) => (
  <th className="bg-surfaceAlt/90 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-textMuted">
    {children}
  </th>
);

const Td = ({ children }: TableProps) => (
  <td className="whitespace-nowrap px-3 py-2 text-xs text-textPrimary">{children}</td>
);

const Tr = ({ children }: TableProps) => (
  <tr className="odd:bg-surface/50 even:bg-surfaceAlt/40 hover:bg-primary/5 transition">
    {children}
  </tr>
);

Table.Th = Th;
Table.Td = Td;
Table.Tr = Tr;

export default Table;