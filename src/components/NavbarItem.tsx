'use client';

import { useRouter } from 'next/navigation';

interface NavabarItemProps {
  label: string;
  navigate: string;
}

export default function NavbarItem({ label, navigate }: NavabarItemProps) {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(navigate)}
      className="text-white cursor-pointer hover:text-gray-300 transition"
    >
      {label}
    </li>
  );
}
