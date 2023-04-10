'use client';

import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-white text-xl md:text-3xl">
          Something went wrong :(
        </h1>
        <button
          onClick={() => router.push('/')}
          className="bg-white p-3 rounded-md hover:opacity-80 transition"
        >
          Back to Homepage
        </button>
      </div>
    </>
  );
}
