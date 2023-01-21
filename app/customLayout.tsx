'use client';

import { ReactNode, useRef } from 'react';
import Email from '../components/Email';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PointerFollower from '../components/PointerFollower';
import ScrollToTop from '../components/ScrollToTop';
import SocialMedia from '../components/SocialMedia';
import { useSidebar } from '../contexts/sidebarContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <main
      data-is-open={isOpen}
      className={`relative z-0 flex min-h-screen flex-col bg-slate-50 font-sans text-black antialiased selection:bg-primary selection:text-black dark:bg-black dark:text-white selection:dark:text-white`}
    >
      <PointerFollower />
      <ScrollToTop />
      <Navbar />
      {children}
      <SocialMedia />
      <Email />
      <Footer />
    </main>
  );
}
