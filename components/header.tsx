'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { FC, PropsWithChildren } from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type HeaderProps = {};

export const Header: FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <main className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto">
      <div className="h-[64px] bg-transparent w-full px-4 py-5 flex flex-row items-center">
        <div className="flex gap-2 items-center">
          <Button
            variant="ghost"
            className={cn('hover:bg-black/70')}
            disabled={pathname === '/'}
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-8 h-8 rounded-full text-foreground/80 hover:text-foreground" />
          </Button>
          <Button
            variant="ghost"
            className={cn(
              'hover:bg-black/70 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center'
            )}
          >
            <ArrowRight className="w-8 h-8 rounded-full text-foreground/80 hover:text-foreground" />
          </Button>
        </div>

        <div className="ml-auto">
          <ModeToggle />
          <div role="button"></div>
        </div>
      </div>
      {children}
    </main>
  );
};
