import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logos/logo.svg';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center outline-none"
      tabIndex={-1}
      aria-label="Link to home page"
    >
      <Image
        alt="Logo"
        src={logo}
        tabIndex={0}
        className="h-12 w-12 rounded-full bg-transparent saturate-100 transition-all hover:saturate-150"
      />
    </Link>
  );
}
