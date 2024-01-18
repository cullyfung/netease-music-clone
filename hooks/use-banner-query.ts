import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/utils/fetcher';

export interface GetBannersParams {
  type?: 0 | 1 | 2 | 3;
}

export interface GetBannersResponse {
  banners: Record<string, any>[];
  code: number;
}

export const useBannerQuery = (params?: GetBannersParams) => {
  return useQuery({
    queryKey: ['banner', params],
    queryFn: (): Promise<GetBannersResponse> => fetcher('/banner', { params })
  });
};
