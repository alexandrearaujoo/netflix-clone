import { NextResponse } from 'next/server';

import prismadb from '@/lib/prisma';
import serverAuth from '@/lib/serverAuth';

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json('', { status: 405 });
  }

  try {
    await serverAuth();

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    return NextResponse.json(randomMovies[0], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
