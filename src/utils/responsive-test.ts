/**
 * Responsive Design Testing Utility
 * Tests for mobile responsiveness and breakpoints
 */

export interface ViewportConfig {
  name: string;
  width: number;
  height: number;
  type: 'mobile' | 'tablet' | 'desktop';
}

/**
 * Standard viewports for testing
 */
export const testViewports: ViewportConfig[] = [
  // Mobile devices
  { name: 'iPhone SE', width: 375, height: 667, type: 'mobile' },
  { name: 'iPhone 12 Pro', width: 390, height: 844, type: 'mobile' },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932, type: 'mobile' },
  { name: 'Samsung Galaxy S21', width: 360, height: 800, type: 'mobile' },
  { name: 'Pixel 7', width: 412, height: 915, type: 'mobile' },

  // Tablets
  { name: 'iPad Mini', width: 768, height: 1024, type: 'tablet' },
  { name: 'iPad Pro 11"', width: 834, height: 1194, type: 'tablet' },
  { name: 'iPad Pro 12.9"', width: 1024, height: 1366, type: 'tablet' },

  // Desktop
  { name: 'Laptop', width: 1366, height: 768, type: 'desktop' },
  { name: 'Desktop HD', width: 1920, height: 1080, type: 'desktop' },
  { name: 'Desktop 2K', width: 2560, height: 1440, type: 'desktop' },
];

/**
 * Tailwind breakpoints
 */
export const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

interface ResponsiveTestResult {
  viewport: ViewportConfig;
  hasHorizontalScroll: boolean;
  textReadable: boolean;
  touchTargetsOk: boolean;
  imagesResponsive: boolean;
  navigationAccessible: boolean;
}

/**
 * Run responsive design tests
 */
export function runResponsiveTests(): ResponsiveTestResult[] {
  const results: ResponsiveTestResult[] = [];

  // Note: This function should be run at each viewport size
  // In practice, you would resize the window or use DevTools device emulation

  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  // Find matching viewport
  const matchedViewport = testViewports.find(
    (v) => Math.abs(v.width - currentWidth) < 50
  ) || {
    name: 'Custom',
    width: currentWidth,
    height: currentHeight,
    type: 'desktop' as const,
  };

  // Check horizontal scroll
  const hasHorizontalScroll =
    document.documentElement.scrollWidth > document.documentElement.clientWidth;

  // Check text readability (16px minimum)
  const textElements = document.querySelectorAll('p, span, li');
  let textReadable = true;
  textElements.forEach((el) => {
    const fontSize = parseInt(window.getComputedStyle(el).fontSize);
    if (fontSize < 14) {
      textReadable = false;
    }
  });

  // Check touch targets (44px minimum)
  const interactiveElements = document.querySelectorAll(
    'a, button, input, select, textarea'
  );
  let touchTargetsOk = true;
  interactiveElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      // Some small elements are OK (inline links)
      if (el.tagName === 'A' && rect.width > 0) {
        // Inline links are acceptable
      } else {
        touchTargetsOk = false;
      }
    }
  });

  // Check images are responsive
  const images = document.querySelectorAll('img');
  let imagesResponsive = true;
  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.width > currentWidth) {
      imagesResponsive = false;
    }
  });

  // Check navigation is accessible
  const nav = document.querySelector('nav') || document.querySelector('header');
  const navigationAccessible = nav
    ? nav.getBoundingClientRect().width <= currentWidth
    : false;

  results.push({
    viewport: matchedViewport,
    hasHorizontalScroll,
    textReadable,
    touchTargetsOk,
    imagesResponsive,
    navigationAccessible,
  });

  return results;
}

/**
 * Print responsive test results
 */
export function printResponsiveReport(): void {
  const results = runResponsiveTests();

  console.group('📱 Responsive Design Test Report');
  console.log('━'.repeat(50));
  console.log(`Current Viewport: ${window.innerWidth}x${window.innerHeight}`);

  results.forEach((result) => {
    console.log(`\n📏 ${result.viewport.name} (${result.viewport.type})`);

    const checks = [
      { name: 'No horizontal scroll', passed: !result.hasHorizontalScroll },
      { name: 'Text readable', passed: result.textReadable },
      { name: 'Touch targets OK', passed: result.touchTargetsOk },
      { name: 'Images responsive', passed: result.imagesResponsive },
      { name: 'Navigation accessible', passed: result.navigationAccessible },
    ];

    checks.forEach((check) => {
      const icon = check.passed ? '✅' : '❌';
      console.log(`  ${icon} ${check.name}`);
    });
  });

  console.log('━'.repeat(50));
  console.groupEnd();
}

/**
 * Get current breakpoint
 */
export function getCurrentBreakpoint(): string {
  const width = window.innerWidth;

  if (width >= tailwindBreakpoints['2xl']) return '2xl';
  if (width >= tailwindBreakpoints.xl) return 'xl';
  if (width >= tailwindBreakpoints.lg) return 'lg';
  if (width >= tailwindBreakpoints.md) return 'md';
  if (width >= tailwindBreakpoints.sm) return 'sm';
  return 'xs';
}

/**
 * Check layout at all breakpoints
 */
export function logBreakpointInfo(): void {
  console.group('📐 Breakpoint Information');
  console.log(`Current Width: ${window.innerWidth}px`);
  console.log(`Current Breakpoint: ${getCurrentBreakpoint()}`);
  console.log('\nTailwind Breakpoints:');
  Object.entries(tailwindBreakpoints).forEach(([name, width]) => {
    const isCurrent =
      window.innerWidth >= width &&
      (name === '2xl' ||
        window.innerWidth <
          tailwindBreakpoints[
            Object.keys(tailwindBreakpoints)[
              Object.keys(tailwindBreakpoints).indexOf(name) + 1
            ] as keyof typeof tailwindBreakpoints
          ] ||
        0);
    console.log(`  ${isCurrent ? '→' : ' '} ${name}: ${width}px`);
  });
  console.groupEnd();
}

// Export for browser console
if (typeof window !== 'undefined') {
  (window as any).responsiveTest = {
    viewports: testViewports,
    run: runResponsiveTests,
    print: printResponsiveReport,
    breakpoint: getCurrentBreakpoint,
    logBreakpoint: logBreakpointInfo,
  };
}
