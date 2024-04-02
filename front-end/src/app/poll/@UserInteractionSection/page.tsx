'use client';

import React, { Suspense, useCallback, useState } from 'react';
import * as T from '@/types';
import * as S from './page.css';
import * as Comp from '@/components';
import * as API from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function UserInteractionSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleQueryString = useCallback(
    ({ sido, siGunGu, dong }: { sido: string; siGunGu: string; dong: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('sido', String(sido));
      params.set('sigungu', String(siGunGu));
      params.set('dong', String(dong));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const [searchValue, setSearchValue] = useState(searchParams.get('word') || '');
  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQueryString({ sido: '', siGunGu: '', dong: '' });
  };

  const { data: partyList, isFetched: partyListFetched } = useQuery({
    queryKey: [{ assemblies: `party-list` }],
    queryFn: () =>
      API.poly.getPolyList().then(res => {
        return [
          { polyId: 0, polyName: '모두 보기', logoUrl: 'logoUrl', seats: 'seats', leader: 'leader' },
          ...res.data,
        ];
      }),
    retry: false,
  });

  const concatFiltering = (origin: T.ResponseRegion[], upstream: T.ResponseRegion[] | undefined) => {
    return origin.concat(upstream ? upstream : []).filter(li => li);
  };
  const { data: siDoListResponse, refetch: siDoRefetch } = useQuery({
    queryKey: [`si-do-list`],
    queryFn: () =>
      API.region.getSiDoList().then(res => {
        if (res.status === 400) handleQueryString({ sido: '', siGunGu: '', dong: '' });
        return concatFiltering([{ regionId: 0, regionName: '시/도 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: siGunGuListResponse, refetch: siGunGuRefetch } = useQuery({
    queryKey: [`si-gun-gu-list-${searchParams.get('sido')}`],
    queryFn: () =>
      API.region.getSiGunGuList({ siDoId: Number(searchParams.get('sido')) }).then(res => {
        if (res.status === 400) handleQueryString({ sido: '', siGunGu: '', dong: '' });
        return concatFiltering([{ regionId: 0, regionName: '시/군/구 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: dongListResponse, refetch: dongRefetch } = useQuery({
    queryKey: [`dong-list-${searchParams.get('sigungu')}`],
    queryFn: () =>
      API.region.getDongList({ siGunGuId: Number(searchParams.get('sigungu')) }).then(res => {
        if (res.status === 404) handleQueryString({ sido: '', siGunGu: '', dong: '' });
        return concatFiltering([{ regionId: 0, regionName: '동 선택' }], res.data);
      }),
    retry: false,
  });

  const { data: placeholders, refetch: placeholdersRefetch } = useQuery({
    queryKey: [`region-name-${searchParams.get('sido')}-${searchParams.get('sigungu')}-${searchParams.get('dong')}`],
    queryFn: () =>
      API.region
        .getRegionName({
          siDo: Number(searchParams.get('sido')),
          siGunGu: Number(searchParams.get('sigungu')),
          dong: Number(searchParams.get('dong')),
        })
        .catch(err => {
          err.response.data.status === 404 && handleQueryString({ sido: '', siGunGu: '', dong: '' });
        }),
  });

  const handleSidoItemClick = (region: T.ResponseRegion) => {
    handleQueryString({ sido: region.regionName, siGunGu: '', dong: '' });
    siGunGuRefetch();
  };
  const handleSiGunGuItemClick = (region: T.ResponseRegion) => {
    handleQueryString({
      sido: searchParams.get('sido') || '',
      siGunGu: region.regionName,
      dong: '',
    });
    dongRefetch();
  };
  const handleDongItemClick = (region: T.ResponseRegion) => {
    handleQueryString({
      sido: searchParams.get('sido') || '',
      siGunGu: searchParams.get('sigungu') || '',
      dong: region.regionName,
    });
  };

  return (
    <>
      <div className={S.areaSelectorWrapper}>
        <Comp.AreaSelector
          onSidoItemClick={handleSidoItemClick}
          onSiGunGuItemClick={handleSiGunGuItemClick}
          onDongItemClick={handleDongItemClick}
          placeholders={{
            sido: placeholders?.data.sido,
            sigungu: placeholders?.data.sigungu,
            dong: placeholders?.data.dong,
          }}
          siDoList={siDoListResponse || []}
          siGunGuList={siGunGuListResponse || []}
          dongList={dongListResponse || []}
        />
      </div>
    </>
  );
}
