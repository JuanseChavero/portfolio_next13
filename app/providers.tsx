'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { SidebarProvider } from '../contexts/sidebarContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
