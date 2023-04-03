import HomeClient from '@/components/HomeClient';

import { getCurrentUser } from '@/actions/getCurrentUser';
import { getFavorites } from '@/actions/getFavorites';
import { getMovies } from '@/actions/getMovies';
import { getRandomMovie } from '@/actions/getRandomMovie';

export default async function Home() {
  const movies = await getMovies();
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();
  const randomMovie = await getRandomMovie();

  return (
    <HomeClient
      movies={movies}
      favorites={favorites}
      currentUser={currentUser}
      randomMovie={randomMovie[0]}
    />
  );
}
