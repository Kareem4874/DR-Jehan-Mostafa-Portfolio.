import { Metadata } from 'next';
import { SITE_INFO } from '@/lib/constants';

// Default site metadata
export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_INFO.name} | ${SITE_INFO.title}`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    'clinical nutritionist',
    'nutrition specialist',
    'dietitian',
    'weight management',
    'therapeutic nutrition',
    'sports nutrition',
    'Egypt',
    'Cairo',
    'Dr. Jehan Mostafa',
    'EISNO',
    'online consultation',
    'nutrition plan',
    'healthy eating',
    'weight loss',
    'weight gain',
    'clinical nutrition',
    'diet plan',
  ],
  authors: [{ name: SITE_INFO.name }],
  creator: SITE_INFO.name,
  publisher: SITE_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_INFO.name} | ${SITE_INFO.title}`,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.name} - ${SITE_INFO.title}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_INFO.name} | ${SITE_INFO.title}`,
    description: SITE_INFO.description,
    images: ['/og-image.jpg'],
    creator: '@drjehanmostafa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  category: 'health',
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'Home',
    description: SITE_INFO.description,
  },
  about: {
    title: 'About',
    description: `Learn more about ${SITE_INFO.name}, a certified clinical nutritionist with 5 years of experience.`,
  },
  certificates: {
    title: 'Certificates',
    description: `Professional certifications and credentials of ${SITE_INFO.name}.`,
  },
  services: {
    title: 'Services',
    description: `Nutrition services offered by ${SITE_INFO.name} including consultations, programs, and workshops.`,
  },
  contact: {
    title: 'Contact',
    description: `Book a consultation with ${SITE_INFO.name} via WhatsApp or contact form.`,
  },
};
