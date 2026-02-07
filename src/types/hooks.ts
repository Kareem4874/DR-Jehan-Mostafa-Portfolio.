/**
 * Custom Hook Types
 *
 * Type definitions for custom React hooks.
 * Used in src/hooks/ directory.
 *
 * @module types/hooks
 */

import { RefObject } from 'react';

// ============================================================================
// SCROLL POSITION HOOK
// ============================================================================

/**
 * Scroll position coordinates
 * Returned by useScrollPosition hook
 */
export interface ScrollPosition {
  /** Horizontal scroll position */
  x: number;

  /** Vertical scroll position */
  y: number;
}

/**
 * Scroll direction
 */
export type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'none';

/**
 * Scroll info returned by useScrollPosition hook
 */
export interface ScrollInfo {
  /** Current scroll position */
  position: ScrollPosition;

  /** Scroll direction */
  direction: ScrollDirection;

  /** Whether user has scrolled past threshold */
  isScrolled: boolean;

  /** Whether at top of page */
  isAtTop: boolean;

  /** Whether at bottom of page */
  isAtBottom: boolean;

  /** Scroll progress (0-1) */
  progress: number;
}

// ============================================================================
// INTERSECTION OBSERVER HOOK
// ============================================================================

/**
 * Intersection observer options
 * Used by useIntersection hook
 */
export interface IntersectionOptions {
  /** Threshold (0-1 or array) */
  threshold?: number | number[];

  /** Root element */
  root?: Element | null;

  /** Root margin */
  rootMargin?: string;

  /** Trigger only once */
  triggerOnce?: boolean;

  /** Whether hook should be enabled */
  enabled?: boolean;
}

/**
 * Intersection observer result
 */
export interface IntersectionResult<T extends Element = Element> {
  /** Whether element is intersecting */
  isIntersecting: boolean;

  /** Intersection ratio (0-1) */
  ratio: number;

  /** Ref to attach to element */
  ref: RefObject<T | null>;

  /** The intersection entry */
  entry: IntersectionObserverEntry | null;
}

// ============================================================================
// MEDIA QUERY HOOK
// ============================================================================

/**
 * Breakpoint names
 * Matches Tailwind CSS breakpoints
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Breakpoint values in pixels
 */
export type BreakpointValues = Record<Breakpoint, number>;

/**
 * Media query hook options
 */
export interface MediaQueryOptions {
  /** Default value before hydration */
  defaultValue?: boolean;

  /** Initialize value on mount */
  initializeWithValue?: boolean;
}

/**
 * Device type based on screen size
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Screen size info returned by useBreakpoint
 */
export interface ScreenSizeInfo {
  /** Current breakpoint */
  breakpoint: Breakpoint | null;

  /** Device type */
  deviceType: DeviceType;

  /** Screen width */
  width: number;

  /** Screen height */
  height: number;

  /** Is mobile screen */
  isMobile: boolean;

  /** Is tablet screen */
  isTablet: boolean;

  /** Is desktop screen */
  isDesktop: boolean;

  /** Orientation */
  orientation: 'portrait' | 'landscape';
}

// ============================================================================
// FORM VALIDATION HOOK
// ============================================================================

/**
 * Validation rule for a single field
 */
export interface ValidationRule<T = unknown> {
  /** Field is required */
  required?: boolean | string;

  /** Minimum length */
  minLength?: { value: number; message: string };

  /** Maximum length */
  maxLength?: { value: number; message: string };

  /** Minimum value (for numbers) */
  min?: { value: number; message: string };

  /** Maximum value (for numbers) */
  max?: { value: number; message: string };

  /** Regex pattern */
  pattern?: { value: RegExp; message: string };

  /** Custom validation function */
  validate?: (value: T) => boolean | string | Promise<boolean | string>;
}

/**
 * Validation rules object
 * Maps field names to their rules
 */
export type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

/**
 * Field validation result
 */
