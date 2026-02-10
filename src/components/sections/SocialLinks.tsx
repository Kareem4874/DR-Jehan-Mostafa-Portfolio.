'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { socialLinks } from '@/data/social-links';

gsap.registerPlugin(ScrollTrigger);

export default function SocialLinks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 60, opacity: 0, scale: 0.8, rotateY: 20 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.7,
            stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const platformData: Record<
    string,
    { icon: React.ReactNode; gradient: string; bgLight: string }
  > = {
    whatsapp: {
      icon: (
        <svg
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      gradient: 'from-green-400 to-emerald-600',
      bgLight: 'bg-green-50',
    },
    instagram: {
      icon: (
        <svg
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: 'from-pink-500 via-purple-500 to-orange-400',
      bgLight: 'bg-gradient-to-br from-pink-50 to-purple-50',
    },
    facebook: {
      icon: (
        <svg
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50',
    },
    email: {
      icon: (
        <svg
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      gradient: 'from-red-500 to-red-600',
      bgLight: 'bg-red-50',
    },
  };

  return (
    <section
      ref={sectionRef}
      id="social"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      {/* Decorative Elements */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-gradient-to-tl from-secondary/10 to-transparent blur-3xl" />

      {/* Floating Icons */}
      <div
        className="absolute right-20 top-32 animate-bounce text-2xl opacity-20"
        style={{ animationDelay: '0s' }}
      >
        📱
      </div>
      <div
        className="absolute left-16 top-48 animate-bounce text-xl opacity-20"
        style={{ animationDelay: '0.5s' }}
      >
        💬
      </div>
      <div
        className="absolute bottom-32 right-1/4 animate-bounce text-xl opacity-20"
        style={{ animationDelay: '1s' }}
      >
        🌐
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 shadow-lg shadow-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-semibold text-gray-700">لنتواصل</span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:mb-6 sm:text-4xl lg:text-5xl">
            تواصل مع{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                د. جيهان
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 150 8"
                fill="none"
              >
                <path
                  d="M2 6C30 2 75 2 148 6"
                  stroke="url(#socialGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="socialGradient"
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
            تابعنا على وسائل التواصل الاجتماعي للحصول على نصائح تغذوية يومية،
            وصفات صحية، وقصص نجاح.
          </p>
        </div>

        {/* Social Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 justify-center gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {socialLinks.map((link) => {
            const data = platformData[link.platform] || {
              icon: <span className="text-3xl">🔗</span>,
              gradient: 'from-gray-400 to-gray-600',
              bgLight: 'bg-gray-50',
            };

            const isEmail = link.platform === 'email';
            const CardWrapper = isEmail ? 'div' : 'a';
            const wrapperProps = isEmail
              ? {}
              : {
                  href: link.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                };

            return (
              <CardWrapper
                key={link.label}
                {...wrapperProps}
                className={`group block ${!isEmail ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl sm:p-8">
                  {/* Background Gradient on Hover */}
                  {!isEmail && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]`}
                    />
                  )}

                  {/* Corner Decoration */}
                  <div
                    className={`absolute -right-8 -top-8 h-24 w-24 bg-gradient-to-bl ${data.gradient} rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150`}
                  />

                  {/* Icon Container */}
                  <div className="relative mb-5">
                    <div
                      className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl sm:h-20 sm:w-20 ${data.bgLight} transition-all duration-300 group-hover:scale-110`}
                    >
                      {/* Icon Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${data.gradient} rounded-2xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20`}
                      />

                      {/* Icon */}
                      <div
                        className={`relative bg-gradient-to-br ${data.gradient} bg-clip-text text-transparent`}
                        style={{ color: link.color }}
                      >
                        {data.icon}
                      </div>
                    </div>

                    {/* Notification Dot */}
                    {!isEmail && (
                      <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mb-1 text-base font-bold text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent sm:text-lg">
                    {link.label}
                  </h3>

                  {link.username && (
                    <p className="text-xs font-medium text-gray-500 sm:text-sm">
                      {link.username}
                    </p>
                  )}

                  {/* Connect Button */}
                  <div className="mt-4 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white ${data.gradient} shadow-lg`}
                    >
                      <span>{isEmail ? 'أرسل إيميل' : 'متابعة'}</span>
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {isEmail ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        )}
                      </svg>
                    </span>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${data.gradient} origin-left scale-x-0 transform rounded-b-3xl transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-primary p-8 sm:p-10 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-10">
              {/* Icons */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm sm:h-16 sm:w-16">
                  <span className="animate-bounce text-3xl sm:text-4xl">
                    💬
                  </span>
                </div>
                <div className="hidden h-12 w-px bg-white/20 sm:block" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm sm:h-16 sm:w-16">
                  <span
                    className="animate-bounce text-3xl sm:text-4xl"
                    style={{ animationDelay: '0.3s' }}
                  >
                    💚
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-right">
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  مستعد لبدء رحلتك الصحية؟
                </h3>
                <p className="max-w-lg text-sm text-white/80 sm:text-base">
                  أرسل رسالة عبر واتساب للحصول على رد سريع وحجز استشارة مخصصة.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={
                  socialLinks.find((l) => l.platform === 'whatsapp')?.url || '#'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl sm:px-8"
              >
                <svg
                  className="h-6 w-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>دردش معنا على واتساب</span>
                <svg
                  className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-1"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
