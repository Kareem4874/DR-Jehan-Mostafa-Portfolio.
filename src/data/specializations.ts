import type { Specialization } from '@/types/service';

/**
 * Dr. Jehan's Areas of Specialization
 */
export const specializations: Specialization[] = [
  {
    id: 'clinical',
    title: 'التغذية العلاجية',
    description:
      'علاجات تغذوية قائمة على الأدلة للحالات الطبية بما في ذلك السكري، ارتفاع ضغط الدم، واضطرابات التمثيل الغذائي.',
    icon: '/images/specializations/icon-clinical.svg',
    benefits: [
      'خطط وجبات مخصصة',
      'إدارة الحالات الطبية',
      'تفسير نتائج التحاليل',
    ],
  },
  {
    id: 'weight',
    title: 'إدارة الوزن',
    description:
      'برامج مستدامة لفقدان أو زيادة الوزن مصممة خصيصاً لنمط حياتك، والتمثيل الغذائي، وأهدافك الصحية.',
    icon: '/images/specializations/icon-weight.svg',
    benefits: ['فقدان وزن صحي', 'دعم بناء العضلات', 'تدريب نمط الحياة'],
  },
  {
    id: 'sports',
    title: 'التغذية الرياضية',
    description:
      'تحسين الأداء الرياضي من خلال خطط تغذية متخصصة للتدريب، والمنافسة، والتعافي.',
    icon: '/images/specializations/icon-sports.svg',
    benefits: ['تحسين الأداء', 'استراتيجيات التعافي', 'توجيهات المكملات'],
  },
  {
    id: 'maternal',
    title: 'تغذية الأم والطفل',
    description: 'دعم غذائي شامل خلال الحمل، والرضاعة، ومراحل نمو الأطفال.',
    icon: '/images/specializations/icon-maternal.svg',
    benefits: ['تغذية الحمل', 'دعم الرضاعة الطبيعية', 'نمو الطفل'],
  },
  {
    id: 'therapeutic',
    title: 'الأنظمة الغذائية العلاجية',
    description:
      'تدخلات غذائية متخصصة لإدارة الأمراض المزمنة وتحسين النتائج الصحية العامة.',
    icon: '/images/specializations/icon-therapeutic.svg',
    benefits: ['إدارة الأمراض', 'تخفيف الأعراض', 'تحسين جودة الحياة'],
  },
  {
    id: 'aesthetic',
    title: 'التغذية التجميلية',
    description:
      'استراتيجيات تغذية للحصول على بشرة صحية، وشعر قوي، وتعزيز المظهر العام من الداخل.',
    icon: '/images/specializations/icon-aesthetic.svg',
    benefits: ['صحة البشرة', 'تغذية مكافحة الشيخوخة', 'الجمال من الداخل'],
  },
];
