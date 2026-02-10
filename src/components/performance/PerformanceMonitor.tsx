'use client';

import dynamic from 'next/dynamic';

// Dynamically import WebVitals with no SSR
const WebVitals = dynamic(() => import('./WebVitals'), {
  ssr: false,
});

/**
 * Client-side wrapper for performance monitoring components
 * This component only renders in development mode
 */
export default function PerformanceMonitor() {
  // Only render WebVitals in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return <WebVitals />;
}
