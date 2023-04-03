'use client';

import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

import { useFavorite } from '@/hooks/useFavorites';
import { SafeUser } from '@/types';

interface FavoriteButtonProps {
  movieId?: string;
  currentUser?: SafeUser | null;
}

export default function FavoriteButton({
  movieId,
  currentUser
}: FavoriteButtonProps) {
  const { hasFavorited, toggleFavorite } = useFavorite({
    movieId,
    currentUser
  });

  const Icon = hasFavorited ? AiOutlineCheck : AiOutlinePlus;

  return (
    <button
      onClick={toggleFavorite}
      className="cursor-pointer group/items w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white" size={25} />
    </button>
  );
}
