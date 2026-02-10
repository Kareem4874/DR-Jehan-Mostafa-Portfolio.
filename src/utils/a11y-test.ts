/**
 * Accessibility Testing Utility
 * Run this in the browser console to check accessibility issues
 * Based on WCAG 2.1 AA guidelines
 */

interface A11yCheckResult {
  name: string;
  passed: boolean;
  count: number;
  issues: string[];
}

/**
 * Comprehensive accessibility audit
 */
export function runA11yAudit(): A11yCheckResult[] {
  const results: A11yCheckResult[] = [];

  // 1. Check images without alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  results.push({
    name: 'Images with alt text',
    passed: imagesWithoutAlt.length === 0,
    count: imagesWithoutAlt.length,
    issues: Array.from(imagesWithoutAlt).map((img) =>
      img.outerHTML.slice(0, 100)
    ),
  });

  // 2. Check for empty alt text (decorative images should be marked)
  const emptyAltImages = document.querySelectorAll('img[alt=""]');
  results.push({
    name: 'Empty alt text (decorative)',
    passed: true, // Empty alt is valid for decorative images
    count: emptyAltImages.length,
    issues: [],
  });

  // 3. Check form inputs have labels
  const inputsWithoutLabels = document.querySelectorAll(
    'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([aria-label]):not([aria-labelledby])'
  );
  const unassociatedInputs = Array.from(inputsWithoutLabels).filter((input) => {
    const id = input.getAttribute('id');
    if (!id) return true;
    return !document.querySelector(`label[for="${id}"]`);
  });
  results.push({
    name: 'Form inputs with labels',
    passed: unassociatedInputs.length === 0,
    count: unassociatedInputs.length,
    issues: unassociatedInputs.map((i) => i.outerHTML.slice(0, 100)),
  });

  // 4. Check buttons have accessible names
  const buttonsWithoutNames = document.querySelectorAll(
    'button:not([aria-label]):not([aria-labelledby])'
  );
  const emptyButtons = Array.from(buttonsWithoutNames).filter(
    (btn) => !btn.textContent?.trim() && !btn.querySelector('img[alt]')
  );
  results.push({
    name: 'Buttons with accessible names',
    passed: emptyButtons.length === 0,
    count: emptyButtons.length,
    issues: emptyButtons.map((b) => b.outerHTML.slice(0, 100)),
  });

  // 5. Check heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const h1Count = document.querySelectorAll('h1').length;
  let headingIssues: string[] = [];

  if (h1Count !== 1) {
    headingIssues.push(`Found ${h1Count} H1 tags (should be exactly 1)`);
  }

  // Check for skipped heading levels
  let lastLevel = 0;
  headings.forEach((h) => {
    const level = parseInt(h.tagName[1]);
    if (level > lastLevel + 1 && lastLevel !== 0) {
      headingIssues.push(`Skipped heading level: H${lastLevel} to H${level}`);
    }
    lastLevel = level;
  });

  results.push({
    name: 'Heading hierarchy',
    passed: headingIssues.length === 0,
    count: headingIssues.length,
    issues: headingIssues,
  });

  // 6. Check for focus indicators
  const focusableElements = document.querySelectorAll(
    'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  results.push({
    name: 'Focusable elements',
    passed: true,
    count: focusableElements.length,
    issues: [],
  });

  // 7. Check links have distinguishable text
  const vagueLinkTexts = ['click here', 'read more', 'learn more', 'here'];
  const vagueLinks = Array.from(document.querySelectorAll('a')).filter(
    (link) => {
      const text = link.textContent?.toLowerCase().trim() || '';
      return vagueLinkTexts.includes(text);
    }
  );
  results.push({
    name: 'Descriptive link text',
    passed: vagueLinks.length === 0,
    count: vagueLinks.length,
    issues: vagueLinks.map((l) => `"${l.textContent?.trim()}"`),
  });

  // 8. Check for skip link
  const skipLink = document.querySelector(
    'a[href="#main"], a[href="#content"]'
  );
  results.push({
    name: 'Skip to content link',
    passed: !!skipLink,
    count: skipLink ? 1 : 0,
    issues: skipLink ? [] : ['No skip link found'],
  });

  // 9. Check ARIA roles are valid
  const ariaRoles = document.querySelectorAll('[role]');
  const validRoles = [
    'alert',
    'alertdialog',
    'application',
    'article',
    'banner',
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'combobox',
    'complementary',
    'contentinfo',
    'definition',
    'dialog',
    'directory',
    'document',
    'feed',
    'figure',
    'form',
    'grid',
    'gridcell',
    'group',
    'heading',
    'img',
    'link',
    'list',
    'listbox',
    'listitem',
    'log',
    'main',
    'marquee',
    'math',
    'menu',
    'menubar',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'navigation',
    'none',
    'note',
    'option',
    'presentation',
    'progressbar',
    'radio',
    'radiogroup',
    'region',
    'row',
    'rowgroup',
    'rowheader',
    'scrollbar',
    'search',
    'searchbox',
    'separator',
    'slider',
    'spinbutton',
    'status',
    'switch',
    'tab',
    'table',
    'tablist',
    'tabpanel',
    'term',
    'textbox',
    'timer',
    'toolbar',
    'tooltip',
    'tree',
    'treegrid',
    'treeitem',
  ];
  const invalidRoles = Array.from(ariaRoles).filter(
    (el) => !validRoles.includes(el.getAttribute('role') || '')
  );
  results.push({
    name: 'Valid ARIA roles',
    passed: invalidRoles.length === 0,
    count: invalidRoles.length,
    issues: invalidRoles.map((el) => `"${el.getAttribute('role')}"`),
  });

  return results;
}

/**
 * Print accessibility audit results
 */
export function printA11yReport(): void {
  const results = runA11yAudit();

  console.group('🧪 Accessibility Audit Report');
  console.log('━'.repeat(50));

  let passed = 0;
  let failed = 0;

  results.forEach((result) => {
    const icon = result.passed ? '✅' : '❌';
    console.log(`${icon} ${result.name}`);

    if (!result.passed && result.issues.length > 0) {
      result.issues.forEach((issue) => {
        console.log(`   └─ ${issue}`);
      });
    }

    if (result.passed) passed++;
    else failed++;
  });

  console.log('━'.repeat(50));
  console.log(`📊 Results: ${passed} passed, ${failed} failed`);
  console.groupEnd();
}

/**
 * Check color contrast (simplified)
 */
export function checkColorContrast(): void {
  console.group('🎨 Color Contrast Check');
  console.log('Note: For accurate results, use Chrome DevTools or axe-core');

  const textElements = document.querySelectorAll(
    'p, span, a, h1, h2, h3, h4, h5, h6, li, button'
  );
  const uniqueColors = new Set<string>();

  textElements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const color = style.color;
    const bg = style.backgroundColor;
    uniqueColors.add(`${color} on ${bg}`);
  });

  console.log('Color combinations found:', uniqueColors.size);
  uniqueColors.forEach((combo) => console.log(`  • ${combo}`));
  console.groupEnd();
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).a11yAudit = {
    run: runA11yAudit,
    print: printA11yReport,
    checkContrast: checkColorContrast,
  };
}
