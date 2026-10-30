'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

/** next-themes, toggling a `.dark` class on <html>. Starts light until the visitor picks dark. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
