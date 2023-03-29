'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import useMovie from '@/hooks/useMovie';

interface WatchProps {
  params: {
    movieId: string;
  };
}

export default function Watch({ params }: WatchProps) {
  const router = useRouter();
  const { movieId } = params;

  const { data: movie } = useMovie(movieId);

  return (
    <>
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push('/')}
          className="text-white cursor-pointer"
          size={40}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Wathcing: </span>
          {movie?.title}
        </p>
      </nav>
      <video
        src={movie?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </>
  );
}
