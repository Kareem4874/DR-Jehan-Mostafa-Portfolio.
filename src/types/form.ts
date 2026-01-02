/**
 * Form Types
 *
 * Type definitions for contact/booking form.
 * Includes form data, validation, and API response types.
 *
 * @module types/form
 */

import type { ActivityLevel, PackageType } from './index';

// ============================================================================
// FORM DATA
// ============================================================================

/**
 * Contact form data structure
 * All fields the user needs to fill in the booking form
 *
 * Note: This matches the Zod schema in src/lib/schemas.ts
 * Any changes here should be reflected in the schema
 *
 * @example
 * ```typescript
 * const formData: ContactFormData = {
 *   fullName: 'Ahmed Mohamed',
 *   age: '28',
 *   occupation: 'Software Engineer',
 *   activityLevel: 'moderate',
 *   phone: '+201012345678',
 *   email: 'ahmed@example.com',
 *   package: 'monthly',
 *   receipt: fileObject,
 *   receiptUrl: 'https://...',
 *   notes: 'Looking to lose weight'
 * }
 * ```
 */
export interface ContactFormData {
  /** Full name (min 3 chars) */
  fullName: string;

  /** Age (1-120) */
  age: string;

  /** Occupation/job */
  occupation: string;

  /** Daily activity level */
  activityLevel: ActivityLevel;

  /** Phone number (Egyptian format) */
  phone: string;

  /** Email address */
  email: string;

  /** Selected package/service */
  package: PackageType;

  /** Payment receipt file */
  receipt: File | null;

  /** URL of uploaded receipt (after upload) */
  receiptUrl?: string;

  /** Additional notes (optional) */
  notes: string;
}

/**
 * Initial empty form data
 * Use this to reset forms or as default values
 */
export const INITIAL_FORM_DATA: ContactFormData = {
  fullName: '',
  age: '',
  occupation: '',
  activityLevel: 'moderate',
  phone: '',
  email: '',
  package: 'initial',
  receipt: null,
  receiptUrl: undefined,
  notes: '',
};

// ============================================================================
// FORM VALIDATION
// ============================================================================

/**
 * Form field errors
 * Maps field names to their error messages
 *
 * @example
 * ```typescript
 * const errors: ContactFormErrors = {
 *   fullName: 'Name must be at least 3 characters',
 *   email: 'Invalid email address'
 * }
 * ```
 */
export interface ContactFormErrors {
  fullName?: string;
  age?: string;
  occupation?: string;
  activityLevel?: string;
  phone?: string;
  email?: string;
  package?: string;
  receipt?: string;
  notes?: string;
  /** General form error (not field-specific) */
  _form?: string;
}

/**
 * Form touched state
 * Tracks which fields have been interacted with
 */
export type ContactFormTouched = Partial<
  Record<keyof ContactFormData, boolean>
>;

/**
 * Form validation result
 * Returned by validation functions
 */
export interface FormValidationResult {
  /** Whether form is valid */
  isValid: boolean;

  /** Error messages if invalid */
  errors: ContactFormErrors;
}

// ============================================================================
// API RESPONSES
// ============================================================================

/**
 * Successful API response
 * Returned when form submission succeeds
 */
export interface WhatsAppSuccessResponse {
  success: true;
  /** WhatsApp URL to open */
  whatsappUrl: string;
  /** Success message */
  message: string;
}

/**
 * Failed API response
 * Returned when form submission fails
 */
export interface WhatsAppErrorResponse {
  success: false;
  /** Error message */
  error: string;
  /** Validation errors (if validation failed) */
  errors?: ContactFormErrors;
  /** Additional error details (dev only) */
  details?: string;
}

/**
 * Combined API response type
 * Use discriminated union for type-safe handling
 */
export type WhatsAppResponse = WhatsAppSuccessResponse | WhatsAppErrorResponse;

/**
 * File upload API response
 */
export interface UploadSuccessResponse {
  success: true;
  /** URL of the uploaded file */
  url: string;
}

export interface UploadErrorResponse {
  success: false;
  /** Error message */
  error: string;
  /** Additional details */
  details?: string;
}

export type UploadResponse = UploadSuccessResponse | UploadErrorResponse;

// ============================================================================
// FORM STATE
// ============================================================================

/**
 * Form submission state
 * Tracks the current state of form submission
 */
export type FormSubmissionState =
  | 'idle' // Not submitted yet
  | 'validating' // Validating form data
  | 'uploading' // Uploading receipt file
  | 'submitting' // Submitting to API
  | 'success' // Successfully submitted
  | 'error'; // Submission failed

/**
 * Form state interface
 * Complete state for form component
 */
export interface FormState {
  /** Current form data */
  data: ContactFormData;

  /** Current errors */
  errors: ContactFormErrors;

  /** Fields that have been touched */
  touched: ContactFormTouched;

  /** Submission state */
  status: FormSubmissionState;

  /** Error message if submission failed */
  errorMessage?: string;

  /** Success message after submission */
  successMessage?: string;

  /** Whether form is currently dirty (has unsaved changes) */
  isDirty: boolean;
}

/**
 * Initial form state
 */
export const INITIAL_FORM_STATE: FormState = {
  data: INITIAL_FORM_DATA,
  errors: {},
  touched: {},
  status: 'idle',
  isDirty: false,
};

// ============================================================================
// FORM FIELD CONFIGS
// ============================================================================

/**
 * Form field configuration
 * Used for dynamic form generation
 */
export interface FormFieldConfig {
  /** Field name (key in form data) */
  name: keyof ContactFormData;

  /** Display label */
  label: string;

  /** Field type */
  type:
    | 'text'
    | 'email'
    | 'tel'
    | 'number'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'file';

  /** Placeholder text */
  placeholder?: string;

  /** Whether field is required */
  required?: boolean;

  /** Helper text */
  helperText?: string;

  /** Autocomplete attribute */
  autoComplete?: string;

  /** Input mode for mobile keyboards */
  inputMode?: 'text' | 'email' | 'tel' | 'numeric';

  /** Options for select/radio fields */
  options?: Array<{ value: string; label: string }>;

  /** Grid column span (1-12) */
  colSpan?: number;
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

/**
 * Type guard to check if response is successful
 */
export function isSuccessResponse(
  response: WhatsAppResponse
): response is WhatsAppSuccessResponse {
  return response.success === true;
}

/**
 * Type guard to check if response is an error
 */
export function isErrorResponse(
  response: WhatsAppResponse
): response is WhatsAppErrorResponse {
  return response.success === false;
}

/**
 * Type guard for upload success
 */
export function isUploadSuccess(
  response: UploadResponse
): response is UploadSuccessResponse {
  return response.success === true;
}
