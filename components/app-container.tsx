import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

import type { FC, PropsWithChildren } from 'react';

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row w-full p-2 overflow-hidden h-screen">
      <Sidebar />
      <Header>{children}</Header>
      <Footer />
    </div>
  );
};
