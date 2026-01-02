import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { formatWhatsAppMessage, createWhatsAppUrl } from '@/lib/whatsapp';
import { ratelimit, getClientIP, checkRateLimit } from '@/lib/ratelimit';

/**
 * ============================================
 * CONTACT FORM API ROUTE
 * ============================================
 *
 * Processes booking form submissions
 *
 * Flow:
 * 1. Rate limiting
 * 2. Data validation
 * 3. WhatsApp message formatting
 * 4. Return WhatsApp URL
 */

/**
 * POST /api/contact
 *
 * Handle contact form submission
 */
export async function POST(request: Request) {
  try {
    // ========================================
    // RATE LIMITING
    // ========================================

    const ip = getClientIP(request);
    const { success, remaining, reset } = await checkRateLimit(
      `contact-${ip}`,
      ratelimit
    );

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a moment and try again.',
          remaining: 0,
          reset: reset,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          },
        }
      );
    }

    // ========================================
    // PARSE REQUEST BODY
    // ========================================

    const body = await request.json();

    // Extract receipt URL if provided - REMOVED
    // const receiptUrl = body.receiptUrl as string | undefined

    // ========================================
    // VALIDATE WITH ZOD SCHEMA
    // ========================================

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      const fieldErrors = result.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          error: 'Please check your form for errors',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    // ========================================
    // DATA IS VALID - PROCESS REQUEST
    // ========================================

    const validData = result.data;

    // Format WhatsApp message
    const message = formatWhatsAppMessage(validData);

    // Create WhatsApp URL
    let whatsappUrl: string;
    try {
      whatsappUrl = createWhatsAppUrl(message);
    } catch (error) {
      console.error('WhatsApp URL Error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'WhatsApp configuration error. Please contact support.',
        },
        { status: 500 }
      );
    }

    // Log successful submission (optional - remove in production if not needed)
    console.log('📩 New booking request:', {
      name: validData.fullName,
      email: validData.email,
      package: validData.package,
      timestamp: new Date().toISOString(),
    });

    // ========================================
    // RETURN SUCCESS RESPONSE
    // ========================================

    return NextResponse.json(
      {
        success: true,
        whatsappUrl,
        message: 'Form submitted successfully! Redirecting to WhatsApp...',
      },
      {
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
        },
      }
    );
  } catch (error) {
    // ========================================
    // ERROR HANDLING
    // ========================================

    console.error('Contact API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error:
          'An error occurred while processing your request. Please try again.',
        // Only show detailed error in development
        ...(process.env.NODE_ENV === 'development' && {
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/contact
 *
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
