import { m } from 'framer-motion';
import { ReactNode } from 'react';

interface ShadowButtonProps {
  icon?: ReactNode;
  title: string;
}

export default function ShadowButton({ icon, title }: ShadowButtonProps) {
  return (
    <m.div className="relative flex h-12 w-48 grow cursor-pointer items-center justify-center">
      <m.div
        className="flex h-full w-full items-center justify-center gap-2 rounded border-2 border-black bg-white px-6 shadow hover:bg-secondary dark:border-neutral-100 dark:bg-neutral-900 dark:hover:bg-secondary"
        whileTap={{ x: '6px', y: '6px' }}
        whileHover={{ x: '-0.1rem', y: '-0.1rem' }}
      >
        {icon}
        <span className="font-medium uppercase tracking-wide">{title}</span>
      </m.div>
      <div className="absolute -right-[6px] -bottom-[6px] -z-10 h-full w-full rounded bg-neutral-800 dark:bg-neutral-100" />
    </m.div>
  );
}
