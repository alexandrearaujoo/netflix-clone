'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import Billboard from '@/components/Billboard';
import Navbar from '@/components/Navbar';

export default function Home() {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/auth');
  }

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
