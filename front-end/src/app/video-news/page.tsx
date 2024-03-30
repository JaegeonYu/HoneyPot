'use client';

import React, { useCallback, useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import * as SubComp from './Subs';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from '@/_customhooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function VideoNewsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [detail, setDetail] = useState<T.Video | null>(null);

  const {
    data: videoList,
    isFetched: videoListFetched,
    fetchNextPage: fetchNextVideo,
  } = useInfiniteQuery({
    queryKey: [
      {
        videoNews: `video-new-list`,
        categoryId: Number(searchParams.get('category')),
        keyword: searchParams.get('word') || '',
      },
    ],
    queryFn: ({ pageParam }) =>
      API.video
        .getVideoList({
          page: pageParam,
          size: 3,
          categoryId: Number(searchParams.get('category')),
          keyword: searchParams.get('word') || '',
        })
        .then(res => res),
    initialPageParam: 0,
    getNextPageParam(lastPage, allPages, lastPageParam, allPageParams) {
      if (lastPage?.status === 204 && lastPageParam === 0) return null;
      if (lastPage.data.page === lastPage.data.totalPage) return null;
      return lastPageParam + 1;
    },
  });

  const target = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (videoListFetched) {
      fetchNextVideo();
    }
  });

  const handleQueryString = useCallback(
    ({ videoId }: { videoId: number }) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('detail', String(videoId));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const handleModalView = ({ isOpen, value }: { isOpen: boolean; value: T.Video | null }) => {
    if (isOpen && value) {
      handleQueryString({ videoId: value.id });
      setDetail({ ...value });
    } else {
      router.back();
      setDetail(null);
    }
  };

  return (
    <>
      <ul className={S.gridWrapper}>
        {videoList?.pages.map((page, i) => {
          return (
            page.data?.videos !== undefined &&
            page.data.videos.map((res: T.Video) => (
              <Comp.VideoCard
                key={`video-news/${res.id}`}
                {...res}
                onClick={() => handleModalView({ isOpen: true, value: res })}
              />
            ))
          );
        })}
        <div ref={target} />
      </ul>
      {Number(searchParams.get('detail')) > 0 && detail && (
        <SubComp.DetailModal viewHandler={() => handleModalView({ isOpen: true, value: null })} {...detail} />
      )}
    </>
  );
}
