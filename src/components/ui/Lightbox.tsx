'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

/**
 * Lightbox modal for viewing certificates
 *
 * Features:
 * - Full-screen image view
 * - Close on click outside
 * - Close on ESC key
 * - Smooth animations
 */
interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function Lightbox({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const content = (
    <div
      className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image container */}
      <div className="pointer-events-none relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center">
        <div
          className="pointer-events-auto relative h-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* We use specific sizing for the container to maintain aspect ratio if needed, or object-contain */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="animate-scale-in h-auto max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Caption */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-white">
        <p className="text-lg font-medium">{imageAlt}</p>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
