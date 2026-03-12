interface Props {
  status: 'online' | 'idle' | 'offline' | 'error' | 'syncing';
}

const StatusDot = ({ status }: Props) => {
  const color =
    status === 'online'
      ? 'bg-accent'
      : status === 'idle'
      ? 'bg-warning'
      : status === 'error'
      ? 'bg-danger'
      : status === 'syncing'
      ? 'bg-primarySoft'
      : 'bg-borderSubtle';

  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />;
};

export default StatusDot;