'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Badge from '@/components/ui/Badge';
import ContactForm from '@/components/forms/ContactForm';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ============================================
 * CONTACT SECTION
 * ============================================
 *
 * Main contact section with booking form
 * Features premium design with animations
 */

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.contact-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Animate form
      gsap.from('.contact-form-wrapper', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-form-wrapper',
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="contact" background="gray">
      <div ref={sectionRef}>
        {/* Section Header */}
        <div className="contact-header mb-12 text-center">
          <Badge variant="secondary" size="md" className="mb-4">
            🚀 ابدأ الآن
          </Badge>
          <h2 className="mb-4 font-heading text-4xl font-bold text-gray-900 md:text-5xl">
            احجز{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              استشارتك
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            خطوتك الأولى نحو حياة صحية. املأ النموذج أدناه وسنتواصل معك عبر
            واتساب لتأكيد موعدك.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
