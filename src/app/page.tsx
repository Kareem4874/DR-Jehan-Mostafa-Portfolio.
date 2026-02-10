import { Suspense } from 'react';
import nextDynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import { SectionSkeleton } from '@/components/ui/Skeleton';

// Lazy load sections below the fold for better performance (Code Splitting)
// Each section is loaded only when needed, reducing initial bundle size
const About = nextDynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Certificates = nextDynamic(
  () => import('@/components/sections/Certificates'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const Specializations = nextDynamic(
  () => import('@/components/sections/Specializations'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const Services = nextDynamic(() => import('@/components/sections/Services'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const SocialLinks = nextDynamic(() => import('@/components/sections/SocialLinks'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Footer = nextDynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
});

// Static generation for optimal performance
export const dynamic = 'force-static';
export const revalidate = false;

export default function Home() {
  return (
    <main
      id="main"
      className="min-h-screen overflow-x-hidden bg-gray-50/50 selection:bg-primary/20 selection:text-primary-dark"
    >
      {/* Header - Always rendered immediately */}
      <Header />

      {/* Hero - Priority section, rendered immediately */}
      <Hero />

      {/* Below-the-fold sections with Suspense boundaries */}
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Specializations />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SocialLinks />
      </Suspense>

      {/* Footer */}
      <Footer />
    </main>
  );
}
