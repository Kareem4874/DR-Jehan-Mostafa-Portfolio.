import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SITE_INFO } from '@/lib/constants';
import PerformanceMonitor from '@/components/performance/PerformanceMonitor';

// Configure Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Configure Poppins font for headings
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: `${SITE_INFO.name} | ${SITE_INFO.title}`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    'أخصائي تغذية علاجية',
    'تغذية علاجية',
    'إدارة الوزن',
    'تغذية الأطفال',
    'استشارات صحية',
    ' EISNO معتمد',
    'د. جيهان مصطفى',
    'تغذية مصر',
    'استشارة تغذية اونلاين',
  ],
  authors: [{ name: SITE_INFO.name }],
  creator: SITE_INFO.name,
  publisher: SITE_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: SITE_INFO.url,
    title: `${SITE_INFO.name} | ${SITE_INFO.title}`,
    description: SITE_INFO.description,
    siteName: SITE_INFO.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.name} - ${SITE_INFO.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_INFO.name} | ${SITE_INFO.title}`,
    description: SITE_INFO.description,
    images: ['/images/og-image.jpg'],
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
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Core Web Vitals monitoring (only renders in development) */}
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
