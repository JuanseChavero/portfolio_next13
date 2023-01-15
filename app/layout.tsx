'use client';

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import {
  Inter,
  Lobster,
  Pacifico,
  Roboto_Slab,
  Merriweather,
  Lora,
  PT_Serif,
  Lato,
  Open_Sans,
  Montserrat,
  Roboto,
  Raleway,
  IBM_Plex_Sans,
  Spectral,
  Poppins,
  Barlow,
  Nunito,
  Nunito_Sans,
  Exo,
  Exo_2,
  Expletus_Sans,
  Sofia,
  Princess_Sofia,
  Roboto_Condensed,
  Source_Sans_Pro,
  Noto_Sans,
  Ubuntu,
  Rubik,
  Work_Sans,
  Fira_Sans,
  Kanit,
  Quicksand,
  Mulish,
  Titillium_Web,
  Libre_Franklin,
  Heebo,
  DM_Sans,
  Dosis,
  Manrope,
  Source_Code_Pro,
  Cabin,
  Cairo,
  Secular_One,
  Hind,
  Comfortaa,
  Asap,
  Archivo,
  Jost,
  Space_Grotesk,
  Public_Sans,
  Righteous,
  IBM_Plex_Mono,
  Sarabun,
  Acme,
  Orbitron,
  Oranienbaum,
  Permanent_Marker,
  Chakra_Petch,
  Outfit,
  Lexend,
  Sora,
  Hammersmith_One,
  Unica_One,
  Bungee_Outline,
  Anek_Gurmukhi,
  Snippet,
} from '@next/font/google';
import { Providers } from './providers';
import { useEffect, useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import { useSidebar } from '../contexts/sidebarContext';
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

// const headerFont = Archivo({
//   variable: '--font-header',
//   weight: ['400'],
//   display: 'swap',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Workaround for Next Themes hydration issue until it is fixed or I figure something out
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html>
        <head />
        <body></body>
      </html>
    );
  }

  return (
    <html className={font.variable}>
      <head />
      <body className={headerFont.variable}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
