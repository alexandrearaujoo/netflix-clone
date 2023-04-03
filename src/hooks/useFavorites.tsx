import { useRouter } from 'next/navigation';
import { MouseEvent, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

import { SafeUser } from '@/types';
import axios, { AxiosError } from 'axios';

interface IUserFavorite {
  movieId?: string;
  currentUser?: SafeUser | null;
}

export const useFavorite = ({ movieId, currentUser }: IUserFavorite) => {
  const router = useRouter();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId!);
  }, [currentUser, movieId]);

  const toggleFavorite = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${movieId}`);
        } else {
          request = () => axios.patch(`/api/favorites/${movieId}`);
        }

        await request();
        router.refresh();
        toast.success('Success');
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data);
        }
      }
    },
    [hasFavorited, router, movieId]
  );

  return { hasFavorited, toggleFavorite };
};
