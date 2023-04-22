import Image from 'next/image';
import Link from 'next/link';
import logo from '~/images/logos/logo.svg';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center outline-none shrink-0"
      tabIndex={-1}
      aria-label="Link to home page"
    >
      <Image
        priority
        alt="Logo"
        src={logo}
        tabIndex={0}
        className="w-12 h-12 transition-all bg-transparent rounded-full saturate-100 hover:saturate-150"
      />
    </Link>
  );
}
