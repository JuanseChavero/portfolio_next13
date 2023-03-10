import './globals.css';
import { Exo, Exo_2 } from 'next/font/google';
import Providers from './providers';
import Layout from './customLayout';
import { Metadata } from 'next';

const font = Exo_2({
  variable: '--font-global',
  display: 'swap',
});

const headerFont = Exo({
  variable: '--font-header',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Juan S. Chavero',
    template: '%s | Juan S. Chavero',
  },
  viewport: { width: 'device-width', initialScale: 1, minimumScale: 1 },
  keywords:
    'juan segundo chavero, juan s. chavero, juanse chavero, JuanseChavero, juan segundo chavero portfolio, juanse chavero portfolio, software developer, programmer, coding, react, javascript, typescript, nextjs, redux, nodejs, express, flutter, dart, mongodb, mern stack.',
  authors: [{ name: 'Juan Segundo Chavero' }],
  description:
    'I am a software developer with a passion for creating elegant, efficient, and user-friendly solutions. My skills include expertise in various programming languages and frameworks such as React, Flutter, NextJS, NodeJS, Express, Typescript and more.',
  alternates: {
    canonical: 'https://juansegundochavero.vercel.app',
  },
  openGraph: {
    title: 'Juan S. Chavero | Portfolio',
    description:
      'I am a software developer with a passion for creating elegant, efficient, and user-friendly solutions. My skills include expertise in various programming languages and frameworks such as React, Flutter, NextJS, NodeJS, Express, Typescript and more.',
    url: 'https://juansegundochavero.vercel.app',
    images: 'https://juansegundochavero.vercel.app/images/logos/logo.svg',
    locale: 'en',
    type: 'website',
    siteName: 'Juan S. Chavero | Software Developer',
  },
  robots: 'index, follow',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
