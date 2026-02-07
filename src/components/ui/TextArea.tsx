'use client';

import { forwardRef } from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
  showCharCount?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      required,
      rows = 4,
      wrapperClassName = '',
      showCharCount = false,
      maxLength,
      value,
      ...props
    },
    ref
  ) => {
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className={`mb-4 w-full ${wrapperClassName}`}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          maxLength={maxLength}
          value={value}
          className={`w-full resize-y rounded-lg border-2 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-gray-200'} ${className} `}
          {...props}
        />

        {/* Character Counter & Helper Text Row */}
        <div className="mt-1 flex items-center justify-between">
          <div className="flex-1">
            {error && (
              <p className="flex animate-slide-up items-center gap-1 text-sm text-red-500">
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

            {helperText && !error && (
              <p className="text-sm text-gray-500">{helperText}</p>
            )}
          </div>

          {/* Character Counter */}
          {showCharCount && maxLength && (
            <p
              className={`ml-2 text-xs ${currentLength >= maxLength ? 'text-red-500' : 'text-gray-400'}`}
            >
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
