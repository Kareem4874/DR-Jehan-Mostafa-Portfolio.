/**
 * Component Props Types
 *
 * Reusable prop type definitions for UI components.
 * Extends native HTML element props for type safety.
 *
 * @module types/components
 */

import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  HTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from 'react';

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

/**
 * Button visual variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Button size variants
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Button component props
 * Extends native button with custom variants and states
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" loading={isSubmitting}>
 *   Submit Form
 * </Button>
 * ```
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;

  /** Size variant */
  size?: ButtonSize;

  /** Show loading spinner */
  loading?: boolean;

  /** Make button full width */
  fullWidth?: boolean;

  /** Icon to show before text */
  leftIcon?: ReactNode;

  /** Icon to show after text */
  rightIcon?: ReactNode;

  /** Render as a link (uses anchor tag) */
  href?: string;

  /** Link target */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /** Whether button should have rounded-full style */
  rounded?: boolean;
}

// ============================================================================
// INPUT COMPONENT
// ============================================================================

/**
 * Input component props
 * Extends native input with label, error, and helper text
 *
 * @example
 * ```tsx
 * <Input
 *   label="Full Name"
 *   error="Name is required"
 *   helperText="Enter your full legal name"
 *   leftIcon={<UserIcon />}
 * />
 * ```
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Field label */
  label?: string;

  /** Error message */
  error?: string;

  /** Helper text shown below input */
  helperText?: string;

  /** Icon to show on the left side of input */
  leftIcon?: ReactNode;

  /** Icon to show on the right side of input */
  rightIcon?: ReactNode;

  /** Whether input is in a loading state */
  loading?: boolean;

  /** Hide the label visually but keep it for accessibility */
  hideLabel?: boolean;

  /** Wrapper className */
  wrapperClassName?: string;
}

// ============================================================================
// TEXTAREA COMPONENT
// ============================================================================

/**
 * TextArea component props
 * Similar to Input but for multi-line text
 */
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label */
  label?: string;

  /** Error message */
  error?: string;

  /** Helper text */
  helperText?: string;

  /** Number of visible rows (default: 4) */
  rows?: number;

  /** Show character count */
  showCharCount?: boolean;

  /** Maximum character count */
  maxLength?: number;

  /** Wrapper className */
  wrapperClassName?: string;
}

// ============================================================================
// SELECT COMPONENT
// ============================================================================

/**
 * Select dropdown option
 */
export interface SelectOption {
  /** Option value (submitted with form) */
  value: string;

  /** Option label (displayed to user) */
  label: string;

  /** Whether option is disabled */
  disabled?: boolean;

  /** Optional icon */
  icon?: ReactNode;
}

/**
 * Select option group
 */
export interface SelectOptionGroup {
  /** Group label */
  label: string;

  /** Options in this group */
  options: SelectOption[];
}

/**
 * Select component props
 */
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label */
  label?: string;

  /** Available options */
  options: SelectOption[] | SelectOptionGroup[];

  /** Error message */
  error?: string;

  /** Placeholder text */
  placeholder?: string;

  /** Helper text */
  helperText?: string;

  /** Wrapper className */
  wrapperClassName?: string;
}

// ============================================================================
// CARD COMPONENT
// ============================================================================

/**
 * Card padding sizes
 */
export type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Card component props
 * Container component with shadow and rounded corners
 *
 * @example
 * ```tsx
 * <Card hover onClick={handleClick} padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content...</p>
 * </Card>
 * ```
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: ReactNode;

  /** Enable hover effects */
  hover?: boolean;

  /** Card padding size */
  padding?: CardPadding;

  /** Card border style */
  border?: boolean;

  /** Card shadow style */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /** Make card fully rounded */
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  /** Card background variant */
  variant?: 'default' | 'outlined' | 'filled' | 'elevated';
}

// ============================================================================
// MODAL COMPONENT
// ============================================================================

/**
 * Modal sizes
 */
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

/**
 * Modal/Dialog component props
 *
 * @example
 * ```tsx
 * <Modal
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   title="Confirm Action"
 *   size="md"
 * >
 *   <p>Are you sure?</p>
 * </Modal>
 * ```
 */
export interface ModalProps {
  /** Whether modal is open */
  isOpen: boolean;

  /** Close handler */
  onClose: () => void;

  /** Modal content */
  children: ReactNode;

  /** Modal title (optional) */
  title?: string;

  /** Modal description below title (optional) */
  description?: string;

  /** Modal size */
  size?: ModalSize;

  /** Show close button */
  showCloseButton?: boolean;

  /** Close on outside click */
  closeOnOverlayClick?: boolean;

  /** Close on Escape key */
  closeOnEscape?: boolean;

  /** Center modal vertically */
  centered?: boolean;

  /** Footer content */
  footer?: ReactNode;

  /** Additional className for modal content */
  className?: string;

  /** Z-index for modal */
  zIndex?: number;
}

// ============================================================================
// LIGHTBOX COMPONENT
// ============================================================================

/**
 * Image data for lightbox
 */
export interface LightboxImage {
  /** Image source URL */
  src: string;

  /** Alt text for accessibility */
  alt: string;

  /** Optional title shown below image */
  title?: string;

