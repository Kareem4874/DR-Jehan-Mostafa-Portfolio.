/**
 * Certificate Types
 *
 * Type definitions for professional certifications and credentials.
 * Used in the Certificates section to display Dr. Jehan's qualifications.
 *
 * @module types/certificate
 */

// ============================================================================
// CERTIFICATE ENUMS & CATEGORIES
// ============================================================================

/**
 * Certificate category types
 * Classifies certificates by their nature
 */
export type CertificateCategory =
  | 'professional' // Professional certifications (e.g., Ministry registration)
  | 'membership' // Professional society memberships (e.g., EISNO)
  | 'training' // Training courses completed
  | 'experience' // Work experience certificates
  | 'diploma'; // Diploma certificates

/**
 * Labels for certificate categories (for display purposes)
 */
export const CERTIFICATE_CATEGORY_LABELS: Record<CertificateCategory, string> =
  {
    professional: 'Professional',
    membership: 'Membership',
    training: 'Training',
    experience: 'Experience',
    diploma: 'Diploma',
  };

// ============================================================================
// CERTIFICATE INTERFACE
// ============================================================================

/**
 * Main Certificate interface
 * Represents a single professional certification or credential
 *
 * @example
 * ```typescript
 * const certificate: Certificate = {
 *   id: 'cert-eisno',
 *   title: 'EISNO Membership',
 *   issuer: 'Egyptian International Society of Nutrition',
 *   date: '2024',
 *   image: '/images/certificates/eisno.webp',
 *   featured: true,
 *   credentialId: '5344',
 *   category: 'membership'
 * }
 * ```
 */
export interface Certificate {
  /** Unique identifier for the certificate */
  id: string;

  /** Certificate title/name */
  title: string;

  /** Organization that issued the certificate */
  issuer: string;

  /** Date issued (year or full date) */
  date: string;

  /** Path to certificate image (WebP format preferred) */
  image: string;

  /** Brief description of the certificate (optional) */
  description?: string;

  /** Whether this certificate should be highlighted (optional) */
  featured?: boolean;

  /** Certificate/credential ID number (optional) */
  credentialId?: string;

  /** URL to verify certificate online (optional) */
  credentialUrl?: string;

  /** Category/type of certificate */
  category: CertificateCategory;

  /** Order priority for display (lower = first) */
  order?: number;
}

// ============================================================================
// CERTIFICATE COMPONENT PROPS
// ============================================================================

/**
 * Props for CertificateCard component
 * Used to display individual certificate in a card format
 */
export interface CertificateCardProps {
  /** Certificate data to display */
  certificate: Certificate;

  /** Callback when certificate is clicked to view full size */
  onView: (cert: Certificate) => void;

  /** Animation delay in milliseconds (optional) */
  delay?: number;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for CertificatesGrid component
 * Container for displaying multiple certificates
 */
export interface CertificatesGridProps {
  /** Array of certificates to display */
  certificates: Certificate[];

  /** Number of columns in grid (optional, default: 3) */
  columns?: 2 | 3 | 4;

  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';

  /** Animation type for cards */
  animation?: 'fade' | 'slide' | 'scale' | 'none';
}

/**
 * Props for CertificateModal/Lightbox component
 */
export interface CertificateLightboxProps {
  /** Certificate to display in lightbox */
  certificate: Certificate | null;

  /** Whether lightbox is open */
  isOpen: boolean;

  /** Close handler */
  onClose: () => void;

  /** Navigate to next certificate */
  onNext?: () => void;

  /** Navigate to previous certificate */
  onPrev?: () => void;

  /** Show navigation arrows */
  showNavigation?: boolean;
}

// ============================================================================
// CERTIFICATE FILTERS
// ============================================================================

/**
 * Filter options for certificates
 * Allows filtering certificates by category
 */
export interface CertificateFilter {
  /** Category to filter by (undefined = show all) */
  category?: CertificateCategory;

  /** Show only featured certificates */
  featuredOnly?: boolean;

  /** Search query for title/issuer */
  searchQuery?: string;
}

// ============================================================================
// CERTIFICATE HELPERS
// ============================================================================

/**
 * Helper type for grouped certificates by category
 */
export type GroupedCertificates = Record<CertificateCategory, Certificate[]>;

/**
 * Sort options for certificates
 */
export type CertificateSortBy = 'date' | 'title' | 'category' | 'order';

export type CertificateSortOrder = 'asc' | 'desc';

export interface CertificateSortOptions {
  sortBy: CertificateSortBy;
  order: CertificateSortOrder;
}
