/**
 * Core Web Vitals Monitoring
 * Tracks LCP, INP, CLS, FCP, and TTFB metrics
 */

type MetricRating = 'good' | 'needs-improvement' | 'poor';

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  rating: MetricRating;
}

type MetricHandler = (metric: WebVitalMetric) => void;

/**
 * Report Web Vitals to console or analytics
 * @param onPerfEntry - Callback function to handle metric data
 */
export function reportWebVitals(onPerfEntry?: MetricHandler) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import web-vitals for code splitting
    import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      // Cumulative Layout Shift
      onCLS(onPerfEntry);
      // Interaction to Next Paint (replaced FID)
      onINP(onPerfEntry);
      // Largest Contentful Paint
      onLCP(onPerfEntry);
      // First Contentful Paint
      onFCP(onPerfEntry);
      // Time to First Byte
      onTTFB(onPerfEntry);
    });
  }
}

/**
 * Log Web Vitals to console with color-coded ratings
 */
export function logWebVitals() {
  reportWebVitals((metric) => {
    const colors = {
      good: '\x1b[32m', // Green
      'needs-improvement': '\x1b[33m', // Yellow
      poor: '\x1b[31m', // Red
    };
    const reset = '\x1b[0m';
    const color = colors[metric.rating] || reset;

    console.log(
      `${color}[Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})${reset}`
    );
  });
}

/**
 * Get performance rating based on metric thresholds
 */
export function getMetricRating(name: string, value: number): MetricRating {
  const thresholds: Record<string, { good: number; poor: number }> = {
    LCP: { good: 2500, poor: 4000 },
    INP: { good: 200, poor: 500 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  };

  const threshold = thresholds[name];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}
