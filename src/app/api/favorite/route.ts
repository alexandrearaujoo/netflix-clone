import { NextResponse } from 'next/server';

import prismadb from '@/lib/prisma';
import serverAuth from '@/lib/serverAuth';
import { without } from 'lodash';

export async function POST(req: Request) {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId }
    });

    if (!existingMovie) {
      throw new Error('Invalid id');
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || ''
      },
      data: {
        favoriteIds: {
          push: movieId
        }
      }
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId }
    });

    if (!existingMovie) {
      throw new Error('Invalid id');
    }

    const updatedFavoritesIds = without(currentUser.favoriteIds, movieId);

    const updatedUser = await prismadb.user.update({
      where: { email: currentUser.email || '' },
      data: {
        favoriteIds: updatedFavoritesIds
      }
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}
