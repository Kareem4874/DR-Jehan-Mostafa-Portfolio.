import type { SectionProps } from '@/types';

export default function SectionWrapper({
  children,
  id,
  className = '',
  background = 'white',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary/5',
    accent: 'bg-secondary/5',
  };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${backgrounds[background]} ${className} `}
    >
      <div className="section-container relative z-10">{children}</div>

      {/* Decorative background elements could go here */}
      {background === 'primary' && (
        <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      )}
      {background === 'accent' && (
        <div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      )}
    </section>
  );
}
