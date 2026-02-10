import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-white px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>

        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-8 max-w-md text-lg text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
