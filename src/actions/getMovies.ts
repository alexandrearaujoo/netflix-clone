import { getCurrentUser } from './getCurrentUser';

import prismadb from '@/lib/prisma';

export const getMovies = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const movies = await prismadb.movie.findMany();

    return movies;
  } catch (error: any) {
    throw new Error(error);
  }
};

interface IParams {
  movieId?: string;
}

export const getMovieById = async (params: IParams) => {
  try {
    const { movieId } = params;

    if (typeof movieId !== 'string') {
      throw new Error('Invalid id');
    }

    if (!movieId) {
      throw new Error('Invalid id');
    }

    const movie = await prismadb.movie.findUnique({ where: { id: movieId } });

    if (!movie) {
      throw new Error('Invalid id');
    }

    return movie;
  } catch (error: any) {
    throw new Error(error);
  }
};
