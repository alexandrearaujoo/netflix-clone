import { getCurrentUser } from './getCurrentUser';

import prismadb from '@/lib/prisma';

export const getFavorites = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const favoriteMovies = await prismadb.movie.findMany({
      where: { id: { in: currentUser?.favoriteIds } }
    });

    return favoriteMovies;
  } catch (error: any) {
    throw new Error(error);
  }
};
