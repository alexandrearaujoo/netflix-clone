import MyListClient from './MyListClient';

import { getCurrentUser } from '@/actions/getCurrentUser';
import { getFavorites } from '@/actions/getFavorites';

export const metadata = {
  title: 'My list'
};

export default async function MyList() {
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  return <MyListClient favorites={favorites} currentUser={currentUser} />;
}
