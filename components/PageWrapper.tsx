import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Class "min-h-[calc(screenHeight, navbarHeight, footerHeight)]"
 * is used to made the body take always the height of the screen.
 * Asides from being the page wrapper, it's a placeholder for when
 * "exit" animations are fixed with "framer-motion" and the "app"
 * directory.
 */

export default function PageWrapper({ children, className }: PageWrapperProps) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={path}
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: 50 }}
        // transition={{ delay: 1 }}
        className={`flex min-h-[calc(100vh-120px-124px)] flex-col items-center justify-center overflow-hidden px-8 md:px-24 lg:min-h-[calc(100vh-120px-116px)] lg:px-24 xl:px-0 ${className}`}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
