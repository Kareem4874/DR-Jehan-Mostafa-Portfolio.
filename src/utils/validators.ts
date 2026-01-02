import { FILE_UPLOAD } from '@/lib/constants';

/**
 * Validate Egyptian phone number
 */
export function isValidEgyptianPhone(phone: string): boolean {
  const egyptianPhoneRegex = /^(\+20|0)?1[0125][0-9]{8}$/;
  return egyptianPhoneRegex.test(phone);
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate age (1-120)
 */
export function isValidAge(age: string | number): boolean {
  const ageNum = typeof age === 'string' ? parseInt(age, 10) : age;
  return !isNaN(ageNum) && ageNum >= 1 && ageNum <= 120;
}

/**
 * Validate file type
 */
export function isValidFileType(file: File): boolean {
  return FILE_UPLOAD.allowedTypes.includes(file.type);
}

/**
 * Validate file size
 */
export function isValidFileSize(file: File): boolean {
  return file.size <= FILE_UPLOAD.maxSize;
}

/**
 * Validate file for upload
 */
export function validateFile(file: File): {
  valid: boolean;
  error?: string;
} {
  if (!isValidFileType(file)) {
    return {
      valid: false,
      error: 'Invalid file type. Only JPG, PNG, and PDF files are allowed.',
    };
  }

  if (!isValidFileSize(file)) {
    return {
      valid: false,
      error: `File size must be less than ${FILE_UPLOAD.maxSize / (1024 * 1024)}MB.`,
    };
  }

  return { valid: true };
}

/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim().length > 0;
}

/**
 * Validate minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

/**
 * Validate maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.length <= maxLength;
}
