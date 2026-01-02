/**
 * SEO Verification Utility
 * Run this in the browser console to check SEO elements
 */

interface SEOCheckResult {
  name: string;
  passed: boolean;
  value: string | null;
  recommendation?: string;
}

/**
 * Comprehensive SEO audit
 */
export function runSEOAudit(): SEOCheckResult[] {
  const results: SEOCheckResult[] = [];

  // 1. Title tag
  const title = document.querySelector('title');
  const titleText = title?.textContent || '';
  results.push({
    name: 'Title Tag',
    passed: !!titleText && titleText.length <= 60 && titleText.length >= 30,
    value: titleText,
    recommendation:
      titleText.length > 60
        ? 'Title too long (max 60 chars)'
        : titleText.length < 30
          ? 'Title too short (min 30 chars)'
          : undefined,
  });

  // 2. Meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  const descText = metaDesc?.getAttribute('content') || '';
  results.push({
    name: 'Meta Description',
    passed: !!descText && descText.length <= 160 && descText.length >= 50,
    value: descText.slice(0, 100) + (descText.length > 100 ? '...' : ''),
    recommendation:
      descText.length > 160
        ? 'Description too long (max 160 chars)'
        : descText.length < 50
          ? 'Description too short (min 50 chars)'
          : undefined,
  });

  // 3. H1 tag
  const h1Tags = document.querySelectorAll('h1');
  results.push({
    name: 'H1 Tag (single)',
    passed: h1Tags.length === 1,
    value:
      h1Tags.length === 1
        ? h1Tags[0].textContent?.slice(0, 50) || ''
        : `${h1Tags.length} H1 tags found`,
    recommendation:
      h1Tags.length !== 1 ? 'Should have exactly one H1 tag' : undefined,
  });

  // 4. Canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  results.push({
    name: 'Canonical URL',
    passed: !!canonical,
    value: canonical?.getAttribute('href') || null,
    recommendation: !canonical
      ? 'Add canonical URL to prevent duplicate content issues'
      : undefined,
  });

  // 5. Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');

  results.push({
    name: 'OG:Title',
    passed: !!ogTitle,
    value: ogTitle?.getAttribute('content') || null,
  });

  results.push({
    name: 'OG:Description',
    passed: !!ogDesc,
    value: ogDesc?.getAttribute('content')?.slice(0, 50) || null,
  });

  results.push({
    name: 'OG:Image',
    passed: !!ogImage,
    value: ogImage?.getAttribute('content') || null,
  });

  // 6. Twitter Card tags
  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');

  results.push({
    name: 'Twitter Card',
    passed: !!twitterCard,
    value: twitterCard?.getAttribute('content') || null,
  });

  // 7. Viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  results.push({
    name: 'Viewport Meta',
    passed: !!viewport,
    value: viewport?.getAttribute('content') || null,
  });

  // 8. Language attribute
  const htmlLang = document.documentElement.getAttribute('lang');
  results.push({
    name: 'HTML Lang Attribute',
    passed: !!htmlLang,
    value: htmlLang,
    recommendation: !htmlLang
      ? 'Add lang attribute to HTML element'
      : undefined,
  });

  // 9. Robots meta tag
  const robots = document.querySelector('meta[name="robots"]');
  results.push({
    name: 'Robots Meta',
    passed: !!robots,
    value:
      robots?.getAttribute('content') || 'Not set (defaults to index, follow)',
  });

  // 10. Image alt text coverage
  const images = document.querySelectorAll('img');
  const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])');
  const altCoverage =
    images.length > 0
      ? Math.round((imagesWithAlt.length / images.length) * 100)
      : 100;
  results.push({
    name: 'Image Alt Coverage',
    passed: altCoverage >= 90,
    value: `${altCoverage}% (${imagesWithAlt.length}/${images.length})`,
    recommendation:
      altCoverage < 90 ? 'Add alt text to all meaningful images' : undefined,
  });

  // 11. Internal links
  const internalLinks = document.querySelectorAll(
    'a[href^="/"], a[href^="#"], a[href^="./"]'
  );
  results.push({
    name: 'Internal Links',
    passed: internalLinks.length > 0,
    value: `${internalLinks.length} links found`,
  });

  // 12. External links with rel
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  const safeExternalLinks = document.querySelectorAll(
    'a[target="_blank"][rel*="noopener"]'
  );
  results.push({
    name: 'External Link Security',
    passed: externalLinks.length === safeExternalLinks.length,
    value: `${safeExternalLinks.length}/${externalLinks.length} have rel="noopener"`,
    recommendation:
      externalLinks.length !== safeExternalLinks.length
        ? 'Add rel="noopener noreferrer" to external links'
        : undefined,
  });

  return results;
}

/**
 * Print SEO audit results
 */
export function printSEOReport(): void {
  const results = runSEOAudit();

  console.group('🔍 SEO Audit Report');
  console.log('━'.repeat(60));

  let passed = 0;
  let failed = 0;

  results.forEach((result) => {
    const icon = result.passed ? '✅' : '❌';
    console.log(`${icon} ${result.name}`);

    if (result.value) {
      console.log(`   └─ Value: ${result.value}`);
    }

    if (result.recommendation) {
      console.log(`   └─ ⚠️ ${result.recommendation}`);
    }

    if (result.passed) passed++;
    else failed++;
  });

  console.log('━'.repeat(60));
  console.log(`📊 Results: ${passed} passed, ${failed} issues`);
  console.groupEnd();
}

/**
 * Generate structured data for the page
 */
export function generateStructuredData(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jehan Mostafa',
    jobTitle: 'Clinical Nutritionist',
    description:
      'Expert clinical nutrition specialist with 5+ years of experience',
    url: window.location.href,
    sameAs: [
      // Add social media URLs
    ],
    knowsAbout: [
      'Clinical Nutrition',
      'Weight Management',
      'Sports Nutrition',
      'Therapeutic Diets',
    ],
  };
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).seoAudit = {
    run: runSEOAudit,
    print: printSEOReport,
    structuredData: generateStructuredData,
  };
}
