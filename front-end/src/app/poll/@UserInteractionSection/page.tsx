'use client';

import React, { Suspense, useCallback, useState } from 'react';
import * as T from '@/types';
import * as S from './page.css';
import * as Comp from '@/components';
import * as API from '@/apis';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function UserInteractionSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleQueryString = useCallback(
    ({ siDo, siGunGu, dong }: { siDo: string; siGunGu: string; dong: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('sido', siDo);
      params.set('sigungu', siGunGu);
      params.set('dong', dong);

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const {
    data: siDoListResponse,
    refetch: siDoListRefetch,
    isFetched: siDoListFetched,
  } = useSuspenseQuery({
    queryKey: [{ candidate: `si-do-list` }],
    queryFn: () => API.cantidate.getCandidateSiDoList(),
    retry: false,
  });

  const {
    data: siGunGuListResponse,
    refetch: siGunGuListRefetch,
    isFetched: siGunGuListFetched,
  } = useSuspenseQuery({
    queryKey: [{ candidate: `si-gun-gu-list-${searchParams.get('sido')}` }],
    queryFn: () => API.cantidate.getCandidateSiGunGuList({ siDo: searchParams.get('sido') || '' }),
    retry: false,
  });

  const {
    data: dongListResponse,
    refetch: dongListRefetch,
    isFetched: dongListFetched,
  } = useSuspenseQuery({
    queryKey: [{ candidate: `dong-list-${searchParams.get('sigungu')}` }],
    queryFn: () =>
      API.cantidate.getCandidateDongList({
        siDo: searchParams.get('sido') || '',
        siGunGu: searchParams.get('sigungu') || '',
      }),
    retry: false,
  });

  const handleSiDoItemClick = (value: string) => {
    handleQueryString({ siDo: value, siGunGu: '', dong: '' });
    siGunGuListRefetch();
  };

  const handleSiGunGuItemClick = (value: string) => {
    const curSiDo = searchParams.get('sido');
    if (curSiDo !== null) {
      handleQueryString({ siDo: curSiDo, siGunGu: value, dong: '' });
    } else {
      handleQueryString({ siDo: '', siGunGu: '', dong: '' });
    }
    dongListRefetch();
  };

  const handleDongItemClick = (value: string) => {
    const curSiDo = searchParams.get('sido');
    const curSiGunGu = searchParams.get('sigungu');
    if (curSiDo !== null && curSiGunGu !== null) {
      handleQueryString({ siDo: curSiDo, siGunGu: curSiGunGu, dong: value });
    } else {
      handleQueryString({ siDo: '', siGunGu: '', dong: '' });
    }
  };

  return (
    <Comp.AreaSelector
      onSidoItemClick={handleSiDoItemClick}
      onSiGunGuItemClick={handleSiGunGuItemClick}
      onDongItemClick={handleDongItemClick}
      placeholders={{
        sido: searchParams.get('sido'),
        sigungu: searchParams.get('sigungu'),
        dong: searchParams.get('dong'),
      }}
      siDoList={siDoListResponse.data}
      siGunGuList={siGunGuListResponse.data}
      dongList={dongListResponse.data}
    />
  );
}
