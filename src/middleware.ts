export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/', '/watch/:path*', '/mylist', '/profile']
};
