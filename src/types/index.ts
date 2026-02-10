/**
 * Base Types & Interfaces
 *
 * Core type definitions used across the entire application.
 *
 * @module types/index
 * @description Central export point for all types in the application
 */

import { ReactNode } from 'react';

// ============================================================================
// BASE COMPONENT PROPS
// ============================================================================

/**
 * Base props that most components accept
 */
export interface BaseComponentProps {
  /** React children elements */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Section wrapper props
 */
export interface SectionProps extends BaseComponentProps {
  /** HTML id for scroll navigation */
  id?: string;
  /** Background color variant */
  background?: 'white' | 'gray' | 'primary' | 'accent';
}

// ============================================================================
// FORM ENUMS
// ============================================================================

/**
 * Activity level options for booking form
 */
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very';

/**
 * Package/service options for booking
 */
export type PackageType = 'initial' | 'monthly' | '3month' | '6month';

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

/**
 * Supported social media platforms
 */
export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'whatsapp'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'email';

// ============================================================================
// NAVIGATION
// ============================================================================

/**
 * Navigation link item
 */
export interface NavItem {
  /** Display label for the link */
  label: string;
  /** Target href (can be anchor link or page path) */
  href: string;
  /** Whether this link is currently active */
  isActive?: boolean;
  /** Icon to display beside the label */
  icon?: ReactNode;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Make all properties optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extract keys from object type that are of specific type
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/**
 * Make specific properties required
 */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Omit specific properties and make the rest optional
 */
export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> &
  Pick<T, K>;

/**
 * Nullable type helper
 */
export type Nullable<T> = T | null;

/**
 * Maybe type helper (can be undefined)
 */
export type Maybe<T> = T | undefined;

// ============================================================================
// RE-EXPORTS
// ============================================================================

// Re-export all types from other files for centralized access
export * from './certificate';
export * from './service';
export * from './form';
export * from './components';
export * from './data';
export * from './hooks';
