import { useQuery } from '@tanstack/react-query';
import { GetBannersParams, getBanners } from '@/api';

export const useBannerQuery = (params?: GetBannersParams) => {
  return useQuery({
    queryKey: ['banner', params],
    queryFn: () => getBanners(params)
  });
};
