'use client';

import Billboard from './Billboard';
import InfoModal from './InfoModal';
import MovieList from './MoviesList';
import Navbar from './Navbar';

import { useInfoModal } from '@/hooks/useInfoModal';
import { SafeUser } from '@/types';
import { Movie } from '@prisma/client';

interface HomeClientProps {
  movies: Movie[];
  favorites: Movie[];
  randomMovie: Movie;
  currentUser?: SafeUser | null;
}

export default function HomeClient({
  favorites,
  movies,
  currentUser,
  randomMovie
}: HomeClientProps) {
  const { closeModal, isOpen } = useInfoModal();
  return (
    <>
      <Navbar currentUser={currentUser} />
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Billboard randomMovie={randomMovie} />
      <section className="pb-40">
        <MovieList
          title="Trending now"
          data={movies}
          currentUser={currentUser}
        />
        <MovieList title="My list" data={favorites} currentUser={currentUser} />
      </section>
    </>
  );
}
