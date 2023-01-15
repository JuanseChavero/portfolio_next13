'use client';

import { ReactNode, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import SocialMedia from '../components/SocialMedia';
import { useSidebar } from '../contexts/sidebarContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <main
      data-is-open={isOpen}
      className={`flex min-h-screen flex-col bg-slate-50 text-black antialiased selection:bg-orange selection:text-black dark:bg-black dark:text-white selection:dark:text-white`}
    >
      <ScrollToTop />
      <Navbar />
      {children}
      <SocialMedia />
      <Footer />
    </main>
  );
}
