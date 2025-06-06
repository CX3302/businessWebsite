'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
} 