import { getServerSession } from 'next-auth/next';

import prismadb from '@/lib/prisma';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const serverAuth = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({
    where: { email: session.user.email }
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
};

export default serverAuth;
