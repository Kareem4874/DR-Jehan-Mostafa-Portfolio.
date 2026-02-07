export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-primary-200 border-t-primary" />

        {/* Loading text */}
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    </main>
  );
}
