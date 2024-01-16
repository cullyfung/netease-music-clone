import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { Sidebar } from './_components/sidebar';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { Provider } from '@/components/providers';

import '@/styles/index.css';

import { cn } from '@/lib/utils';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={cn(font.className, 'flex flex-row overflow-hidden gap-2')}>
        <Provider>
          <Sidebar />
          <main className="flex flex-col flex-1 w-full min-h-screen overflow-y-auto bg-background">
            <Header>{children}</Header>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
