import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const Button = ({ variant = 'primary', size = 'md', children, className = '', ...rest }: Props) => {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<Variant, string> = {
    primary:
      'bg-primary hover:bg-primarySoft text-white shadow-card shadow-primary/30 border border-primary/70',
    ghost:
      'bg-transparent text-textMuted hover:text-textPrimary hover:bg-surfaceAlt border border-transparent',
    outline:
      'bg-transparent text-textPrimary border border-borderSubtle hover:border-primary hover:bg-primary/5'
  };

  const sizes: Record<Size, string> = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2'
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;