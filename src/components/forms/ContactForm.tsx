'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  activityLevelLabels,
  packageLabels,
} from '@/lib/schemas';
import type { ContactFormInput } from '@/lib/schemas';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

/**
 * ============================================
 * CONTACT FORM COMPONENT
 * ============================================
 *
 * Main booking form with:
 * - React Hook Form for state management
 * - Zod validation
 * - File upload integration
 * - WhatsApp redirect
 */

export default function ContactForm() {
  // No receipt state needed
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      activityLevel: 'moderate',
    },
  });

  // Watch notes field for character counter
  const notesValue = watch('notes');

  /**
   * Handle form submission
   */
  const onSubmit = async (data: ContactFormInput) => {
    // Validate receipt was uploaded (optional - remove if receipt is not required)
    // if (!receiptUrl) {
    //   setReceiptError('Please upload your payment receipt')
    //   return
    // }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);

        // Open WhatsApp in new tab
        window.open(result.whatsappUrl, '_blank');

        // Reset form after 3 seconds
        setTimeout(() => {
          reset();
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(
          result.error || 'Failed to submit form. Please try again.'
        );
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError(
        'Network error. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Convert activity level enum to select options
  const activityOptions = [
    { value: '', label: 'اختر مستوى النشاط...' },
    ...Object.entries(activityLevelLabels).map(([value, label]) => ({
      value,
      label,
    })),
  ];

  // Convert package enum to select options
  const packageOptions = [
    { value: '', label: 'اختر الباقة...' },
    ...Object.entries(packageLabels).map(([value, label]) => ({
      value,
      label,
    })),
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-2xl space-y-8"
    >
      {/* Success Message */}
      {submitSuccess && (
        <div className="animate-fade-in rounded-xl border-2 border-green-400 bg-green-50 px-6 py-5 text-green-800">
          <div className="mb-2 flex items-center">
            <div className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold">تم إرسال الطلب بنجاح!</p>
              <p className="text-sm opacity-80">جاري فتح الواتساب...</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="rounded-xl border-2 border-red-400 bg-red-50 px-6 py-5 text-red-800">
          <div className="flex items-center">
            <div className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-semibold">{submitError}</p>
          </div>
        </div>
      )}

      {/* Personal Information Section */}
      <div className="shadow-soft rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
          <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md">
            1
          </span>
          المعلومات الشخصية
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="الاسم الكامل"
            {...register('fullName')}
            error={errors.fullName?.message}
            placeholder="أدخل اسمك بالكامل"
            required
            disabled={isSubmitting}
          />

          <Input
            label="العمر"
            type="number"
            {...register('age')}
            error={errors.age?.message}
            placeholder="أدخل عمرك"
            min="1"
            max="120"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Input
            label="الطول (سم)"
            type="number"
            {...register('height')}
            error={errors.height?.message}
            placeholder="مثال: 170"
            min="50"
            max="300"
            required
            disabled={isSubmitting}
          />

          <Input
            label="الوزن (كجم)"
            type="number"
            {...register('weight')}
            error={errors.weight?.message}
            placeholder="مثال: 75"
            min="2"
            max="500"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="mt-6">
          <Input
            label="الوظيفة"
            {...register('occupation')}
            error={errors.occupation?.message}
            placeholder="مثال: مهندس، طالب، إلخ."
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Activity Level Section */}
      <div className="shadow-soft rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
          <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md">
            2
          </span>
          النشاط ونمط الحياة
        </h3>

        <Select
          label="مستوى النشاط"
          {...register('activityLevel')}
          error={errors.activityLevel?.message}
          options={activityOptions}
          required
          disabled={isSubmitting}
          helperText="يساعدنا هذا في تصميم خطة الوجبات المناسبة لك"
        />
      </div>

      {/* Contact Information Section */}
      <div className="shadow-soft rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
          <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md">
            3
          </span>
          معلومات الاتصال
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="رقم الهاتف"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="مثال: 01xxxxxxxxx"
            helperText="يرجى إدخال رقم هاتف مصري صحيح"
            required
            disabled={isSubmitting}
          />

          <Input
            label="البريد الإلكتروني"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Package Selection Section */}
      <div className="shadow-soft rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
          <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md">
            4
          </span>
          اختر الباقة المناسبة
        </h3>

        <Select
          label="نوع الباقة"
          {...register('package')}
          error={errors.package?.message}
          options={packageOptions}
          required
          disabled={isSubmitting}
          helperText="اختر الباقة التي تناسب أهدافك"
        />
      </div>

      {/* Additional Notes Section */}
      <div className="shadow-soft rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="mb-6 flex items-center text-xl font-bold text-gray-900">
          <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md">
            5
          </span>
          ملاحظات إضافية
          <span className="mr-2 text-sm font-normal text-gray-500">
            (اختياري)
          </span>
        </h3>

        <TextArea
          label="ملاحظات"
          {...register('notes')}
          error={errors.notes?.message}
          placeholder="أي مشاكل صحية، حساسية طعام، أو تفاصيل أخرى يجب أن نعرفها..."
          rows={4}
          maxLength={500}
          showCharCount
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          className="py-4 text-lg"
        >
          {isSubmitting ? 'جاري الإرسال...' : '📱 تأكيد الحجز وفتح الواتساب'}
        </Button>

        <p className="mt-4 text-center text-sm text-gray-500">
          بإرسال هذا النموذج، أنت توافق على التواصل معك عبر الواتساب
        </p>
      </div>
    </form>
  );
}
