'use client';

import InfoModal from '@/components/InfoModal';
import MovieList from '@/components/MoviesList';
import Navbar from '@/components/Navbar';

import Loading from './loading';

import useFavorites from '@/hooks/useFavorites';
import { useInfoModal } from '@/hooks/useInfoModal';
import { isEmpty } from 'lodash';

export default function MyList() {
  const { data: favorites = [], isLoading } = useFavorites();
  const { closeModal, isOpen } = useInfoModal();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          {isEmpty(favorites) ? (
            <div className="w-full h-screen flex items-center justify-center">
              <h1 className="text-center text-white text-xl md:text-3xl">
                You don&apos;t have movies on your favorites list yet
              </h1>
            </div>
          ) : (
            <>
              <div className="pt-28">
                <MovieList title="My list" data={favorites} />
              </div>
              <InfoModal visible={isOpen} onClose={closeModal} />
            </>
          )}
        </>
      )}
    </>
  );
}
