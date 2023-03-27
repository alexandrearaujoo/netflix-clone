import { NextResponse } from 'next/server';

import prismadb from '@/lib/prisma';
import serverAuth from '@/lib/serverAuth';

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json('', { status: 405 });
  }

  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await prismadb.movie.findMany({
      where: { id: { in: currentUser?.favoriteIds } }
    });

    return NextResponse.json(favoriteMovies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}
