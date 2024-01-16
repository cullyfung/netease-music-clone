import { fetcher } from '@/utils/fetcher';

export interface GetBannersParams {
  type?: 0 | 1 | 2 | 3;
}

export const getBanners = (params?: GetBannersParams) => fetcher('/banners', { params });
