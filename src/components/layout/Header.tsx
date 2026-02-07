'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { SITE_INFO } from '@/lib/constants';

/**
 * Premium Compact Header
 * Professional design with smooth animations
 */
export default function Header() {
  const pathname = usePathname();
  const { scrollPosition } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const isScrolled = scrollPosition > 50;

  // Navigation links
  const navLinks = [
    { href: '/#about', label: 'من أنا' },
    { href: '/#certificates', label: 'الشهادات' },
    { href: '/#specializations', label: 'تخصصاتي' },
    { href: '/#services', label: 'خدماتي' },
  ];

  // Initial load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'certificates', 'specializations', 'services'];
      const scrollY = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(`/#${section}`);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only intercept if we are on the homepage
    if (pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Allow default navigation for other pages
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div
          className={`transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}
        >
          {/* Centered Container */}
          <div className="mx-auto max-w-5xl px-4">
            <div
              className={`relative flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
                isScrolled
                  ? 'border border-gray-100 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-lg'
                  : 'bg-white/70 shadow-md shadow-black/5 backdrop-blur-sm'
              }`}
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 blur-xl transition-opacity duration-700 hover:opacity-100" />

              {/* Logo */}
              <Link
                href="/"
                className="group z-10 flex items-center gap-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {/* Premium Logo Mark */}
                <div className="relative">
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70" />

                  {/* Main Logo Container */}
                  <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-primary-dark shadow-xl shadow-primary/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/50">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
                      <div className="absolute bottom-0 right-0 h-8 w-8 -translate-x-1 translate-y-1 rounded-full bg-secondary/40 blur-md" />
                    </div>

                    {/* Inner Border */}
                    <div className="absolute inset-[2px] rounded-xl border border-white/20" />
                    {/* Leaf Icon (Nutrition Symbol) */}
                    <div className="relative flex items-center justify-center">
                      <svg
                        className="absolute h-6 w-6 text-white/20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                      </svg>
                      <span className="relative text-base font-bold tracking-tight text-white drop-shadow-lg">
                        د.ج
                      </span>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Status Indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50">
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
                  </span>
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <h1 className="text-sm font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    د. جيهان
                  </h1>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <p className="text-xs font-medium text-gray-500 transition-colors duration-300">
                      أخصائية تغذية علاجية
                    </p>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-1 lg:flex">
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative px-4 py-2"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Hover Background */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        activeSection === link.href
                          ? 'scale-100 bg-primary/10'
                          : 'scale-90 bg-primary/0 group-hover:scale-100 group-hover:bg-primary/5'
                      }`}
                    />

                    {/* Label */}
                    <span
                      className={`relative text-sm font-medium transition-colors duration-300 ${
                        activeSection === link.href
                          ? 'text-primary'
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active Dot */}
                    <span
                      className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                        activeSection === link.href
                          ? 'scale-100 opacity-100'
                          : 'scale-0 opacity-0'
                      }`}
                    />
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden rounded-full px-5 py-2"
                >
                  {/* Button BG */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark transition-transform duration-500 group-hover:scale-105" />

                  {/* Shimmer */}
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                  </span>

                  {/* Text */}
                  <span className="relative flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="hidden sm:inline">احجز</span>
                    <span>استشارتك</span>
                    <svg
                      className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1"
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
                  </span>
                </Link>

                {/* Mobile Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 lg:hidden"
                  aria-label="القائمة"
                >
                  {/* ... icon code ... */}
                  <div className="flex h-4 w-5 flex-col items-center justify-center">
                    <span
                      className={`h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300 ${
                        isMobileMenuOpen
                          ? 'translate-y-0.5 rotate-45'
                          : '-translate-y-1'
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300 ${
                        isMobileMenuOpen ? 'scale-0 opacity-0' : 'opacity-100'
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300 ${
                        isMobileMenuOpen
                          ? '-translate-y-0.5 -rotate-45'
                          : 'translate-y-1'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute left-4 right-4 top-20 overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : '-translate-y-4 scale-95 opacity-0'
          }`}
        >
          {/* Decorative Top */}
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

          <nav className="space-y-2 p-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  activeSection === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms',
                  transform: isMobileMenuOpen
                    ? 'translateX(0)'
                    : 'translateX(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeSection === link.href ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}

            {/* CTA in Mobile */}
            <div className="mt-4 border-t border-gray-100 pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark py-3 font-semibold text-white shadow-lg shadow-primary/25"
              >
                <span>احجز استشارتك</span>
                <svg
                  className="h-5 w-5 rotate-180"
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
          </nav>
        </div>
      </div>
    </>
  );
}
