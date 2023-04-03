import MovieClient from './MovieClient';

import { getMovieById } from '@/actions/getMovies';

interface WatchProps {
  params: {
    movieId: string;
  };
}

export async function generateMetadata({ params }: WatchProps) {
  const { movieId } = params;
  const movie = await getMovieById({ movieId });
  return { title: `Watch ${movie.title}` };
}

export default async function Watch({ params }: WatchProps) {
  const { movieId } = params;
  const movie = await getMovieById({ movieId });

  return (
    <main className="h-screen w-screen bg-black">
      <MovieClient movie={movie} />
    </main>
  );
}
