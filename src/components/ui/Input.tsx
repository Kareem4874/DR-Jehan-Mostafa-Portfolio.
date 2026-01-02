'use client';

import { forwardRef } from 'react';
import type { InputProps } from '@/types/components';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      required,
      leftIcon,
      rightIcon,
      hideLabel,
      wrapperClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={`mb-4 w-full ${wrapperClassName}`}>
        {label && (
          <label
            className={`mb-2 block text-sm font-medium text-gray-700 ${hideLabel ? 'sr-only' : ''} `}
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-gray-200'} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${className} `}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-1 flex animate-slide-up items-center gap-1 text-sm text-red-500">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
