"use client";

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/contexts/sidebarContext";
import { WithChildren } from "@/types";

export default function Providers({ children }: WithChildren) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