export interface FieldValidationResult {
  /** Whether field is valid */
  isValid: boolean;

  /** Error message if invalid */
  error?: string;
}

/**
 * Hook form validation result
 * Note: Named differently from form.ts FormValidationResult to avoid conflicts
 */
export interface HookFormValidationResult<T> {
  /** Whether all fields are valid */
  isValid: boolean;

  /** Errors by field name */
  errors: Partial<Record<keyof T, string>>;
}

// ============================================================================
// DEBOUNCE/THROTTLE HOOKS
// ============================================================================

/**
 * Debounce options
 */
export interface DebounceOptions {
  /** Delay in milliseconds */
  delay: number;

  /** Call on leading edge */
  leading?: boolean;

  /** Call on trailing edge */
  trailing?: boolean;

  /** Maximum wait time */
  maxWait?: number;
}

/**
 * Throttle options
 */
export interface ThrottleOptions {
  /** Interval in milliseconds */
  interval: number;

  /** Call on leading edge */
  leading?: boolean;

  /** Call on trailing edge */
  trailing?: boolean;
}

// ============================================================================
// LOCAL STORAGE HOOK
// ============================================================================

/**
 * Local storage options
 */
export interface LocalStorageOptions<T> {
  /** Serializer function */
  serializer?: (value: T) => string;

  /** Deserializer function */
  deserializer?: (value: string) => T;

  /** Sync across tabs */
  syncTabs?: boolean;
}

/**
 * Local storage return type
 */
export interface UseLocalStorageReturn<T> {
  /** Current value */
  value: T;

  /** Set new value */
  setValue: (value: T | ((prev: T) => T)) => void;

  /** Remove from storage */
  remove: () => void;

  /** Whether value has been loaded */
  isLoading: boolean;
}

// ============================================================================
// ANIMATION HOOKS
// ============================================================================

/**
 * Animation state
 */
export type AnimationState =
  | 'idle'
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited';

/**
 * Animation options
 */
export interface AnimationOptions {
  /** Animation duration in ms */
  duration?: number;

  /** Animation delay in ms */
  delay?: number;

  /** Easing function */
  easing?: string;

  /** Play animation on mount */
  animateOnMount?: boolean;
}

/**
 * Animation result
 */
export interface AnimationResult {
  /** Current animation state */
  state: AnimationState;

  /** Start enter animation */
  enter: () => void;

  /** Start exit animation */
  exit: () => void;

  /** Toggle between enter/exit */
  toggle: () => void;

  /** Whether animation is active */
  isAnimating: boolean;

  /** Style properties to apply */
  style: React.CSSProperties;
}

// ============================================================================
// COPY TO CLIPBOARD HOOK
// ============================================================================

/**
 * Copy to clipboard result
 */
export interface UseCopyToClipboardReturn {
  /** Copy text to clipboard */
  copy: (text: string) => Promise<boolean>;

  /** Whether text was recently copied */
  isCopied: boolean;

  /** Reset copied state */
  reset: () => void;

  /** Error if copy failed */
  error: Error | null;
}

// ============================================================================
// WINDOW SIZE HOOK
// ============================================================================

/**
 * Window size info
 */
export interface WindowSize {
  /** Window width */
  width: number;

  /** Window height */
  height: number;
}

// ============================================================================
// EVENT LISTENER HOOK
// ============================================================================

/**
 * Event listener options
 */
export interface EventListenerOptions {
  /** Use capture */
  capture?: boolean;

  /** Passive listener */
  passive?: boolean;

  /** Once only */
  once?: boolean;
}

// ============================================================================
// CLICK OUTSIDE HOOK
// ============================================================================

/**
 * Click outside options
 */
export interface ClickOutsideOptions {
  /** Callback when clicked outside */
  onClickOutside: () => void;

  /** Elements to ignore (in addition to ref) */
  ignoreElements?: (Element | null)[];

  /** Whether hook is enabled */
  enabled?: boolean;
}
