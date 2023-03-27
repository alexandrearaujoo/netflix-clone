import { NextResponse } from 'next/server';

import prismadb from '@/lib/prisma';
import serverAuth from '@/lib/serverAuth';

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json('', { status: 405 });
  }

  try {
    await serverAuth();

    const movies = await prismadb.movie.findMany();

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
