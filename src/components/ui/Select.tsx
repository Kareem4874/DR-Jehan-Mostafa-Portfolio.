'use client';

import { forwardRef } from 'react';
import type {
  SelectProps,
  SelectOption,
  SelectOptionGroup,
} from '@/types/components';

// Helper to check if options is a group
const isGroup = (
  option: SelectOption | SelectOptionGroup
): option is SelectOptionGroup => {
  return 'options' in option;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      className = '',
      required,
      wrapperClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={`mb-4 w-full ${wrapperClassName}`}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            className={`w-full appearance-none rounded-lg border-2 bg-white px-4 py-3 pr-10 text-gray-900 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-gray-200'} ${className} `}
            {...props}
          >
            {/* Placeholder option */}
            {props.placeholder && (
              <option
                value=""
                disabled
                selected={!props.defaultValue && !props.value}
              >
                {props.placeholder}
              </option>
            )}

            {options.map((option, index) => {
              if (isGroup(option)) {
                return (
                  <optgroup key={index} label={option.label}>
                    {option.options.map((subOption) => (
                      <option
                        key={subOption.value}
                        value={subOption.value}
                        disabled={subOption.disabled}
                      >
                        {subOption.label}
                      </option>
                    ))}
                  </optgroup>
                );
              }
              return (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              );
            })}
          </select>

          {/* Custom Arrow Icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

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

        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
