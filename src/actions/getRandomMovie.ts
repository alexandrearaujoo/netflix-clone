import { getCurrentUser } from './getCurrentUser';

import prismadb from '@/lib/prisma';

export const getRandomMovie = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    return randomMovie;
  } catch (error: any) {
    throw new Error(error);
  }
};