  /** Optional description */
  description?: string;

  /** Image dimensions (for aspect ratio) */
  width?: number;
  height?: number;
}

/**
 * Lightbox component props
 * Used for viewing images in full size
 */
export interface LightboxProps {
  /** Images to display */
  images: LightboxImage[];

  /** Currently active image index */
  currentIndex: number;

  /** Whether lightbox is open */
  isOpen: boolean;

  /** Close handler */
  onClose: () => void;

  /** Navigate to specific image */
  onNavigate?: (index: number) => void;

  /** Show navigation arrows */
  showNavigation?: boolean;

  /** Show thumbnails */
  showThumbnails?: boolean;

  /** Enable keyboard navigation */
  enableKeyboard?: boolean;

  /** Enable zoom */
  enableZoom?: boolean;
}

// ============================================================================
// FILE UPLOAD COMPONENT
// ============================================================================

/**
 * File upload state
 */
export type UploadState = 'idle' | 'uploading' | 'success' | 'error';

/**
 * File upload component props
 * Handles payment receipt uploads
 *
 * @example
 * ```tsx
 * <FileUpload
 *   label="Payment Receipt"
 *   onChange={handleFileChange}
 *   accept="image/*,application/pdf"
 *   maxSize={5}
 *   required
 * />
 * ```
 */
export interface FileUploadProps {
  /** Field label */
  label?: string;

  /** File change handler */
  onChange: (file: File | null) => void;

  /** URL change handler (after upload) */
  onUploadComplete?: (url: string | null) => void;

  /** Error message */
  error?: string;

  /** Whether field is required */
  required?: boolean;

  /** Accepted file types (MIME types) */
  accept?: string;

  /** Maximum file size in MB */
  maxSize?: number;

  /** Show file preview */
  showPreview?: boolean;

  /** Current file (controlled) */
  value?: File | null;

  /** Upload state */
  uploadState?: UploadState;

  /** Progress percentage (0-100) */
  progress?: number;

  /** Helper text */
  helperText?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Custom upload handler (optional, defaults to /api/upload) */
  uploadHandler?: (file: File) => Promise<string>;
}

// ============================================================================
// ALERT/TOAST COMPONENT
// ============================================================================

/**
 * Alert type variants
 */
export type AlertType = 'success' | 'error' | 'warning' | 'info';

/**
 * Alert component props
 * Shows success/error messages
 */
export interface AlertProps {
  /** Alert type/variant */
  type: AlertType;

  /** Alert title (optional) */
  title?: string;

  /** Alert message */
  message: string;

  /** Close handler (optional) */
  onClose?: () => void;

  /** Auto-dismiss after duration (ms) */
  duration?: number;

  /** Show close button */
  dismissible?: boolean;

  /** Show icon */
  showIcon?: boolean;

  /** Additional actions */
  actions?: ReactNode;

  /** Additional className */
  className?: string;
}

// ============================================================================
// LOADER/SPINNER COMPONENT
// ============================================================================

/**
 * Loader sizes
 */
export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Loader colors
 */
export type LoaderColor = 'primary' | 'secondary' | 'white' | 'gray';

/**
 * Loader component props
 */
export interface LoaderProps {
  /** Loader size */
  size?: LoaderSize;

  /** Loader color */
  color?: LoaderColor;

  /** Loading text (optional) */
  text?: string;

  /** Show as fullscreen overlay */
  fullScreen?: boolean;

  /** Additional className */
  className?: string;
}

// ============================================================================
// BADGE COMPONENT
// ============================================================================

/**
 * Badge variants
 */
export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'default';

/**
 * Badge component props
 */
export interface BadgeProps {
  /** Badge content */
  children: ReactNode;

  /** Badge variant */
  variant?: BadgeVariant;

  /** Badge size */
  size?: 'sm' | 'md' | 'lg';

  /** Make badge rounded (pill style) */
  rounded?: boolean;

  /** Make badge outlined instead of filled */
  outlined?: boolean;

  /** Additional className */
  className?: string;

  /** Left icon */
  leftIcon?: ReactNode;

  /** Show dot indicator */
  dot?: boolean;
}

// ============================================================================
// LINK COMPONENT
// ============================================================================

/**
 * Link component props
 */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link content */
  children: ReactNode;

  /** Whether this is an external link */
  external?: boolean;

  /** Show underline on hover */
  underline?: 'always' | 'hover' | 'none';

  /** Link color variant */
  variant?: 'default' | 'primary' | 'secondary' | 'muted';
}

// ============================================================================
// AVATAR COMPONENT
// ============================================================================

/**
 * Avatar component props
 */
export interface AvatarProps {
  /** Avatar image source */
  src?: string;

  /** Alt text */
  alt?: string;

  /** Fallback text (initials) */
  fallback?: string;

  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /** Show border */
  bordered?: boolean;

  /** Additional className */
  className?: string;
}

// ============================================================================
// ICON PROPS
// ============================================================================

/**
 * Base icon props
 */
export interface IconProps {
  /** Icon size */
  size?: number | string;

  /** Icon color */
  color?: string;

  /** Additional className */
  className?: string;

  /** Accessibility label */
  'aria-label'?: string;
}
