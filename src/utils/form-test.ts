/**
 * Form Validation Testing Utility
 * Comprehensive test cases for contact form validation
 */

import { contactFormSchema } from '@/lib/schemas';

interface TestCase {
  field: string;
  value: string;
  shouldPass: boolean;
  description: string;
}

/**
 * Form validation test cases
 */
export const formTestCases: TestCase[] = [
  // Full Name tests
  {
    field: 'fullName',
    value: '',
    shouldPass: false,
    description: 'Empty name should fail',
  },
  {
    field: 'fullName',
    value: 'AB',
    shouldPass: false,
    description: 'Name < 3 chars should fail',
  },
  {
    field: 'fullName',
    value: 'Dr. Jehan Mostafa',
    shouldPass: true,
    description: 'Valid name should pass',
  },
  {
    field: 'fullName',
    value: 'A'.repeat(101),
    shouldPass: false,
    description: 'Name > 100 chars should fail',
  },

  // Age tests
  {
    field: 'age',
    value: '',
    shouldPass: false,
    description: 'Empty age should fail',
  },
  {
    field: 'age',
    value: '0',
    shouldPass: false,
    description: 'Age = 0 should fail',
  },
  {
    field: 'age',
    value: '121',
    shouldPass: false,
    description: 'Age > 120 should fail',
  },
  {
    field: 'age',
    value: '25',
    shouldPass: true,
    description: 'Valid age should pass',
  },
  {
    field: 'age',
    value: 'abc',
    shouldPass: false,
    description: 'Non-numeric age should fail',
  },

  // Occupation tests
  {
    field: 'occupation',
    value: '',
    shouldPass: false,
    description: 'Empty occupation should fail',
  },
  {
    field: 'occupation',
    value: 'A',
    shouldPass: false,
    description: 'Occupation < 2 chars should fail',
  },
  {
    field: 'occupation',
    value: 'Software Engineer',
    shouldPass: true,
    description: 'Valid occupation should pass',
  },

  // Activity Level tests
  {
    field: 'activityLevel',
    value: '',
    shouldPass: false,
    description: 'Empty activity level should fail',
  },
  {
    field: 'activityLevel',
    value: 'invalid',
    shouldPass: false,
    description: 'Invalid activity level should fail',
  },
  {
    field: 'activityLevel',
    value: 'sedentary',
    shouldPass: true,
    description: 'Valid activity level should pass',
  },
  {
    field: 'activityLevel',
    value: 'moderate',
    shouldPass: true,
    description: 'Moderate activity should pass',
  },

  // Phone tests
  {
    field: 'phone',
    value: '',
    shouldPass: false,
    description: 'Empty phone should fail',
  },
  {
    field: 'phone',
    value: '123',
    shouldPass: false,
    description: 'Invalid phone format should fail',
  },
  {
    field: 'phone',
    value: '+201234567890',
    shouldPass: true,
    description: 'Egyptian phone +20 should pass',
  },
  {
    field: 'phone',
    value: '01234567890',
    shouldPass: true,
    description: 'Egyptian phone 01X should pass',
  },
  {
    field: 'phone',
    value: '+11234567890',
    shouldPass: false,
    description: 'Non-Egyptian phone should fail',
  },

  // Email tests
  {
    field: 'email',
    value: '',
    shouldPass: false,
    description: 'Empty email should fail',
  },
  {
    field: 'email',
    value: 'invalid',
    shouldPass: false,
    description: 'Invalid email should fail',
  },
  {
    field: 'email',
    value: 'test@',
    shouldPass: false,
    description: 'Incomplete email should fail',
  },
  {
    field: 'email',
    value: 'test@example.com',
    shouldPass: true,
    description: 'Valid email should pass',
  },
  {
    field: 'email',
    value: 'user.name+tag@domain.co.uk',
    shouldPass: true,
    description: 'Complex email should pass',
  },

  // Package tests
  {
    field: 'package',
    value: '',
    shouldPass: false,
    description: 'Empty package should fail',
  },
  {
    field: 'package',
    value: 'invalid',
    shouldPass: false,
    description: 'Invalid package should fail',
  },
  {
    field: 'package',
    value: 'initial',
    shouldPass: true,
    description: 'Initial package should pass',
  },
  {
    field: 'package',
    value: 'monthly',
    shouldPass: true,
    description: 'Monthly package should pass',
  },
  {
    field: 'package',
    value: '3month',
    shouldPass: true,
    description: '3-month package should pass',
  },
  {
    field: 'package',
    value: '6month',
    shouldPass: true,
    description: '6-month package should pass',
  },

  // Notes tests (optional)
  {
    field: 'notes',
    value: '',
    shouldPass: true,
    description: 'Empty notes should pass (optional)',
  },
  {
    field: 'notes',
    value: 'Some notes',
    shouldPass: true,
    description: 'Valid notes should pass',
  },
  {
    field: 'notes',
    value: 'A'.repeat(501),
    shouldPass: false,
    description: 'Notes > 500 chars should fail',
  },
];

/**
 * Run form validation tests
 */
export function runFormTests(): {
  passed: number;
  failed: number;
  results: Array<TestCase & { result: boolean }>;
} {
  const validFormData = {
    fullName: 'Dr. Jehan Mostafa',
    age: '30',
    occupation: 'Nutritionist',
    activityLevel: 'moderate' as const,
    phone: '+201234567890',
    email: 'test@example.com',
    package: 'monthly' as const,
    notes: '',
  };

  const results = formTestCases.map((testCase) => {
    const testData = {
      ...validFormData,
      [testCase.field]: testCase.value,
    };

    try {
      contactFormSchema.parse(testData);
      return { ...testCase, result: testCase.shouldPass };
    } catch {
      return { ...testCase, result: !testCase.shouldPass };
    }
  });

  const passed = results.filter((r) => r.result).length;
  const failed = results.filter((r) => !r.result).length;

  return { passed, failed, results };
}

/**
 * Print form test results
 */
export function printFormTestReport(): void {
  const { passed, failed, results } = runFormTests();

  console.group('📝 Form Validation Test Report');
  console.log('━'.repeat(60));

  results.forEach((result) => {
    const icon = result.result ? '✅' : '❌';
    console.log(`${icon} ${result.description}`);
    if (!result.result) {
      console.log(`   └─ Field: ${result.field}, Value: "${result.value}"`);
    }
  });

  console.log('━'.repeat(60));
  console.log(`📊 Results: ${passed} passed, ${failed} failed`);
  console.groupEnd();
}

/**
 * Test complete form submission
 */
export async function testFormSubmission(): Promise<boolean> {
  const validData = {
    fullName: 'Test User',
    age: '25',
    occupation: 'Developer',
    activityLevel: 'moderate',
    phone: '+201234567890',
    email: 'test@example.com',
    package: 'monthly',
    notes: 'Test submission',
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validData),
    });

    const result = await response.json();

    console.log('Form Submission Test:');
    console.log(`  Status: ${response.status}`);
    console.log(`  Success: ${result.success}`);
    console.log(
      `  WhatsApp URL: ${result.whatsappUrl ? 'Generated' : 'Missing'}`
    );

    return result.success && !!result.whatsappUrl;
  } catch (error) {
    console.error('Form submission test failed:', error);
    return false;
  }
}

// Export for browser console
if (typeof window !== 'undefined') {
  (window as any).formTest = {
    run: runFormTests,
    print: printFormTestReport,
    testSubmission: testFormSubmission,
  };
}
