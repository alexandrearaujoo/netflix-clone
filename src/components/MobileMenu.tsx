import { useRouter } from 'next/navigation';

interface MobileMenuProps {
  visible?: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {
  const router = useRouter();
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <ul className="px-3 text-center text-white">
          {[
            { label: 'Home', navigate: '/' },
            { label: 'Series', navigate: '/' },
            { label: 'Films', navigate: '/' },
            { label: 'New & Popular', navigate: '/' },
            { label: 'My list', navigate: '/mylist' },
            { label: 'Browse by language', navigate: '/' }
          ].map(({ label, navigate }) => (
            <li
              className="transition hover:underline"
              key={label}
              onClick={() => router.push(navigate)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
