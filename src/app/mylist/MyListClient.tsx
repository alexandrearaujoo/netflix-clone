'use client';

import InfoModal from '@/components/InfoModal';
import MovieList from '@/components/MoviesList';
import Navbar from '@/components/Navbar';

import { useInfoModal } from '@/hooks/useInfoModal';
import { SafeUser } from '@/types';
import { Movie } from '@prisma/client';
import { isEmpty } from 'lodash';

interface MyListClientProps {
  favorites: Movie[];
  currentUser?: SafeUser | null;
}

export default function MyListClient({
  favorites,
  currentUser
}: MyListClientProps) {
  const { closeModal, isOpen } = useInfoModal();
  return (
    <>
      <Navbar currentUser={currentUser} />
      {isEmpty(favorites) ? (
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-center text-white text-xl md:text-3xl">
            You don&apos;t have movies on your favorites list yet
          </h1>
        </div>
      ) : (
        <>
          <div className="pt-28">
            <MovieList
              title="My list"
              data={favorites}
              currentUser={currentUser}
            />
          </div>
          <InfoModal visible={isOpen} onClose={closeModal} />
        </>
      )}
    </>
  );
}
