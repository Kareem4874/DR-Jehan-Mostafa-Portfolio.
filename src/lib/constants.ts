export const SITE_INFO = {
  name: 'د. جيهان مصطفى',
  title: 'أخصائية التغذية العلاجية',
  description:
    'خبيرة تغذية علاجية بخبرة تزيد عن 5 سنوات. معتمدة من EISNO. متخصصة في التغذية العلاجية، إدارة الوزن، والاستشارات الصحية.',
  url: 'https://dr-jehan-portfolio.vercel.app',
  author: 'د. جيهان مصطفى',
  email: 'drjehanmostafa@gmail.com',
  phone: '+201036816899',
  address: 'طنطا، مصر',
};

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/201036816899',
  facebook: 'https://www.facebook.com/share/17EyUaJnCY/',
  instagram: 'https://www.instagram.com/drjehanmostafa?igsh=bmYweGcwM2ZqaGRs',
};

export const CONTACT_INFO = {
  email: SITE_INFO.email,
  phone: SITE_INFO.phone,
  address: SITE_INFO.address,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
};

export const NAV_LINKS = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من أنا', href: '/#about' },
  { label: 'خدماتنا', href: '/#services' },
  { label: 'الشهادات', href: '/#certificates' },
  { label: 'تواصل معنا', href: '/contact' },
];
