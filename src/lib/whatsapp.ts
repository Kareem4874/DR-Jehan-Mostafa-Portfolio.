import type { ContactFormInput } from '@/lib/schemas';
import { getActivityLevelLabel, getPackageLabel } from '@/lib/schemas';

/**
 * ============================================
 * WHATSAPP MESSAGE FORMATTER
 * ============================================
 *
 * Formats booking data into a professional
 * WhatsApp message
 */

/**
 * Format booking data for WhatsApp
 *
 * Creates a well-structured message with:
 * - Clear sections
 * - All booking information
 * - Professional formatting
 *
 * @param data - Validated form data
 * @returns Formatted WhatsApp message
 */
export function formatWhatsAppMessage(data: ContactFormInput): string {
  const currentDate = new Date().toLocaleString('ar-EG', {
    timeZone: 'Africa/Cairo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const message = `
*===============================*
*    طلب حجز جديد    *
*===============================*

*المعلومات الشخصية*
------------------------------
الاسم: ${data.fullName}
العمر: ${data.age} سنة
الوزن: ${data.weight} كجم
الطول: ${data.height} سم
الوظيفة: ${data.occupation}

*مستوى النشاط*
------------------------------
${getActivityLevelLabel(data.activityLevel)}

*بيانات الاتصال*
------------------------------
الهاتف: ${data.phone}
البريد: ${data.email}

*الباقة المختارة*
------------------------------
${getPackageLabel(data.package)}
${
  data.notes
    ? `
*ملاحظات إضافية*
------------------------------
${data.notes}
`
    : ''
}
*===============================*
موقع د. جيهان مصطفى
${currentDate}
*===============================*
`.trim();

  return message;
}

/**
 * Create WhatsApp URL with pre-filled message
 *
 * @param message - Formatted message
 * @returns WhatsApp web/app URL
 */
export function createWhatsAppUrl(message: string): string {
  // Get WhatsApp number from environment or use default
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+201036816899';

  // Clean number (remove all non-numeric characters)
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create WhatsApp URL (works on both mobile and desktop)
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Validate WhatsApp number format
 *
 * @param number - Phone number to validate
 * @returns true if valid Egyptian number
 */
export function isValidEgyptianNumber(number: string): boolean {
  const cleanNumber = number.replace(/[^0-9]/g, '');

  // Check if it's a valid Egyptian mobile number
  // Format: +20 1X XXXX XXXX (11 digits after country code)
  return /^(20)?1[0125][0-9]{8}$/.test(cleanNumber);
}
