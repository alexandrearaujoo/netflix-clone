import { NextResponse } from 'next/server';

import { getCurrentUser } from '@/actions/getCurrentUser';
import prismadb from '@/lib/prisma';
import { without } from 'lodash';

interface IParams {
  movieId?: string;
}

export async function PATCH(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error('Sign up to continue');

    const { movieId } = params;

    if (!movieId || typeof movieId !== 'string') throw new Error('Invalid ID');

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId }
    });

    if (!existingMovie) {
      throw new Error('Invalid id');
    }

    const favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds.push(movieId);

    const user = await prismadb.user.update({
      where: { id: currentUser.id },
      data: { favoriteIds }
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 400 });
    }
  }
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error('Sign up to continue');

    const { movieId } = params;

    if (!movieId || typeof movieId !== 'string') throw new Error('Invalid ID');

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId }
    });

    if (!existingMovie) {
      throw new Error('Invalid id');
    }

    const favoriteIds = [...(currentUser.favoriteIds || [])];

    const newFavoritesIds = favoriteIds.filter((id) => id !== movieId);

    await prismadb.user.update({
      where: { id: currentUser.id },
      data: { favoriteIds: newFavoritesIds }
    });

    return NextResponse.json('', { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 400 });
    }
  }
}
