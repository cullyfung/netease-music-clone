'use client';

import { useBannerQuery } from '@/hooks/use-banner-query';
import type { FC } from 'react';

export const Banner: FC = () => {
  const { data, isLoading, isError } = useBannerQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{}</div>;
};
