import type { CardProps } from '@/types/components';

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  shadow = 'md',
  border = true,
  rounded = 'lg',
  variant = 'default',
  ...props
}: CardProps) {
  const paddings = {
    none: 'p-0',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-soft',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const radiuses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  const variants = {
    default: 'bg-white',
    outlined: 'bg-transparent border-2 border-gray-200',
    filled: 'bg-gray-50 border-transparent',
    elevated: 'bg-white border-transparent',
  };

  return (
    <div
      className={`transition-all duration-300 ${variants[variant]} ${border && variant === 'default' ? 'border border-gray-100' : ''} ${radiuses[rounded]} ${paddings[padding]} ${shadows[shadow]} ${hover ? 'hover:shadow-hover hover:-translate-y-1' : ''} ${className} `}
      {...props}
    >
      {children}
    </div>
  );
}
