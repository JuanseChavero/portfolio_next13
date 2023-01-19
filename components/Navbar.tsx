'use client';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';
import { useSidebar } from '../contexts/sidebarContext';
import { useClickOutside } from '../hooks/useClickOutside';
import Sidebar from './Sidebar';

interface NavItemProps {
  title: string;
  to: string;
}

export const routes = [
  { title: 'Overview', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Skills', to: '/skills' },
  { title: 'Projects', to: '/projects' },
  { title: 'Contact', to: '/contact' },
];

export function NavItem({ title, to }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link href={to} className="outline-none" tabIndex={-1}>
      {' '}
      <motion.div
        tabIndex={0}
        className={`relative w-[7.5rem] rounded border-2 border-primary py-2 text-center font-semibold outline-none transition-colors focus-visible:border-black dark:focus-visible:border-white ${
          !isActive ? 'lg:text-primary lg:hover:bg-primary/10' : 'text-white'
        }`}
      >
        <span className={`uppercase tracking-wider`}>{title}</span>
        <AnimatePresence>
          {isActive && (
            <motion.div
              key={to}
              layoutId="background"
              className="absolute top-0 left-0 w-full h-full -z-10"
              initial={false}
              animate={{ backgroundColor: '#fb7e14' }}
              transition={{ type: 'tween', duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0 });
  const debouncedDimensions = useDeferredValue(dimensions.width);

  const sidebarRef = useRef(null);
  const { isOpen, toggle, open, close } = useSidebar();

  const shouldCloseSidebar = dimensions.width < 785;

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [debouncedDimensions]);

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCloseSidebar]);

  useClickOutside(sidebarRef, () => close());

  useEffect(() => {
    setIsMounted(true);
    toggleVisible();
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setIsScrolled(true);
    } else if (scrolled <= 300) {
      setIsScrolled(false);
    }
  };

  const onClickModal = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  if (mounted) {
    window.addEventListener('scroll', toggleVisible);
  }

  return (
    <motion.header
      className={`z-30 flex w-full justify-center px-6 xl:px-10 ${
        isScrolled ? '' : 'py-8'
      }`}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: 'anticipate' }}
      variants={{
        hidden: { opacity: 0, translateY: '-100%' },
        visible: { opacity: 1, translateY: 0 },
      }}
    >
      <nav
        className={`flex w-full items-center justify-between gap-2 sm:gap-5`}
      >
        <Logo />
        <hr className="h-[2px] w-full rounded-full border-none bg-primary" />

        <ul className="hidden items-center divide-x-[0.5rem] divide-white dark:divide-black lg:flex">
          <LayoutGroup>
            {routes.map((route) => (
              <li key={route.to}>
                <NavItem {...route} />
              </li>
            ))}
          </LayoutGroup>
        </ul>
        <hr className="hidden h-[2px] w-full rounded-full border-none bg-primary lg:inline" />

        <div className="hidden lg:flex">
          <ThemeSwitch />
        </div>

        <motion.div
          className="z-[100] flex gap-3 self-center justify-self-center lg:hidden"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          ref={sidebarRef}
        >
          <ThemeSwitch />
          <Sidebar />
        </motion.div>
      </nav>
    </motion.header>
  );
}
