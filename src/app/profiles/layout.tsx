import { ReactNode } from 'react';

export const metadata = {
  title: 'Profiles'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center h-full justify-center"> {children}</div>
  );
}
