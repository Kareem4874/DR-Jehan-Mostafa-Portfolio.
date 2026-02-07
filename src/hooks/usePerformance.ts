'use client';

import { useEffect, useState, useCallback } from 'react';

interface GSAPState {
  gsap: typeof import('gsap') | null;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger | null;
}

/**
 * Custom hook to lazily load GSAP
 * Reduces initial bundle size by dynamically importing GSAP only when needed
 */
export function useGSAP() {
  const [state, setState] = useState<GSAPState>({
    gsap: null,
    ScrollTrigger: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadGSAP = async () => {
      try {
        // Dynamically import GSAP modules
        const [gsapModule, scrollTriggerModule] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);

        if (isMounted) {
          // Register ScrollTrigger plugin
          gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);

          setState({
            gsap: gsapModule,
            ScrollTrigger: scrollTriggerModule.ScrollTrigger,
          });
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to load GSAP:', error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    // Load GSAP using requestIdleCallback for non-blocking
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => loadGSAP());
    } else {
      setTimeout(() => loadGSAP(), 50);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return { ...state, isLoading };
}

/**
 * Custom hook to track scroll position
 * Uses passive event listener for better performance
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollY, isScrollingDown };
}

/**
 * Custom hook for intersection observer
 * Useful for lazy loading and scroll-triggered animations
 */
export function useIntersection(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
}

/**
 * Custom hook for media queries
 * Uses matchMedia for efficient responsive behavior
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}

/**
 * Custom hook to detect if user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * Custom hook for debounced values
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
