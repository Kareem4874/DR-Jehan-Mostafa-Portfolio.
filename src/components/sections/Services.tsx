'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { services } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const serviceIcons: Record<string, string> = {
    'الكشف الدوري': '🩺', // Consultation
    'باقة متابعة شهرية': '📅', // Monthly
    'باقة متابعة 3 شهور': '📈', // 3 Months
    'باقة 6 شهور': '🏆', // 6 Months (Trophy for achievement)
  };

  const popularIndex = 1;

  // Button Styles Helper
  const baseButtonStyles =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

  // Custom styles derived from Button.tsx
  const secondaryStyles =
    'bg-secondary hover:bg-secondary-dark text-white shadow-soft hover:shadow-hover hover:scale-[1.02]';
  const outlineStyles =
    'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.02]';
  const primaryStyles =
    'bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-hover hover:scale-[1.02]';

  // Specific size styles
  const mdSize = 'px-6 py-3 text-base';
  const lgSize = 'px-8 py-3.5 text-lg';

  return (
    <SectionWrapper id="services" background="gray">
      <div ref={sectionRef}>
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary-dark transition-colors duration-300 hover:bg-secondary/20">
            💎 خدماتي
          </span>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            خدمات <span className="text-primary">متميزة</span>
          </h2>

          <p className="px-4 text-base text-gray-600 sm:text-lg">
            اختر الخطة المثالية لرحلة عافيتك مع توجيه شخصي.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const isPopular = index === popularIndex;
            const buttonVariantStyles = isPopular
              ? secondaryStyles
              : outlineStyles;
            const customButtonClass = isPopular
              ? '!bg-white !text-primary font-bold hover:!bg-gray-100 border-none'
              : '';

            return (
              <div
                key={service.id}
                className={`relative ${isPopular ? 'sm:-mt-4 sm:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <span className="animate-pulse rounded-full bg-gradient-to-r from-secondary to-secondary-dark px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      🔥 الأكثر طلباً
                    </span>
                  </div>
                )}

                <div
                  className={`relative h-full rounded-2xl p-6 sm:p-8 ${
                    isPopular
                      ? 'bg-gradient-to-br from-primary via-primary to-primary-dark text-white shadow-2xl shadow-primary/30'
                      : 'border border-gray-100 bg-white shadow-lg hover:border-primary/20 hover:shadow-2xl'
                  } group transform overflow-hidden transition-all duration-500 hover:-translate-y-3`}
                >
                  {/* Background Pattern for Popular */}
                  {isPopular && (
                    <>
                      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10" />
                      <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10" />
                    </>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${isPopular ? 'bg-white/20' : 'bg-primary/10'} `}
                    >
                      <span className="text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                        {serviceIcons[service.title] || '📋'}
                      </span>
                    </div>

                    {/* Title & Duration */}
                    <h3
                      className={`mb-2 text-lg font-bold sm:text-xl ${isPopular ? 'text-white' : 'text-gray-900'}`}
                    >
                      {service.title}
                    </h3>

                    <span
                      className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${isPopular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'} `}
                    >
                      {service.duration}
                    </span>

                    {/* Price */}
                    {service.price && (
                      <div
                        className={`mb-4 ${isPopular ? 'text-white' : 'text-primary'}`}
                      >
                        <span className="text-2xl font-bold">
                          {service.price}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p
                      className={`mb-5 text-sm leading-relaxed ${isPopular ? 'text-white/80' : 'text-gray-600'}`}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <p
                        className={`mb-3 text-xs font-semibold uppercase tracking-wide ${isPopular ? 'text-white/60' : 'text-gray-500'}`}
                      >
                        يشمل:
                      </p>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center gap-2 text-sm ${isPopular ? 'text-white/90' : 'text-gray-700'}`}
                          >
                            <span
                              className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${isPopular ? 'bg-white/20' : 'bg-green-100'}`}
                            >
                              <svg
                                className={`h-3 w-3 ${isPopular ? 'text-white' : 'text-green-600'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`${baseButtonStyles} ${buttonVariantStyles} ${mdSize} group w-full justify-center ${customButtonClass}`}
                    >
                      ابدأ الآن
                      <svg
                        className="mr-2 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="inline-block rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-8">
            <p className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              لست متأكداً أي خدمة تناسبك؟
            </p>
            <p className="mb-6 text-sm text-gray-600 sm:text-base">
              احجز مكالمة استكشافية مجانية لمناقشة احتياجاتك.
            </p>
            <Link
              href="/contact"
              className={`${baseButtonStyles} ${primaryStyles} ${lgSize} shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30`}
            >
              <span className="ml-2">📞</span>
              مكالمة استكشافية مجانية
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
