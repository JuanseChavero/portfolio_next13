import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
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
    <motion.div initial="idle" whileHover="hover" animate="idle">
      <Link
        href={href}
        className="flex flex-col items-end justify-end py-4 px-3 outline-2 focus-visible:outline-dashed focus-visible:outline-orange"
      >
        <motion.span
          className="mr-2 text-lg font-medium uppercase text-orange"
          variants={buttonText}
        >
          {content}
        </motion.span>
        <motion.div className="flex items-center justify-end">
          <motion.div className="-mr-5 h-[2px] bg-orange" variants={button} />
          <ChevronRightIcon className="m-0 -mr-3   h-8 w-8 fill-orange" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
