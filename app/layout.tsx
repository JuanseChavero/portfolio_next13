'use client';

import './globals.css';
import { useEffect, useState } from 'react';
import { Exo, Exo_2 } from '@next/font/google';
import Providers from './providers';
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
      // Until rendering the actual layout, display a black screen
      <html lang="en" className="bg-black">
        <head />
        <body></body>
      </html>
    );
  }

  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head />
      <body className={headerFont.variable}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
