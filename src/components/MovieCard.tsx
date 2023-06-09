'use client';

import { useRouter } from 'next/navigation';
import { BiChevronDown } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';

import FavoriteButton from './FavoriteButton';

import { useInfoModal } from '@/hooks/useInfoModal';
import { SafeUser } from '@/types';
import { Movie } from '@prisma/client';

interface MovieCardProps {
  data: Movie;
  currentUser?: SafeUser | null;
}

export default function MovieCard({ data, currentUser }: MovieCardProps) {
  const router = useRouter();

  const { openModal } = useInfoModal();

  return (
    <li className="group bg-zinc-900 relative h-44 max-w-xs">
      <img
        src={data.thumbnailUrl}
        alt="Thumbnail"
        className="curson-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-44"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={data.thumbnailUrl}
          alt="Thumbnail"
          className="curson-pointer object-cover transition duration shadpw-xl rounded-t-md w-full h-44"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push(`/watch/${data?.id}`)}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill size={30} />
            </button>
            <FavoriteButton movieId={data?.id} currentUser={currentUser} />
            <button
              onClick={() => openModal(data)}
              className="ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <BiChevronDown
                className="text-white group-hover/item:text-neutral-300 w-4"
                size={30}
              />
            </button>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
