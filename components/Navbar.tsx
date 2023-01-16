import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimationControls,
} from 'framer-motion';
import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { useSidebar } from '../contexts/sidebarContext';
import { useClickOutside } from '../hooks/useClickOutside';

interface NavItemProps {
  title: string;
  to: string;
}

const routes = [
  { title: 'Overview', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Skills', to: '/skills' },
  { title: 'Projects', to: '/projects' },
  { title: 'Contact', to: '/contact' },
];

function NavItem({ title, to }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link href={to} className="outline-none" tabIndex={-1}>
      {' '}
      <motion.div
        tabIndex={0}
        className={`relative w-[7.5rem] rounded border-2 border-primary py-2 text-center font-semibold outline-none transition-colors focus-visible:border-black dark:focus-visible:border-white ${
          !isActive
            ? 'lg:text-primary lg:hover:bg-primary/10'
            : 'text-black dark:text-white'
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

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });
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
      className={`z-30 flex w-full justify-center px-6 transition-navbar xl:px-10 ${
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
          <div className="flex justify-end lg:hidden">
            <ThemeSwitch />
          </div>
          <motion.button
            onClick={onClickModal}
            className="z-[101] h-12 w-12 rounded border-2 border-primary p-2"
          >
            <svg
              viewBox="0 0 20 20"
              className="flex flex-col items-center justify-center w-full h-full "
            >
              <Path
                variants={{
                  closed: { d: 'M 2 2.5 L 20 2.5' },
                  open: { d: 'M 3 16.5 L 17 2.5' },
                }}
                className={
                  isOpen
                    ? 'fill-white stroke-white'
                    : 'fill-primary stroke-primary'
                }
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                className="fill-primary stroke-primary"
              />
              <Path
                variants={{
                  closed: { d: 'M 2 16.346 L 20 16.346' },
                  open: { d: 'M 3 2.5 L 17 16.346' },
                }}
                className={
                  isOpen
                    ? 'fill-white stroke-white'
                    : 'fill-primary stroke-primary'
                }
              />
            </svg>
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.aside
                className="fixed top-0 bottom-0 right-0 z-[99] h-[40rem] w-72 rounded-bl-3xl bg-primary shadow-2xl outline outline-white backdrop-blur-sm"
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    x: { type: 'spring', bounce: 0, damping: 20 },
                  },
                }}
                exit={{
                  opacity: 0,
                  x: '100%',
                  transition: { type: 'spring', bounce: 0, duration: 1.5 },
                }}
              >
                <ul className="flex flex-col gap-10 p-6 mt-20 text-center">
                  <LayoutGroup>
                    {routes.map((route) => (
                      <li key={route.to} onClick={() => close()}>
                        <NavItem {...route} />
                      </li>
                    ))}
                  </LayoutGroup>
                </ul>
              </motion.aside>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </motion.header>
  );
}
