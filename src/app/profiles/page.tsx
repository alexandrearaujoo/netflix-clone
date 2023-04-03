import ProfilesClient from './ProfilesClient';

import { getCurrentUser } from '@/actions/getCurrentUser';

export default async function Profiles() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex items-center h-full justify-center">
      <ProfilesClient currentUser={currentUser} />
    </div>
  );
}
