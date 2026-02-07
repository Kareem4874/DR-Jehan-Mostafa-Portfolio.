import type { Service } from '@/types/service';

/**
 * Dr. Jehan's Service Offerings
 */
export const services: Service[] = [
  {
    id: 'consultation',
    title: 'الكشف الدوري',
    description:
      'تقييم شامل يتضمن التاريخ الطبي، تحليل نمط الحياة، وخطة تغذية مخصصة.',
    icon: '/images/services/consultation.svg',
    duration: '60-90 دقيقة',
    price: '150 جنيه',
    features: [
      'تقييم صحي شامل',
      'تحليل مكونات الجسم',
      'خطة وجبات مخصصة',
      'توصيات المكملات الغذائية',
      'تحديد الأهداف والجدول الزمني',
    ],
  },
  {
    id: 'monthly',
    title: 'باقة متابعة شهرية',
    description: 'برنامج مكثف لمدة شهر للبدء في رحلة التغيير مع متابعة دقيقة.',
    icon: '/images/services/programs.svg',
    duration: 'شهر واحد',
    price: '300 جنيه',
    features: [
      'تتبع التقدم أسبوعياً',
      'تعديلات مستمرة',
      'دعم عبر الواتساب',
      'نصائح يومية',
    ],
  },
  {
    id: '3month',
    title: 'باقة متابعة 3 شهور',
    description: 'الخيار الأمثل لتحقيق نتائج مستدامة وتغيير العادات الغذائية.',
    icon: '/images/services/programs.svg',
    duration: '3 أشهر',
    price: '700 جنيه',
    features: [
      'جميع مميزات الباقة الشهرية',
      'توفير 200 جنيه',
      'ورش عمل مصغرة',
      'خطط مرنة للمناسبات',
    ],
  },
  {
    id: '6month',
    title: 'باقة 6 شهور',
    description: 'رحلة تحول كاملة للصحة والرشاقة مع ضمان النتائج.',
    icon: '/images/services/programs.svg',
    duration: '6 أشهر',
    price: '1400 جنيه',
    features: [
      'أفضل قيمة (توفير 400 جنيه)',
      'متابعة شاملة طويلة الأمد',
      'تثبيت الوزن بعد النزول',
      'استشارات غير محدودة',
    ],
  },
];
