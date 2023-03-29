import { ReactNode } from 'react';

export const metadata = {
  title: 'Auth'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {children}
    </main>
  );
}
