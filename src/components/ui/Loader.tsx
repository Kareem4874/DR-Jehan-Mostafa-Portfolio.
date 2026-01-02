import type { LoaderProps } from '@/types/components';

export default function Loader({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className = '',
}: LoaderProps) {
  const sizes = {
    xs: 'h-4 w-4 border-2',
    sm: 'h-6 w-6 border-2',
    md: 'h-10 w-10 border-4',
    lg: 'h-16 w-16 border-4',
    xl: 'h-24 w-24 border-4',
  };

  const colors = {
    primary: 'border-primary border-t-transparent',
    secondary: 'border-secondary border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-500 border-t-transparent',
  };

  const spinner = (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <div
        className={`animate-spin rounded-full ${sizes[size]} ${colors[color]} `}
      />
      {text && (
        <p className="animate-pulse text-sm font-medium text-gray-500">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
}
