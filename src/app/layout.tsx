import ToasterProvider from '@/provider/ToastProvider';

import './globals.css';

export const metadata = {
  title: 'Home'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
