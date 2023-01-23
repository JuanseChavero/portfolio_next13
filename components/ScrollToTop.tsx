'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import Tooltip from './Tooltip';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    toggleVisible();
  }, []);

  if (!mounted) return null;

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Tooltip content="Scroll to top" side="top">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 hidden right-5 bottom-5 lg:block"
          >
            <button
              className="w-16 h-16 p-4 rounded-full bg-slate-800 dark:bg-slate-100"
              type="button"
              aria-label="Scroll to top"
              onClick={scrollToTop}
            >
              <ArrowUpIcon className="text-white dark:text-black" />
            </button>
          </motion.div>
        </Tooltip>
      )}
    </AnimatePresence>
  );
}
