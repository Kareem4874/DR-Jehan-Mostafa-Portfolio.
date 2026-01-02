'use client';

import { useEffect, useState } from 'react';

// AOS easing options type
type AOSEasing =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'ease-in-back'
  | 'ease-out-back'
  | 'ease-in-out-back'
  | 'ease-in-sine'
  | 'ease-out-sine'
  | 'ease-in-out-sine'
  | 'ease-in-quad'
  | 'ease-out-quad'
  | 'ease-in-out-quad'
  | 'ease-in-cubic'
  | 'ease-out-cubic'
  | 'ease-in-out-cubic'
  | 'ease-in-quart'
  | 'ease-out-quart'
  | 'ease-in-out-quart';

interface AOSProviderProps {
  children: React.ReactNode;
  /**
   * Disable AOS on mobile for better performance
   * @default true
   */
  disableOnMobile?: boolean;
  /**
   * Animation duration in ms
   * @default 800
   */
  duration?: number;
  /**
   * Only animate once
   * @default true
   */
  once?: boolean;
  /**
   * Easing function
   * @default 'ease-out-cubic'
   */
  easing?: AOSEasing;
}

/**
 * AOS Provider Component
 * Lazy loads AOS library for better performance
 * Reduces initial bundle size by dynamically importing AOS
 */
export default function AOSProvider({
  children,
  disableOnMobile = true,
  duration = 800,
  once = true,
  easing = 'ease-out-cubic',
}: AOSProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if we should disable on mobile
    const isMobile = disableOnMobile && window.innerWidth < 768;

    if (isMobile) {
      // Skip loading AOS on mobile for performance
      setIsInitialized(true);
      return;
    }

    // Lazy load AOS only when needed
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        // @ts-ignore - CSS import for side effects
        await import('aos/dist/aos.css');

        AOS.init({
          duration,
          easing,
          once,
          disable: isMobile ? 'mobile' : false,
          startEvent: 'DOMContentLoaded',
          offset: 50,
          delay: 0,
          anchorPlacement: 'top-bottom',
        });

        setIsInitialized(true);

        // Refresh AOS on window resize
        const handleResize = () => {
          AOS.refresh();
        };
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.error('Failed to initialize AOS:', error);
        setIsInitialized(true);
      }
    };

    // Use requestIdleCallback for non-critical initialization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => initAOS());
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => initAOS(), 100);
    }
  }, [disableOnMobile, duration, easing, once]);

  return <>{children}</>;
}
