'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Library, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useMount } from '@/hooks/use-mount';

import { useSidebarAtom } from '@/hooks/use-sidebar-atom';

export const Sidebar = () => {
  const path = usePathname();

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { sidebar, setSidebar } = useSidebarAtom();

  const activeClass = (href: string) => {
    return path === href ? 'text-foreground' : '';
  };

  useMount(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width = '300px';
    }
  });

  const toggle = () => {
    sidebarRef.current!.style.width = sidebar.isExpanded ? '300px' : '72px';
    setSidebar({
      isExpanded: !sidebar.isExpanded
    });
  };

  return (
    <div
      ref={sidebarRef}
      className="transition-all h-full flex flex-col gap-2"
    >
      <div className="rounded-md bg-[var(--c-bg)]">
        <ul className="px-3 py-1">
          <li className="px-3 py-2">
            <Link
              href="/"
              className={cn(
                'flex items-center gap-5 text-foreground/80 hover:text-foreground transition-colors',
                activeClass('/')
              )}
            >
              <Home size={28} />
              <span className={cn('whitespace-nowrap', sidebar.isExpanded && 'hidden')}>首页</span>
            </Link>
          </li>
          <li className="px-3 py-2">
            <Link
              href="/search"
              className={cn(
                'flex items-center gap-5 text-foreground/80 hover:text-foreground transition-colors',
                activeClass('/search')
              )}
            >
              <Search size={28} />
              <span className={cn('whitespace-nowrap', sidebar.isExpanded && 'hidden')}>搜索</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-auto rounded-md bg-[var(--c-bg)] mb-[80px]">
        <ul className="px-3 py-1">
          <li className="px-3 py-2">
            <button
              className="flex items-center gap-5 w-full justify-start text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggle}
            >
              <Library size={28} />
              <span className={cn('whitespace-nowrap', sidebar.isExpanded && 'hidden')}>
                音乐库
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
