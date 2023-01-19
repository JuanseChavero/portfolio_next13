'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: 50 }}
        // transition={{ delay: 1 }}
        className={`flex min-h-[calc(100vh-128px-124px)] flex-col items-center justify-center px-8 md:px-24 lg:min-h-[calc(100vh-128px-72px)] lg:px-24 xl:px-0 ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
