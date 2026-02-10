'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Lightbox from '@/components/ui/Lightbox';
import Badge from '@/components/ui/Badge';
import { certificates } from '@/data/certificates';
import type { Certificate } from '@/types/certificate';

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 60, opacity: 0, scale: 0.9 },
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

  return (
    <SectionWrapper id="certificates" background="gray">
      <div ref={sectionRef}>
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/20">
            🎓 الاعتمادات المهنية
          </span>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            شهادات <span className="text-primary">معتمدة</span>
          </h2>

          <p className="px-4 text-base text-gray-600 sm:text-lg">
            تعلم مستمر وتطوير مهني قائم على أحدث الأدلة العلمية.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-full transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl ${cert.featured ? 'ring-2 ring-secondary ring-offset-2' : ''} `}
              >
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute right-4 top-4 z-10">
                    <Badge
                      variant="secondary"
                      size="sm"
                      className="animate-pulse shadow-lg"
                    >
                      ⭐ مميز
                    </Badge>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-black/0 to-transparent pb-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      عرض
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center justify-between text-xs text-gray-500 sm:text-sm">
                    <span className="font-semibold text-primary">
                      {cert.issuer}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-1">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {cert.title}
                  </h3>

                  {cert.description && (
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {cert.description}
                    </p>
                  )}

                  {/* Category Tag */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transform bg-gradient-to-r from-primary via-secondary to-primary transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:flex-row sm:px-8 sm:py-6">
            <span className="text-4xl">📜</span>
            <p className="text-center text-gray-600 sm:text-left">
              <strong className="text-lg text-gray-900">8 شهادات مهنية</strong>
              <br className="hidden sm:block" />
              <span className="text-sm">من مؤسسات معترف بها عالمياً</span>
            </p>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedCert}
        imageSrc={selectedCert?.image || ''}
        imageAlt={selectedCert?.title || ''}
        onClose={() => setSelectedCert(null)}
      />
    </SectionWrapper>
  );
}
