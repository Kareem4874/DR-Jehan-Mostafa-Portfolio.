/**
 * Static Data Types
 *
 * Type definitions for static data files.
 * Used in src/data/ directory.
 *
 * @module types/data
 */

import type { SocialPlatform } from './index';

// ============================================================================
// SOCIAL MEDIA LINKS
// ============================================================================

/**
 * Social media link data
 * Used in footer and contact section
 *
 * @example
 * ```typescript
 * const link: SocialLink = {
 *   platform: 'instagram',
 *   url: 'https://instagram.com/drjehan',
 *   icon: '📷',
 *   label: 'Instagram',
 *   username: '@drjehan'
 * }
 * ```
 */
export interface SocialLink {
  /** Platform identifier */
  platform: SocialPlatform;

  /** Full URL to profile */
  url: string;

  /** Emoji, icon name, or icon component */
  icon: string;

  /** Display label */
  label: string;

  /** Brand color (hex or class) */
  color?: string;

  /** Username (optional) */
  username?: string;

  /** Follower count (optional) */
  followers?: string;

  /** Whether to open in new tab */
  external?: boolean;

  /** Order priority for display */
  order?: number;
}

// ============================================================================
// SEO METADATA
// ============================================================================

/**
 * Page metadata for SEO
 * Used in layout.tsx and metadata.ts
 */
export interface PageMetadata {
  /** Page title */
  title: string;

  /** Meta description */
  description: string;

  /** Keywords for SEO */
  keywords: string[];

  /** Open Graph image */
  ogImage: string;

  /** Twitter card type */
  twitterCard: 'summary' | 'summary_large_image';

  /** Canonical URL */
  canonicalUrl?: string;

  /** Author name */
  author?: string;

  /** Published date (for articles) */
  publishedTime?: string;

  /** Modified date (for articles) */
  modifiedTime?: string;

  /** Page type */
  type?: 'website' | 'article' | 'profile';
}

// ============================================================================
// SITE INFORMATION
// ============================================================================

/**
 * Site/business information
 */
export interface SiteInfo {
  /** Site/business name */
  name: string;

  /** Business title/tagline */
  title: string;

  /** Full description */
  description: string;

  /** Site URL */
  url: string;

  /** Contact email */
  email: string;

  /** Contact phone */
  phone: string;

  /** Business location */
  location: string;

  /** Business logo path */
  logo?: string;

  /** Favicon path */
  favicon?: string;
}

// ============================================================================
// STATISTICS/STATS
// ============================================================================

/**
 * Statistics shown in Hero or About section
 */
export interface Stats {
  /** Years of experience */
  years: number;

  /** Number of certifications */
  certifications: number;

  /** Number of happy clients */
  clients: string;

  /** Availability status */
  availability: string;
}

/**
 * Single stat item
 */
export interface StatItem {
  /** Unique identifier */
  id: string;

  /** Stat value (number or string) */
  value: string | number;

  /** Stat label */
  label: string;

  /** Icon (emoji or component name) */
  icon?: string;

  /** Suffix (e.g., '+', '%') */
  suffix?: string;

  /** Prefix (e.g., '$', '€') */
  prefix?: string;

  /** Description */
  description?: string;

  /** Animation duration for counting effect (ms) */
  animationDuration?: number;
}

// ============================================================================
// TESTIMONIAL
// ============================================================================

/**
 * Client testimonial/review
 */
export interface Testimonial {
  /** Unique identifier */
  id: string;

  /** Client name */
  name: string;

  /** Client avatar image */
  avatar?: string;

  /** Client title/occupation */
  title?: string;

  /** Testimonial text */
  content: string;

  /** Rating (1-5) */
  rating?: number;

  /** Date of testimonial */
  date?: string;

  /** Whether testimonial is featured */
  featured?: boolean;
}

// ============================================================================
// FAQ ITEM
// ============================================================================

/**
 * FAQ question and answer
 */
export interface FaqItem {
  /** Unique identifier */
  id: string;

  /** Question text */
  question: string;

  /** Answer text (can be HTML) */
  answer: string;

  /** Category/topic */
  category?: string;

  /** Order priority */
  order?: number;
}

// ============================================================================
// CONTACT INFO
// ============================================================================

/**
 * Contact information item
 */
export interface ContactInfo {
  /** Type of contact */
  type: 'phone' | 'email' | 'address' | 'whatsapp' | 'other';

  /** Contact value */
  value: string;

  /** Display label */
  label: string;

  /** Icon */
  icon?: string;

  /** Link URL */
  href?: string;

  /** Whether this is the primary contact */
  primary?: boolean;
}

// ============================================================================
// WORKING HOURS
// ============================================================================

/**
 * Working hours for a day
 */
export interface WorkingHours {
  /** Day of week */
  day:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';

  /** Whether open this day */
  isOpen: boolean;

  /** Opening time (HH:MM format) */
  openTime?: string;

  /** Closing time (HH:MM format) */
  closeTime?: string;

  /** Note (e.g., "By appointment only") */
  note?: string;
}

// ============================================================================
// NAVIGATION
// ============================================================================

/**
 * Navigation link
 */
export interface NavLink {
  /** Link label */
  label: string;

  /** Link URL or anchor */
  href: string;

  /** Icon (optional) */
  icon?: string;

  /** Whether link is external */
  external?: boolean;

  /** Sub-navigation items */
  children?: NavLink[];

  /** Whether link is currently active */
  isActive?: boolean;
}

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

/**
 * Theme colors configuration
 */
export interface ThemeColors {
  primary: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
  secondary: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
  accent: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  /** Theme colors */
  colors: ThemeColors;

  /** Font families */
  fonts: {
    heading: string;
    body: string;
  };

  /** Border radius */
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}
