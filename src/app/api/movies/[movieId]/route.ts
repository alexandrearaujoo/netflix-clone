import { NextResponse } from 'next/server';

import prismadb from '@/lib/prisma';
import serverAuth from '@/lib/serverAuth';

export async function GET(
  req: Request,
  { params }: { params: { movieId: string } }
) {
  if (req.method !== 'GET') {
    return NextResponse.json('', { status: 405 });
  }

  try {
    await serverAuth();

    const { movieId } = params;

    if (typeof movieId !== 'string') {
      throw new Error('Invalid id');
    }

    if (!movieId) {
      throw new Error('Invalid id');
    }

    const movie = await prismadb.movie.findUnique({ where: { id: movieId } });

    if (!movie) {
      throw new Error('Invalid id');
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
