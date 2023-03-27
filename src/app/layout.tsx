'use client';

import './globals.css';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
