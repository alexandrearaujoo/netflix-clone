'use client';

import { useRouter } from 'next/navigation';

import { SafeUser } from '@/types';

interface ProfilesClientProps {
  currentUser?: SafeUser | null;
}

export default function ProfilesClient({ currentUser }: ProfilesClientProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching ?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <button onClick={() => router.push('/')}>
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white transition overflow-hidden">
                <img src="/images/default-blue.png" alt="Profile" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {currentUser?.name}
              </div>
            </div>
          </button>
        </div>
      </div>
      <p className="text-white text-4xl"></p>
    </>
  );
}
