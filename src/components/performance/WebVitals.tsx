'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '@/lib/vitals';

/**
 * WebVitals Component
 * Monitors Core Web Vitals and reports to console in development
 * In production, you can integrate with analytics services
 */
export default function WebVitals() {
  useEffect(() => {
    reportWebVitals((metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        const colors = {
          good: 'color: green',
          'needs-improvement': 'color: orange',
          poor: 'color: red',
        };
        console.log(
          `%c[Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`,
          colors[metric.rating] || ''
        );
      }

      // In production, send to analytics
      // Example: Google Analytics 4
      // if (typeof window !== 'undefined' && window.gtag) {
      //   window.gtag('event', metric.name, {
      //     event_category: 'Web Vitals',
      //     event_label: metric.id,
      //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //     non_interaction: true,
      //   })
      // }
    });
  }, []);

  // This component doesn't render anything
  return null;
}
