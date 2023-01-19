'use client';

import './globals.css';
import { Exo, Exo_2 } from '@next/font/google';
import Providers from './providers';
import { useEffect, useState } from 'react';
import Layout from './customLayout';

const font = Exo_2({
  variable: '--font-global',
  display: 'swap',
});

const headerFont = Exo({
  variable: '--font-header',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Workaround for Next Themes hydration issue until it is fixed or I figure something out
  // This causes a white screen on first page load
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html className="bg-black">
        <head />
        <body></body>
      </html>
    );
  }

  return (
    <html className={font.variable} suppressHydrationWarning>
      <head />
      <body className={headerFont.variable}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
