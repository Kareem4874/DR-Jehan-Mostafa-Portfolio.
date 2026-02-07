import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

/**
 * ============================================
 * RATE LIMITER
 * ============================================
 *
 * Protects API routes from spam and abuse
 * Uses Upstash Redis for distributed rate limiting
 */

/**
 * Initialize Redis client
 * Returns null if credentials are not configured
 */
const getRedis = () => {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    console.warn(
      'Upstash Redis credentials not configured. Rate limiting disabled.'
    );
    return null;
  }

  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
};

const redis = getRedis();

/**
 * Create rate limiter instance
 *
 * Configuration:
 * - 5 requests per minute per IP
 * - Sliding window algorithm
 * - Analytics enabled
 * - Custom prefix for this app
 */
export const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per 1 minute
      analytics: true,
      prefix: 'dr-jehan-portfolio',
    })
  : null;

/**
 * Rate limiter for file uploads
 * More restrictive (3 uploads per 5 minutes)
 */
export const uploadRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '5 m'), // 3 uploads per 5 minutes
      analytics: true,
      prefix: 'dr-jehan-upload',
    })
  : null;

/**
 * Get client IP address from request
 *
 * @param request - Next.js request object
 * @returns Client IP or 'anonymous'
 */
export function getClientIP(request: Request): string {
  // Try to get real IP from headers (works with proxies)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');

  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  // Fallback
  return 'anonymous';
}

/**
 * Check rate limit for a given identifier
 * Returns success: true if rate limiting is disabled
 */
export async function checkRateLimit(
  identifier: string,
  limiter: Ratelimit | null = ratelimit
) {
  if (!limiter) {
    return { success: true, remaining: 999, reset: Date.now() };
  }

  return await limiter.limit(identifier);
}
