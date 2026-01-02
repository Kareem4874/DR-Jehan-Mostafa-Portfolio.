/**
 * Comprehensive Test Runner
 * Combines all testing utilities for Phase 7 QA
 * Run in browser console: testRunner.runAll()
 */

import { runA11yAudit, printA11yReport } from './a11y-test';
import { runSEOAudit, printSEOReport } from './seo-test';
import { runResponsiveTests, printResponsiveReport } from './responsive-test';

export interface TestSuiteResults {
  timestamp: string;
  viewport: { width: number; height: number };
  userAgent: string;
  accessibility: {
    passed: number;
    failed: number;
    score: number;
  };
  seo: {
    passed: number;
    failed: number;
    score: number;
  };
  responsive: {
    passed: number;
    failed: number;
    score: number;
  };
  overall: {
    passed: number;
    failed: number;
    score: number;
    grade: string;
  };
}

/**
 * Calculate score from passed/failed
 */
function calculateScore(passed: number, failed: number): number {
  const total = passed + failed;
  return total > 0 ? Math.round((passed / total) * 100) : 100;
}

/**
 * Get grade from score
 */
function getGrade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

/**
 * Run all tests and return consolidated results
 */
export function runAllTests(): TestSuiteResults {
  // Accessibility tests
  const a11yResults = runA11yAudit();
  const a11yPassed = a11yResults.filter((r) => r.passed).length;
  const a11yFailed = a11yResults.filter((r) => !r.passed).length;

  // SEO tests
  const seoResults = runSEOAudit();
  const seoPassed = seoResults.filter((r) => r.passed).length;
  const seoFailed = seoResults.filter((r) => !r.passed).length;

  // Responsive tests
  const responsiveResults = runResponsiveTests();
  let responsivePassed = 0;
  let responsiveFailed = 0;
  responsiveResults.forEach((r) => {
    if (!r.hasHorizontalScroll) responsivePassed++;
    else responsiveFailed++;
    if (r.textReadable) responsivePassed++;
    else responsiveFailed++;
    if (r.touchTargetsOk) responsivePassed++;
    else responsiveFailed++;
    if (r.imagesResponsive) responsivePassed++;
    else responsiveFailed++;
    if (r.navigationAccessible) responsivePassed++;
    else responsiveFailed++;
  });

  // Calculate scores
  const a11yScore = calculateScore(a11yPassed, a11yFailed);
  const seoScore = calculateScore(seoPassed, seoFailed);
  const responsiveScore = calculateScore(responsivePassed, responsiveFailed);

  // Overall score (weighted average)
  const overallPassed = a11yPassed + seoPassed + responsivePassed;
  const overallFailed = a11yFailed + seoFailed + responsiveFailed;
  const overallScore = Math.round(
    a11yScore * 0.35 + seoScore * 0.35 + responsiveScore * 0.3
  );

  return {
    timestamp: new Date().toISOString(),
    viewport: { width: window.innerWidth, height: window.innerHeight },
    userAgent: navigator.userAgent,
    accessibility: {
      passed: a11yPassed,
      failed: a11yFailed,
      score: a11yScore,
    },
    seo: {
      passed: seoPassed,
      failed: seoFailed,
      score: seoScore,
    },
    responsive: {
      passed: responsivePassed,
      failed: responsiveFailed,
      score: responsiveScore,
    },
    overall: {
      passed: overallPassed,
      failed: overallFailed,
      score: overallScore,
      grade: getGrade(overallScore),
    },
  };
}

/**
 * Print comprehensive test report
 */
export function printFullReport(): void {
  console.clear();
  console.log(`
╔════════════════════════════════════════════════════════════╗
║           🧪 PHASE 7: QA TEST SUITE                        ║
║           Dr. Jehan Portfolio - Quality Assurance          ║
╚════════════════════════════════════════════════════════════╝
  `);

  console.log(`📅 ${new Date().toLocaleString()}`);
  console.log(`📏 Viewport: ${window.innerWidth}x${window.innerHeight}`);
  console.log(`🌐 Browser: ${navigator.userAgent.split(' ').pop()}`);
  console.log('');

  // Run individual reports
  printA11yReport();
  console.log('');
  printSEOReport();
  console.log('');
  printResponsiveReport();
  console.log('');

  // Summary
  const results = runAllTests();

  console.log(`
╔════════════════════════════════════════════════════════════╗
║                    📊 SUMMARY                               ║
╠════════════════════════════════════════════════════════════╣
║  ♿ Accessibility:  ${results.accessibility.score.toString().padStart(3)}% (${results.accessibility.passed}/${results.accessibility.passed + results.accessibility.failed} passed)
║  🔍 SEO:           ${results.seo.score.toString().padStart(3)}% (${results.seo.passed}/${results.seo.passed + results.seo.failed} passed)
║  📱 Responsive:    ${results.responsive.score.toString().padStart(3)}% (${results.responsive.passed}/${results.responsive.passed + results.responsive.failed} passed)
╠════════════════════════════════════════════════════════════╣
║  🏆 Overall Score: ${results.overall.score}% - Grade: ${results.overall.grade}
╚════════════════════════════════════════════════════════════╝
  `);

  // Recommendations
  if (results.overall.score < 90) {
    console.log('\n⚠️ Recommendations:');
    if (results.accessibility.score < 90) {
      console.log(
        '  • Fix accessibility issues (check a11yAudit.print() for details)'
      );
    }
    if (results.seo.score < 90) {
      console.log(
        '  • Improve SEO elements (check seoAudit.print() for details)'
      );
    }
    if (results.responsive.score < 90) {
      console.log('  • Fix responsive design issues');
    }
  } else {
    console.log('\n✨ Excellent! Your site meets all quality standards.');
  }
}

/**
 * Navigation test utility
 */
export function testNavigation(): void {
  console.group('🧭 Navigation Test');

  const navLinks = document.querySelectorAll('nav a, header a');
  console.log(`Found ${navLinks.length} navigation links`);

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const text = link.textContent?.trim();
    const isInternal = href?.startsWith('#') || href?.startsWith('/');
    console.log(`  ${isInternal ? '🏠' : '🔗'} "${text}" → ${href}`);
  });

  console.groupEnd();
}

/**
 * Performance quick check
 */
export function quickPerformanceCheck(): void {
  console.group('⚡ Quick Performance Check');

  // Check for render-blocking resources
  const scripts = document.querySelectorAll(
    'script:not([async]):not([defer]):not([type="module"])'
  );
  console.log(`Script tags (potentially blocking): ${scripts.length}`);

  // Check image optimization
  const images = document.querySelectorAll('img');
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  console.log(
    `Images: ${images.length} total, ${lazyImages.length} lazy-loaded`
  );

  // Check for large DOM
  const allElements = document.querySelectorAll('*');
  console.log(`DOM size: ${allElements.length} elements`);
  if (allElements.length > 1500) {
    console.warn('⚠️ DOM size is large (>1500 elements)');
  }

  // Navigation timing (if available)
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`Page load time: ${loadTime}ms`);
  }

  console.groupEnd();
}

// Export for browser console
if (typeof window !== 'undefined') {
  (window as any).testRunner = {
    runAll: runAllTests,
    printFull: printFullReport,
    testNav: testNavigation,
    quickPerf: quickPerformanceCheck,

    // Individual test modules
    a11y: (window as any).a11yAudit,
    seo: (window as any).seoAudit,
    responsive: (window as any).responsiveTest,
    form: (window as any).formTest,
  };

  console.log(
    '🧪 Test Runner loaded! Run testRunner.printFull() for full report'
  );
}
