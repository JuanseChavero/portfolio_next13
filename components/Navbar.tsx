'use client';

import { AnimatePresence, LayoutGroup, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useSidebar } from 'contexts/sidebarContext';
import Link from 'next/link';
import Logo from '@/components/Logo';
import ThemeSwitch from '@/components/ThemeSwitch';
import Sidebar from '@/components/Sidebar';
import { hrVariant } from '@/utils/motion';
import AnimatedLine from '@/components/AnimatedLine';

interface AppRoute {
  title: string;
  to: string;
}

export const routes: AppRoute[] = [
  { title: 'Overview', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Skills', to: '/skills' },
  { title: 'Projects', to: '/projects' },
  { title: 'Contact', to: '/contact' },
];

export function NavItem({ title, to }: AppRoute) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link href={to} className="outline-none" title={title} tabIndex={-1}>
      <m.div
        tabIndex={0}
        className={`relative w-[7.5rem] rounded border-2 border-primary py-2 text-center font-semibold outline-none transition-colors focus-visible:border-black dark:focus-visible:border-white ${
          !isActive ? 'lg:text-primary lg:hover:bg-primary/10' : 'text-white'
        }`}
      >
        <span className={`uppercase tracking-wider`}>{title}</span>
        <AnimatePresence>
          {isActive && (
            <m.div
              key={to}
              layoutId="background"
              className="absolute top-0 left-0 w-full h-full -z-10"
              initial={false}
              animate={{ backgroundColor: '#fb7e14' }}
              transition={{ type: 'tween', duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </m.div>
    </Link>
  );
}

export default function Navbar() {
  const { isOpen } = useSidebar();
  const lineVariant = hrVariant({ duration: 3 });

  return (
    <m.header
      className={`z-30 flex w-full justify-center px-6 py-9 xl:px-10`}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      variants={{
        hidden: { opacity: 0, translateY: '-100%' },
        visible: { opacity: 1, translateY: 0 },
      }}
    >
      <nav
        className={`flex w-full items-center justify-between gap-2 sm:gap-5`}
      >
        <Logo />

        {/* Desktop */}
        <AnimatedLine className="ml-auto" variant={lineVariant} />
        <m.ul className="hidden items-center divide-x-[0.5rem] divide-white dark:divide-black lg:flex">
          <LayoutGroup>
            {routes.map((route) => (
              <li key={route.to}>
                <NavItem {...route} />
              </li>
            ))}
          </LayoutGroup>
        </m.ul>
        <AnimatedLine
          className="hidden mr-auto lg:inline"
          variant={lineVariant}
        />
        <div className="hidden lg:flex">
          <ThemeSwitch />
        </div>

        {/* Mobile */}
        <m.div
          className="flex self-center gap-3 justify-self-center lg:hidden"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          <ThemeSwitch />
          <Sidebar />
        </m.div>
      </nav>
    </m.header>
  );
}
