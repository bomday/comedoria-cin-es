"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Alterado de next/router para next/navigation

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay before redirecting (e.g., 3 seconds)
    const timer = setTimeout(() => {
      router.push('/products');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="mb-4">
          <svg
            className="mx-auto h-12 w-12 text-gray-700 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Comedoria</h2>
        <p className="text-gray-500">Carregando sua experiência...</p>
        <div className="mt-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-gray-700 rounded-full animate-loading"></div>
          </div>
        </div>
      </div>
    </div>
  );
}