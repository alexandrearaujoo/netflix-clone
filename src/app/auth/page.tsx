import AuthClient from './AuthClient';

export const metadata = {
  title: 'Auth'
};

export default function Auth() {
  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <AuthClient />
    </main>
  );
}
