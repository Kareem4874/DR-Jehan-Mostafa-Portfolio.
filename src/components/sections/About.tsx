'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '@/components/layout/SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const expertise = [
    { icon: '🏥', title: 'تغذية علاجية', desc: 'متخصصة' },
    { icon: '⚖️', title: 'إدارة الوزن', desc: 'خبيرة' },
    { icon: '🏃', title: 'تغذية رياضيين', desc: 'معتمدة' },
    { icon: '💊', title: 'أنظمة علاجية', desc: 'متقدمة' },
  ];

  return (
    <SectionWrapper id="about" background="white">
      <div
        ref={sectionRef}
        className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Image Side */}
        <div ref={imageRef} className="relative order-1">
          <div className="relative mx-auto max-w-sm lg:max-w-full">
            {/* Background Decoration */}
            <div className="absolute -inset-4 -rotate-6 transform rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform duration-500 group-hover:rotate-0" />

            {/* Image Container */}
            <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/certificates/Photo2.jpg"
                alt="Dr. Jehan Mostafa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 384px, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="animate-float absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl sm:p-6">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-2xl font-bold text-white">
                  5+
                </div>
                <p className="text-sm font-bold text-gray-900">سنوات من</p>
                <p className="text-xs text-gray-500">التميز</p>
              </div>
            </div>

            {/* Dots Pattern */}
            <div className="absolute -left-8 -top-8 hidden grid-cols-4 gap-2 lg:grid">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 animate-pulse rounded-full bg-primary/30"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div
          ref={contentRef}
          className="order-2 space-y-6 text-center lg:text-right"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/20">
            👋 من أنا
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            تعرف على <span className="text-primary">د. جيهان مصطفى</span>
          </h2>

          <div className="space-y-4 text-base text-gray-600 sm:text-lg">
            <p>
              أخصائية <strong className="text-gray-900">تغذية علاجية</strong>{' '}
              متميزة بخبرة تزيد عن 5 سنوات في تحسين حياة الناس من خلال
              استراتيجيات تغذية مخصصة.
            </p>
            <p>
              معتمدة من{' '}
              <strong className="text-primary">
                الجمعية المصرية الدولية للتغذية والسمنة (EISNO)
              </strong>
              ، أجمع بين المعرفة العلمية والتطبيق العملي.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-2 gap-3 pt-4 sm:gap-4">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="group cursor-default rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 hover:shadow-lg"
              >
                <span className="mb-2 block text-3xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                  {item.title}
                </p>
                <p className="text-sm font-bold text-primary sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="shadow-soft hover:shadow-hover relative inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-secondary/25 transition-all duration-300 hover:scale-[1.02] hover:bg-secondary-dark hover:shadow-xl hover:shadow-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="ml-2">📅</span>
              احجز استشارتك
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
