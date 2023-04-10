import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const isAuth = req.nextauth.token;

    const sensitiveRoutes = ['/', '/profiles'];

    const watchPathname = pathname.startsWith('/watch');

    if (pathname === '/auth' && isAuth) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    if (
      (sensitiveRoutes.includes(pathname) && !isAuth) ||
      (watchPathname && !isAuth)
    ) {
      return NextResponse.redirect(new URL('/auth', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized() {
        return true;
      }
    }
  }
);

export const config = {
  matchter: ['/', '/profiles', '/watch/:path*']
};
