import { useAtom } from 'jotai';
import { sidebarAtom } from '@/store/sidebar';

export const useSidebarAtom = () => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);

  return {
    sidebar,
    setSidebar
  };
};
