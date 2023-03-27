import MovieCard from './MovieCard';

import { isEmpty } from 'lodash';

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

export default function MovieList({ data, title }: MovieListProps) {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <ul className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
