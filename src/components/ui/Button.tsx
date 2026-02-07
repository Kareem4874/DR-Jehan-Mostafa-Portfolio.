'use client';

import type { ButtonProps } from '@/types/components';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  // Variant styles
  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-hover hover:scale-[1.02]',
    secondary:
      'bg-secondary hover:bg-secondary-dark text-white shadow-soft hover:shadow-hover hover:scale-[1.02]',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.02]',
    ghost: 'text-primary hover:bg-primary/10 hover:scale-[1.02]',
  };

  // Size styles
  const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
    xl: 'px-10 py-4 text-xl',
  };

  // Disabled state
  const disabledStyles =
    disabled || loading
      ? 'opacity-50 cursor-not-allowed transform-none hover:shadow-none hover:scale-100'
      : 'cursor-pointer active:scale-95';

  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabledStyles} ${className} `}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <svg
          className="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Left Icon (hidden when loading) */}
      {!loading && leftIcon}

      {/* Content */}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>{children}</span>

      {/* Right Icon (hidden when loading) */}
      {!loading && rightIcon}

      {/* Loading Text Overlay (optional) */}
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Spinner is already centered, this is for future use if we want text */}
        </span>
      )}
    </button>
  );
}
