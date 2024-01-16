'use client';

import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-provider';
import { JotaiProvider } from './jotai-provider';
import { ReactQueryProvider } from './react-query-provider';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <JotaiProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </JotaiProvider>
    </ReactQueryProvider>
  );
};
