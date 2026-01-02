import type { Certificate } from '@/types/certificate';

/**
 * Dr. Jehan's Professional Certificates
 *
 * Each certificate includes:
 * - id: Unique identifier
 * - title: Certificate name
 * - issuer: Issuing organization
 * - date: Year of issuance
 * - image: Path to certificate image
 * - category: Type of certification
 * - featured: Highlight important certificates
 * - credentialId: Optional verification ID
 */
export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'شهادة مشاركة في دورة تجميل عبر الإنترنت',
    issuer: 'أكاديمية التجميل عبر الإنترنت',
    date: '2023',
    image:
      '/images/certificates/Certificate of Participation in an Online Cosmetology Course.jpg',
    category: 'training',
    description:
      'شهادة مشاركة في دورة تجميل عبر الإنترنت - تثبت اجتياز تدريب متخصص في مجال التجميل والعناية بالبشرة.',
  },
  {
    id: 'cert-2',
    title: 'شهادة خبرة من مركز Be Gold',
    issuer: 'مركز Be Gold',
    date: '2023',
    image:
      '/images/certificates/Certificate of experience at be gold center.jpg',
    category: 'experience',
    description:
      'شهادة خبرة من مركز Be Gold - تؤكد الخبرة العملية والمهنية في مجال التغذية والتجميل.',
  },
  {
    id: 'cert-3',
    title: 'دبلومة التغذية العلاجية من الجامعة الأمريكية للعلوم',
    issuer: 'الجامعة الأمريكية للعلوم',
    date: '2022',
    image:
      '/images/certificates/Clinical nutrition diploma of American University of science.jpg',
    category: 'diploma',
    description:
      ' - مؤهل أكاديمي متخصص في التغذية الإكلينيكية والحميات الطبية.',
    featured: true,
  },
  {
    id: 'cert-4',
    title: 'شهادة في علوم التجميل',
    issuer: 'معهد التجميل',
    date: '2023',
    image: '/images/certificates/Cosmology certification.jpg',
    category: 'professional',
    description:
      'شهادة معتمدة في علوم التجميل - تثبت الكفاءة المهنية والتخصصية في مجال التجميل والعناية.',
  },
  {
    id: 'cert-5',
    title: 'شهادة اللجنة النقابية المهنية',
    issuer: 'اللجنة النقابية للعاملين بخدمات التجميل والصحة',
    date: '2023',
    image:
      '/images/certificates/Issuing Authority The Occupational Syndicate Committee for Workers in Beauty and Health Services (ا.jpg',
    category: 'professional',
    description:
      'شهادة من اللجنة النقابية المهنية للعاملين في خدمات الصحة والجمال - اعتماد مهني رسمي.',
  },
  {
    id: 'cert-6',
    title: 'شهادة عضوية EISNO',
    issuer: 'المنظمة المصرية الدولية لعلوم التغذية (EISNO)',
    date: '2023',
    image: '/images/certificates/Membership certificate of EISNO.jpg',
    category: 'membership',
    description:
      'شهادة عضوية في المنظمة المصرية الدولية لعلوم التغذية (EISNO) - عضوية مهنية معترف بها دولياً.',
  },
  {
    id: 'cert-7',
    title: 'دبلومة التغذية',
    issuer: 'أكاديمية التغذية',
    date: '2022',
    image: '/images/certificates/Nutrition diploma.jpg',
    category: 'diploma',
    description:
      'دبلومة التغذية - مؤهل متخصص في علوم التغذية والحميات الغذائية والتخطيط للوجبات الصحية.',
  },
  {
    id: 'cert-8',
    title: 'شهادة خبرة مهنية - مركز Be Gold',
    issuer: 'مركز Be Gold للتغذية والتجميل',
    date: '2023',
    image:
      '/images/certificates/Professional Certificate of Experience Be Gold Center for Nutrition and Beauty.jpg',
    category: 'experience',
    description:
      'شهادة خبرة مهنية من مركز Be Gold للتغذية والتجميل - توثيق للخبرة العملية والإنجازات المهنية.',
  },
];

/**
 * Get featured certificate
 */
export const getFeaturedCertificate = (): Certificate | undefined => {
  return certificates.find((cert) => cert.featured);
};

/**
 * Get certificates by category
 */
export const getCertificatesByCategory = (
  category: Certificate['category']
): Certificate[] => {
  return certificates.filter((cert) => cert.category === category);
};
