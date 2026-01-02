'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { SITE_INFO } from '@/lib/constants';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        textRef.current?.children || [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
      ).fromTo(
        imageRef.current,
        { x: 80, opacity: 0, scale: 0.85 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2 },
        '-=0.7'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '5+', label: 'سنوات خبرة', icon: '🎯' },
    { value: '6', label: 'شهادات معتمدة', icon: '🏆' },
    { value: '23+', label: 'عملاء سعداء', icon: '💚' },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24 md:pt-28 lg:pt-32"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />

      {/* Animated Gradient Orbs */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
      <div
        className="absolute bottom-0 left-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-tr from-secondary/15 via-secondary/5 to-transparent blur-3xl"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute left-1/3 top-1/2 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"
        style={{ animationDelay: '1s' }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div
            ref={textRef}
            className="order-2 space-y-6 text-center md:space-y-8 lg:order-1 lg:text-right"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 shadow-lg shadow-primary/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-semibold text-gray-700">
                متاح للاستشارة
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold leading-[1.1] text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                غير مسار
                <span className="mt-1 block md:mt-2">
                  <span className="relative">
                    <span className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
                      صحتك للأفضل
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                    >
                      <path
                        d="M2 10C50 4 150 2 298 8"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#8fbc8f" />
                          <stop offset="100%" stopColor="#d4af37" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
              </h1>

              <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:mx-0">
                أخصائية تغذية علاجية متخصصة لمساعدتك في تحقيق أهدافك الصحية من
                خلال خطط تغذية مخصصة.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3.5 font-semibold text-white shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 sm:px-8 sm:py-4"
              >
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-[100%]" />
                <span className="relative">احجز استشارتك</span>
                <svg
                  className="relative h-5 w-5 rotate-180 transition-transform duration-300 group-hover:translate-x-1"
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

              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary sm:px-8 sm:py-4"
              >
                <span>استكشف خدماتي</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 sm:gap-6 md:pt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group relative cursor-default rounded-2xl border border-gray-100 bg-white/60 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 sm:p-4"
                >
                  <div className="text-center">
                    <span className="mb-1 block text-xl transition-transform duration-300 group-hover:scale-110 sm:text-2xl">
                      {stat.icon}
                    </span>
                    <p className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent sm:text-2xl md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-gray-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="relative order-1 lg:order-2">
            <div className="relative mx-auto w-64 max-w-[420px] sm:w-72 md:w-80 lg:w-full">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-60 blur-2xl sm:-inset-6 sm:rounded-[3rem]" />

              {/* Decorative Rings */}
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] border-2 border-primary/20 transition-transform duration-500 sm:-inset-4" />
              <div className="absolute -inset-6 -rotate-2 rounded-[2rem] border border-secondary/15 sm:-inset-8" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-2xl shadow-gray-900/20 sm:rounded-[2rem]">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-primary p-[3px]">
                  <div className="absolute inset-[3px] rounded-[calc(2rem-3px)] bg-white" />
                </div>

                {/* Image */}
                <div className="relative h-full w-full p-1 sm:p-1.5">
                  <Image
                    src="/images/certificates/photo1.jpg"
                    alt={SITE_INFO.name}
                    fill
                    className="rounded-[1.25rem] object-cover sm:rounded-[1.75rem]"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                  />

                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-t from-black/20 via-transparent to-white/10 sm:rounded-[1.75rem]" />
                </div>
              </div>

              {/* Floating Card - Experience */}
              <div className="animate-float absolute -left-2 bottom-8 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-900/10 sm:-left-6 sm:bottom-12 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 sm:h-12 sm:w-12">
                    <span className="text-sm font-bold text-white sm:text-base">
                      5+
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 sm:text-sm">
                      سنوات
                    </p>
                    <p className="text-[10px] text-gray-500 sm:text-xs">خبرة</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Certified */}
              <div
                className="animate-float absolute -bottom-2 -right-1 rounded-xl bg-gradient-to-r from-secondary to-yellow-500 p-2.5 shadow-xl shadow-secondary/30 sm:-bottom-4 sm:-right-4 sm:rounded-2xl sm:p-3"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg sm:text-xl">🎓</span>
                  <span className="text-xs font-bold sm:text-sm">
                    معتمد من EISNO
                  </span>
                </div>
              </div>
            </div>

            {/* Doctor Name Card - Below Image */}
            <div className="mt-8 text-center sm:mt-10">
              <div className="inline-block rounded-2xl border border-primary/20 bg-white/95 px-8 py-4 shadow-xl shadow-primary/10 backdrop-blur-sm sm:px-10 sm:py-5">
                {/* Name with gradient */}
                <h2 className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {SITE_INFO.name}
                </h2>

                {/* Decorative line */}
                <div className="mx-auto my-3 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-primary" />

                {/* Title */}
                <p className="text-sm font-medium text-gray-600 sm:text-base">
                  {SITE_INFO.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator - Only visible on Desktop */}
      <div
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-fade-in flex-col items-center gap-2 opacity-0 lg:flex"
        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
      >
        <div className="flex h-[38px] w-[22px] justify-center rounded-full border-2 border-gray-300 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gray-400" />
        </div>
        <span className="scale-90 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
          تمرير
        </span>
      </div>
    </section>
  );
}
