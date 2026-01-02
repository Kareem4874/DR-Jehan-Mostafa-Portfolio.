'use client';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'shimmer' | 'none';
}

/**
 * Skeleton loading component for better UX during content loading
 * Reduces Cumulative Layout Shift (CLS) by maintaining layout space
 */
export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-2xl',
  };

  const animations = {
    pulse: 'animate-pulse',
    shimmer:
      'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]',
    none: '',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height)
    style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`bg-gray-200 ${variants[variant]} ${animations[animation]} ${className}`}
      style={style}
      aria-hidden="true"
      role="presentation"
    />
  );
}

/**
 * Card Skeleton for loading states
 */
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-lg ${className}`}>
      <Skeleton className="mb-4 h-48 w-full" variant="rectangular" />
      <Skeleton className="mb-2 h-6 w-3/4" variant="text" />
      <Skeleton className="mb-4 h-4 w-1/2" variant="text" />
      <Skeleton className="mb-2 h-4 w-full" variant="text" />
      <Skeleton className="h-4 w-5/6" variant="text" />
    </div>
  );
}

/**
 * Profile Skeleton for loading states
 */
export function ProfileSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Skeleton className="h-16 w-16" variant="circular" />
      <div className="flex-1">
        <Skeleton className="mb-2 h-5 w-32" variant="text" />
        <Skeleton className="h-4 w-24" variant="text" />
      </div>
    </div>
  );
}

/**
 * Section Skeleton for loading complete sections
 */
export function SectionSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-40" variant="rectangular" />
          <Skeleton className="mx-auto mb-4 h-12 w-64" variant="text" />
          <Skeleton className="mx-auto h-5 w-96" variant="text" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
