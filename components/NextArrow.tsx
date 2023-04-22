import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { m } from 'framer-motion';
import Link from 'next/link';

interface NextArrowProps {
  href: string;
  content: string;
}

export default function NextArrow({ href, content }: NextArrowProps) {
  const button = {
    idle: { width: 200 },
    hover: {
      width: 300,
      transition: {
        width: {
          type: 'spring',
          bounce: 0,
        },
      },
    },
  };

  const buttonText = {
    idle: { letterSpacing: '0.025em' },
    hover: {
      letterSpacing: '0.2em',
      transition: {
        transition: 0.25,
      },
    },
  };

  return (
    <m.div initial="idle" whileHover="hover" animate="idle">
      <Link
        href={href}
        className="flex flex-col items-end justify-end px-3 py-2 outline-2 focus-visible:outline-dashed focus-visible:outline-primary"
      >
        <m.span
          className="mr-2 text-lg font-medium uppercase text-primary"
          variants={buttonText}
        >
          {content}
        </m.span>
        <m.div className="flex items-center justify-end">
          <m.div className="-mr-5 h-[2px] bg-primary" variants={button} />
          <ChevronRightIcon className="w-8 h-8 m-0 -mr-3 fill-primary" />
        </m.div>
      </Link>
    </m.div>
  );
}
