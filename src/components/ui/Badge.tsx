import type { BadgeProps } from '@/types/components';

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  outlined = false,
  className = '',
  leftIcon,
  dot = false,
}: BadgeProps) {
  const variants = {
    primary: outlined
      ? 'border-primary text-primary bg-primary/5'
      : 'bg-primary/10 text-primary-dark border-primary/20',
    secondary: outlined
      ? 'border-secondary text-secondary-dark bg-secondary/5'
      : 'bg-secondary/10 text-secondary-dark border-secondary/20',
    success: outlined
      ? 'border-green-500 text-green-600 bg-green-50'
      : 'bg-green-100 text-green-800 border-green-200',
    warning: outlined
      ? 'border-yellow-500 text-yellow-600 bg-yellow-50'
      : 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: outlined
      ? 'border-red-500 text-red-600 bg-red-50'
      : 'bg-red-100 text-red-800 border-red-200',
    info: outlined
      ? 'border-blue-500 text-blue-600 bg-blue-50'
      : 'bg-blue-100 text-blue-800 border-blue-200',
    default: outlined
      ? 'border-gray-300 text-gray-700 bg-transparent'
      : 'bg-gray-100 text-gray-800 border-gray-200',
  };

  const dotColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    default: 'bg-gray-500',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-medium ${variants[variant]} ${sizes[size]} ${rounded ? 'rounded-full' : 'rounded-md'} ${className} `}
    >
      {dot && (
        <span className={`h-1.5 w-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {leftIcon}
      {children}
    </span>
  );
}
