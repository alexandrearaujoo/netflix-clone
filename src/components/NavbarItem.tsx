interface NavabarItemProps {
  label: string;
}

export default function NavbarItem({ label }: NavabarItemProps) {
  return (
    <li className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </li>
  );
}
