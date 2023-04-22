'use client';

import { createContext, useContext, useState } from 'react';

// Currently only being used for animating the
// sidebar menu button in mobile.

interface SidebarContextProps {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  toggle: () => {},
  open: () => {},
  close: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggle,
        open,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
