'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { specializations } from '@/data/specializations';

gsap.registerPlugin(ScrollTrigger);

export default function Specializations() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Icons, images and colors mapping
  const iconData: Record<
    string,
    { icon: string; image: string; gradient: string; bgColor: string }
  > = {
    'التغذية العلاجية': {
      icon: '🏥',
      image: '/images/specializations/clinical Nutrition.jpg',
      gradient: 'from-emerald-400 to-green-600',
      bgColor: 'bg-emerald-50',
    },
    'إدارة الوزن': {
      icon: '⚖️',
      image: '/images/specializations/weight manegment.jpg',
      gradient: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    'التغذية الرياضية': {
      icon: '🏃',
      image: '/images/specializations/Sports Nutrition.jpg',
      gradient: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
    },
    'تغذية الأم والطفل': {
      icon: '🤰',
      image: '/images/specializations/maternal and child Nutrition.jpg',
      gradient: 'from-pink-400 to-rose-600',
      bgColor: 'bg-pink-50',
    },
    'الأنظمة الغذائية العلاجية': {
      icon: '💊',
      image: '/images/specializations/Therapeutic Diets.jpg',
      gradient: 'from-purple-400 to-violet-600',
      bgColor: 'bg-purple-50',
    },
    'التغذية التجميلية': {
      icon: '✨',
      image: '/images/specializations/Aesthetic Nutrition.jpg',
      gradient: 'from-amber-400 to-yellow-500',
      bgColor: 'bg-amber-50',
    },
  };

  const stats = [
    {
      icon: '🎯',
      value: '6',
      label: 'تخصصات',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: '📚',
      value: '23+',
      label: 'قصص نجاح',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: '⭐',
      value: '5+',
      label: 'سنوات خبرة',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: '🏆',
      value: '6',
      label: 'شهادات',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="specializations"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      {/* Decorative Elements */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl" />

      {/* Floating Shapes */}
      <div
        className="absolute left-10 top-40 h-4 w-4 animate-bounce rounded-full bg-primary/30"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute right-20 top-60 h-3 w-3 animate-bounce rounded-full bg-secondary/40"
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className="absolute bottom-40 left-1/4 h-2 w-2 animate-bounce rounded-full bg-primary/20"
        style={{ animationDelay: '1s' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 shadow-lg shadow-primary/10">
            <span className="text-lg">🎯</span>
            <span className="text-sm font-semibold text-gray-700">
              مجالات الخبرة
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:mb-6 sm:text-4xl lg:text-5xl">
            مجالات{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                التخصص
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6C40 2 100 2 198 6"
                  stroke="url(#specGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="specGradient"
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
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
            خبرة تغذوية مخصصة تغطي مجموعة واسعة من الاحتياجات الصحية وأهداف نمط
            الحياة.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {specializations.map((spec, index) => {
            const data = iconData[spec.title] || {
              icon: '🍎',
              image: '',
              gradient: 'from-primary to-primary-dark',
              bgColor: 'bg-gray-50',
            };

            return (
              <div
                key={spec.id}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-8"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`}
                />

                {/* Corner Decoration */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 bg-gradient-to-bl ${data.gradient} transform rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150`}
                />

                {/* Image/Icon */}
                <div className="relative mb-6">
                  <div
                    className={`relative inline-flex h-24 w-24 items-center justify-center rounded-2xl sm:h-28 sm:w-28 ${data.bgColor} overflow-hidden border-4 border-white shadow-md transition-all duration-500 group-hover:scale-110`}
                  >
                    {/* Icon Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${data.gradient} rounded-2xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20`}
                    />

                    {data.image ? (
                      <Image
                        src={data.image}
                        alt={spec.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, 120px"
                      />
                    ) : (
                      <span className="relative text-3xl sm:text-4xl">
                        {data.icon}
                      </span>
                    )}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {spec.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {spec.description}
                </p>

                {/* Benefits */}
                {spec.benefits && (
                  <ul className="space-y-2.5">
                    {spec.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span
                          className={`h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-br ${data.gradient} mt-0.5 flex items-center justify-center shadow-sm`}
                        >
                          <svg
                            className="h-3 w-3 text-white"
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
                        <span className="transition-colors group-hover:text-gray-900">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${data.gradient} origin-left scale-x-0 transform rounded-b-3xl transition-transform duration-500 group-hover:scale-x-100`}
                />
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="group cursor-default text-center">
                  {/* Icon Container */}
                  <div className="relative mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg sm:mb-4 sm:h-16 sm:w-16">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                      {stat.icon}
                    </span>
                  </div>

                  {/* Value */}
                  <p
                    className={`bg-gradient-to-r text-2xl font-extrabold sm:text-3xl lg:text-4xl ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
