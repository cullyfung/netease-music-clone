'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { useBannerQuery } from '@/hooks/use-banner-query';

export const Banner: FC = () => {
  const { data, isLoading } = useBannerQuery({ type: 0 });

  if (isLoading) {
    return <Skeleton className="w-full h-32"></Skeleton>;
  }

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {data?.banners.map((banner) => (
          <CarouselItem
            key={banner.imageUrl}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="relative h-32">
              <Image
                src={banner.imageUrl}
                alt={banner.typeTitle}
                fill
                className="rounded-md object-cover"
              />
              <span
                className="absolute right-0 bottom-0 text-white p-1 text-sm rounded-br-md rounded-tl-lg"
                style={{ backgroundColor: banner.titleColor }}
              >
                {banner.typeTitle}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
