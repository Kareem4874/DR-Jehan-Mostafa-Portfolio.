import { z } from 'zod';

/**
 * ============================================
 * VALIDATION SCHEMAS
 * ============================================
 *
 * Using Zod for:
 * - Client-side validation (React Hook Form)
 * - Server-side validation (API routes)
 * - Type inference for TypeScript
 */

// ============================================
// ACTIVITY LEVEL ENUM
// ============================================

/**
 * Activity level options
 * Used in meal plan calculations
 */
export const activityLevelEnum = z.enum([
  'sedentary', // Little to no exercise
  'light', // 1-3 days/week
  'moderate', // 3-5 days/week
  'very', // 6-7 days/week
]);

export type ActivityLevel = z.infer<typeof activityLevelEnum>;

// ============================================
// PACKAGE TYPE ENUM
// ============================================

/**
 * Service package options
 */
export const packageTypeEnum = z.enum([
  'initial', // Initial consultation
  'monthly', // 1-month program
  '3month', // 3-month program
  '6month', // 6-month program
]);

export type PackageType = z.infer<typeof packageTypeEnum>;

// ============================================
// MAIN CONTACT FORM SCHEMA
// ============================================

/**
 * Contact form validation schema
 *
 * Validates all form fields with custom error messages
 * Used on both client and server
 */
export const contactFormSchema = z.object({
  // Full Name
  fullName: z
    .string()
    .min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل')
    .max(100, 'الاسم طويل جداً')
    .regex(
      /^[a-zA-Z\u0600-\u06FF\s]+$/,
      'الاسم يجب أن يحتوي على أحرف ومسافات فقط'
    ),

  // Age
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 1 && num <= 120;
  }, 'العمر يجب أن يكون بين 1 و 120'),

  // Height (cm)
  height: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 50 && num <= 300;
  }, 'المدخل غير صحيح (سم)'),

  // Weight (kg)
  weight: z.string().refine((val) => {
    const num = parseFloat(val); // Weight can have decimals
    return !isNaN(num) && num >= 2 && num <= 500;
  }, 'المدخل غير صحيح (كجم)'),

  // Occupation
  occupation: z
    .string()
    .min(2, 'المسمى الوظيفي مطلوب')
    .max(100, 'المسمى الوظيفي طويل جداً'),

  // Activity Level (enum)
  activityLevel: activityLevelEnum,

  // Phone Number (Egyptian format)
  phone: z
    .string()
    .regex(
      /^(\+20|0)?1[0125][0-9]{8}$/,
      'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01xxxxxxxxx)'
    ),

  // Email
  email: z
    .string()
    .email('يرجى إدخال بريد إلكتروني صحيح')
    .max(100, 'البريد الإلكتروني طويل جداً'),

  // Package Selection (enum)
  package: packageTypeEnum,

  // Notes (optional)
  notes: z
    .string()
    .max(500, 'الملاحظات طويلة جداً (حد أقصى 500 حرف)')
    .optional()
    .or(z.literal('')), // Allow empty string
});

/**
 * Infer TypeScript type from schema
 * This ensures type safety across the app
 */
export type ContactFormInput = z.infer<typeof contactFormSchema>;

// ============================================
// DISPLAY LABELS
// ============================================

/**
 * Activity level labels for UI display
 */
export const activityLevelLabels: Record<ActivityLevel, string> = {
  sedentary: 'خامل (لا تمارين رياضية)',
  light: 'نشاط خفيف (تمرين 1-3 أيام/أسبوع)',
  moderate: 'نشاط متوسط (تمرين 3-5 أيام/أسبوع)',
  very: 'نشاط عالي (تمرين 6-7 أيام/أسبوع)',
};

/**
 * Package labels for UI display
 */
export const packageLabels: Record<PackageType, string> = {
  initial: 'الكشف الدوري (150 جنيه)',
  monthly: 'باقة متابعة شهرية (300 جنيه)',
  '3month': 'باقة متابعة 3 شهور (700 جنيه)',
  '6month': 'باقة 6 شهور (1400 جنيه)',
};

/**
 * Package prices (optional - can be removed if not needed)
 */
export const packagePrices: Record<PackageType, string> = {
  initial: '150 جنيه',
  monthly: '300 جنيه',
  '3month': '700 جنيه',
  '6month': '1400 جنيه',
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get activity level description
 */
export function getActivityLevelLabel(level: ActivityLevel): string {
  return activityLevelLabels[level];
}

/**
 * Get package label
 */
export function getPackageLabel(pkg: PackageType): string {
  return packageLabels[pkg];
}

/**
 * Get package price
 */
export function getPackagePrice(pkg: PackageType): string {
  return packagePrices[pkg];
}
