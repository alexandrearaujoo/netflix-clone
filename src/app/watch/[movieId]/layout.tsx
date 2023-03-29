import { ReactNode } from 'react';

export const metadata = {
  title: 'Watch'
};

export default function Layout({ children }: { children: ReactNode }) {
  return <main className="h-screen w-screen bg-black">{children}</main>;
}
