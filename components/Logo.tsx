import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center outline-none"
      tabIndex={-1}
    >
      <Image
        width={0}
        height={0}
        tabIndex={0}
        alt="Logo"
        src="/images/logos/logo.svg"
        className="h-12 w-12 rounded-full bg-transparent saturate-100 transition-all hover:saturate-150"
        unoptimized
      />
    </Link>
  );
};

export default Logo;
