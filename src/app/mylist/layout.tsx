import { ReactNode } from 'react';

export const metadata = {
  title: 'My list'
};

export default function Layout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
