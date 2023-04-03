'use client';

import MovieCard from './MovieCard';

import { SafeUser } from '@/types';
import { Movie } from '@prisma/client';
import { isEmpty } from 'lodash';

interface MovieListProps {
  data: Movie[];
  title: string;
  currentUser?: SafeUser | null;
}

export default function MovieList({
  data,
  title,
  currentUser
}: MovieListProps) {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="flex flex-col w-full mx-auto md:mx-0">
        <p className="text-white text-2xl font-semibold mb-4">{title}</p>
        <ul className="grid grid-cols-auto-fit  gap-2 lg:justify-items-start">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} currentUser={currentUser} />
          ))}
        </ul>
      </div>
    </div>
  );
}
