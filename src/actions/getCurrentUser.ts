import { getServerSession } from 'next-auth';

import prismadb from '@/lib/prisma';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const getSession = async () => {
  return await getServerSession(authOptions);
};

export const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = await prismadb.user.findUnique({
      where: { email: session.user.email }
    });

    if (!currentUser) return null;

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null
    };
  } catch (error) {
    return null;
  }
};
