import { NextResponse } from 'next/server';
import { uploadRatelimit, getClientIP, checkRateLimit } from '@/lib/ratelimit';

/**
 * ============================================
 * FILE UPLOAD API ROUTE
 * ============================================
 *
 * Handles payment receipt uploads
 * Supports multiple storage backends:
 * 1. Vercel Blob (production - if BLOB_READ_WRITE_TOKEN is set)
 * 2. ImgBB (free image hosting - if IMGBB_API_KEY is set)
 * 3. Base64 fallback (development only)
 */

// Maximum file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed file types
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/pdf',
];

/**
 * Upload to ImgBB (free image hosting)
 */
async function uploadToImgBB(file: File): Promise<string> {
  const apiKey = process.env.IMGBB_API_KEY;

  if (!apiKey) {
    throw new Error('IMGBB_API_KEY not configured');
  }

  // Convert file to base64
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString('base64');

  // Upload to ImgBB
  const formData = new FormData();
  formData.append('key', apiKey);
  formData.append('image', base64);
  formData.append('name', file.name.replace(/[^a-zA-Z0-9.-]/g, '_'));

  const response = await fetch('https://api.imgbb.com/1/upload', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error?.message || 'ImgBB upload failed');
  }

  return result.data.url;
}

/**
 * Convert File to Base64 Data URL (fallback for development)
 */
async function fileToBase64(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString('base64');
  return `data:${file.type};base64,${base64}`;
}

/**
 * POST /api/upload
 *
 * Upload payment receipt file
 */
export async function POST(request: Request) {
  try {
    // ========================================
    // RATE LIMITING
    // ========================================

    const ip = getClientIP(request);
    const { success, remaining, reset } = await checkRateLimit(
      `upload-${ip}`,
      uploadRatelimit
    );

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Too many upload attempts. Please wait a moment and try again.',
          remaining: 0,
          reset: reset,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          },
        }
      );
    }

    // ========================================
    // PARSE FORM DATA
    // ========================================

    const formData = await request.formData();
    const file = formData.get('receipt') as File | null;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: 'No file provided',
        },
        { status: 400 }
      );
    }

    // ========================================
    // VALIDATE FILE SIZE
    // ========================================

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
          details: `Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`,
        },
        { status: 400 }
      );
    }

    // ========================================
    // VALIDATE FILE TYPE
    // ========================================

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Invalid file type. Only JPG, PNG, WebP, and PDF files are allowed.',
          details: `Received: ${file.type}`,
        },
        { status: 400 }
      );
    }

    // ========================================
    // UPLOAD FILE
    // ========================================

    let fileUrl: string;
    let storageUsed: string;

    // Option 1: Vercel Blob (production)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const { put } = await import('@vercel/blob');

      const timestamp = Date.now();
      const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const filename = `receipts/${timestamp}-${sanitizedFilename}`;

      const blob = await put(filename, file, {
        access: 'public',
        addRandomSuffix: true,
      });

      fileUrl = blob.url;
      storageUsed = 'Vercel Blob';
      console.log('✅ File uploaded to Vercel Blob:', fileUrl);
    }
    // Option 2: ImgBB (free image hosting)
    else if (process.env.IMGBB_API_KEY && file.type.startsWith('image/')) {
      fileUrl = await uploadToImgBB(file);
      storageUsed = 'ImgBB';
      console.log('✅ File uploaded to ImgBB:', fileUrl);
    }
    // Option 3: Base64 fallback (development only)
    else {
      console.log(
        '⚠️ No cloud storage configured - using Base64 (image URL will not work in WhatsApp)'
      );
      console.log('   To enable image URLs, set one of:');
      console.log('   - BLOB_READ_WRITE_TOKEN (Vercel Blob)');
      console.log('   - IMGBB_API_KEY (free at api.imgbb.com)');
      fileUrl = await fileToBase64(file);
      storageUsed = 'Base64 (local only)';
    }

    // ========================================
    // RETURN SUCCESS
    // ========================================

    return NextResponse.json(
      {
        success: true,
        url: fileUrl,
        filename: file.name,
        size: file.size,
        type: file.type,
        storage: storageUsed,
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

    console.error('Upload Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to upload file. Please try again.',
        ...(process.env.NODE_ENV === 'development' && {
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/upload
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
