'use client';

import Link from 'next/link';
import {
  SITE_INFO,
  SOCIAL_LINKS,
  NAV_LINKS,
  CONTACT_INFO,
} from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      name: 'WhatsApp',
      href: SOCIAL_LINKS.whatsapp,
      icon: (
        <svg
          className="h-4 w-4 translate-y-[1px] sm:h-5 sm:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      name: 'Instagram',
      href: SOCIAL_LINKS.instagram,
      icon: (
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
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
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      name: 'Facebook',
      href: SOCIAL_LINKS.facebook,
      icon: (
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Email',
      icon: (
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      gradient: 'from-red-500 to-red-600',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Background Decorations - Hidden on mobile for performance */}
      <div className="absolute left-0 top-0 hidden h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:block sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
      <div className="absolute bottom-0 right-0 hidden h-56 w-56 rounded-full bg-secondary/10 blur-3xl sm:block sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 md:pt-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-12 sm:grid-cols-2 sm:gap-10 lg:mb-16 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="group mb-4 inline-flex items-center gap-2.5 sm:mb-6 sm:gap-3"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-secondary to-primary opacity-50 blur-md transition-opacity group-hover:opacity-80 sm:rounded-xl" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark shadow-lg sm:h-12 sm:w-12 sm:rounded-xl">
                  <span className="text-base font-bold text-white sm:text-lg">
                    د.ج
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-base font-bold text-white transition-colors group-hover:text-primary sm:text-lg">
                  {SITE_INFO.name}
                </h2>
                <p className="text-[10px] text-gray-400 sm:text-xs">
                  {SITE_INFO.title}
                </p>
              </div>
            </Link>

            <p className="mb-4 max-w-xs text-xs leading-relaxed text-gray-400 sm:mb-6 sm:text-sm">
              {SITE_INFO.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialIcons.map((social) => {
                const isEmail = social.name === 'Email';

                if (isEmail) {
                  return (
                    <div
                      key={social.name}
                      className="group relative flex h-9 w-9 cursor-default items-center justify-center rounded-lg border border-gray-700/50 bg-gray-800/80 transition-all duration-300 hover:border-primary/30 hover:bg-gray-700/80 sm:h-10 sm:w-10 sm:rounded-xl"
                      title={CONTACT_INFO.email}
                    >
                      <div className="absolute inset-0 rounded-lg bg-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-xl" />
                      <span className="relative text-gray-400 transition-colors group-hover:text-red-400">
                        {social.icon}
                      </span>
                    </div>
                  );
                }

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 sm:h-10 sm:w-10 sm:rounded-xl"
                    aria-label={social.name}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-xl`}
                    />
                    <span className="relative text-gray-400 transition-colors group-hover:text-white">
                      {social.icon}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-3 sm:order-2">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white sm:mb-6 sm:text-base">
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-primary to-secondary sm:w-8" />
              روابط سريعة
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 py-0.5 text-xs text-gray-400 transition-colors hover:text-white sm:py-1 sm:text-sm"
                  >
                    <span className="h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="order-4 sm:order-3">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white sm:mb-6 sm:text-base">
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-primary to-secondary sm:w-8" />
              تواصل معنا
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <div className="group flex cursor-default items-start gap-2 rounded-lg bg-gray-800/50 p-2 transition-colors hover:bg-gray-800 sm:gap-3 sm:rounded-xl sm:p-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 sm:h-8 sm:w-8 sm:rounded-lg">
                    <svg
                      className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-500 sm:text-xs">
                      البريد الإلكتروني
                    </p>
                    <p className="break-all text-xs text-gray-400 transition-colors group-hover:text-white sm:text-sm">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="group flex items-start gap-2 rounded-lg bg-gray-800/50 p-2 transition-colors hover:bg-gray-800 sm:gap-3 sm:rounded-xl sm:p-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 sm:h-8 sm:w-8 sm:rounded-lg">
                    <svg
                      className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 sm:text-xs">
                      الهاتف
                    </p>
                    <p className="text-xs text-gray-400 transition-colors group-hover:text-white sm:text-sm">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="group flex items-start gap-2 rounded-lg bg-gray-800/50 p-2 transition-colors hover:bg-gray-800 sm:gap-3 sm:rounded-xl sm:p-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 sm:h-8 sm:w-8 sm:rounded-lg">
                    <svg
                      className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 sm:text-xs">
                      الموقع
                    </p>
                    <p className="text-xs text-gray-400 transition-colors group-hover:text-white sm:text-sm">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="order-2 sm:order-4 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white sm:mb-6 sm:text-base">
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-primary to-secondary sm:w-8" />
              احجز استشارتك
            </h3>
            <div className="rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-800/50 p-4 sm:rounded-2xl sm:p-5">
              <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                <span className="text-2xl sm:text-3xl">🌿</span>
                <p className="text-xs text-gray-400 sm:text-sm">
                  ابدأ رحلة عافيتك اليوم مع توجيهات غذائية مخصصة.
                </p>
              </div>
              <Link
                href="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 sm:rounded-xl sm:py-3 sm:text-base"
              >
                <span>ابدأ الآن</span>
                <svg
                  className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-gray-500 sm:justify-start sm:gap-2 sm:text-sm">
              <span>© {currentYear}</span>
              <span className="font-medium text-primary">{SITE_INFO.name}</span>
              <span className="xs:inline hidden">•</span>
              <span className="w-full text-center sm:w-auto sm:text-left">
                جميع الحقوق محفوظة
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="cursor-pointer text-xs text-gray-500 transition-colors hover:text-gray-400 sm:text-sm">
                سياسة الخصوصية
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-700" />
              <span className="cursor-pointer text-xs text-gray-500 transition-colors hover:text-gray-400 sm:text-sm">
                شروط الخدمة
              </span>
            </div>
          </div>

          {/* Made with love */}
          <div className="mt-4 text-center sm:mt-6">
            <p className="mb-2 flex items-center justify-center gap-1 text-[10px] text-gray-600 sm:text-xs">
              صنع بـ <span className="animate-pulse text-red-500">❤️</span> من
              أجل حياة صحية
            </p>
            <p className="text-[11px] font-medium text-gray-500 opacity-75 transition-opacity hover:opacity-100 sm:text-xs">
              Created by{' '}
              <span className="cursor-pointer font-bold text-primary transition-colors hover:text-primary-dark">
                Kareem AbdulBaset
              </span>{' '}
              | Software Engineer & Frontend Architect
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
