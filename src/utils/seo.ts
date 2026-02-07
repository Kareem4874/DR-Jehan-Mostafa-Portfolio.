import { Metadata } from 'next';
import { SITE_INFO } from '@/lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

/**
 * Generate metadata for a page
 */
export function generateMetadata({
  title,
  description = SITE_INFO.description,
  keywords = [],
  image = '/og-image.jpg',
  url = SITE_INFO.url,
  type = 'website',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_INFO.name}`
    : `${SITE_INFO.name} - ${SITE_INFO.title}`;

  const defaultKeywords = [
    'clinical nutritionist',
    'nutrition specialist',
    'dietitian',
    'weight management',
    'therapeutic nutrition',
    'Egypt',
    'Dr. Jehan Mostafa',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_INFO.name }],
    creator: SITE_INFO.name,
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_INFO.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@drjehanmostafa',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add verification codes when available
      // google: 'google-verification-code',
    },
  };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    email: SITE_INFO.email,
    telephone: SITE_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
    },
    medicalSpecialty: 'Clinical Nutrition',
    priceRange: '$$',
  };
}

/**
 * Generate JSON-LD structured data for professional service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: service.provider || SITE_INFO.name,
      jobTitle: SITE_INFO.title,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Egypt',
    },
  };
}
