import { NextResponse } from 'next/server';

import prismadb from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({}, { status: 405 });
  }

  try {
    const { email, name, password } = await req.json();

    const existingUser = await prismadb.user.findFirst({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email taken' }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date()
      }
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 400 });
    }
  }
}
