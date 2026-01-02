/**
 * Service & Specialization Types
 *
 * Type definitions for services offered and areas of expertise.
 * Used in Services and Specializations sections.
 *
 * @module types/service
 */

// ============================================================================
// SERVICE INTERFACE
// ============================================================================

/**
 * Service offered by Dr. Jehan
 * Represents a single service/package available for booking
 *
 * @example
 * ```typescript
 * const service: Service = {
 *   id: 'consultation',
 *   title: 'Individual Consultation',
 *   description: 'One-on-one nutrition assessment...',
 *   icon: '👤',
 *   features: ['Health assessment', 'Meal plan', 'Follow-up'],
 *   duration: '60 minutes',
 *   price: '500 EGP'
 * }
 * ```
 */
export interface Service {
  /** Unique identifier */
  id: string;

  /** Service name/title */
  title: string;

  /** Detailed description of the service */
  description: string;

  /** Emoji, icon path, or icon component name */
  icon: string;

  /** List of features/benefits included */
  features: string[];

  /** Duration of service (optional) */
  duration?: string;

  /** Price of service (optional) */
  price?: string;

  /** Whether this service is popular/recommended (optional) */
  popular?: boolean;

  /** Call-to-action text (optional) */
  ctaText?: string;

  /** Order priority for display (lower = first) */
  order?: number;

  /** Category/type of service */
  category?: ServiceCategory;
}

/**
 * Service category types
 */
export type ServiceCategory =
  | 'consultation'
  | 'program'
  | 'followup'
  | 'workshop'
  | 'other';

// ============================================================================
// SPECIALIZATION INTERFACE
// ============================================================================

/**
 * Area of expertise/specialization
 * Represents a specific field Dr. Jehan specializes in
 *
 * @example
 * ```typescript
 * const specialization: Specialization = {
 *   id: 'clinical',
 *   title: 'Clinical Nutrition',
 *   description: 'Medical nutrition therapy...',
 *   icon: '⚕️',
 *   color: '#8FBC8F'
 * }
 * ```
 */
export interface Specialization {
  /** Unique identifier */
  id: string;

  /** Specialization title */
  title: string;

  /** Brief description */
  description: string;

  /** Emoji, icon path, or icon component name */
  icon: string;

  /** Theme color for the card (hex, rgb, or tailwind class) */
  color?: string;

  /** Related keywords for SEO (optional) */
  keywords?: string[];

  /** Order priority for display (lower = first) */
  order?: number;

  /** List of benefits (optional) */
  benefits?: string[];

  /** Whether this specialization is featured */
  featured?: boolean;
}

// ============================================================================
// COMPONENT PROPS
// ============================================================================

/**
 * Props for ServiceCard component
 */
export interface ServiceCardProps {
  /** Service data to display */
  service: Service;

  /** Index in list (for staggered animations) */
  index?: number;

  /** Callback when service is selected */
  onSelect?: (service: Service) => void;

  /** Whether the card is currently selected */
  isSelected?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Animation variant */
  animation?: 'fade' | 'slide' | 'scale' | 'none';
}

/**
 * Props for SpecializationCard component
 */
export interface SpecializationCardProps {
  /** Specialization data to display */
  specialization: Specialization;

  /** Index in grid (for staggered animations) */
  index?: number;

  /** Card size variant */
  size?: 'sm' | 'md' | 'lg';

  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for ServicesSection component
 */
export interface ServicesSectionProps {
  /** Services to display */
  services: Service[];

  /** Section title (optional) */
  title?: string;

  /** Section description (optional) */
  description?: string;

  /** Layout type */
  layout?: 'grid' | 'list' | 'carousel';

  /** Show CTA button */
  showCta?: boolean;
}

/**
 * Props for SpecializationsSection component
 */
export interface SpecializationsSectionProps {
  /** Specializations to display */
  specializations: Specialization[];

  /** Section title (optional) */
  title?: string;

  /** Section description (optional) */
  description?: string;

  /** Number of columns in grid */
  columns?: 2 | 3 | 4 | 6;
}

// ============================================================================
// SERVICE HELPERS
// ============================================================================

/**
 * Service filter options
 */
export interface ServiceFilter {
  /** Filter by category */
  category?: ServiceCategory;

  /** Show only popular services */
  popularOnly?: boolean;

  /** Search query */
  searchQuery?: string;
}

/**
 * Price tier for services
 */
export interface PriceTier {
  /** Tier name */
  name: string;

  /** Price value */
  price: string;

  /** Price currency */
  currency?: string;

  /** Billing period */
  period?: 'one-time' | 'monthly' | 'quarterly' | 'yearly';

  /** Features included in this tier */
  features: string[];

  /** Whether this tier is recommended */
  recommended?: boolean;
}
