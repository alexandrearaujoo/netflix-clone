'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import useCurrentUser from '@/hooks/useCurrentUser';

export default function Home() {
  const { status } = useSession();
  const { data: user } = useCurrentUser();

  if (status === 'unauthenticated') {
    redirect('/auth');
  }

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>Logged in as {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
}
