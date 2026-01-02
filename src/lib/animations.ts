import gsap from 'gsap';

/**
 * GSAP animation presets for consistent animations across the site
 */

// Default animation settings
export const defaultEase = 'power2.out';
export const defaultDuration = 0.8;

// Fade in animation
export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 0.6, ease: 'power2.out' },
};

// Slide up animation
export const slideUp = {
  from: { y: 50, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
};

// Slide down animation
export const slideDown = {
  from: { y: -50, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
};

// Slide left animation
export const slideLeft = {
  from: { x: 50, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
};

// Slide right animation
export const slideRight = {
  from: { x: -50, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
};

// Scale up animation
export const scaleUp = {
  from: { scale: 0.9, opacity: 0 },
  to: { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
};

// Stagger animation helper
export const staggerChildren = (staggerAmount = 0.1) => ({
  stagger: staggerAmount,
});

/**
 * Animate element with GSAP
 */
export function animateElement(
  element: HTMLElement | string,
  animation:
    | 'fadeIn'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'scaleUp',
  options?: gsap.TweenVars
) {
  const animations = {
    fadeIn,
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    scaleUp,
  };

  const preset = animations[animation];
  gsap.fromTo(element, preset.from, { ...preset.to, ...options });
}

/**
 * Animate multiple elements with stagger
 */
export function animateStaggered(
  elements: HTMLElement[] | string,
  animation:
    | 'fadeIn'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'scaleUp',
  staggerAmount = 0.1,
  options?: gsap.TweenVars
) {
  const animations = {
    fadeIn,
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    scaleUp,
  };

  const preset = animations[animation];
  gsap.fromTo(elements, preset.from, {
    ...preset.to,
    stagger: staggerAmount,
    ...options,
  });
}

/**
 * Create a scroll trigger animation
 */
export function createScrollAnimation(
  trigger: string | HTMLElement,
  elements: string | HTMLElement | HTMLElement[],
  animation:
    | 'fadeIn'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'scaleUp',
  options?: gsap.TweenVars
) {
  const animations = {
    fadeIn,
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    scaleUp,
  };

  const preset = animations[animation];

  return gsap.fromTo(elements, preset.from, {
    ...preset.to,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    ...options,
  });
}
