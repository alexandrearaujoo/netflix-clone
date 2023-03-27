interface MobileMenuProps {
  visible?: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <ul className="px-3 text-center text-white">
          {[
            'Home',
            'Series',
            'Films',
            'New & Popular',
            'My list',
            'Browsw by language'
          ].map((label) => (
            <li className="transition hover:underline" key={label}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
