'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import Billboard from '@/components/Billboard';
import InfoModal from '@/components/InfoModal';
import MovieList from '@/components/MoviesList';
import Navbar from '@/components/Navbar';

import useFavorites from '@/hooks/useFavorites';
import { useInfoModal } from '@/hooks/useInfoModal';
import useMovieList from '@/hooks/useMovieList';

export default function Home() {
  const { status } = useSession();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { closeModal, isOpen } = useInfoModal();

  if (status === 'unauthenticated') {
    redirect('/auth');
  }

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <section className="pb-40">
        <MovieList title="Trending now" data={movies} />
        <MovieList title="My list" data={favorites} />
      </section>
    </>
  );
}
